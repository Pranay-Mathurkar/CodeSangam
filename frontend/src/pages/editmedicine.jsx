// // // // import React, { useState } from "react";
// // // // import { format } from "date-fns";
// // // // import {
// // // //   Card,
// // // //   CardHeader,
// // // //   CardContent,
// // // //   Typography,
// // // //   Button,
// // // //   Dialog,
// // // //   DialogTitle,
// // // //   DialogContent,
// // // //   DialogActions,
// // // //   TextField,
// // // //   Badge,
// // // //   IconButton,
// // // // } from "@mui/material";
// // // // import { Edit, Trash2, Calendar, Clock, Pill } from "lucide-react";

// // // // export function MedicineList({ medicines, onUpdate, onDelete }) {
// // // //   const [editing, setEditing] = useState(null);
// // // //   const [deleteId, setDeleteId] = useState(null);
// // // //   const [editForm, setEditForm] = useState({});

// // // //   // Status badge as custom component with Tailwind for bg color
// // // //   const StatusBadge = ({ status }) => {
// // // //     const colorMap = {
// // // //       active: "bg-green-600",
// // // //       completed: "bg-gray-600",
// // // //       upcoming: "bg-blue-600",
// // // //     };
// // // //     return (
// // // //       <Badge
// // // //         badgeContent={status}
// // // //         sx={{
// // // //           "& .MuiBadge-badge": {
// // // //             right: -10,
// // // //             top: 13,
// // // //             padding: "0 6px",
// // // //             borderRadius: 8,
// // // //             backgroundColor: colorMap[status.toLowerCase()] || "blue",
// // // //             color: "white",
// // // //             fontSize: 12,
// // // //             height: 22,
// // // //             minWidth: 50,
// // // //           },
// // // //         }}
// // // //       />
// // // //     );
// // // //   };

// // // //   const getStatus = (medicine) => {
// // // //     const now = new Date();
// // // //     const start = new Date(medicine.startDate);
// // // //     const end = new Date(medicine.endDate);
// // // //     if (now >= start && now <= end) return "Active";
// // // //     if (now > end) return "Completed";
// // // //     return "Upcoming";
// // // //   };

// // // //   const openEdit = (medicine) => {
// // // //     setEditing(medicine);
// // // //     setEditForm({
// // // //       name: medicine.name,
// // // //       dosage: medicine.dosage,
// // // //       frequency: medicine.frequency,
// // // //       time: medicine.time,
// // // //       startDate: medicine.startDate,
// // // //       endDate: medicine.endDate,
// // // //     });
// // // //   };

// // // //   const handleEditChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setEditForm((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   const submitEdit = () => {
// // // //     onUpdate(editing.id, editForm);
// // // //     setEditing(null);
// // // //   };

// // // //   const openDelete = (id) => setDeleteId(id);
// // // //   const confirmDelete = () => {
// // // //     onDelete(deleteId);
// // // //     setDeleteId(null);
// // // //   };

// // // //   if (!medicines || medicines.length === 0) {
// // // //     return (
// // // //       <Card sx={{ bgcolor: "#1f2937", borderColor: "#374151", p: 6, textAlign: "center" }} variant="outlined">
// // // //         <Pill className="mx-auto mb-4" size={48} color="#9ca3af" />
// // // //         <Typography color="text.secondary" variant="h6">No medicines added yet</Typography>
// // // //         <Typography color="text.secondary" variant="body2">Add your first medicine using the form above</Typography>
// // // //       </Card>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="space-y-4">
// // // //       <Typography variant="h4" className="text-white mb-4 font-semibold">
// // // //         Your Medicines
// // // //       </Typography>

// // // //       <div className="grid gap-4">
// // // //         {medicines.map((m) => (
// // // //           <Card key={m.id} variant="outlined" className="bg-gray-900 border-gray-700 rounded-md shadow-md">
// // // //             <CardHeader
// // // //               title={<Typography variant="h6" color="white">{m.name}</Typography>}
// // // //               action={
// // // //                 <div>
// // // //                   <IconButton onClick={() => openEdit(m)} size="small" sx={{ color: "white" }}>
// // // //                     <Edit fontSize="small" />
// // // //                   </IconButton>
// // // //                   <IconButton onClick={() => openDelete(m.id)} size="small" sx={{ color: "#ef4444" }}>
// // // //                     <Trash2 fontSize="small" />
// // // //                   </IconButton>
// // // //                 </div>
// // // //               }
// // // //               sx={{ pb: 1 }}
// // // //             />
// // // //             <CardContent>
// // // //               <div className="flex flex-wrap gap-2 mb-2">
// // // //                 <StatusBadge status={getStatus(m)} />
// // // //                 <Badge color="primary" variant="outlined" sx={{ px: 1, py: 0.5, fontSize: 12 }}>
// // // //                   {m.dosage}
// // // //                 </Badge>
// // // //               </div>

// // // //               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
// // // //                 <div className="flex items-center gap-1">
// // // //                   <Clock size={16} />
// // // //                   <span>{m.frequency} at {m.time}</span>
// // // //                 </div>
// // // //                 <div className="flex items-center gap-1">
// // // //                   <Calendar size={16} />
// // // //                   <span>Start: {format(new Date(m.startDate), "MMM dd, yyyy")}</span>
// // // //                 </div>
// // // //                 <div className="flex items-center gap-1">
// // // //                   <Calendar size={16} />
// // // //                   <span>End: {format(new Date(m.endDate), "MMM dd, yyyy")}</span>
// // // //                 </div>
// // // //               </div>
// // // //             </CardContent>
// // // //           </Card>
// // // //         ))}
// // // //       </div>

// // // //       {/* Edit Dialog */}
// // // //       <Dialog open={Boolean(editing)} onClose={() => setEditing(null)} maxWidth="sm" fullWidth>
// // // //         <DialogTitle>Edit Medicine</DialogTitle>
// // // //         <DialogContent>
// // // //           <div className="flex flex-col gap-4 mt-2">
// // // //             <TextField
// // // //               label="Name"
// // // //               name="name"
// // // //               fullWidth
// // // //               value={editForm.name || ""}
// // // //               onChange={handleEditChange}
// // // //               variant="outlined"
// // // //               size="small"
// // // //             />
// // // //             <TextField
// // // //               label="Dosage"
// // // //               name="dosage"
// // // //               fullWidth
// // // //               value={editForm.dosage || ""}
// // // //               onChange={handleEditChange}
// // // //               variant="outlined"
// // // //               size="small"
// // // //             />
// // // //             <TextField
// // // //               label="Frequency"
// // // //               name="frequency"
// // // //               fullWidth
// // // //               value={editForm.frequency || ""}
// // // //               onChange={handleEditChange}
// // // //               variant="outlined"
// // // //               size="small"
// // // //             />
// // // //             <TextField
// // // //               label="Time"
// // // //               name="time"
// // // //               fullWidth
// // // //               value={editForm.time || ""}
// // // //               onChange={handleEditChange}
// // // //               variant="outlined"
// // // //               size="small"
// // // //               type="time"
// // // //               InputLabelProps={{ shrink: true }}
// // // //             />
// // // //             <TextField
// // // //               label="Start Date"
// // // //               name="startDate"
// // // //               fullWidth
// // // //               value={editForm.startDate ? new Date(editForm.startDate).toISOString().slice(0, 10) : ""}
// // // //               onChange={handleEditChange}
// // // //               variant="outlined"
// // // //               size="small"
// // // //               type="date"
// // // //               InputLabelProps={{ shrink: true }}
// // // //             />
// // // //             <TextField
// // // //               label="End Date"
// // // //               name="endDate"
// // // //               fullWidth
// // // //               value={editForm.endDate ? new Date(editForm.endDate).toISOString().slice(0, 10) : ""}
// // // //               onChange={handleEditChange}
// // // //               variant="outlined"
// // // //               size="small"
// // // //               type="date"
// // // //               InputLabelProps={{ shrink: true }}
// // // //             />
// // // //           </div>
// // // //         </DialogContent>
// // // //         <DialogActions>
// // // //           <Button onClick={() => setEditing(null)} color="inherit">Cancel</Button>
// // // //           <Button onClick={submitEdit} variant="contained" color="primary">Save</Button>
// // // //         </DialogActions>
// // // //       </Dialog>

// // // //       {/* Delete Confirmation Dialog */}
// // // //       <Dialog open={Boolean(deleteId)} onClose={() => setDeleteId(null)} maxWidth="xs" fullWidth>
// // // //         <DialogTitle>Delete Medicine</DialogTitle>
// // // //         <DialogContent>
// // // //           <Typography>Are you sure you want to delete this medicine? This action cannot be undone.</Typography>
// // // //         </DialogContent>
// // // //         <DialogActions>
// // // //           <Button onClick={() => setDeleteId(null)} color="inherit">Cancel</Button>
// // // //           <Button onClick={() => { onDelete(deleteId); setDeleteId(null); }} variant="contained" color="error">Delete</Button>
// // // //         </DialogActions>
// // // //       </Dialog>
// // // //     </div>
// // // //   );
// // // // }








// // // import React, { useContext, useEffect, useState } from "react";
// // // import { format } from "date-fns";
// // // import {
// // //   Card,
// // //   CardHeader,
// // //   CardContent,
// // //   Typography,
// // //   Button,
// // //   Dialog,
// // //   DialogTitle,
// // //   DialogContent,
// // //   DialogActions,
// // //   TextField,
// // //   Badge,
// // //   IconButton,
// // // } from "@mui/material";
// // // import { Edit, Trash2, Calendar, Clock, Pill } from "lucide-react";



// // // import { AuthContext } from "../contexts/AuthContext";

// // // export default function UserMedicinesManager() {
// // //   const { user,getHistoryOfUser, updateMedicine, deleteMedicine } = useContext(AuthContext);

// // //   const [medicines, setMedicines] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   const [editing, setEditing] = useState(null);
// // //   const [editForm, setEditForm] = useState({});

// // //   const [deleteId, setDeleteId] = useState(null);

// // //   // Fetch medicines on mount
// // //   useEffect(() => {
// // //     const fetchMedicines = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const data = await getHistoryOfUser();
// // //         setMedicines(data);
// // //       } catch (e) {
// // //         setError("Failed to load medicines");
// // //         console.error(e);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchMedicines();
// // //   }, [getHistoryOfUser]);

// // //   // Status badge subcomponent
// // //   const StatusBadge = ({ status }) => {
// // //     const colorMap = {
// // //       active: "#22c55e",
// // //       completed: "#6b7280",
// // //       upcoming: "#3b82f6",
// // //     };
// // //     return (
// // //       <Badge
// // //         badgeContent={status}
// // //         sx={{
// // //           "& .MuiBadge-badge": {
// // //             right: -10,
// // //             top: 13,
// // //             padding: "0 6px",
// // //             borderRadius: 8,
// // //             backgroundColor: colorMap[status.toLowerCase()] || colorMap.upcoming,
// // //             color: "white",
// // //             fontSize: 12,
// // //             height: 22,
// // //             minWidth: 50,
// // //           },
// // //         }}
// // //       />
// // //     );
// // //   };

// // //   const getStatus = (medicine) => {
// // //     const now = new Date();
// // //     const start = new Date(medicine.startDate);
// // //     const end = new Date(medicine.endDate);
// // //     if (now >= start && now <= end) return "Active";
// // //     if (now > end) return "Completed";
// // //     return "Upcoming";
// // //   };

// // //   // Open edit dialog
// // //   const openEdit = (medicine) => {
// // //     setEditing(medicine);
// // //     setEditForm({
// // //       name: medicine.name,
// // //       dosage: medicine.dosage,
// // //       frequency: medicine.frequency,
// // //       time: medicine.time,
// // //       startDate: medicine.startDate,
// // //       endDate: medicine.endDate,
// // //     });
// // //   };

// // //   // Edit form change handler
// // //   const handleEditChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setEditForm((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   // Submit edit
// // //   // const submitEdit = async () => {
// // //   //   try {
// // //   //     await updateMedicine(editing.id, editForm);
// // //   //     const updatedList = await getHistoryOfUser();
// // //   //     setMedicines(updatedList);
// // //   //     setEditing(null);
// // //   //   } catch (error) {
// // //   //     alert("Failed to update medicine");
// // //   //     console.error(error);
// // //   //   }
// // //   // };

// // //   const submitEdit = async () => {
// // //   try {
// // //     if (!user) {
// // //       alert("User not authenticated");
// // //       return;
// // //     }
// // //     await updateMedicine(editing.id, { ...editForm, userId: user.id });
// // //     const updatedList = await getHistoryOfUser();
// // //     setMedicines(updatedList);
// // //     setEditing(null);
// // //   } catch (error) {
// // //     alert("Failed to update medicine");
// // //     console.error(error);
// // //   }
// // // };


// // //   const openDelete = (id) => setDeleteId(id);



// // // const confirmDelete = async () => {
// // //   try {
// // //     if (!user) {
// // //       alert("User not authenticated");
// // //       return;
// // //     }
// // //     await deleteMedicine(deleteId, user.id);
// // //     const updatedList = await getHistoryOfUser();
// // //     setMedicines(updatedList);
// // //     setDeleteId(null);
// // //   } catch (error) {
// // //     alert("Failed to delete medicine");
// // //     console.error(error);
// // //   }
// // // };

// // //   // Open delete confirmation

// // //   // Confirm delete
// // // //   const confirmDelete = async () => {
// // // //   try {
// // // //     await deleteMedicine(deleteId, user.id);
// // // //     const updatedList = await getHistoryOfUser();
// // // //     setMedicines(updatedList);
// // // //     setDeleteId(null);
// // // //   } catch (error) {
// // // //     alert("Failed to delete medicine");
// // // //   }
// // // // };





// // // console.log("Updating medicine:", editing.id, editForm, "User ID:", user.id);
// // // console.log("Deleting medicine ID:", deleteId, "User ID:", user.id);



// // //   if (loading)
// // //     return <div className="text-white text-center mt-10">Loading medicines...</div>;

// // //   if (error)
// // //     return <div className="text-red-500 text-center mt-10">{error}</div>;

// // //   if (!medicines || medicines.length === 0)
// // //     return (
// // //       <Card sx={{ bgcolor: "#1f2937", borderColor: "#374151", p: 6, textAlign: "center" }} variant="outlined">
// // //         <Pill className="mx-auto mb-4" size={48} color="#9ca3af" />
// // //         <Typography color="text.secondary" variant="h6">
// // //           No medicines added yet
// // //         </Typography>
// // //         <Typography color="text.secondary" variant="body2">
// // //           Add your first medicine using the form above
// // //         </Typography>
// // //       </Card>
// // //     );

// // //   return (
// // //     <div className="p-6 bg-gray-900 min-h-screen space-y-4">
// // //       <Typography variant="h4" className="text-white font-semibold mb-4">
// // //         Your Medicines
// // //       </Typography>

// // //       <div className="grid gap-4">
// // //         {medicines.map((m) => (
// // //           <Card key={m.id} variant="outlined" className="bg-gray-900 border-gray-700 rounded-md shadow-md">
// // //             <CardHeader
// // //               title={<Typography variant="h6" color="white">{m.name}</Typography>}
// // //               action={
// // //                 <div>
// // //                   <IconButton onClick={() => openEdit(m)} size="small" sx={{ color: "white" }}>
// // //                     <Edit fontSize="small" />
// // //                   </IconButton>
// // //                   <IconButton onClick={() => openDelete(m.id)} size="small" sx={{ color: "#ef4444" }}>
// // //                     <Trash2 fontSize="small" />
// // //                   </IconButton>
// // //                 </div>
// // //               }
// // //               sx={{ pb: 1 }}
// // //             />
// // //             <CardContent>
// // //               <div className="flex flex-wrap gap-2 mb-2">
// // //                 <StatusBadge status={getStatus(m)} />
// // //                 <Badge color="primary" variant="outlined" sx={{ px: 1, py: 0.5, fontSize: 12 }}>
// // //                   {m.dosage}
// // //                 </Badge>
// // //               </div>

// // //               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
// // //                 <div className="flex items-center gap-1">
// // //                   <Clock size={16} />
// // //                   <span>{m.frequency} at {m.time}</span>
// // //                 </div>
// // //                 <div className="flex items-center gap-1">
// // //                   <Calendar size={16} />
// // //                   <span>Start: {format(new Date(m.startDate), "MMM dd, yyyy")}</span>
// // //                 </div>
// // //                 <div className="flex items-center gap-1">
// // //                   <Calendar size={16} />
// // //                   <span>End: {format(new Date(m.endDate), "MMM dd, yyyy")}</span>
// // //                 </div>
// // //               </div>
// // //             </CardContent>
// // //           </Card>
// // //         ))}
// // //       </div>

// // //       {/* Edit Dialog */}
// // //       <Dialog open={Boolean(editing)} onClose={() => setEditing(null)} maxWidth="sm" fullWidth>
// // //         <DialogTitle>Edit Medicine</DialogTitle>
// // //         <DialogContent>
// // //           <div className="flex flex-col gap-4 mt-2">
// // //             <TextField label="Name" name="name" fullWidth value={editForm.name || ""} onChange={handleEditChange} variant="outlined" size="small" />
// // //             <TextField label="Dosage" name="dosage" fullWidth value={editForm.dosage || ""} onChange={handleEditChange} variant="outlined" size="small" />
// // //             <TextField label="Frequency" name="frequency" fullWidth value={editForm.frequency || ""} onChange={handleEditChange} variant="outlined" size="small" />
// // //             <TextField
// // //               label="Time"
// // //               name="time"
// // //               fullWidth
// // //               value={editForm.time || ""}
// // //               onChange={handleEditChange}
// // //               variant="outlined"
// // //               size="small"
// // //               type="time"
// // //               InputLabelProps={{ shrink: true }}
// // //             />
// // //             <TextField
// // //               label="Start Date"
// // //               name="startDate"
// // //               fullWidth
// // //               value={editForm.startDate ? new Date(editForm.startDate).toISOString().slice(0, 10) : ""}
// // //               onChange={handleEditChange}
// // //               variant="outlined"
// // //               size="small"
// // //               type="date"
// // //               InputLabelProps={{ shrink: true }}
// // //             />
// // //             <TextField
// // //               label="End Date"
// // //               name="endDate"
// // //               fullWidth
// // //               value={editForm.endDate ? new Date(editForm.endDate).toISOString().slice(0, 10) : ""}
// // //               onChange={handleEditChange}
// // //               variant="outlined"
// // //               size="small"
// // //               type="date"
// // //               InputLabelProps={{ shrink: true }}
// // //             />
// // //           </div>
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={() => setEditing(null)} color="inherit">
// // //             Cancel
// // //           </Button>
// // //           <Button onClick={submitEdit} variant="contained" color="primary">
// // //             Save
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>

// // //       {/* Delete Confirmation Dialog */}
// // //       <Dialog open={Boolean(deleteId)} onClose={() => setDeleteId(null)} maxWidth="xs" fullWidth>
// // //         <DialogTitle>Delete Medicine</DialogTitle>
// // //         <DialogContent>
// // //           <Typography>Are you sure you want to delete this medicine? This action cannot be undone.</Typography>
// // //         </DialogContent>
// // //         <DialogActions>
// // //           <Button onClick={() => setDeleteId(null)} color="inherit">
// // //             Cancel
// // //           </Button>
// // //           <Button onClick={confirmDelete} variant="contained" color="error">
// // //             Delete
// // //           </Button>
// // //         </DialogActions>
// // //       </Dialog>
// // //     </div>
// // //   );
// // // }



// // import React, { useContext, useEffect, useState } from "react";
// // import { format } from "date-fns";
// // import {
// //   Card,
// //   CardHeader,
// //   CardContent,
// //   Typography,
// //   Button,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// //   TextField,
// //   Badge,
// //   IconButton,
// // } from "@mui/material";
// // import { Edit, Trash2, Calendar, Clock, Pill } from "lucide-react";

// // import { AuthContext } from "../contexts/AuthContext";

// // export default function UserMedicinesManager() {
// //   const { user, getHistoryOfUser, updateMedicine, deleteMedicine } = useContext(AuthContext);

// //   const [medicines, setMedicines] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [editing, setEditing] = useState(null);
// //   const [editForm, setEditForm] = useState({});
// //   const [deleteId, setDeleteId] = useState(null);
// //   const [operationLoading, setOperationLoading] = useState(false);

// //   // Fetch medicines on mount
// //   useEffect(() => {
// //     const fetchMedicines = async () => {
// //       try {
// //         setLoading(true);
// //         const data = await getHistoryOfUser();
// //         setMedicines(data);
// //       } catch (e) {
// //         setError("Failed to load medicines");
// //         console.error(e);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchMedicines();
// //   }, [getHistoryOfUser]);

// //   // Status badge component
// //   const StatusBadge = ({ status }) => {
// //     const colorMap = {
// //       active: "#22c55e",
// //       completed: "#6b7280",
// //       upcoming: "#3b82f6",
// //     };
// //     return (
// //       <Badge
// //         badgeContent={status}
// //         sx={{
// //           "& .MuiBadge-badge": {
// //             right: -10,
// //             top: 13,
// //             padding: "0 6px",
// //             borderRadius: 8,
// //             backgroundColor: colorMap[status.toLowerCase()] || colorMap.upcoming,
// //             color: "white",
// //             fontSize: 12,
// //             height: 22,
// //             minWidth: 50,
// //           },
// //         }}
// //       />
// //     );
// //   };

// //   const getStatus = (medicine) => {
// //     const now = new Date();
// //     const start = new Date(medicine.startDate);
// //     const end = new Date(medicine.endDate);
// //     if (now >= start && now <= end) return "Active";
// //     if (now > end) return "Completed";
// //     return "Upcoming";
// //   };

// //   // Open edit dialog
// //   const openEdit = (medicine) => {
// //     setEditing(medicine);
// //     setEditForm({
// //       name: medicine.name,
// //       dosage: medicine.dosage,
// //       frequency: medicine.frequency,
// //       time: medicine.time,
// //       startDate: medicine.startDate,
// //       endDate: medicine.endDate,
// //     });
// //   };

// //   const closeEditDialog = () => {
// //     setEditing(null);
// //     setEditForm({});
// //   };

// //   const handleEditChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditForm((prev) => ({ ...prev, [name]: value }));
// //   };

// //   // Submit edit
// //   const submitEdit = async () => {
// //     if (!user) {
// //       alert("User not authenticated");
// //       return;
// //     }
// //     try {
// //       setOperationLoading(true);
// //       await updateMedicine(editing._id, { ...editForm, userId: user._id });
// //       const updatedList = await getHistoryOfUser();
// //       setMedicines(updatedList);
// //       closeEditDialog();
// //     } catch (error) {
// //       alert("Failed to update medicine");
// //       console.error(error);
// //     } finally {
// //       setOperationLoading(false);
// //     }
// //   };

// //   // Open delete confirmation
// //   const openDelete = (_id) => setDeleteId(_id);

// //   // Confirm delete
// //   const confirmDelete = async () => {
// //     if (!user) {
// //       alert("User not authenticated");
// //       return;
// //     }
// //     try {
// //       setOperationLoading(true);
// //       await deleteMedicine(deleteId, user._id);
// //       const updatedList = await getHistoryOfUser();
// //       setMedicines(updatedList);
// //       setDeleteId(null);
// //     } catch (error) {
// //       alert("Failed to delete medicine");
// //       console.error(error);
// //     } finally {
// //       setOperationLoading(false);
// //     }
// //   };

// //   if (loading)
// //     return <div className="text-white text-center mt-10">Loading medicines...</div>;

// //   if (error)
// //     return <div className="text-red-500 text-center mt-10">{error}</div>;

// //   if (!medicines || medicines.length === 0)
// //     return (
// //       <Card
// //         sx={{ bgcolor: "#1f2937", borderColor: "#374151", p: 6, textAlign: "center" }}
// //         variant="outlined"
// //       >
// //         <Pill className="mx-auto mb-4" size={48} color="#9ca3af" />
// //         <Typography color="text.secondary" variant="h6">
// //           No medicines added yet
// //         </Typography>
// //         <Typography color="text.secondary" variant="body2">
// //           Add your first medicine using the form above
// //         </Typography>
// //       </Card>
// //     );

// //   return (
// //     <div className="p-6 bg-gray-900 min-h-screen space-y-4">
// //       <Typography variant="h4" className="text-white font-semibold mb-4">
// //         Your Medicines
// //       </Typography>

// //       <div className="grid gap-4">
// //         {medicines.map((m) => (
// //           <Card key={m._id} variant="outlined" className="bg-gray-900 border-gray-700 rounded-md shadow-md">
// //             <CardHeader
// //               title={<Typography variant="h6" color="white">{m.name}</Typography>}
// //               action={
// //                 <div>
// //                   <IconButton onClick={() => openEdit(m)} size="small" sx={{ color: "white" }} disabled={operationLoading}>
// //                     <Edit fontSize="small" />
// //                   </IconButton>
// //                   <IconButton onClick={() => openDelete(m._id)} size="small" sx={{ color: "#ef4444" }} disabled={operationLoading}>
// //                     <Trash2 fontSize="small" />
// //                   </IconButton>
// //                 </div>
// //               }
// //               sx={{ pb: 1 }}
// //             />
// //             <CardContent>
// //               <div className="flex flex-wrap gap-2 mb-2">
// //                 <StatusBadge status={getStatus(m)} />
// //                 <Badge color="primary" variant="outlined" sx={{ px: 1, py: 0.5, fontSize: 12 }}>
// //                   {m.dosage}
// //                 </Badge>
// //               </div>

// //               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
// //                 <div className="flex items-center gap-1">
// //                   <Clock size={16} />
// //                   <span>{m.frequency} at {m.time}</span>
// //                 </div>
// //                 <div className="flex items-center gap-1">
// //                   <Calendar size={16} />
// //                   <span>Start: {format(new Date(m.startDate), "MMM dd, yyyy")}</span>
// //                 </div>
// //                 <div className="flex items-center gap-1">
// //                   <Calendar size={16} />
// //                   <span>End: {format(new Date(m.endDate), "MMM dd, yyyy")}</span>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>

// //       {/* Edit Dialog */}
// //       <Dialog open={Boolean(editing)} onClose={closeEditDialog} maxWidth="sm" fullWidth>
// //         <DialogTitle>Edit Medicine</DialogTitle>
// //         <DialogContent>
// //           <div className="flex flex-col gap-4 mt-2">
// //             <TextField label="Name" name="name" fullWidth value={editForm.name || ""} onChange={handleEditChange} variant="outlined" size="small" disabled={operationLoading} />
// //             <TextField label="Dosage" name="dosage" fullWidth value={editForm.dosage || ""} onChange={handleEditChange} variant="outlined" size="small" disabled={operationLoading} />
// //             <TextField label="Frequency" name="frequency" fullWidth value={editForm.frequency || ""} onChange={handleEditChange} variant="outlined" size="small" disabled={operationLoading} />
// //             <TextField
// //               label="Time"
// //               name="time"
// //               fullWidth
// //               value={editForm.time || ""}
// //               onChange={handleEditChange}
// //               variant="outlined"
// //               size="small"
// //               type="time"
// //               InputLabelProps={{ shrink: true }}
// //               disabled={operationLoading}
// //             />
// //             <TextField
// //               label="Start Date"
// //               name="startDate"
// //               fullWidth
// //               value={editForm.startDate ? new Date(editForm.startDate).toISOString().slice(0, 10) : ""}
// //               onChange={handleEditChange}
// //               variant="outlined"
// //               size="small"
// //               type="date"
// //               InputLabelProps={{ shrink: true }}
// //               disabled={operationLoading}
// //             />
// //             <TextField
// //               label="End Date"
// //               name="endDate"
// //               fullWidth
// //               value={editForm.endDate ? new Date(editForm.endDate).toISOString().slice(0, 10) : ""}
// //               onChange={handleEditChange}
// //               variant="outlined"
// //               size="small"
// //               type="date"
// //               InputLabelProps={{ shrink: true }}
// //               disabled={operationLoading}
// //             />
// //           </div>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={closeEditDialog} color="inherit" disabled={operationLoading}>
// //             Cancel
// //           </Button>
// //           <Button onClick={submitEdit} variant="contained" color="primary" disabled={operationLoading}>
// //             Save
// //           </Button>
// //         </DialogActions>
// //       </Dialog>

// //       {/* Delete Confirmation Dialog */}
// //       <Dialog open={Boolean(deleteId)} onClose={() => setDeleteId(null)} maxWidth="xs" fullWidth>
// //         <DialogTitle>Delete Medicine</DialogTitle>
// //         <DialogContent>
// //           <Typography>Are you sure you want to delete this medicine? This action cannot be undone.</Typography>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={() => setDeleteId(null)} color="inherit" disabled={operationLoading}>
// //             Cancel
// //           </Button>
// //           <Button onClick={confirmDelete} variant="contained" color="error" disabled={operationLoading}>
// //             Delete
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // }






import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
   Typography,  
  Button as MuiButton,
} from "@mui/material";
import { Edit, Trash2, Calendar, Clock, Pill } from "lucide-react";
import { AuthContext } from "../contexts/AuthContext";

export default function UserMedicinesManager() {
  const { user, getHistoryOfUser, updateMedicine, deleteMedicine } = useContext(AuthContext);

  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [deleteId, setDeleteId] = useState(null);
  const [operationLoading, setOperationLoading] = useState(false);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        setLoading(true);
        const data = await getHistoryOfUser();
        setMedicines(data);
      } catch (e) {
        setError("Failed to load medicines");
      } finally {
        setLoading(false);
      }
    };
    fetchMedicines();
  }, [getHistoryOfUser]);

  const getStatus = (medicine) => {
    const now = new Date();
    const start = new Date(medicine.startDate);
    const end = new Date(medicine.endDate);
    if (now >= start && now <= end) return "Active";
    if (now > end) return "Completed";
    return "Upcoming";
  };

  const StatusBadge = ({ status }) => {
    const lookup = {
      active: "bg-yellow-400 text-black shadow-yellow-400",
      completed: "bg-gray-600 text-white",
      upcoming: "bg-blue-500 text-white",
    };
    const style = lookup[status.toLowerCase()] || lookup.upcoming;
    return (
      <span
        className={`inline-block px-2 py-1 rounded-full text-xs font-bold uppercase drop-shadow ${style}`}
        style={{ minWidth: 60, textAlign: "center" }}
      >
        {status}
      </span>
    );
  };

  const openEdit = (medicine) => {
    setEditing(medicine);
    setEditForm({
      name: medicine.name,
      dosage: medicine.dosage,
      frequency: medicine.frequency,
      time: medicine.time,
      startDate: medicine.startDate,
      endDate: medicine.endDate,
    });
  };
  const closeEditDialog = () => {
    setEditing(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitEdit = async () => {
    if (!user) {
      alert("User not authenticated");
      return;
    }
    try {
      setOperationLoading(true);
      await updateMedicine(editing.id, { ...editForm, userId: user.id });
      const updatedList = await getHistoryOfUser();
      setMedicines(updatedList);
      closeEditDialog();
    } catch (error) {
      alert("Failed to update medicine");
    } finally {
      setOperationLoading(false);
    }
  };

  const openDelete = (id) => setDeleteId(id);

  const confirmDelete = async () => {
    if (!user) {
      alert("User not authenticated");
      return;
    }
    try {
      setOperationLoading(true);
      await deleteMedicine(deleteId, user.id);
      setDeleteId(null);
      setMedicines(await getHistoryOfUser());
    } catch (error) {
      alert("Failed to delete medicine");
    } finally {
      setOperationLoading(false);
    }
  };

  // UI
  if (loading)
    return (
      <div className="text-yellow-400 text-center mt-10 text-xl font-bold">
        Loading medicines...
      </div>
    );
  if (error)
    return (
      <div className="text-red-500 text-center mt-10 text-xl font-bold">
        {error}
      </div>
    );
  if (!medicines || medicines.length === 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a]">
        <div className="bg-[#18181b] rounded-2xl shadow-lg border-2 border-yellow-400/30 px-10 py-10 max-w-xl w-full flex flex-col items-center">
          <Pill size={60} className="mb-4 text-yellow-400 drop-shadow-glow" />
          <h2 className="text-yellow-400 font-bold text-2xl mb-2 drop-shadow-glow">
            No medicines added yet
          </h2>
          <p className="text-gray-300 text-md">
            Add your first medicine using the form above.
          </p>
        </div>
      </div>
    );

  return (
    <div className="p-6 sm:p-12 bg-[#0a0a0a] min-h-screen">
      <h2 className="text-3xl font-bold text-yellow-400 mb-10 drop-shadow-glow">
        Your Medicines
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {medicines.map((m) => (
          <div
            key={m.id}
            className="bg-[#18181b] border border-yellow-400/20 rounded-2xl shadow-[0_0_24px_#FFD70022] transition-all hover:shadow-[0_0_32px_#FFD70090] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl text-yellow-400 font-bold tracking-wide">
                {m.name}
              </h3>
              <div className="flex gap-2">
                <button
                  title="Edit"
                  onClick={() => openEdit(m)}
                  disabled={operationLoading}
                  className="rounded-md p-2 hover:bg-yellow-500/20 focus:outline-none transition"
                >
                  <Edit size={20} className="text-yellow-400" />
                </button>
                <button
                  title="Delete"
                  onClick={() => openDelete(m._id)}
                  disabled={operationLoading}
                  className="rounded-md p-2 hover:bg-yellow-500/20 focus:outline-none transition"
                >
                  <Trash2 size={20} className="text-red-500" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center mb-2">
              <StatusBadge status={getStatus(m)} />
              <span className="px-2 py-1 rounded bg-gray-800 text-yellow-400 border border-yellow-400 font-semibold shadow-md text-xs">
                {m.dosage}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 text-sm text-gray-300 my-2">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {m.frequency} at {m.time}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                Start: {format(new Date(m.startDate), "MMM dd, yyyy")}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                End: {format(new Date(m.endDate), "MMM dd, yyyy")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={!!editing} onClose={closeEditDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: "#FFD700", background: "#18181b", fontWeight: 700 }}>
          Edit Medicine
        </DialogTitle>
        <DialogContent sx={{ background: "#18181b" }}>
          <div className="flex flex-col gap-4 mt-2">
            <TextField
              label="Name"
              name="name"
              fullWidth
              value={editForm.name || ""}
              onChange={handleEditChange}
              variant="outlined"
              size="small"
              disabled={operationLoading}
              InputProps={{
                style: { color: "#FFD700" },
              }}
              InputLabelProps={{ style: { color: "#FFD700" } }}
            />
            <TextField
              label="Dosage"
              name="dosage"
              fullWidth
              value={editForm.dosage || ""}
              onChange={handleEditChange}
              variant="outlined"
              size="small"
              disabled={operationLoading}
              InputProps={{
                style: { color: "#FFD700" },
              }}
              InputLabelProps={{ style: { color: "#FFD700" } }}
            />
            <TextField
              label="Frequency"
              name="frequency"
              fullWidth
              value={editForm.frequency || ""}
              onChange={handleEditChange}
              variant="outlined"
              size="small"
              disabled={operationLoading}
              InputProps={{
                style: { color: "#FFD700" },
              }}
              InputLabelProps={{ style: { color: "#FFD700" } }}
            />
            <TextField
              label="Time"
              name="time"
              type="time"
              fullWidth
              value={editForm.time || ""}
              onChange={handleEditChange}
              variant="outlined"
              size="small"
              disabled={operationLoading}
              InputProps={{
                style: { color: "#FFD700" },
              }}
              InputLabelProps={{ style: { color: "#FFD700" }, shrink: true }}
            />
            <TextField
              label="Start Date"
              name="startDate"
              type="date"
              fullWidth
              value={editForm.startDate ? new Date(editForm.startDate).toISOString().slice(0, 10) : ""}
              onChange={handleEditChange}
              variant="outlined"
              size="small"
              disabled={operationLoading}
              InputProps={{
                style: { color: "#FFD700" },
              }}
              InputLabelProps={{ style: { color: "#FFD700" }, shrink: true }}
            />
            <TextField
              label="End Date"
              name="endDate"
              type="date"
              fullWidth
              value={editForm.endDate ? new Date(editForm.endDate).toISOString().slice(0, 10) : ""}
              onChange={handleEditChange}
              variant="outlined"
              size="small"
              disabled={operationLoading}
              InputProps={{
                style: { color: "#FFD700" },
              }}
              InputLabelProps={{ style: { color: "#FFD700" }, shrink: true }}
            />
          </div>
        </DialogContent>
        <DialogActions sx={{ background: "#18181b" }}>
          <MuiButton onClick={closeEditDialog} color="inherit" disabled={operationLoading}>
            Cancel
          </MuiButton>
          <MuiButton
            onClick={submitEdit}
            variant="contained"
            style={{
              background: "#FFD700",
              color: "#09090b",
              fontWeight: 600,
              boxShadow: "0 0 10px #FFD70080",
            }}
            disabled={operationLoading}
          >
            Save
          </MuiButton>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={!!deleteId} onClose={() => setDeleteId(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ color: "#FFD700", background: "#18181b", fontWeight: 700 }}>
          Delete Medicine
        </DialogTitle>
        <DialogContent sx={{ background: "#18181b", color: "#fffdee" }}>
          <Typography>
            Are you sure you want to delete this medicine? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ background: "#18181b" }}>
          <MuiButton onClick={() => setDeleteId(null)} color="inherit" disabled={operationLoading}>
            Cancel
          </MuiButton>
          <MuiButton
            onClick={confirmDelete}
            variant="contained"
            style={{
              background: "#FFD700",
              color: "#09090b",
              fontWeight: 600,
              boxShadow: "0 0 10px #FFD70080",
            }}
            disabled={operationLoading}
          >
            Delete
          </MuiButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}


// import React, { useContext, useEffect, useState } from "react";
// import { format } from "date-fns";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   Button as MuiButton,
//   Typography,
//   Badge,
//   IconButton,
//   Card,
//   CardHeader,
//   CardContent,
// } from "@mui/material";
// import { Edit, Trash2, Calendar, Clock, Pill } from "lucide-react";
// import { AuthContext } from "../contexts/AuthContext";

// export default function UserMedicinesManager() {
//   const { user, getHistoryOfUser, updateMedicine, deleteMedicine } = useContext(AuthContext);

//   const [medicines, setMedicines] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editing, setEditing] = useState(null);
//   const [editForm, setEditForm] = useState({});
//   const [deleteId, setDeleteId] = useState(null);
//   const [operationLoading, setOperationLoading] = useState(false);

//   useEffect(() => {
//     const fetchMedicines = async () => {
//       try {
//         setLoading(true);
//         const data = await getHistoryOfUser();
//         setMedicines(data);
//       } catch (e) {
//         setError("Failed to load medicines");
//         console.error(e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMedicines();
//   }, [getHistoryOfUser]);

//   const getStatus = (medicine) => {
//     const now = new Date();
//     const start = new Date(medicine.startDate);
//     const end = new Date(medicine.endDate);
//     if (now >= start && now <= end) return "Active";
//     if (now > end) return "Completed";
//     return "Upcoming";
//   };

//   const StatusBadge = ({ status }) => {
//     const lookup = {
//       active: "bg-yellow-400 text-black shadow-yellow-400",
//       completed: "bg-gray-600 text-white",
//       upcoming: "bg-blue-500 text-white",
//     };
//     const style = lookup[status.toLowerCase()] || lookup.upcoming;
//     return (
//       <span
//         className={`inline-block px-2 py-1 rounded-full text-xs font-bold uppercase drop-shadow ${style}`}
//         style={{ minWidth: 60, textAlign: "center" }}
//       >
//         {status}
//       </span>
//     );
//   };

//   const openEdit = (medicine) => {
//     setEditing(medicine);
//     setEditForm({
//       name: medicine.name,
//       dosage: medicine.dosage,
//       frequency: medicine.frequency,
//       time: medicine.time,
//       startDate: medicine.startDate,
//       endDate: medicine.endDate,
//     });
//   };

//   const closeEditDialog = () => {
//     setEditing(null);
//     setEditForm({});
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Submit edit
//   const submitEdit = async () => {
//     if (!user) {
//       alert("User not authenticated");
//       return;
//     }
//     try {
//       setOperationLoading(true);
//       await updateMedicine(editing._id, { ...editForm, userId: user.id }); // user.id, not _id
//       const updatedList = await getHistoryOfUser();
//       setMedicines(updatedList);
//       closeEditDialog();
//     } catch (error) {
//       alert("Failed to update medicine");
//       console.error(error);
//     } finally {
//       setOperationLoading(false);
//     }
//   };

//   // Open delete confirmation
//   const openDelete = (_id) => setDeleteId(_id);

//   // Confirm delete
//   const confirmDelete = async () => {
//     if (!user) {
//       alert("User not authenticated");
//       return;
//     }
//     try {
//       setOperationLoading(true);
//       await deleteMedicine(deleteId, user.id); // user.id, not _id
//       setDeleteId(null);
//       const updatedList = await getHistoryOfUser();
//       setMedicines(updatedList);
//     } catch (error) {
//       alert("Failed to delete medicine");
//       console.error(error);
//     } finally {
//       setOperationLoading(false);
//     }
//   };

//   if (loading)
//     return (
//       <div className="text-yellow-400 text-center mt-10 text-xl font-bold">
//         Loading medicines...
//       </div>
//     );
//   if (error)
//     return (
//       <div className="text-red-500 text-center mt-10 text-xl font-bold">
//         {error}
//       </div>
//     );
//   if (!medicines || medicines.length === 0)
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a]">
//         <div className="bg-[#18181b] rounded-2xl shadow-lg border-2 border-yellow-400/30 px-10 py-10 max-w-xl w-full flex flex-col items-center">
//           <Pill size={60} className="mb-4 text-yellow-400 drop-shadow-glow" />
//           <h2 className="text-yellow-400 font-bold text-2xl mb-2 drop-shadow-glow">
//             No medicines added yet
//           </h2>
//           <p className="text-gray-300 text-md">
//             Add your first medicine using the form above.
//           </p>
//         </div>
//       </div>
//     );

//   return (
//     <div className="p-6 sm:p-12 bg-[#0a0a0a] min-h-screen">
//       <h2 className="text-3xl font-bold text-yellow-400 mb-10 drop-shadow-glow">
//         Your Medicines
//       </h2>
//       <div className="grid gap-8 md:grid-cols-2">
//         {medicines.map((m) => (
//           <Card
//             key={m._id}
//             variant="outlined"
//             className="bg-[#18181b] border border-yellow-400/20 rounded-2xl shadow-[0_0_24px_#FFD70022] transition-all hover:shadow-[0_0_32px_#FFD70090]"
//           >
//             <CardHeader
//               title={<Typography variant="h6" sx={{ color: "#FFD700", fontWeight: 700 }}>{m.name}</Typography>}
//               action={
//                 <div className="flex gap-2">
//                   <IconButton onClick={() => openEdit(m)} disabled={operationLoading} sx={{ color: "#FFD700", "&:hover": { bgcolor: "#FFD70033" } }}>
//                     <Edit fontSize="small" />
//                   </IconButton>
//                   <IconButton onClick={() => openDelete(m._id)} disabled={operationLoading} sx={{ color: "#ef4444", "&:hover": { bgcolor: "#ef444433" } }}>
//                     <Trash2 fontSize="small" />
//                   </IconButton>
//                 </div>
//               }
//             />
//             <CardContent sx={{ color: "#fffdee" }}>
//               <div className="flex flex-wrap gap-2 mb-2">
//                 <StatusBadge status={getStatus(m)} />
//                 <Badge color="primary" variant="outlined" sx={{ px: 1, py: 0.5, fontSize: 12, borderColor: "#FFD700", color: "#FFD700" }}>
//                   {m.dosage}
//                 </Badge>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
//                 <div className="flex items-center gap-1">
//                   <Clock size={16} />
//                   <span>{m.frequency} at {m.time}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Calendar size={16} />
//                   <span>Start: {format(new Date(m.startDate), 'MMM dd, yyyy')}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Calendar size={16} />
//                   <span>End: {format(new Date(m.endDate), 'MMM dd, yyyy')}</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Edit Dialog */}
//       <Dialog open={!!editing} onClose={closeEditDialog} maxWidth="sm" fullWidth>
//         <DialogTitle sx={{ color: "#FFD700", background: "#18181b", fontWeight: 700 }}>Edit Medicine</DialogTitle>
//         <DialogContent sx={{ background: "#18181b" }}>
//           <div className="flex flex-col gap-4 mt-2">
//             {["name", "dosage", "frequency", "time", "startDate", "endDate"].map((field) => (
//               <TextField
//                 key={field}
//                 label={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
//                 name={field}
//                 fullWidth
//                 value={editForm[field] || ""}
//                 onChange={handleEditChange}
//                 variant="outlined"
//                 size="small"
//                 disabled={operationLoading}
//                 type={field.includes("Date") ? "date" : field === "time" ? "time" : "text"}
//                 InputLabelProps={field.includes("Date") || field === "time" ? { shrink: true } : undefined}
//                 InputProps={{ style: { color: "#FFD700" } }}
//                 InputLabelProps={{ style: { color: "#FFD700" } }}
//               />
//             ))}
//           </div>
//         </DialogContent>
//         <DialogActions sx={{ background: "#18181b" }}>
//           <MuiButton onClick={closeEditDialog} color="inherit" disabled={operationLoading}>
//             Cancel
//           </MuiButton>
//           <MuiButton 
//             onClick={submitEdit} 
//             variant="contained" 
//             sx={{ backgroundColor: "#FFD700", color: "#09090b", fontWeight: 600, boxShadow: "0 0 10px #FFD70080" }}
//             disabled={operationLoading}
//           >
//             Save
//           </MuiButton>
//         </DialogActions>
//       </Dialog>

//       {/* Delete Dialog */}
//       <Dialog open={!!deleteId} onClose={() => setDeleteId(null)} maxWidth="xs" fullWidth>
//         <DialogTitle sx={{ color: "#FFD700", background: "#18181b", fontWeight: 700 }}>Delete Medicine</DialogTitle>
//         <DialogContent sx={{ background: "#18181b", color: "#fffdee" }}>
//           <Typography>Are you sure you want to delete this medicine? This action cannot be undone.</Typography>
//         </DialogContent>
//         <DialogActions sx={{ background: "#18181b" }}>
//           <MuiButton onClick={() => setDeleteId(null)} color="inherit" disabled={operationLoading}>
//             Cancel
//           </MuiButton>
//           <MuiButton 
//             onClick={confirmDelete} 
//             variant="contained" 
//             sx={{ backgroundColor: "#FFD700", color: "#09090b", fontWeight: 600, boxShadow: "0 0 10px #FFD70080" }}
//             disabled={operationLoading}
//           >
//             Delete
//           </MuiButton>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
