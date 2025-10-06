



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




const toLocalDateInputValue = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const tzOffset = date.getTimezoneOffset() * 60000;
  const localISO = new Date(date.getTime() - tzOffset).toISOString().split("T")[0];
  return localISO;
};

const toLocalTimeString = (timeStr) => {
  if (!timeStr) return "";
  const [hours, minutes] = timeStr.split(":");
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export default function UserMedicinesManager() {
  const { user, getHistoryOfUser, updateMedicine, deleteMedicine } = useContext(AuthContext);

  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [deleteId, setDeleteId] = useState(null);
  const [operationLoading, setOperationLoading] = useState(false);

  //  Load medicines


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

  //  Edit handling




  const openEdit = (medicine) => {
    setEditing(medicine);
    setEditForm({
      name: medicine.name,
      frequencyPerDay: medicine.frequencyPerDay,
      times: medicine.times || [],
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

  const handleEditTimeChange = (index, value) => {
    setEditForm((prev) => {
      const newTimes = [...(prev.times || [])];
      newTimes[index] = value;
      return { ...prev, times: newTimes };
    });
  };

  const submitEdit = async () => {
    if (!user) return alert("User not authenticated");

    try {
      setOperationLoading(true);
      await updateMedicine(editing._id, { ...editForm, userId: user._id });
      const updatedList = await getHistoryOfUser();
      setMedicines(updatedList);
      closeEditDialog();
    } catch {
      alert("Failed to update medicine");
    } finally {
      setOperationLoading(false);
    }
  };

  //  Delete handling


  const openDelete = (_id) => setDeleteId(_id);
  const confirmDelete = async () => {
    if (!user) return alert("User not authenticated");

    try {
      setOperationLoading(true);
      await deleteMedicine(deleteId, user._id);
      setDeleteId(null);
      setMedicines(await getHistoryOfUser());
    } catch {
      alert("Failed to delete medicine");
    } finally {
      setOperationLoading(false);
    }
  };

  

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
            key={m._id}
            className="bg-[#18181b] border border-yellow-400/20 rounded-2xl shadow-[0_0_24px_#FFD70022] transition-all hover:shadow-[0_0_32px_#FFD70090] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl text-yellow-400 font-bold tracking-wide">{m.name}</h3>
              <div className="flex gap-2">
                <button
                  title="Edit"
                  onClick={() => openEdit(m)}
                  disabled={operationLoading}
                  className="rounded-md p-2 hover:bg-yellow-500/20 transition"
                >
                  <Edit size={20} className="text-yellow-400" />
                </button>
                <button
                  title="Delete"
                  onClick={() => openDelete(m._id)}
                  disabled={operationLoading}
                  className="rounded-md p-2 hover:bg-yellow-500/20 transition"
                >
                  <Trash2 size={20} className="text-red-500" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center mb-2">
              <StatusBadge status={getStatus(m)} />
            </div>

            <div className="grid grid-cols-1 gap-1 sm:grid-cols-3 text-sm text-gray-300 my-2">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {m.times?.map((t) => toLocalTimeString(t)).join(", ")}
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

      {/*  Edit Dialog */}



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
              InputProps={{ style: { color: "#FFD700" } }}
              InputLabelProps={{ style: { color: "#FFD700" } }}
            />

            <TextField
              label="Number of times per day"
              name="frequencyPerDay"
              type="number"
              fullWidth
              value={editForm.frequencyPerDay || 1}
              onChange={handleEditChange}
              variant="outlined"
              size="small"
              disabled={operationLoading}
              InputProps={{ style: { color: "#FFD700" } }}
              InputLabelProps={{ style: { color: "#FFD700" } }}
            />

            {editForm.times &&
              editForm.times.map((time, idx) => (
                <TextField
                  key={idx}
                  label={`Time for dose ${idx + 1}`}
                  type="time"
                  fullWidth
                  value={time}
                  onChange={(e) => handleEditTimeChange(idx, e.target.value)}
                  variant="outlined"
                  size="small"
                  disabled={operationLoading}
                  InputProps={{ style: { color: "#FFD700" } }}
                  InputLabelProps={{ style: { color: "#FFD700" }, shrink: true }}
                />
              ))}

            <TextField
              label="Start Date"
              name="startDate"
              type="date"
              fullWidth
              value={toLocalDateInputValue(editForm.startDate)}
              onChange={handleEditChange}
              variant="outlined"
              size="small"
              disabled={operationLoading}
              InputProps={{ style: { color: "#FFD700" } }}
              InputLabelProps={{ style: { color: "#FFD700" }, shrink: true }}
            />

            <TextField
              label="End Date"
              name="endDate"
              type="date"
              fullWidth
              value={toLocalDateInputValue(editForm.endDate)}
              onChange={handleEditChange}
              variant="outlined"
              size="small"
              disabled={operationLoading}
              InputProps={{ style: { color: "#FFD700" } }}
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

      {/* 🗑️ Delete Dialog */}
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
