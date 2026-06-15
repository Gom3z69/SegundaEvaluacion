/*
patient_id
diagnosis
medications [{medicineName}]
medicalNotes
*/

import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({
    medicineName: String
})

const fileSchema = new mongoose.Schema({
    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patients"
    },
    diagnosis: String,
    medications: [ medicationSchema ],
    medicalNotes: String
},{
    timestamps: true
});

export default mongoose.model("Files", fileSchema);