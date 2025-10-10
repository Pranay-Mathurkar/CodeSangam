// import React, { useState } from 'react';
// import axios from 'axios';

// export default function ChatbotWidget({ userId }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const sendMessage = async () => {
//     if (!input) return;
//     setMessages(msgs => [...msgs, { user: true, text: input }]);
//     try {
//       const res = await axios.post('http://localhost:3000/api/chatbot', { message: input, userId });

//       setMessages(msgs =>
//         [...msgs, { user: true, text: input }, { user: false, text: res.data.reply }]
//       );
//     } catch {
//       setMessages(msgs =>
//         [...msgs, { user: true, text: input }, { user: false, text: "Error: Unable to get reply." }]
//       );
//     }
//     setInput('');
//   };

//   return (
//     <div style={{ border: '1px solid #aaa', borderRadius: 8, padding: 10, width: 350, background: '#fff' }}>
//       <div style={{ minHeight: 200 }}>
//         {messages.map((m, i) => (
//           <div key={i} style={{ textAlign: m.user ? 'right' : 'left', margin: '5px 0' }}>
//             {m.text}
//           </div>
//         ))}
//       </div>
//       <input
//         placeholder="Ask a health question..."
//         value={input}
//         onChange={e => setInput(e.target.value)}
//         style={{ width: 220 }}
//         onKeyDown={e => e.key === 'Enter' && sendMessage()}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';

export default function ChatbotWidget({ userId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Voice input using Web Speech API
  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition not supported');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.onresult = event => setInput(event.results[0][0].transcript);
    recognition.start();
  };

  const sendMessage = async () => {
    if (!input) return;
    setMessages(msgs => [...msgs, { user: true, text: input }]);
    try {
      const res = await axios.post('http://localhost:3000/api/chatbot', { message: input, userId });
      setMessages(msgs => [...msgs, { user: false, text: res.data.reply }]);
    } catch {
      setMessages(msgs => [...msgs, { user: false, text: "Error: Unable to get reply." }]);
    }
    setInput('');
  };

  return (
    <div style={{ border: '1px solid #aaa', borderRadius: 8, padding: 10, width: 350, background: '#fff' }}>
      <div style={{ minHeight: 200 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.user ? 'right' : 'left', margin: '5px 0' }}>
            {m.text}
          </div>
        ))}
      </div>
      <input
        placeholder="Ask a health question..."
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: 220 }}
        onKeyDown={e => e.key === 'Enter' && input && sendMessage()}
      />
      <button onClick={sendMessage} disabled={!input}>Send</button>
      <button onClick={handleVoiceInput} style={{ marginLeft: 4 }}>🎤</button>
    </div>
  );
}