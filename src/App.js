import React from "react";
import "./styles.css";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/26.jpg"
        name="Ruby Peck"
        online
      />

      <Contact
        avatar="https://randomuser.me/api/portraits/women/67.jpg"
        name="Joy Robertson"
      />

      <Contact
        avatar="https://randomuser.me/api/portraits/men/44.jpg"
        name="Robert Steeves"
        online
      />
    </div>
  );
}
