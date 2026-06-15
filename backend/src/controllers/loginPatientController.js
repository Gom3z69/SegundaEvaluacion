import patients from "../models/patients";
import bcrypt from "bcrypt";
import generateJWT from "../utils/generateJWT.js";

const loginPatientController = {};

loginPatientController.login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const patient = await Patients.findOne({email});
    if(!patient){
        return res.json({message: "Patient not found"});
    }
    if(!patient.isVerified){
        return res.json({message: "Account not verified"});
    }
    const match = await bcrypt.compare(
        password,
        patient.password
    );
    if(!match){
        patient.loginAttempts++;
        await patient.save();
        return res.json({message: "Incorrect Password"});
    }
    const token = generateJWT(patient._id);
    res.cookie(
        "token",
        token,
        {
            httpOnly: true,
            maxAge: 7* 24 * 60 * 60 * 1000
        }
    );
    res.json({message:"Login successfully"});
}
export default loginPatientController;