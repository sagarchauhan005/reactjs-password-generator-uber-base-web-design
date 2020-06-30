import React from 'react';
import './styles/App.css';
import IndexHeader from "./components/header/header";
import KeyVisualBody from "./components/section-key-visual/key-visual-body";
import CoverLetter from "./components/section-pitch/cover-letter-section";
import ThingsIDo from "./components/section-skills/things-i-do";
import MyStack from "./components/section-tech-stack/my-skills";
import OtherSkills from "./components/section-other-skills/other-skills";
import CTA from "./components/section-cta/cta";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
        <IndexHeader/>
        <KeyVisualBody/>
        <CoverLetter/>
        <ThingsIDo/>
        <MyStack/>
        <OtherSkills/>
        <CTA/>
        <Footer/>
    </div>
  );
}

export default App;
