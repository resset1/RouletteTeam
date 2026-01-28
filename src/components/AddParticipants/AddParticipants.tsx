import { useState } from "react";
import "./AddParticipants.css";

interface Props {
  onAdd: (name: string) => void;
  currentParticipant: number;
  nameParticipants: string[];
}

function AddParticipants({
  onAdd,
  currentParticipant,
  nameParticipants,
}: Props) {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }

    if (currentParticipant >= 10) {
      alert("¡No puedes agregar más participantes!");
      return;
    }

    const exists = nameParticipants.some(
      (p) => p.toLowerCase() === name.trim().toLowerCase(),
    );

    if (exists) {
      alert(`El nombre "${name}" ya está en la lista.`);
      return;
    }

    onAdd(name);
    setName("");
  };

  return (
    <div
      className="mb-4 p-3 p-md-4 rounded-4" // Padding responsivo
      style={{
        backgroundColor: "#1A1616",
        border: "1px solid #2C2424",
        width: "100%", // Quitamos el maxWidth: 900px
      }}
    >
      <form className="row g-3 align-items-end" onSubmit={handleSubmit}>
        <div className="col-12 col-md-8 flex-grow-1">
          <label
            htmlFor="inputParticipant"
            className="form-label text-white fw-bold pb-2 fs-5"
          >
            Agrega un participante
          </label>
          <input
            type="text"
            className="form-control form-control-lg rounded-pill custom-input"
            id="inputParticipant"
            placeholder="Nombre..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              backgroundColor: "#2C2424",
              color: "white",
              border: "1px solid transparent",
              height: "3.5rem",
            }}
          />
        </div>

        <div className="col-12 col-md-auto">
          <button
            type="submit"
            className="btn btn-danger btn-lg rounded-pill w-100 px-5"
            style={{ height: "3.5rem" }}
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddParticipants;
