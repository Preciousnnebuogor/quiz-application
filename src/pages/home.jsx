import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import QuestionHtml from "./questionhtml";

export default function HomePage() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      {/* <Categories /> */}
      <QuestionHtml/>
    </div>
  );
}
