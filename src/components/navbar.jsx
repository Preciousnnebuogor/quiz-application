import { Link } from "react-router-dom";

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
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/categories">Features</a>
        </div>

        <div className="nav-content2">
          <a href="">Login</a>
          <a href="/categories">
            <button>Take a quiz</button>
          </a>
        </div>
      </div>
    </div>
  );
}
