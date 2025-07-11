export default function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        //justifyContent:"center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ fontSize: "40px", fontWeight: "bold", color: "#ff6b6b",  }}>
        <p>About Quiz</p>
      </div>

      <div style={{ width: "60%", lineHeight:"2rem", fontSize:"20px",paddingBottom:"0px" }}>
        <p>
          Quiz is an interactive and user-friendly learning app designed to help
          users master the fundamentals of HTML, CSS, and JavaScript — the core
          technologies of web development. Whether you're a beginner starting
          your coding journey or an experienced developer looking to refresh
          your knowledge, Quiz offers a structured and engaging way to learn
          through topic-based quizzes, varying difficulty levels, and instant
          feedback. Each question is carefully crafted to reinforce your
          understanding, from basic syntax to real-world applications. The app
          features a clean interface, score tracking, and offline access,
          allowing you to practice anytime, anywhere. With Quiz, you can build a
          strong foundation in frontend development, monitor your progress, and
          grow your skills at your own pace — all while having fun.
        </p>
      </div>
    </div>
  );
}
