import { useState } from "react";
import { questionsData } from "../components/data";

export default function QuestionHtml() {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        //backgroundColor: "blue",
      }}
    >
      {questionsData.map((item) => (
        <>
          <div
            style={{
              fontSize: "40px",
              width: "60%",
              textAlign: "center",
              color: "#ff6b6b",
            }}
          >
            {item.question}{" "}
          </div>
          <div>{item.options}</div>
        </>
      ))}
    </div>
  );
}
