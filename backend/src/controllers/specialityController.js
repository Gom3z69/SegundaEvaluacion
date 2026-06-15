import specialities from "../models/specialities.js";
import specialities from "../models/specialities.js";

const specialitiesController = {};

//GET ALL
specialitiesController.getSpecialities = async (req, res) => {
    const specialities = await Specialities.find();
    res.json(specialities);
}

//GET BY ID
specialitiesController.getSpeciality = async (req, res) => {
    const speciality = await Speciality.findById(req.params.id);
    res.json(speciality);
}

//INSERT
specialitiesController.insertSpeciality = async (req, res) => {
    
}

//UPDATE
specialitiesController.updateSpeciality = async (req, res) => {
    await Speciality.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json({message: "Speciality updated"});
}

//DELETE
specialitiesController.deleteSpeciality = async (req, res) => {
    await Speciality.findByIdAndDelete(req.params.id);
    res.json({message: "Speciality deleted"});
}

export default specialitiesController;