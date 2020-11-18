import React, { Component } from "react";
import "./App.css";
import { Fade } from "react-awesome-reveal";

import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Educator from "./Components/Educator";
import TeachingExp from "./Components/TeachingExp";
import ResearchExp from "./Components/ResearchExp";
import ResearchGrants from "./Components/ResearchGrants";
import Publications from "./Components/Publications";
import BlogAr from "./Components/BlogAr";
import Welcome from "./Components/Welcome";
import Presentation from "./Components/Presentation";
import ProfDev from "./Components/ProfDev";
import Cv from "./Components/Cv";


class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />

        <Section
          id="section1"
        />

        <Welcome />

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
        <Section
          id="section7"
        />
<BlogAr />
<Section
          id="section8"
        />
<Presentation />
<Section
          id="section9"
        />
<ProfDev />
<Section
          id="section10"
        />
<Cv />
      </div>

    );
  }
}

export default App;
