export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-section1">
        <p className="param1">Master Your Knowledge with Quick Quizzes</p>
        <p className="param2"> Fun, Fast, and Free!</p>

        <p className="param3">
          Fun, Fast, and Free! Challenge yourself, learn new things, and track
          your , progress with our engaging quizzes across various topics!
        </p>
        <a href="/categories">
          <button className="hero-butt">Take a quiz</button>
        </a>
      </div>
      <div className="hero-section2">
        <img
          src="/assets/hero2.png"
          style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
