import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [Animals, setAnimals] = useState([]);
    const [habitat, setHabitat] = useState("");
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [editAnimalsId, setEditAnimalsId] = useState(null);
    const [newAnimals, setNewAnimals] = useState({
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
            setAnimals(response.data);
            setFilteredAnimals(response.data);
        } catch (error) {
            console.log("Erro ao buscar Animal:", error);
        }

    }
    
    
    
    
    
    const [modalOpen, setModalOpen] = useState("none");
    return (
        <>
            {/* Formulário para adicionar editar capivara */}
            <div style={{ display: modalOpen }} id="modal">
                <form >
                    <h2></h2>
                    <input type="text" />


            </form>
            </div>

            {/* Lista de capivaras */}
            <ul>
                {filteredAnimals.map((animal) => (
                    <li key={animal.id}>
                        <strong>{animal.name}</strong>
                        <p>Idade: {animal.age}</p>
                        <p>Peso: {animal.weight}</p>
                        <p>Status: {animal.status}</p>
                        <p>Habitat: {animal.habitat}</p>
                        <p>Comportamento: {animal.behavior}</p>
                        <p>Dieta: {animal.diet}</p>
                        <p>Observações: {animal.observations}</p>
                        <button onClick={() => setEditAnimalsId(animal.id)}>Editar</button>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default App