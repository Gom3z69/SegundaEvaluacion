import patients from "../models/patients";
import bcrypt from "bcrypt";
import transporter from "../utils/sendEmail";
import registerEmail from "../utils/registerEmail";

const registerPatientController = {};

registerPatientController.register = async (req, res) => {

    try {
        const {
            name,
            lastName,
            email,
            password
        } = req.body;

        const patientExists =
        await Patients.findOne({ email });

        if (patientExists) {
            return res.json({message: "Email already exists"});
        }

        const encryptedPassword = 
        await bcrypt.hash(password, 10);

        const verificationCode =
        Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        const patient = new Patients({
            name,
            lastName,
            email,
            password: encryptedPassword,
            verificationCode
        });

        await patient.save();
        await transporter.sendEmail({
            from: process.env.USER_EMAIL,
            to: email,
            subject: "Verification Code",
            html:registerEmail(verificationCode)
        });

        res.json({message: "Patient registered succesfully"});
    } catch (error) {
            console.log(error);
            res.json({message: error.message});
    }
}

export default registerPatientController;