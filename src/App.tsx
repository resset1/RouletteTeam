import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Roulette from "./components/Roulette/Roulette";
import AddParticipants from "./components/AddParticipants/AddParticipants";
import Footer from "./components/Footer/Footer";
import TeamList from "./components/TeamList/TeamList";
import { useState } from "react";

function App() {
  const [participants, setParticipants] = useState<any[]>([]);

  const [teamA, setTeamA] = useState<string[]>([]);
  const [teamB, setTeamB] = useState<string[]>([]);

  const addParticipant = (name: string) => {
    const newParticipant = {
      option: name,
      style: {
        backgroundColor: participants.length % 2 === 0 ? "#df3428" : "#1A1616",
        textColor: "white",
      },
    };
    setParticipants([...participants, newParticipant]);
  };

  const handleResetAll = () => {
    setParticipants([]);
    setTeamA([]);
    setTeamB([]);
  };

  const handleWinner = (winnerName: string) => {
    if (teamA.length >= 5 && teamB.length >= 5) {
      alert("¡Todos los equipos están llenos!");
      return;
    }
    // Si ambos están vacíos, el primero va de cabeza al Team A
    if (teamA.length === teamB.length) {
      if (teamA.length < 5) {
        setTeamA((prev) => [...prev, winnerName]);
      } else {
        // Por si acaso el A estuviera lleno pero el B no
        setTeamB((prev) => [...prev, winnerName]);
      }
    }
    // Si el Team A ya tiene más (ej: 1-0, 2-1), le toca al Team B
    else {
      if (teamB.length < 5) {
        setTeamB((prev) => [...prev, winnerName]);
      } else {
        // Por si acaso el B estuviera lleno pero el A no
        setTeamA((prev) => [...prev, winnerName]);
      }
    }

    // Quitamos al seleccionado de la ruleta para que no se repita
    setParticipants((prev) => prev.filter((p) => p.option !== winnerName));
  };

  return (
    <div
      style={{
        backgroundColor: "#121010",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <main className="container-fluid px-md-5 py-4 flex-grow-1">
        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-column gap-4">
              <AddParticipants onAdd={addParticipant} />
              <Roulette
                data={participants}
                onWinner={handleWinner}
                onReset={handleResetAll}
              />
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="d-flex flex-column gap-3">
              <TeamList team={teamA} teamName="Team A" borderColor="#ff4d4d" />
              <TeamList team={teamB} teamName="Team B" borderColor="#4d94ff" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
