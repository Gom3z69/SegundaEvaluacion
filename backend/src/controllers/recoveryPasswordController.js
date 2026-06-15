import transporter from "../utils/sendEmail";

const recoveryPasswordController = {};

recoveryPasswordController.sendCode = async (req, res) => {
    const {email} = req.body;

    const patient = await Patients.findOne({email});
    if(!patient){
        return res.json({message: "Patient not found"});
    }
    const code = Math.floor(100000 + Math.random() * 900000
    ).toString();
    
    patient.recoveryCode = code;
    await patient.save();
    await transporter.sendMail({

        from: process.env.EMAIL_USER,
        to: email,
        subject: "Recovery password",
        html: recoveryEmail(code)
    });
    res.json({message: "Code sent successufullt"});
}

export default recoveryPasswordController;