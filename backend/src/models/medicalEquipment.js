/*
equipmentName
description
brand
model
purchaseDate
maintenanceDate
condition
image
status
isAvailable
*/
import mongoose from "mongoose";

const medicalEquipmentSchema = mongoose.Schema({
    equipmentName: {
        type: String,
        required: true
    },
    description: String,
    brand: String,
    model: String,
    purchaseDate: Date,
    maintenanceDate: Date,
    condition: String,
    image: String,
    status: String,
    isAvailable: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

export default mongoose.model("MedicalEquipment", medicalEquipmentSchema);