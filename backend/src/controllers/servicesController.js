//? chama o models
import { Animals as AnimalsModel } from "../models/animals.js";

const servicesController = {
    create: async (req, res) => {
        try {
            const AnimalsModel = {
                name: req.body.name,
                age: req.body.age,
                weight: req.body.weight,
                status: req.body.status,
                habitat: req.body.habitat,
                behavior: req.body.behavior,
                diet: req.body.diet
            }
            const response = await AnimalsModel.create(service)
            res.status(201).json({response,msg: "Animal inserido com sucesso"});

        } catch (error) {
            console.log(error);
        }
    }
}

export default servicesController