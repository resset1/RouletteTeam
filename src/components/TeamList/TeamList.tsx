import React from "react";

interface TeamListProps {
  team: string[];
  teamName: string;
  borderColor: string;
}

const TeamList: React.FC<TeamListProps> = ({ team, teamName, borderColor }) => {
  const maxSlots = 5;
  const slots = Array.from({ length: maxSlots }, (_, i) => team[i] || null);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className="p-4 shadow-lg mx-auto"
      style={{
        backgroundColor: "#1A1616",
        borderRadius: "16px",
        border: `1px solid ${borderColor}22`,
        width: "100%",
        maxWidth: "550px",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 px-2">
        <div>
          <h2
            className="h5 fw-bold m-0"
            style={{ color: borderColor, letterSpacing: "1px" }}
          >
            {teamName.toUpperCase()}
          </h2>
          <span className="text-secondary style={{ fontSize: '0.75rem' }}">
            {team.length}/{maxSlots} Miembros
          </span>
        </div>
        <div
          className="px-3 py-1 rounded-pill fw-bold"
          style={{
            backgroundColor: `${borderColor}15`,
            color: borderColor,
            fontSize: "0.65rem",
            border: `1px solid ${borderColor}44`,
          }}
        >
          READY ★
        </div>
      </div>

      {/* Slots para los integrantes */}
      <div className="d-flex flex-column gap-3">
        {slots.map((name, index) => (
          <div
            key={index}
            className="d-flex align-items-center px-4 transition-all"
            style={{
              backgroundColor: name ? "#2C2424" : "transparent",
              borderRadius: "14px",
              border: name
                ? `1px solid ${borderColor}11`
                : "1px dashed #2a2222",
              height: "50px",
            }}
          >
            {name ? (
              <>
                <div
                  className="d-flex align-items-center justify-content-center fw-bold me-3"
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: "#261515",
                    color: borderColor,
                    borderRadius: "100%",
                    fontSize: "0.7rem",
                  }}
                >
                  {getInitials(name)}
                </div>
                <span
                  className="text-white fw-medium"
                  style={{ fontSize: "0.9rem" }}
                >
                  {name}
                </span>
              </>
            ) : (
              <span
                className="text-muted small w-100 text-center"
                style={{ opacity: 0.4, fontSize: "0.8rem" }}
              >
                VACANTE {index + 1}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
