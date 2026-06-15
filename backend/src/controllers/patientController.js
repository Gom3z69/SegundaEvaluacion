import patients from "../models/patients.js";

const patientsController = {};

//GET ALL
patientsController.getPatients = async (req, res) => {
    const patients = await Patients.find();
    res.json(patients);
}

//GET BY ID
patientsController.getPatient = async (req, res) => {
    const patient = await Patients.findById(req.params.id);
    res.json(patient);
}

//CREATE
patientsController.createPatient = async (req, res) => {
    const patient = new Patients(req.body);
    await patient.save();
    res.json({message: "Patient saved"});
}

//UPDATE
patientsController.updatePatient = async (req, res) => {
    await Patients.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json({message: "Patient updated"});
}

//DELETE
patientsController.deletePatient = async (req, res) => {
    await Patients.findByIdAndDelete(req.params.id);
    res.json({message: "Patient deleted"});
}

export default patientsController;