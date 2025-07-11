
import { useState } from "react";
import { QuestionJavascript } from "../components/datajs";

export default function SectionJavascript() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = QuestionJavascript[currentIndex];
  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    > 
      <>
        <div
          style={{
            fontSize: "38px",
            fontWeight: "bold",
            width: "60%",
            minWidth: "60%",
            textAlign: "center",
            color: "#ff6b6b",
          }}
        >
          {item.question}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "60%",
            minWidth: "60%",
            fontWeight: "bold",
          }}
        >
          {item.options.map((option, optionIndex) => {
            return (
              <div
                onClick={() => {
                  if (item.correctIndex === optionIndex) {
                    
                    setIsCorrect(true);
                  } else {
                    setIsCorrect(false);
                  }
                }}
                style={{
                  marginTop: "20px",
                  padding: "10px 50px",
                  width: "60%",
                  minWidth: "60%",
                  backgroundColor:
                    item.correctIndex === optionIndex && isCorrect
                      ? "green"
                      : "#ff6b6b",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                {option}
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
              gap: "20px",
              
            }}
          >
            <button
              onClick={() => {
                if (currentIndex < 1) return;
                setCurrentIndex(currentIndex - 1);
                setIsCorrect(false);
                
              }}
              style={{
                border: "2px solid  #ff6b6b",
                backgroundColor: "white",
                padding: "8px 15px",
                color: "#ff6b6b",
                fontWeight: "bold",
              }}
            >
              Previous
            </button>
            <button
            
              onClick={() => {
                if(!isCorrect) return
                if (currentIndex > QuestionJavascript.length - 1) return;
                setCurrentIndex(currentIndex + 1);
                setIsCorrect(false);
                
              }}
              style={{
                border: "2px solid  #ff6b6b",
                backgroundColor: "white",
                padding: "8px 28px",
                color: "#ff6b6b",
                fontWeight: "bold",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
