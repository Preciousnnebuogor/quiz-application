export default function Hero(){
    return (
      <div
        style={{
          display: "flex",
          
          //alignItems: "start",
          //justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "38%",
            }}
          >
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              Master Your Knowledge with Quick Quizzes
            </p>

            <p style={{ marginTop: "0px" }}>
              Fun, Fast, and Free! Challenge yourself, learn new things, and
              track your , progress with our engaging quizzes across various
              topics!
            </p>
            <button
              style={{
                padding: "10px",
                background: "#ff6b6b",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                border: "none",
              }}
            >
              Take a quiz
            </button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/assets/hero2.png"
            style={{
              width: "100%",
              //height: "70vh"
            }}
          />
        </div>
      </div>
    );
}