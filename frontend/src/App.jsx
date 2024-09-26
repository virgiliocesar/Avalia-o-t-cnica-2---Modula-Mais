import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [animal, setAnimal] = useState([]);
  const [habitat, setHabitat] = useState("");
  const [filteredAnimal, setFilteredAnimal] = useState([]);
  const [editAnimalId, setEditAnimalId] = useState(null);
  const [newAnimal, setNewAnimal] = useState({
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
      setFilteredAnimal(response.data);
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
    setFilteredAnimal(filtered);
  }, [habitat, animal]);

  //? Function to add new animal
  const addAnimal = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/animals", newAnimal);
      setNewAnimal({
        name: "",
        age: "",
        weight: "",
        status: "",
        habitat: "",
        behavior: "",
        breed: "",
        observations: "",
      });
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
  const updateAnimal = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/api/animals/${editAnimalId}`,
        newAnimal
      );
      setEditAnimalId(null);
      setNewAnimal({
        name: "",
        age: "",
        weight: "",
        status: "",
        habitat: "",
        behavior: "",
        diet: "",
        observations: "",
      });
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
          <form onSubmit={editAnimalId ? updateAnimal : addAnimal}>
            <h2>{editAnimalId ? "Editar Animal" : "Adicionar Animal"}</h2>
            <input
              type="text"
              placeholder="Nome"
              value={newAnimal.name}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, name: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Idade"
              value={newAnimal.age}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, age: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Peso"
              value={newAnimal.weight}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, weight: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Status"
              value={newAnimal.status}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, status: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Habitat"
              value={newAnimal.habitat}
              onChange={(e) =>
                setNewAnimal({ ...newAnimal, habitat: e.target.value })
              }
              required
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
            <button type="submit">
              {editAnimalId ? "Atualizar" : "Adicionar"}
            </button>
            <button
              onClick={() => {
                setModalOpen("none");
              }}
              type="submit"
            >
              {"Fechar"}
            </button>
          </form>
        </div>
        <div>
          <label htmlFor="habitat">Filtrar por Habitat </label>
          <input
            type="text"
            id="habitat"
            value={habitat}
            onChange={(e) => setHabitat(e.target.value)}
            placeholder="Digite o  habitat"
          />
          <button onClick={() => setModalOpen("block")}>{"Adicionar"}</button>
        </div>

        {/* //? List of capybaras */}
        <ul>
          {filteredAnimal.length > 0 ? (
            filteredAnimal.map((animal) => (
              <li key={animal.id}>
                <strong>Nome:</strong> {animal.name}
                <br />
                <strong>Idade:</strong> {animal.age}
                <br />
                <strong>Peso:</strong> {animal.weight}
                <br />
                <strong>Status:</strong> {animal.status}
                <br />
                <strong>Habitat: </strong> {animal.habitat}
                <br />
                <strong>Comportamento:</strong> {animal.behavior || "N/A"}
                <br />
                <strong>Dieta:</strong> {animal.diet || "N/A"}
                <br />
                <strong>Observações:</strong> {animal.observations || "N/A"}
                <br />
                <button onClick={() => editAnimal(animal)}>Editar</button>
                <button onClick={() => deleteAnimal(animal._id)}>Excluir</button>
              </li>
            ))
          ) : (
            <p>Nenhum resultado encontrado</p>
          )}
        </ul>
      </div>
    </>
  );
}
export default App;
