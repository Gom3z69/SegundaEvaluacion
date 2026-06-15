/*
specialityName
description
isAvailable
*/

import mongoose from "mongoose";

const SpecialitySchema = new mongoose.Schema({
    specialityName: {
        type: String,
        required: true
    },
    description: String,
    isAvailable: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

export default mongoose.model("Specialities", SpecialitySchema);