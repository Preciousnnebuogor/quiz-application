export default function CategoriesPage() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        color: "white",
        //padding:"0px 20px"
      }}
    >
      <div
        style={{
          width: "300px",
          height: "250px",
          //backgroundColor: "white",
          backgroundColor: "#ff6b6b",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 8px #ff6b6b",
        }}
      >
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>HTML</p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "0px",
            padding: "10px",
            marginBottom: "0px",
          }}
        >
          Test your knowledge with our quick HTML quiz!
        </p>
        <p style={{ padding: "0px 20px", marginTop: "0px" }}>
          Answer a few fun questions to see how well you understand the basics
          of HTML. No pressure
        </p>
      </div>

      <div
        style={{
          width: "300px",
          height: "250px",
          backgroundColor: "#ff6b6b",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 8px #ff6b6b",
        }}
      >
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>CSS</p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "0px",
            padding: "10px",
            marginBottom: "0px",
          }}
        >
          {" "}
          How well do you know CSS?{" "}
        </p>
        <p style={{ padding: "0px 20px", marginTop: "0px" }}>
          Try this short quiz to check your knowledge of styling, selectors, and
          layout basics!
        </p>
      </div>

      <div
        style={{
          width: "300px",
          height: "250px",
          backgroundColor: "#ff6b6b",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4px 8px #ff6b6b",
        }}
      >
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>JAVASCRIPT</p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "0px",
            padding: "10px",
            //marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          Ready to test your JavaScript skills?
        </p>
        <p style={{ padding: "0px 20px", marginTop: "0px" }}>
          Take this quick quiz to challenge your understanding of variables,
          functions, and core JS concepts!
        </p>
      </div>
    </div>
  );
}
