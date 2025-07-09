export default function Navbar() {
  <style>

  </style>
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "start",
          padding: "10px",
        }}
      >
        <img
          src="/assets/icon.jpeg"
          alt="Navbar Icon"
          style={{ width: "100px" }}
        />
        <div
          style={{
            display: "flex",
            gap: "20px", // spacing between links
            alignItems: "center",
            padding: "10px",
          }}
        >
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Features</a>
        </div>

        <div>
          <a href="">Login</a>
          <a href="">Take a Quiz</a>
        </div>
      </div>
    </div>
  );
}
