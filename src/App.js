import './App.css';
import React from 'react';

import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App(){
    return(
        <div className='appDiv'>
            <div className="sectionDiv">
                <Intro />
            </div>
            <div className="sectionDiv">
                <About />
            </div>
            <div className="sectionDiv">
                <Skills />
            </div>
            <div className="sectionDiv">
                <Project />
            </div>
        </div>
    );
}

export default App;
