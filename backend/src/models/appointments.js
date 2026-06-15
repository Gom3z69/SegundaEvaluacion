/*
patient_id
specialty_id
appointmentDate
reason
status
observations
*/

import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patients"
    },
    specialty_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialities"
    },
    appointmentDate: Date,
    reason: String,
    status: String,
    observations: String
},{
    timestamps: true
});

export default mongoose.model("Appointments", appointmentSchema);