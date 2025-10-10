import {Medicine} from '../models/medicine.model.js';
import {Notification} from '../models/notification.model.js';
import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const GEMINI_API_KEY = 'AIzaSyCxtD8ocWhKYB2USbty8WSIO9QVmneTU50';

export const chatbotHandler = async (req, res) => {
  const { message, userId } = req.body;

  try {
    const medicines = await Medicine.find({ userId });
    const notifications = await Notification.find({ userId });

    const systemMessage = `
You are a helpful medicine schedule assistant for a circus performer.
User's medicine schedule: ${JSON.stringify(medicines)}
Recent notifications: ${JSON.stringify(notifications)}
Answer the user's question in a clear, helpful, and friendly way.
    `;

    const payload = {
      contents: [
        { role: 'user', parts: [{ text: systemMessage }] },
        { role: 'user', parts: [{ text: message }] }
      ]
    };

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      payload,
      { headers: { 'Content-Type': 'application/json' } }
    );

    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "Sorry, I couldn't get an answer right now.";
    res.json({ reply });
  } catch (error) {
    console.error('Gemini API error:', error?.response?.data || error.message);
    res.json({ reply: "I'm having trouble right now. Please try again later." });
  }
};
