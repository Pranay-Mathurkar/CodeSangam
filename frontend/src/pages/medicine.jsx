import React, { useState,useContext } from 'react';



import { AuthContext } from '../contexts/AuthContext';




export function MedicineForm({ initialData = {}, isEditing = false }) {


 


  const [formData, setFormData] = useState({


    name: initialData.name || '',
    dosage: initialData.dosage || '',
    frequency: initialData.frequency || '',
    time: initialData.time || '',
    startDate: initialData.startDate || new Date().toISOString().substring(0, 10), // yyyy-mm-dd format
    endDate: initialData.endDate || new Date().toISOString().substring(0, 10),
  });

  const frequencyOptions = [
    'Once daily',
    'Twice daily',
    'Three times daily',
    'Four times daily',
    'Every 4 hours',
    'Every 6 hours',
    'Every 8 hours',
    'Every 12 hours',
    'As needed',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 const { medicine} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (!isEditing) {
      setFormData({
        name: '',
        dosage: '',
        frequency: '',
        time: '',
        startDate: new Date().toISOString().substring(0, 10),
        endDate: new Date().toISOString().substring(0, 10),
      });
    }
     
    const userId = localStorage.getItem("userId"); 

    try{
          await medicine(userId, name, dosage, frequency, time, startDate, endDate);
    }catch (err) {
      console.error(err);
      let message = err.response?.data?.message || "Something went wrong";
      setError(message);
};




  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 p-6 rounded-md shadow-md space-y-6">
      <h2 className="text-white text-2xl font-semibold">{isEditing ? 'Edit Medicine' : 'Add New Medicine'}</h2>

      <div>
        <label htmlFor="name" className="block text-gray-300 mb-1">Medicine Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter medicine name"
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="dosage" className="block text-gray-300 mb-1">Dosage</label>
        <input
          id="dosage"
          name="dosage"
          value={formData.dosage}
          onChange={handleChange}
          placeholder="e.g., 500mg, 2 tablets"
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="frequency" className="block text-gray-300 mb-1">Frequency</label>
        <select
          id="frequency"
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>Select frequency</option>
          {frequencyOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="time" className="block text-gray-300 mb-1">Time</label>
        <input
          id="time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="startDate" className="block text-gray-300 mb-1">Start Date</label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="endDate" className="block text-gray-300 mb-1">End Date</label>
        <input
          id="endDate"
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
      >
        {isEditing ? 'Update Medicine' : 'Add Medicine'}
      </button>
    </form>
  );
}
}