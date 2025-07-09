export default function Navbar() {
  return (
    <div className={"nav-body"}>
      <div className="nav-container">
        <img
          src="/assets/icon.png"
          alt="Navbar Icon"
          style={{
            width: "100px",
          }}
        />
        <div className="nav-content">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Features</a>
        </div>

        <div className="nav-content2"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <a
            href=""
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </a>
          <a
            href=""
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <button
              style={{
                border: "1px solid white",
                padding: "5px",
                background: "white",
                color: "#FF6B6B",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Take a quiz
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
