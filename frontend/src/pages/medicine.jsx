// // // // import React, { useState, useContext, useEffect } from 'react';
// // // // import { AuthContext } from '../contexts/AuthContext';

// // // // export default function MedicineForm({ initialData = {}, isEditing = false }) {
// // // //   const { medicine, user } = useContext(AuthContext);

 


// // // //   const getLocalDateString = () => {
// // // //     return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
// // // //       .toISOString()
// // // //       .split('T')[0];
// // // //   };



// // // //   const [formData, setFormData] = useState({
// // // //     name: initialData.name || '',
// // // //     frequencyPerDay: initialData.frequencyPerDay || 1,
// // // //     times: initialData.times || [''],
// // // //     startDate: initialData.startDate || getLocalDateString(),
// // // //     endDate: initialData.endDate || getLocalDateString(),
// // // //   });

// // // //   const [error, setError] = useState('');
// // // //   const [loading, setLoading] = useState(false);



// // // //   useEffect(() => {
// // // //     const freq = parseInt(formData.frequencyPerDay, 10) || 1;
// // // //     setFormData((prev) => {
// // // //       let newTimes = [...prev.times];
// // // //       if (newTimes.length < freq) {
// // // //         newTimes = [...newTimes, ...Array(freq - newTimes.length).fill('')];
// // // //       } else if (newTimes.length > freq) {
// // // //         newTimes = newTimes.slice(0, freq);
// // // //       }


// // // //       return { ...prev, times: newTimes, frequencyPerDay: freq };



// // // //     });
// // // //   }, [formData.frequencyPerDay]);




// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;




// // // //     if (name === 'frequencyPerDay') {
// // // //       let val = parseInt(value, 10);
// // // //       if (isNaN(val) || val < 1) val = 1;
// // // //       else if (val > 10) val = 10;
// // // //       setFormData((prev) => ({ ...prev, [name]: val }));
// // // //     } else {
// // // //       setFormData((prev) => ({ ...prev, [name]: value }));
// // // //     }
// // // //   };




// // // //   const handleTimeChange = (index, value) => {
// // // //     setFormData((prev) => {
// // // //       const newTimes = [...prev.times];
// // // //       newTimes[index] = value;
// // // //       return { ...prev, times: newTimes };
// // // //     });
// // // //   };



  
// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError('');
// // // //     setLoading(true);

// // // //     const userId = user?.id || localStorage.getItem('userId') || '';

// // // //     for (let i = 0; i < formData.times.length; i++) {
// // // //       if (!formData.times[i]) {
// // // //         setError(`Please enter time for dose ${i + 1}`);
// // // //         setLoading(false);
// // // //         return;
// // // //       }
// // // //     }

// // // //     if (!formData.startDate || !formData.endDate) {
// // // //       setError('Start date and end date are required');
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     try {
// // // //       await medicine(
// // // //         userId,
// // // //         formData.name,
// // // //         formData.frequencyPerDay,
// // // //         formData.times,
// // // //         formData.startDate,
// // // //         formData.endDate
// // // //       );
// // // //       if (!isEditing) {
// // // //         setFormData({
// // // //           name: '',
// // // //           frequencyPerDay: 1,
// // // //           times: [''],
// // // //           startDate: getLocalDateString(),
// // // //           endDate: getLocalDateString(),
// // // //         });
// // // //       }
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       setError(err.response?.data?.message || 'Something went wrong');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form
// // // //       onSubmit={handleSubmit}
// // // //       className="max-w-md mx-auto bg-gray-900 p-6 rounded-md shadow-md space-y-6"
// // // //     >
// // // //       <h2 className="text-white text-2xl font-semibold">
// // // //         {isEditing ? 'Edit Medicine' : 'Add New Medicine'}
// // // //       </h2>

// // // //       <div>
// // // //         <label htmlFor="name" className="block text-gray-300 mb-1">
// // // //           Medicine Name
// // // //         </label>
// // // //         <input
// // // //           id="name"
// // // //           name="name"
// // // //           value={formData.name}
// // // //           onChange={handleChange}
// // // //           placeholder="Enter medicine name"
// // // //           required
// // // //           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //         />
// // // //       </div>

// // // //       <div>
// // // //         <label htmlFor="frequencyPerDay" className="block text-gray-300 mb-1">
// // // //           Number of times per day
// // // //         </label>
// // // //         <input
// // // //           id="frequencyPerDay"
// // // //           name="frequencyPerDay"
// // // //           type="number"
// // // //           min={1}
// // // //           max={10}
// // // //           value={formData.frequencyPerDay}
// // // //           onChange={handleChange}
// // // //           required
// // // //           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //         />
// // // //       </div>

// // // //       <div>
// // // //         <label className="block text-gray-300 mb-1">Time(s) to take medicine</label>
// // // //         {formData.times.map((time, idx) => (
// // // //           <input
// // // //             key={idx}
// // // //             type="time"
// // // //             value={time}
// // // //             onChange={(e) => handleTimeChange(idx, e.target.value)}
// // // //             required
// // // //             className="w-full mb-2 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //             aria-label={`Time for dose ${idx + 1}`}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       <div>
// // // //         <label htmlFor="startDate" className="block text-gray-300 mb-1">
// // // //           Start Date
// // // //         </label>
// // // //         <input
// // // //           id="startDate"
// // // //           name="startDate"
// // // //           type="date"
// // // //           value={formData.startDate}
// // // //           onChange={handleChange}
// // // //           required
// // // //           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //         />
// // // //       </div>

// // // //       <div>
// // // //         <label htmlFor="endDate" className="block text-gray-300 mb-1">
// // // //           End Date
// // // //         </label>
// // // //         <input
// // // //           id="endDate"
// // // //           name="endDate"
// // // //           type="date"
// // // //           value={formData.endDate}
// // // //           onChange={handleChange}
// // // //           required
// // // //           className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //         />
// // // //       </div>

// // // //       <button
// // // //         type="submit"
// // // //         disabled={loading}
// // // //         className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
// // // //       >
// // // //         {loading ? 'Saving...' : isEditing ? 'Update Medicine' : 'Add Medicine'}
// // // //       </button>

// // // //       {error && <div className="text-red-500 text-center mt-2">{error}</div>}
// // // //     </form>
// // // //   );
// // // // }










// // // import React, { useState, useContext, useEffect } from 'react';
// // // import { AuthContext } from '../contexts/AuthContext';

// // // export default function MedicineForm({ initialData = {}, isEditing = false }) {
// // //   const { medicine, user } = useContext(AuthContext);

// // //   const getLocalDateString = () => {
// // //     return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
// // //       .toISOString()
// // //       .split('T')[0];
// // //   };

// // //   const [formData, setFormData] = useState({
// // //     name: initialData.name || '',
// // //     frequencyPerDay: initialData.frequencyPerDay || 1,
// // //     times: initialData.times || [''],
// // //     startDate: initialData.startDate || getLocalDateString(),
// // //     endDate: initialData.endDate || getLocalDateString(),
// // //   });

// // //   const [error, setError] = useState('');
// // //   const [loading, setLoading] = useState(false);

// // //   useEffect(() => {
// // //     const freq = parseInt(formData.frequencyPerDay, 10) || 1;
// // //     setFormData((prev) => {
// // //       let newTimes = [...prev.times];
// // //       if (newTimes.length < freq) {
// // //         newTimes = [...newTimes, ...Array(freq - newTimes.length).fill('')];
// // //       } else if (newTimes.length > freq) {
// // //         newTimes = newTimes.slice(0, freq);
// // //       }
// // //       return { ...prev, times: newTimes, frequencyPerDay: freq };
// // //     });
// // //   }, [formData.frequencyPerDay]);

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     if (name === 'frequencyPerDay') {
// // //       let val = parseInt(value, 10);
// // //       if (isNaN(val) || val < 1) val = 1;
// // //       else if (val > 10) val = 10;
// // //       setFormData((prev) => ({ ...prev, [name]: val }));
// // //     } else {
// // //       setFormData((prev) => ({ ...prev, [name]: value }));
// // //     }
// // //   };

// // //   const handleTimeChange = (index, value) => {
// // //     setFormData((prev) => {
// // //       const newTimes = [...prev.times];
// // //       newTimes[index] = value;
// // //       return { ...prev, times: newTimes };
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError('');
// // //     setLoading(true);

// // //     const userId = user?.id || localStorage.getItem('userId') || '';
// // //     for (let i = 0; i < formData.times.length; i++) {
// // //       if (!formData.times[i]) {
// // //         setError(`Please enter time for dose ${i + 1}`);
// // //         setLoading(false);
// // //         return;
// // //       }
// // //     }
// // //     if (!formData.startDate || !formData.endDate) {
// // //       setError('Start date and end date are required');
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     try {
// // //       await medicine(
// // //         userId,
// // //         formData.name,
// // //         formData.frequencyPerDay,
// // //         formData.times,
// // //         formData.startDate,
// // //         formData.endDate
// // //       );
// // //       if (!isEditing) {
// // //         setFormData({
// // //           name: '',
// // //           frequencyPerDay: 1,
// // //           times: [''],
// // //           startDate: getLocalDateString(),
// // //           endDate: getLocalDateString(),
// // //         });
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //       setError(err.response?.data?.message || 'Something went wrong');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <form
// // //       onSubmit={handleSubmit}
// // //       className="max-w-lg mx-auto bg-[#18181b] p-10 rounded-3xl shadow-2xl border-4 border-yellow-500/30 space-y-8"
// // //     >
// // //       <h2 className="text-yellow-400 text-3xl font-bold mb-6 text-center drop-shadow">
// // //         {isEditing ? 'Edit Medicine' : 'Add New Medicine'}
// // //       </h2>
// // //       <div>
// // //         <label htmlFor="name" className="block text-yellow-300 font-semibold mb-2">
// // //           Medicine Name
// // //         </label>
// // //         <input
// // //           id="name"
// // //           name="name"
// // //           value={formData.name}
// // //           onChange={handleChange}
// // //           placeholder="Enter medicine name"
// // //           required
// // //           className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
// // //         />
// // //       </div>
// // //       <div>
// // //         <label htmlFor="frequencyPerDay" className="block text-yellow-300 font-semibold mb-2">
// // //           Number of times per day
// // //         </label>
// // //         <input
// // //           id="frequencyPerDay"
// // //           name="frequencyPerDay"
// // //           type="number"
// // //           min={1}
// // //           max={10}
// // //           value={formData.frequencyPerDay}
// // //           onChange={handleChange}
// // //           required
// // //           className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
// // //         />
// // //       </div>
// // //       <div>
// // //         <label className="block text-yellow-300 font-semibold mb-2">
// // //           Time(s) to take medicine
// // //         </label>
// // //         {formData.times.map((time, idx) => (
// // //           <div className="flex items-center gap-4 mb-2" key={idx}>
// // //             <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-base shadow">{`Dose ${idx + 1}`}</span>
// // //             <input
// // //               type="time"
// // //               value={time}
// // //               onChange={(e) => handleTimeChange(idx, e.target.value)}
// // //               required
// // //               className="flex-1 px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
// // //               aria-label={`Time for dose ${idx + 1}`}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div className="flex gap-8">
// // //         <div className="flex-1">
// // //           <label htmlFor="startDate" className="block text-yellow-300 font-semibold mb-2">
// // //             Start Date
// // //           </label>
// // //           <input
// // //             id="startDate"
// // //             name="startDate"
// // //             type="date"
// // //             value={formData.startDate}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
// // //           />
// // //         </div>
// // //         <div className="flex-1">
// // //           <label htmlFor="endDate" className="block text-yellow-300 font-semibold mb-2">
// // //             End Date
// // //           </label>
// // //           <input
// // //             id="endDate"
// // //             name="endDate"
// // //             type="date"
// // //             value={formData.endDate}
// // //             onChange={handleChange}
// // //             required
// // //             className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
// // //           />
// // //         </div>
// // //       </div>
// // //       <button
// // //         type="submit"
// // //         disabled={loading}
// // //         className="w-full py-4 text-xl bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold rounded-2xl shadow-lg mt-2 transition"
// // //       >
// // //         {loading ? 'Saving...' : isEditing ? 'Update Medicine' : 'Add Medicine'}
// // //       </button>
// // //       {error && <div className="text-red-500 text-center font-semibold mt-2">{error}</div>}
// // //     </form>
// // //   );
// // // }




// // import React, { useState, useContext, useEffect } from 'react';
// // import { AuthContext } from '../contexts/AuthContext';
// // import {
// //   Clock,
// //   CalendarDays,
// //   PlusCircle,
// //   MinusCircle
// // } from "lucide-react";

// // export default function MedicineForm({ initialData = {}, isEditing = false }) {
// //   const { medicine, user } = useContext(AuthContext);

// //   const getLocalDateString = () => {
// //     return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
// //       .toISOString()
// //       .split('T')[0];
// //   };

// //   const [formData, setFormData] = useState({
// //     name: initialData.name || '',
// //     frequencyPerDay: initialData.frequencyPerDay || 1,
// //     times: initialData.times || [''],
// //     startDate: initialData.startDate || getLocalDateString(),
// //     endDate: initialData.endDate || getLocalDateString(),
// //   });

// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     const freq = parseInt(formData.frequencyPerDay, 10) || 1;
// //     setFormData((prev) => {
// //       let newTimes = [...prev.times];
// //       if (newTimes.length < freq) {
// //         newTimes = [...newTimes, ...Array(freq - newTimes.length).fill('')];
// //       } else if (newTimes.length > freq) {
// //         newTimes = newTimes.slice(0, freq);
// //       }
// //       return { ...prev, times: newTimes, frequencyPerDay: freq };
// //     });
// //   }, [formData.frequencyPerDay]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setError('');
// //     if (name === 'frequencyPerDay') {
// //       let val = parseInt(value, 10);
// //       if (isNaN(val) || val < 1) val = 1;
// //       else if (val > 10) val = 10;
// //       setFormData((prev) => ({ ...prev, [name]: val }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }
// //   };

// //   const handleTimeChange = (index, value) => {
// //     setFormData((prev) => {
// //       const newTimes = [...prev.times];
// //       newTimes[index] = value;
// //       return { ...prev, times: newTimes };
// //     });
// //   };

// //   // Frequency increment/decrement handlers
// //   const handleFrequencyIncrease = () => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       frequencyPerDay: Math.min(10, prev.frequencyPerDay + 1)
// //     }));
// //   };

// //   const handleFrequencyDecrease = () => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       frequencyPerDay: Math.max(1, prev.frequencyPerDay - 1)
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setLoading(true);

// //     const userId = user?.id || localStorage.getItem('userId') || '';
// //     for (let i = 0; i < formData.times.length; i++) {
// //       if (!formData.times[i]) {
// //         setError(`Please enter time for dose ${i + 1}`);
// //         setLoading(false);
// //         return;
// //       }
// //     }
// //     if (!formData.startDate || !formData.endDate) {
// //       setError('Start date and end date are required');
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       await medicine(
// //         userId,
// //         formData.name,
// //         formData.frequencyPerDay,
// //         formData.times,
// //         formData.startDate,
// //         formData.endDate
// //       );
// //       if (!isEditing) {
// //         setFormData({
// //           name: '',
// //           frequencyPerDay: 1,
// //           times: [''],
// //           startDate: getLocalDateString(),
// //           endDate: getLocalDateString(),
// //         });
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       setError(err.response?.data?.message || 'Something went wrong');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="max-w-lg mx-auto bg-[#18181b] p-10 rounded-3xl shadow-2xl border-4 border-yellow-500/30 space-y-8"
// //     >
// //       <h2 className="text-yellow-400 text-3xl font-bold mb-6 text-center drop-shadow">
// //         {isEditing ? 'Edit Medicine' : 'Add New Medicine'}
// //       </h2>
// //       <div>
// //         <label htmlFor="name" className="block text-yellow-300 font-semibold mb-2">
// //           Medicine Name
// //         </label>
// //         <input
// //           id="name"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           placeholder="Enter medicine name"
// //           required
// //           className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
// //         />
// //       </div>
// //       <div>
// //         <label className="block text-yellow-300 font-semibold mb-2 flex items-center gap-2">
// //           <span>Number of times per day</span>
// //           <PlusCircle className="w-7 h-7 text-yellow-400" />
// //           <MinusCircle className="w-7 h-7 text-yellow-400" />
// //         </label>
// //         <div className="flex items-center gap-4">
// //           <button
// //             type="button"
// //             className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-lg"
// //             onClick={handleFrequencyDecrease}
// //           >
// //             <MinusCircle className="w-7 h-7 text-black" />
// //           </button>
// //           <input
// //             id="frequencyPerDay"
// //             name="frequencyPerDay"
// //             type="number"
// //             min={1}
// //             max={10}
// //             value={formData.frequencyPerDay}
// //             readOnly
// //             className="w-16 text-center px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none text-xl font-bold"
// //           />
// //           <button
// //             type="button"
// //             className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-lg"
// //             onClick={handleFrequencyIncrease}
// //           >
// //             <PlusCircle className="w-7 h-7 text-black" />
// //           </button>
// //         </div>
// //       </div>
// //       <div>
// //         <label className="block text-yellow-300 font-semibold mb-2">
// //           Time(s) to take medicine
// //         </label>
// //         {formData.times.map((time, idx) => (
// //           <div className="flex items-center gap-4 mb-2" key={idx}>
// //             <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-base shadow">
// //               {`Dose ${idx + 1}`}
// //             </span>
// //             <Clock className="w-7 h-7 text-yellow-500 inline" />
// //             <input
// //               type="time"
// //               value={time}
// //               onChange={(e) => handleTimeChange(idx, e.target.value)}
// //               required
// //               className="flex-1 px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
// //               aria-label={`Time for dose ${idx + 1}`}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //       <div className="flex gap-8">
// //         <div className="flex-1">
// //           <label htmlFor="startDate" className="block text-yellow-300 font-semibold mb-2 flex items-center gap-2">
// //             <CalendarDays className="w-7 h-7 text-yellow-500" />
// //             <span>Start Date</span>
// //           </label>
// //           <input
// //             id="startDate"
// //             name="startDate"
// //             type="date"
// //             value={formData.startDate}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
// //           />
// //         </div>
// //         <div className="flex-1">
// //           <label htmlFor="endDate" className="block text-yellow-300 font-semibold mb-2 flex items-center gap-2">
// //             <CalendarDays className="w-7 h-7 text-yellow-500" />
// //             <span>End Date</span>
// //           </label>
// //           <input
// //             id="endDate"
// //             name="endDate"
// //             type="date"
// //             value={formData.endDate}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
// //           />
// //         </div>
// //       </div>
// //       <button
// //         type="submit"
// //         disabled={loading}
// //         className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-extrabold rounded-2xl shadow-lg mt-4 transition"
// //       >
// //         {loading ? 'Saving...' : isEditing ? 'Update Medicine' : 'Add Medicine'}
// //       </button>
// //       {error && <div className="text-red-500 text-center font-semibold mt-2">{error}</div>}
// //     </form>
// //   );
// // }









// import React, { useState, useContext, useEffect } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
// import {
//   CalendarDays,
//   PlusCircle,
//   MinusCircle
// } from "lucide-react";
// import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import dayjs from 'dayjs';

// export default function MedicineForm({ initialData = {}, isEditing = false }) {
//   const { medicine, user } = useContext(AuthContext);

//   const getLocalDateString = () => {
//     return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
//       .toISOString()
//       .split('T')[0];
//   };

//   const [formData, setFormData] = useState({
//     name: initialData.name || '',
//     frequencyPerDay: initialData.frequencyPerDay || 1,
//     times: initialData.times || [''],
//     startDate: initialData.startDate || getLocalDateString(),
//     endDate: initialData.endDate || getLocalDateString(),
//   });

//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const freq = parseInt(formData.frequencyPerDay, 10) || 1;
//     setFormData((prev) => {
//       let newTimes = [...prev.times];
//       if (newTimes.length < freq) {
//         newTimes = [...newTimes, ...Array(freq - newTimes.length).fill('')];
//       } else if (newTimes.length > freq) {
//         newTimes = newTimes.slice(0, freq);
//       }
//       return { ...prev, times: newTimes, frequencyPerDay: freq };
//     });
//   }, [formData.frequencyPerDay]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setError('');
//     if (name === 'frequencyPerDay') {
//       let val = parseInt(value, 10);
//       if (isNaN(val) || val < 1) val = 1;
//       else if (val > 10) val = 10;
//       setFormData((prev) => ({ ...prev, [name]: val }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleTimeChange = (index, value) => {
//     setFormData((prev) => {
//       const newTimes = [...prev.times];
//       // 'value' is a dayjs object
//       newTimes[index] = value ? value.format('HH:mm') : '';
//       return { ...prev, times: newTimes };
//     });
//   };

//   // Frequency increment/decrement handlers
//   const handleFrequencyIncrease = () => {
//     setFormData((prev) => ({
//       ...prev,
//       frequencyPerDay: Math.min(10, prev.frequencyPerDay + 1)
//     }));
//   };

//   const handleFrequencyDecrease = () => {
//     setFormData((prev) => ({
//       ...prev,
//       frequencyPerDay: Math.max(1, prev.frequencyPerDay - 1)
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const userId = user?.id || localStorage.getItem('userId') || '';
//     for (let i = 0; i < formData.times.length; i++) {
//       if (!formData.times[i]) {
//         setError(`Please enter time for dose ${i + 1}`);
//         setLoading(false);
//         return;
//       }
//     }
//     if (!formData.startDate || !formData.endDate) {
//       setError('Start date and end date are required');
//       setLoading(false);
//       return;
//     }

//     try {
//       await medicine(
//         userId,
//         formData.name,
//         formData.frequencyPerDay,
//         formData.times,
//         formData.startDate,
//         formData.endDate
//       );
//       if (!isEditing) {
//         setFormData({
//           name: '',
//           frequencyPerDay: 1,
//           times: [''],
//           startDate: getLocalDateString(),
//           endDate: getLocalDateString(),
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-lg mx-auto bg-[#18181b] p-10 rounded-3xl shadow-2xl border-4 border-yellow-500/30 space-y-8"
//     >
//       <h2 className="text-yellow-400 text-3xl font-bold mb-6 text-center drop-shadow">
//         {isEditing ? 'Edit Medicine' : 'Add New Medicine'}
//       </h2>
//       <div>
//         <label htmlFor="name" className="block text-yellow-300 font-semibold mb-2">
//           Medicine Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter medicine name"
//           required
//           className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
//         />
//       </div>
//       <div>
//         <label className="block text-yellow-300 font-semibold mb-2 flex items-center gap-2">
//           <span>Number of times per day</span>
//           <PlusCircle className="w-7 h-7 text-yellow-400" />
//           <MinusCircle className="w-7 h-7 text-yellow-400" />
//         </label>
//         <div className="flex items-center gap-4">
//           <button
//             type="button"
//             className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-lg"
//             onClick={handleFrequencyDecrease}
//           >
//             <MinusCircle className="w-7 h-7 text-black" />
//           </button>
//           <input
//             id="frequencyPerDay"
//             name="frequencyPerDay"
//             type="number"
//             min={1}
//             max={10}
//             value={formData.frequencyPerDay}
//             readOnly
//             className="w-16 text-center px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none text-xl font-bold"
//           />
//           <button
//             type="button"
//             className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-lg"
//             onClick={handleFrequencyIncrease}
//           >
//             <PlusCircle className="w-7 h-7 text-black" />
//           </button>
//         </div>
//       </div>
//       <div>
//         <label className="block text-yellow-300 font-semibold mb-2">
//           Time(s) to take medicine
//         </label>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           {formData.times.map((time, idx) => (
//             <div className="flex items-center gap-4 mb-2" key={idx}>
//               <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-base shadow">
//                 {`Dose ${idx + 1}`}
//               </span>
//               <TimePicker
//                 ampm={false}
//                 label=""
//                 value={time ? dayjs(time, "HH:mm") : null}
//                 onChange={(value) => handleTimeChange(idx, value)}
//                 slots={{
//                   openPickerIcon: () => (
//                     <AccessTimeIcon style={{ color: '#FFD700', fontSize: 28 }} />
//                   ),
//                 }}
//                 sx={{
//                   width: "150px",
//                   '& .MuiOutlinedInput-root': {
//                     background: '#111',
//                     color: '#FFD700',
//                     borderRadius: '0.75rem',
//                     borderColor: '#FFD700',
//                   },
//                   '& .MuiSvgIcon-root': {
//                     color: '#FFD700',
//                   },
//                   '& .MuiInputAdornment-root': {
//                     color: '#FFD700',
//                   }
//                 }}
//                 format="HH:mm"
//                 views={['hours', 'minutes']}
//               />
//             </div>
//           ))}
//         </LocalizationProvider>
//       </div>
//       <div className="flex gap-8">
//         <div className="flex-1">
//           <label htmlFor="startDate" className="block text-yellow-300 font-semibold mb-2 flex items-center gap-2">
//             <CalendarDays className="w-7 h-7 text-yellow-500" />
//             <span>Start Date</span>
//           </label>
//           <input
//             id="startDate"
//             name="startDate"
//             type="date"
//             value={formData.startDate}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
//           />
//         </div>
//         <div className="flex-1">
//           <label htmlFor="endDate" className="block text-yellow-300 font-semibold mb-2 flex items-center gap-2">
//             <CalendarDays className="w-7 h-7 text-yellow-500" />
//             <span>End Date</span>
//           </label>
//           <input
//             id="endDate"
//             name="endDate"
//             type="date"
//             value={formData.endDate}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
//           />
//         </div>
//       </div>
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-extrabold rounded-2xl shadow-lg mt-4 transition"
//       >
//         {loading ? 'Saving...' : isEditing ? 'Update Medicine' : 'Add Medicine'}
//       </button>
//       {error && <div className="text-red-500 text-center font-semibold mt-2">{error}</div>}
//     </form>
//   );
// }





import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { PlusCircle, MinusCircle } from "lucide-react";
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import dayjs from 'dayjs';

export default function MedicineForm({ initialData = {}, isEditing = false }) {
  const { medicine, user } = useContext(AuthContext);

  const getLocalDateString = () => {
    return new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0];
  };

  const [formData, setFormData] = useState({
    name: initialData.name || '',
    frequencyPerDay: initialData.frequencyPerDay || 1,
    times: initialData.times || [''],
    startDate: initialData.startDate || getLocalDateString(),
    endDate: initialData.endDate || getLocalDateString(),
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const freq = parseInt(formData.frequencyPerDay, 10) || 1;
    setFormData((prev) => {
      let newTimes = [...prev.times];
      if (newTimes.length < freq) {
        newTimes = [...newTimes, ...Array(freq - newTimes.length).fill('')];
      } else if (newTimes.length > freq) {
        newTimes = newTimes.slice(0, freq);
      }
      return { ...prev, times: newTimes, frequencyPerDay: freq };
    });
  }, [formData.frequencyPerDay]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeChange = (index, value) => {
    setFormData((prev) => {
      const newTimes = [...prev.times];
      newTimes[index] = value ? value.format('HH:mm') : '';
      return { ...prev, times: newTimes };
    });
  };

  const handleDateChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value ? value.format('YYYY-MM-DD') : '',
    }));
  };

  const handleFrequencyIncrease = () => {
    setFormData((prev) => ({
      ...prev,
      frequencyPerDay: Math.min(10, prev.frequencyPerDay + 1)
    }));
  };

  const handleFrequencyDecrease = () => {
    setFormData((prev) => ({
      ...prev,
      frequencyPerDay: Math.max(1, prev.frequencyPerDay - 1)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const userId = user?.id || localStorage.getItem('userId') || '';
    for (let i = 0; i < formData.times.length; i++) {
      if (!formData.times[i]) {
        setError(`Please enter time for dose ${i + 1}`);
        setLoading(false);
        return;
      }
    }

    if (!formData.startDate || !formData.endDate) {
      setError('Start date and end date are required');
      setLoading(false);
      return;
    }

    try {
      await medicine(
        userId,
        formData.name,
        formData.frequencyPerDay,
        formData.times,
        formData.startDate,
        formData.endDate
      );
      if (!isEditing) {
        setFormData({
          name: '',
          frequencyPerDay: 1,
          times: [''],
          startDate: getLocalDateString(),
          endDate: getLocalDateString(),
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Shared picker styling
  const pickerSx = {
    width: "160px",
    fontWeight: "bold",
    '& .MuiOutlinedInput-root': {
      background: '#111',
      color: '#FFD700',
      borderRadius: '0.75rem',
      borderColor: '#FFD700',
      fontWeight: 'bold',
      fontSize: '1.1rem',
    },
    '& .MuiSvgIcon-root': {
      color: '#FFD700',
      fontSize: 28,
    },
    '& .MuiInputAdornment-root': {
      color: '#FFD700',
    },
    '& .MuiInputLabel-root': {
      color: '#FFD700',
    },
    '& .MuiIconButton-root': {
      color: '#FFD700',
    },
    // Override picker dialog
    '& .MuiDialog-root .MuiPaper-root': {
      backgroundColor: '#18181b',
      color: '#FFD700',
    },
    '& .MuiClockPicker-root .MuiTypography-root': {
      color: '#FFD700',
    },
    '& .MuiDialog-root .Mui-selected': {
      backgroundColor: '#FFD700 !important',
      color: '#111',
    },
    '& .MuiPickersDay-root.Mui-selected': {
      backgroundColor: '#FFD700 !important',
      color: '#111',
    },
    '& .MuiClockNumber-root': {
      color: '#FFD700',
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-[#18181b] p-10 rounded-3xl shadow-2xl border-4 border-yellow-500/30 space-y-8"
    >
      <h2 className="text-yellow-400 text-3xl font-bold mb-6 text-center drop-shadow">
        {isEditing ? 'Edit Medicine' : 'Add New Medicine'}
      </h2>
      <div>
        <label htmlFor="name" className="block text-yellow-300 font-semibold mb-2">
          Medicine Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter medicine name"
          required
          className="w-full px-4 py-3 bg-gray-900 text-yellow-200 border-2 border-yellow-400/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg text-lg transition"
        />
      </div>
      <div>
        <label className="block text-yellow-300 font-semibold mb-2 flex items-center gap-2">
          <span>Number of times per day</span>
          <PlusCircle className="w-7 h-7 text-yellow-400" />
          <MinusCircle className="w-7 h-7 text-yellow-400" />
        </label>
        <div className="flex items-center gap-4 mb-1">
          <button
            type="button"
            className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-lg"
            onClick={handleFrequencyDecrease}
          >
            <MinusCircle className="w-7 h-7 text-black" />
          </button>
          <span className="text-yellow-200 bg-[#18181b] px-8 py-3 text-xl font-bold border-2 border-yellow-400/40 rounded-xl shadow-lg">
            {formData.frequencyPerDay}
          </span>
          <button
            type="button"
            className="p-2 rounded-full bg-yellow-400 hover:bg-yellow-300 shadow-lg"
            onClick={handleFrequencyIncrease}
          >
            <PlusCircle className="w-7 h-7 text-black" />
          </button>
        </div>
      </div>
      <div>
        <label className="block text-yellow-300 font-semibold mb-2">
          Time(s) to take medicine
        </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {formData.times.map((time, idx) => (
            <div className="flex items-center gap-4 mb-2" key={idx}>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-base shadow">
                {`Dose ${idx + 1}`}
              </span>
              <TimePicker
                ampm={false}
                label=""
                value={time ? dayjs(time, "HH:mm") : null}
                onChange={(value) => handleTimeChange(idx, value)}
                slots={{
                  openPickerIcon: () => (
                    <AccessTimeIcon style={{ color: '#FFD700', fontSize: 28 }} />
                  )
                }}
                sx={pickerSx}
                format="HH:mm"
                views={['hours', 'minutes']}
                slotProps={{
                  popper: {
                    sx: {
                      '& .MuiPaper-root': {
                        backgroundColor: '#18181b',
                        color: '#FFD700'
                      },
                      '& .MuiClockPicker-root .MuiTypography-root': {
                        color: '#FFD700'
                      },
                      '& .Mui-selected': {
                        backgroundColor: '#FFD700 !important',
                        color: '#111'
                      },
                      '& .MuiClockNumber-root': {
                        color: '#FFD700'
                      }
                    }
                  }
                }}
              />
            </div>
          ))}
        </LocalizationProvider>
      </div>
      <div className="flex gap-8">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="flex-1">
            <label htmlFor="startDate" className="block text-yellow-300 font-semibold mb-2 flex items-center gap-2">
              <EventIcon style={{ color: "#FFD700", fontSize: 28 }} />
              <span>Start Date</span>
            </label>
            <DatePicker
              label=""
              value={formData.startDate ? dayjs(formData.startDate, "YYYY-MM-DD") : null}
              onChange={(value) => handleDateChange('startDate', value)}
              format="DD-MM-YYYY"
              slots={{
                openPickerIcon: () => (
                  <EventIcon style={{ color: '#FFD700', fontSize: 28 }} />
                )
              }}
              sx={pickerSx}
              slotProps={{
                popper: {
                  sx: {
                    '& .MuiPaper-root': {
                      backgroundColor: '#18181b',
                      color: '#FFD700'
                    },
                    '& .Mui-selected': {
                      backgroundColor: '#FFD700 !important',
                      color: '#111'
                    },
                    '& .MuiPickersDay-root.Mui-selected': {
                      backgroundColor: '#FFD700 !important',
                      color: '#111'
                    }
                  }
                }
              }}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="endDate" className="block text-yellow-300 font-semibold mb-2 flex items-center gap-2">
              <EventIcon style={{ color: "#FFD700", fontSize: 28 }} />
              <span>End Date</span>
            </label>
            <DatePicker
              label=""
              value={formData.endDate ? dayjs(formData.endDate, "YYYY-MM-DD") : null}
              onChange={(value) => handleDateChange('endDate', value)}
              format="DD-MM-YYYY"
              slots={{
                openPickerIcon: () => (
                  <EventIcon style={{ color: '#FFD700', fontSize: 28 }} />
                )
              }}
              sx={pickerSx}
              slotProps={{
                popper: {
                  sx: {
                    '& .MuiPaper-root': {
                      backgroundColor: '#18181b',
                      color: '#FFD700'
                    },
                    '& .Mui-selected': {
                      backgroundColor: '#FFD700 !important',
                      color: '#111'
                    },
                    '& .MuiPickersDay-root.Mui-selected': {
                      backgroundColor: '#FFD700 !important',
                      color: '#111'
                    }
                  }
                }
              }}
            />
          </div>
        </LocalizationProvider>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black text-xl font-extrabold rounded-2xl shadow-lg mt-4 transition"
      >
        {loading ? 'Saving...' : isEditing ? 'Update Medicine' : 'Add Medicine'}
      </button>
      {error && <div className="text-red-500 text-center font-semibold mt-2">{error}</div>}
    </form>
  );
}
