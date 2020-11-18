import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Educator from "./Components/Educator";
import TeachingExp from "./Components/TeachingExp";
import ResearchExp from "./Components/ResearchExp";
import ResearchGrants from "./Components/ResearchGrants";
import Publications from "./Components/Publications";

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
          id="section3"
        >
        </Section>
        <TeachingExp />
        <Section
          dark={false}
          id="section4"
        />
        <ResearchExp />
        <Section
          id="section5"
        />
        <ResearchGrants />

        <Section
          id="section6"
        />
        <Publications />
      </div>
    );
  }
}

export default App;
