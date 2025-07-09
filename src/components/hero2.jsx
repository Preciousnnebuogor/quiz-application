export default function Hero2() {
  return (
    <div
      style={{
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
        backgroundColor:"red",
        //width:"100%"
      }}
    >
      {/* Text Section */}
      <div style={{ width: "50%" }}>
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "0px",
            background: "blue",
            color: "white",
            padding: "10px",
          }}
        >
          Master Your Knowledge with Quick Quizzes
        </p>

        <p style={{ marginTop: "10px" }}>
          Fun, Fast, and Free! Challenge yourself, learn new things, and track
          your progress with our engaging quizzes across various topics!
        </p>

        <button
          style={{
            padding: "10px 20px",
            background: "#ff6b6b",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            marginTop: "20px",
          }}
        >
          Take a quiz
        </button>
      </div>

      {/* Image Section */}
      <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
        <img
          src="/assets/hero2.png"
          style={{
            width: "90%",
          }}
          alt="Quiz Hero"
        />
      </div>
    </div>
  );
}
