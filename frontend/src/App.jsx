import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [capivaras, setCapivaras] = useState([]);
    const [habitat, setHabitat] = useState("");
    const [filteredCapivaras, setFilteredCapivaras] = useState([]);
    const [newCapivara, setNewCapivara] = useState({
        name: "",
        age: "",
        weight: "",
        status: "",
        habitat: "",
        behavior: "",
        diet: "",
        observations: "",
    });
    const [editCapivaraId, setEditCapivaraId] = useState(null);
    const [modalOpen, setModalOpen] = useState("none");


}