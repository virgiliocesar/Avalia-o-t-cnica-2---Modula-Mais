import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [animal, setAnimal] = useState([]);
  const [habitat, setHabitat] = useState("");
  const [filteredAnimal, setFilteredAnimals] = useState([]);
  const [editAnimalId, setEditAnimalId] = useState(null);
  const [newAnimal, setNewAnimals] = useState({
    name: "",
    age: "",
    weight: "",
    status: "",
    habitat: "",
    behavior: "",
    diet: "",
    observations: "",
  });

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/animals");
      setAnimal(response.data);
      setFilteredAnimals(response.data);
      return response.data;
    } catch (error) {
      console.log("Erro ao buscar Animal:", error);
    }
  };

  // Função para filtrar capivaras por habitat
  useEffect(() => {
    const filtered = habitat
      ? animal.filter((capivara) =>
          capivara.habitat.toLowerCase().includes(habitat.toLowerCase())
        )
      : animal;
    setFilteredAnimals(filtered);
  }, [habitat, animal]);

  //? Function to add new animal
  const addAnimal = async () => {
    try {
      await axios.post("http://localhost:3000/api/animals", newAnimal);
      fetchAnimals();
    } catch (error) {
      console.log("Erro ao adicionar Animal:", error);
    }
  };

  //? Function to delete animal
  const deleteAnimal = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/animals/${id}`);
      fetchAnimals();
    } catch (error) {
      console.log("Erro ao deletar Animal:", error);
    }
  };

  //? Function to update animal
  const updateAnimal = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/animals/${id}`, newAnimal);
      setEditAnimalsId(null);
      fetchAnimals();
    } catch (error) {
      console.log("Erro ao editar Animal:", error);
    }
  };

  //? Function to edit animal
  const editAnimal = (animal) => {
    setEditAnimalId(animal._id);
    setNewAnimal(animal);
    setModalOpen("block");
  };

  const [modalOpen, setModalOpen] = useState("none");
  return (
    <>
      <div className="App">
        <h1>Catálogo de Capivaras</h1>

        {/*//? Form to add edit capybara */}
        <div style={{ display: modalOpen }} id="modal">
          <form>
            <h2></h2>
            <input
              type="text"
              placeholder="Nome"
              value={newAnimal.name}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Idade"
              value={newAnimal.age}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, age: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Peso"
              value={newAnimal.weight}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, weight: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Status"
              value={newAnimal.status}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, status: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Habitat"
              value={newAnimal.habitat}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, habitat: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Comportamento"
              value={newAnimal.behavior}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, behavior: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Dieta"
              value={newAnimal.diet}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, diet: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Observação"
              value={newAnimal.observations}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, observations: e.target.value })
              }
            />
            <button onClick={editAnimal ? updateAnimal : addAnimal}>
              {editAnimal ? "Atualizar" : "Adicionar"}
            </button>
          </form>
        </div>

        {/* //? List of capybaras */}
        <ul>
          {filteredAnimal.map((animal) => (
            <li key={animal.id}>
              <strong>{animal.name}</strong>
              <p>Idade: {animal.age}</p>
              <p>Peso: {animal.weight}</p>
              <p>Status: {animal.status}</p>
              <p>Habitat: {animal.habitat}</p>
              <p>Comportamento: {animal.behavior}</p>
              <p>Dieta: {animal.diet}</p>
              <p>Observações: {animal.observations}</p>
              <button onClick={() => setEditAnimalId(animal.id)}>Editar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default App;
