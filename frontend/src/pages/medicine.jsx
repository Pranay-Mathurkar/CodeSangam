// import React, { useState,useContext } from 'react';



// import { AuthContext } from '../contexts/AuthContext';




// export default function MedicineForm({ initialData = {}, isEditing = false }) {
//   const { medicine,user } = useContext(AuthContext);
//  // const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: initialData.name || '',
//     dosage: initialData.dosage || '',
//     frequency: initialData.frequency || '',
//     time: initialData.time || '',
//     startDate: initialData.startDate || new Date().toISOString().substring(0, 10),
//     endDate: initialData.endDate || new Date().toISOString().substring(0, 10),
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const frequencyOptions = [
//     'Once daily',
//     'Twice daily',
//     'Three times daily',
//     'Four times daily',
//     'Every 4 hours',
//     'Every 6 hours',
//     'Every 8 hours',
//     'Every 12 hours',
//     'As needed',
//   ];
// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const userId = user?.id || localStorage.getItem("userId") || '';

//     try {
//       await medicine(userId, formData.name, formData.dosage, formData.frequency, formData.time, formData.startDate, formData.endDate);
      
//       // optionally reset form if not editing
//       if (!isEditing) {
//         setFormData({
//           name: '',
//           dosage: '',
//           frequency: '',
//           time: '',
//           startDate: new Date().toISOString().substring(0, 10),
//           endDate: new Date().toISOString().substring(0, 10),
//         });
//       }
      
//      // navigate('/user');
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };




//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 p-6 rounded-md shadow-md space-y-6">
//       <h2 className="text-white text-2xl font-semibold">{isEditing ? 'Edit Medicine' : 'Add New Medicine'}</h2>

//       <div>
//         <label htmlFor="name" className="block text-gray-300 mb-1">Medicine Name</label>
//         <input
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter medicine name"
//           required
//           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="dosage" className="block text-gray-300 mb-1">Dosage</label>
//         <input
//           id="dosage"
//           name="dosage"
//           value={formData.dosage}
//           onChange={handleChange}
//           placeholder="e.g., 500mg, 2 tablets"
//           required
//           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="frequency" className="block text-gray-300 mb-1">Frequency</label>
//         <select
//           id="frequency"
//           name="frequency"
//           value={formData.frequency}
//           onChange={handleChange}
//           required
//           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="" disabled>Select frequency</option>
//           {frequencyOptions.map(opt => (
//             <option key={opt} value={opt}>{opt}</option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label htmlFor="time" className="block text-gray-300 mb-1">Time</label>
//         <input
//           id="time"
//           name="time"
//           type="time"
//           value={formData.time}
//           onChange={handleChange}
//           required
//           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="startDate" className="block text-gray-300 mb-1">Start Date</label>
//         <input
//           id="startDate"
//           name="startDate"
//           type="date"
//           value={formData.startDate}
//           onChange={handleChange}
//           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div>
//         <label htmlFor="endDate" className="block text-gray-300 mb-1">End Date</label>
//         <input
//           id="endDate"
//           name="endDate"
//           type="date"
//           value={formData.endDate}
//           onChange={handleChange}
//           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
//       >
//         {isEditing ? 'Update Medicine' : 'Add Medicine'}
//       </button>

//       {error && <div className="text-red-500 text-center mt-2">{error}</div>}

//     </form>
//   );
// }






import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function MedicineForm({ initialData = {}, isEditing = false }) {
  const { medicine, user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: initialData.name || '',
    dosage: initialData.dosage || '',
    frequency: initialData.frequency || '',
    time: initialData.time || '',
    startDate: initialData.startDate || new Date().toISOString().substring(0, 10),
    endDate: initialData.endDate || new Date().toISOString().substring(0, 10),
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // ✅ use _id instead of id
    const userId = user?.id || localStorage.getItem("userId") || '';

    try {
      await medicine(
        userId,
        formData.name,
        formData.dosage,
        formData.frequency,
        formData.time,
        formData.startDate,
        formData.endDate
      );

      // reset if adding new
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
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-900 p-6 rounded-md shadow-md space-y-6">
      <h2 className="text-white text-2xl font-semibold">
        {isEditing ? 'Edit Medicine' : 'Add New Medicine'}
      </h2>

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
        disabled={loading}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
      >
        {loading ? 'Saving...' : (isEditing ? 'Update Medicine' : 'Add Medicine')}
      </button>

      {error && <div className="text-red-500 text-center mt-2">{error}</div>}
    </form>
  );
}

