import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

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




    if (name === 'frequencyPerDay') {
      let val = parseInt(value, 10);
      if (isNaN(val) || val < 1) val = 1;
      else if (val > 10) val = 10;
      setFormData((prev) => ({ ...prev, [name]: val }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };




  const handleTimeChange = (index, value) => {
    setFormData((prev) => {
      const newTimes = [...prev.times];
      newTimes[index] = value;
      return { ...prev, times: newTimes };
    });
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
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-gray-900 p-6 rounded-md shadow-md space-y-6"
    >
      <h2 className="text-white text-2xl font-semibold">
        {isEditing ? 'Edit Medicine' : 'Add New Medicine'}
      </h2>

      <div>
        <label htmlFor="name" className="block text-gray-300 mb-1">
          Medicine Name
        </label>
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
        <label htmlFor="frequencyPerDay" className="block text-gray-300 mb-1">
          Number of times per day
        </label>
        <input
          id="frequencyPerDay"
          name="frequencyPerDay"
          type="number"
          min={1}
          max={10}
          value={formData.frequencyPerDay}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-1">Time(s) to take medicine</label>
        {formData.times.map((time, idx) => (
          <input
            key={idx}
            type="time"
            value={time}
            onChange={(e) => handleTimeChange(idx, e.target.value)}
            required
            className="w-full mb-2 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Time for dose ${idx + 1}`}
          />
        ))}
      </div>

      <div>
        <label htmlFor="startDate" className="block text-gray-300 mb-1">
          Start Date
        </label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="endDate" className="block text-gray-300 mb-1">
          End Date
        </label>
        <input
          id="endDate"
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
      >
        {loading ? 'Saving...' : isEditing ? 'Update Medicine' : 'Add Medicine'}
      </button>

      {error && <div className="text-red-500 text-center mt-2">{error}</div>}
    </form>
  );
}





// // import React, { useState, useContext, useEffect } from 'react';
// // import { AuthContext } from '../contexts/AuthContext';
// // import { PlusCircle, MinusCircle } from "lucide-react";
// // import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // import EventIcon from '@mui/icons-material/Event';
// // import dayjs from 'dayjs';

// // export default function MedicineForm({ initialData = {}, isEditing = false }) {
// //   const { medicine, user } = useContext(AuthContext);

// //   const getLocalDateString = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
// //     .toISOString().split('T')[0];

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
// //     setFormData(prev => {
// //       let newTimes = [...prev.times];
// //       if (newTimes.length < freq) newTimes = [...newTimes, ...Array(freq - newTimes.length).fill('')];
// //       else if (newTimes.length > freq) newTimes = newTimes.slice(0, freq);
// //       return { ...prev, times: newTimes, frequencyPerDay: freq };
// //     });
// //   }, [formData.frequencyPerDay]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setError('');
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handleTimeChange = (index, value) => {
// //     setFormData(prev => {
// //       const newTimes = [...prev.times];
// //       newTimes[index] = value ? value.format('HH:mm') : '';
// //       return { ...prev, times: newTimes };
// //     });
// //   };

// //   const handleDateChange = (name, value) => {
// //     setFormData(prev => ({ ...prev, [name]: value ? value.format('YYYY-MM-DD') : '' }));
// //   };

// //   const handleFrequencyIncrease = () => setFormData(prev => ({ ...prev, frequencyPerDay: Math.min(10, prev.frequencyPerDay + 1) }));
// //   const handleFrequencyDecrease = () => setFormData(prev => ({ ...prev, frequencyPerDay: Math.max(1, prev.frequencyPerDay - 1) }));

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');
// //     setLoading(true);
// //     const userId = user?.id || localStorage.getItem('userId') || '';

// //     for (let i = 0; i < formData.times.length; i++) {
// //       if (!formData.times[i]) { setError(`Please enter time for dose ${i + 1}`); setLoading(false); return; }
// //     }
// //     if (!formData.startDate || !formData.endDate) { setError('Start date and end date are required'); setLoading(false); return; }

// //     try {
// //       await medicine(userId, formData.name, formData.frequencyPerDay, formData.times, formData.startDate, formData.endDate);
// //       if (!isEditing) setFormData({ name: '', frequencyPerDay: 1, times: [''], startDate: getLocalDateString(), endDate: getLocalDateString() });
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Something went wrong');
// //     } finally { setLoading(false); }
// //   };

// //   // Shared picker styling
// //   const pickerSx = {
// //     width: "160px",
// //     '& .MuiOutlinedInput-root': {
// //       background: '#2b2b3d',
// //       color: '#00d4ff',
// //       borderRadius: '0.75rem',
// //       borderColor: '#00d4ff33',
// //       fontWeight: 'bold',
// //       fontSize: '1.05rem',
// //     },
// //     '& .MuiSvgIcon-root': { color: '#00d4ff', fontSize: 28 },
// //     '& .MuiInputAdornment-root': { color: '#00d4ff' },
// //     '& .MuiInputLabel-root': { color: '#00d4ff' },
// //     '& .MuiIconButton-root': { color: '#00d4ff' },
// //     '& .MuiDialog-root .MuiPaper-root': { backgroundColor: '#2b2b3d', color: '#00d4ff' },
// //     '& .MuiClockPicker-root .MuiTypography-root': { color: '#00d4ff' },
// //     '& .MuiDialog-root .Mui-selected': { backgroundColor: '#00d4ff !important', color: '#1a1a2e' },
// //     '& .MuiPickersDay-root.Mui-selected': { backgroundColor: '#00d4ff !important', color: '#1a1a2e' },
// //     '& .MuiClockNumber-root': { color: '#00d4ff' },
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-[#1a1a2e] p-10 rounded-3xl shadow-xl space-y-8 border border-[#00d4ff33]">
// //       <h2 className="text-cyan-400 text-3xl font-bold mb-6 text-center drop-shadow">
// //         {isEditing ? 'Edit Medicine' : 'Add New Medicine'}
// //       </h2>

// //       <div>
// //         <label htmlFor="name" className="block text-cyan-300 font-semibold mb-2">Medicine Name</label>
// //         <input
// //           id="name"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           placeholder="Enter medicine name"
// //           required
// //           className="w-full px-4 py-3 bg-[#2b2b3d] text-white border border-cyan-500/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-md text-lg transition"
// //         />
// //       </div>

// //       <div>
// //         <label className="block text-cyan-300 font-semibold mb-2 flex items-center gap-2">
// //           <span>Number of times per day</span>
// //           <PlusCircle className="w-7 h-7 text-cyan-400" />
// //           <MinusCircle className="w-7 h-7 text-cyan-400" />
// //         </label>
// //         <div className="flex items-center gap-4 mb-1">
// //           <button type="button" onClick={handleFrequencyDecrease} className="p-2 rounded-full bg-cyan-400 hover:bg-cyan-300 shadow-md">
// //             <MinusCircle className="w-7 h-7 text-black" />
// //           </button>
// //           <span className="text-white bg-[#2b2b3d] px-8 py-3 text-xl font-bold border border-cyan-500/40 rounded-xl shadow-md">
// //             {formData.frequencyPerDay}
// //           </span>
// //           <button type="button" onClick={handleFrequencyIncrease} className="p-2 rounded-full bg-cyan-400 hover:bg-cyan-300 shadow-md">
// //             <PlusCircle className="w-7 h-7 text-black" />
// //           </button>
// //         </div>
// //       </div>

// //       <div>
// //         <label className="block text-cyan-300 font-semibold mb-2">Time(s) to take medicine</label>
// //         <LocalizationProvider dateAdapter={AdapterDayjs}>
// //           {formData.times.map((time, idx) => (
// //             <div className="flex items-center gap-4 mb-2" key={idx}>
// //               <span className="bg-cyan-400 text-black px-4 py-2 rounded-xl font-bold text-base shadow">{`Dose ${idx + 1}`}</span>
// //               <TimePicker
// //                 ampm={false}
// //                 label=""
// //                 value={time ? dayjs(time, "HH:mm") : null}
// //                 onChange={(value) => handleTimeChange(idx, value)}
// //                 slots={{ openPickerIcon: () => <AccessTimeIcon style={{ color: '#00d4ff', fontSize: 28 }} /> }}
// //                 sx={pickerSx}
// //                 format="HH:mm"
// //                 views={['hours', 'minutes']}
// //               />
// //             </div>
// //           ))}
// //         </LocalizationProvider>
// //       </div>

// //       <div className="flex gap-6">
// //         <LocalizationProvider dateAdapter={AdapterDayjs}>
// //           {['startDate', 'endDate'].map((field) => (
// //             <div className="flex-1" key={field}>
// //               <label className="block text-cyan-300 font-semibold mb-2 flex items-center gap-2">
// //                 <EventIcon style={{ color: "#00d4ff", fontSize: 28 }} />
// //                 <span>{field === 'startDate' ? 'Start Date' : 'End Date'}</span>
// //               </label>
// //               <DatePicker
// //                 value={formData[field] ? dayjs(formData[field], "YYYY-MM-DD") : null}
// //                 onChange={(value) => handleDateChange(field, value)}
// //                 format="DD-MM-YYYY"
// //                 slots={{ openPickerIcon: () => <EventIcon style={{ color: '#00d4ff', fontSize: 28 }} /> }}
// //                 sx={pickerSx}
// //               />
// //             </div>
// //           ))}
// //         </LocalizationProvider>
// //       </div>

// //       <button type="submit" disabled={loading} className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black text-xl font-extrabold rounded-2xl shadow-md mt-4 transition">
// //         {loading ? 'Saving...' : isEditing ? 'Update Medicine' : 'Add Medicine'}
// //       </button>

// //       {error && <div className="text-red-500 text-center font-semibold mt-2">{error}</div>}
// //     </form>
// //   );
// // }



// import React, { useState, useContext, useEffect } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
// import { PlusCircle, MinusCircle } from "lucide-react";
// import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import EventIcon from '@mui/icons-material/Event';
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
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleTimeChange = (index, value) => {
//     setFormData((prev) => {
//       const newTimes = [...prev.times];
//       newTimes[index] = value ? value.format('HH:mm') : '';
//       return { ...prev, times: newTimes };
//     });
//   };

//   const handleDateChange = (name, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value ? value.format('YYYY-MM-DD') : '',
//     }));
//   };

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
//       setError(err.response?.data?.message || 'Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const pickerSx = {
//     width: "160px",
//     fontWeight: "bold",
//     '& .MuiOutlinedInput-root': {
//       background: '#f0f0f0',
//       color: '#333',
//       borderRadius: '0.75rem',
//       borderColor: '#ccc',
//       fontWeight: 'bold',
//       fontSize: '1rem',
//     },
//     '& .MuiSvgIcon-root': { color: '#4f8ef7', fontSize: 28 },
//     '& .MuiInputAdornment-root': { color: '#4f8ef7' },
//     '& .MuiInputLabel-root': { color: '#4f8ef7' },
//     '& .MuiIconButton-root': { color: '#4f8ef7' },
//     '& .MuiDialog-root .MuiPaper-root': { backgroundColor: '#fff', color: '#333' },
//     '& .MuiClockPicker-root .MuiTypography-root': { color: '#333' },
//     '& .MuiDialog-root .Mui-selected': { backgroundColor: '#4f8ef7 !important', color: '#fff' },
//     '& .MuiPickersDay-root.Mui-selected': { backgroundColor: '#4f8ef7 !important', color: '#fff' },
//     '& .MuiClockNumber-root': { color: '#333' }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-lg mx-auto bg-white p-10 rounded-3xl shadow-xl space-y-8"
//     >
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//         {isEditing ? 'Edit Medicine' : 'Add New Medicine'}
//       </h2>

//       <div>
//         <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
//           Medicine Name
//         </label>
//         <input
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter medicine name"
//           required
//           className="w-full px-4 py-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm text-lg transition"
//         />
//       </div>

//       <div>
//         <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
//           <span>Number of times per day</span>
//         </label>
//         <div className="flex items-center gap-4 mb-2">
//           <button
//             type="button"
//             className="p-2 rounded-full bg-blue-400 hover:bg-blue-300 shadow"
//             onClick={handleFrequencyDecrease}
//           >
//             <MinusCircle className="w-6 h-6 text-white" />
//           </button>
//           <span className="text-gray-800 px-6 py-2 text-lg font-bold border border-gray-300 rounded-xl shadow-sm">
//             {formData.frequencyPerDay}
//           </span>
//           <button
//             type="button"
//             className="p-2 rounded-full bg-blue-400 hover:bg-blue-300 shadow"
//             onClick={handleFrequencyIncrease}
//           >
//             <PlusCircle className="w-6 h-6 text-white" />
//           </button>
//         </div>
//       </div>

//       <div>
//         <label className="block text-gray-700 font-semibold mb-2">
//           Time(s) to take medicine
//         </label>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           {formData.times.map((time, idx) => (
//             <div className="flex items-center gap-4 mb-2" key={idx}>
//               <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl font-bold text-base shadow">
//                 {`Dose ${idx + 1}`}
//               </span>
//               <TimePicker
//                 ampm={false}
//                 label=""
//                 value={time ? dayjs(time, "HH:mm") : null}
//                 onChange={(value) => handleTimeChange(idx, value)}
//                 slots={{ openPickerIcon: () => <AccessTimeIcon /> }}
//                 sx={pickerSx}
//                 format="HH:mm"
//                 views={['hours', 'minutes']}
//               />
//             </div>
//           ))}
//         </LocalizationProvider>
//       </div>

//       <div className="flex gap-4">
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <div className="flex-1">
//             <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
//               <EventIcon /> Start Date
//             </label>
//             <DatePicker
//               label=""
//               value={formData.startDate ? dayjs(formData.startDate, "YYYY-MM-DD") : null}
//               onChange={(value) => handleDateChange('startDate', value)}
//               format="DD-MM-YYYY"
//               sx={pickerSx}
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
//               <EventIcon /> End Date
//             </label>
//             <DatePicker
//               label=""
//               value={formData.endDate ? dayjs(formData.endDate, "YYYY-MM-DD") : null}
//               onChange={(value) => handleDateChange('endDate', value)}
//               format="DD-MM-YYYY"
//               sx={pickerSx}
//             />
//           </div>
//         </LocalizationProvider>
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full py-4 bg-blue-500 hover:bg-blue-400 text-white text-xl font-extrabold rounded-2xl shadow transition"
//       >
//         {loading ? 'Saving...' : isEditing ? 'Update Medicine' : 'Add Medicine'}
//       </button>

//       {error && <div className="text-red-500 text-center font-semibold mt-2">{error}</div>}
//     </form>
//   );
// }