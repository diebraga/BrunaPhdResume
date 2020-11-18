import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Educator from "./Components/Educator";
import TeachingExp from "./Components/TeachingExp";
import dummyText from "./DummyText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Welcome"
          subtitle={dummyText}
          id="section1"
        />
        <Section
          dark={false}
          id="section2"
        />
        <Educator />
        <Section
          title="Teaching experience"
          id="section3"
        >
        </Section>
        <TeachingExp />
        <Section
          title="Section 4"
          subtitle='ddddddddddddddddddd'
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
