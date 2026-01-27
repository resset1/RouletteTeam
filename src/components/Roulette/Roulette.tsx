import React from "react";
import { Wheel } from "react-custom-roulette";

interface Props {
  data: any[];
  onWinner: (name: string) => void;
  onReset: () => void;
}

const Roulette = ({ data, onWinner, onReset }: Props) => {
  const [mustSpin, setMustSpin] = React.useState(false);
  const [prizeNumber, setPrizeNumber] = React.useState(0);

  const handleSpinClick = () => {
    if (data.length === 0) return alert("¡Agrega a alguien primero!");

    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div
      className="p-3 p-md-4 rounded-4 w-100"
      style={{ backgroundColor: "#1A1616", border: "1px solid #2C2424" }}
    >
      <div className="d-flex flex-column align-items-center gap-4">
        {data.length > 0 ? (
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
              onWinner(data[prizeNumber].option);
            }}
          />
        ) : (
          <div className="text-muted py-5">Esperando participantes...</div>
        )}

        <button
          className="btn btn-danger rounded-pill px-5 fw-bold"
          onClick={handleSpinClick}
          disabled={mustSpin || data.length === 0}
        >
          {mustSpin ? "GIRANDO..." : "¡GIRA!"}
        </button>

        <button
          className="btn btn-outline-danger rounded-pill px-5 fw-bold"
          onClick={onReset}
          disabled={mustSpin}
        >
          REINICIAR!
        </button>
      </div>
    </div>
  );
};

export default Roulette;
