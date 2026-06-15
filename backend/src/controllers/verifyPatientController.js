import patients from "../models/patients";

const verifyPatientController = {};

verifyPatientController.verify = async (req, res) => {
    const {
        email,
        code
    } = req.body;
    
    const patient = await patients.findOne({ email });

    if (!patient) {
        return res.json({message: "Patient not found"});
    }

    if (
        patient.verificationCode !== code
    ) {
        return res.json({message: "Invalid code"});
    }

    patient.isVerified = true;
    patient.verificationCode = "";

    await patient.save();
    res.json({message: "Account verified successfully"});

}

export default verifyPatientController;