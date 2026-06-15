/*
name
lastName
email
password
birthDate
phone
address
phoneEmergencyContacts [{ phone, nameEmergencyContact }]
profilePhoto
isVerified
loginAttempts
timeOut
*/

import mongoose from "mongoose";

const EmergencyContactSchema = new mongoose.Schema({
    phone: String,
    nameEmergencyContact: String
});

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    birthDate: Date,
    phone: String,
    address: String,
    phoneEmergencyContacts: [EmergencyContactSchema],
    profilePhoto: String,
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationCode: String,
    recoveryCode: String,
    loginAttempts: {
        type: Number,
        default: 0
    },
    timeOut: Date
},{
    timestamps: true
});

export default mongoose.model("Patients", patientSchema);