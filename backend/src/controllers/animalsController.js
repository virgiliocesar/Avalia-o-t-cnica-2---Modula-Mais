import Animals from '../models/animals.js';

export const getAnimals = async (req, res) => {
  try {
    const animals = await Animals.find();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar capivaras" });
  }
};

export const createAnimals = async (req, res) => {
  try {
    const newAnimals = new Animals(req.body);
    await newAnimals.save();
    res.status(201).json(newAnimals);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar capivara" });
  }
};

export const updateAnimals = async (req, res) => {
  try {
    const animalsUpdate = await Animals.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(animalsUpdate);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar capivara" });
  }
};

export const deleteAnimals = async (req, res) => {
  try {
    await Animals.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar capivara" });
  }
};
