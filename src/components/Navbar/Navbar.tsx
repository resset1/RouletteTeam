function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#121010", borderBottom: "1px solid #2C2424" }}
    >
      <div className="container-fluid px-3 px-md-5">
        <a className="navbar-brand text-white fw-bold" href="#">
          Ruleta aleatoria
        </a>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-light rounded-circle">
            <i className="bi bi-gear-fill fs-5"></i>
          </button>

          <button className="btn btn-outline-light rounded-circle">
            <i className="bi bi-question fs-5"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
