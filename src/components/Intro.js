import './Intro.css';
import React from 'react';
import { useEffect } from 'react';
import 'web-animations-js/web-animations.min';

var messages1_dom;
var messages2_dom;
var messages3_dom;
var scroll_message_dom;

var messages1_dom_animations;
var messages2_dom_animations;
var messages3_dom_animations;
var scroll_message_dom_animations_enter;
var scroll_message_dom_animations_show;

function Intro(){

    /**
     *  Initialize animation variables
     */
    function initialAnimations(){
        var keyframes = [
            { color : "hsla(0, 0%, 100%, 0)" },
            { color : "hsla(0, 0%, 100%, 1)" }
        ];

        var options = {
            duration : 5000,
            easing : 'ease-out',
        };

        messages1_dom_animations = messages1_dom.animate(keyframes,options);
        messages2_dom_animations = messages2_dom.animate(keyframes,options);
        messages3_dom_animations = messages3_dom.animate(keyframes,options);
        
        options.duration = 500;
        options.delay = 1000;

        scroll_message_dom_animations_enter = scroll_message_dom.animate(keyframes,options);

        var keyframes_scroll_show = [
            { transform : "translateY(0)" },
            { transform : "translateY(10px)" },
            { transform : "translateY(0)" },
        ];

        options.duration = 3000;
        options.iterations = 'Infinity';

        scroll_message_dom_animations_show = scroll_message_dom.animate(keyframes_scroll_show,options);

        messages1_dom_animations.pause();
        messages2_dom_animations.pause();
        messages3_dom_animations.pause();
        scroll_message_dom_animations_enter.pause();
        scroll_message_dom_animations_show.pause();
    }


    /**
     *  Start Animations
     */
    function startAnimation(){
        messages1_dom.style['display'] = 'block';
        messages1_dom_animations.play();

        messages1_dom_animations.onfinish = () =>{
            messages1_dom_animations.pause();
            messages1_dom.style['display'] = 'none';
            messages2_dom.style['display'] = 'block';
            messages3_dom.style['display'] = 'block';

            messages2_dom_animations.play();
            messages3_dom_animations.play();
        };

        messages2_dom_animations.onfinish = () => {
            messages2_dom_animations.pause();
            messages2_dom.style['color'] = "hsla(0, 0%, 100%, 1)";

        }

        messages3_dom_animations.onfinish = () => {
            messages3_dom_animations.pause();
            messages3_dom.style['color'] = "hsla(0, 0%, 100%, 1)";
            scroll_message_dom_animations_enter.play();
            scroll_message_dom_animations_show.play();
        }

        scroll_message_dom_animations_enter.onfinish = () => {
            scroll_message_dom_animations_enter.pause();
            scroll_message_dom.style['color'] = "hsla(0, 0%, 100%, 1)";
            
        }
    }


    /** 
     *  DOM Initialization
     * 
     *  :Notes
     *  Loaded when the DOM is loaded in webpage
     *  DOM reference variable are declared here
     *  Animation initialization functions are called
     *  
     *  :TODO
     *  Need to implement better way to adjust the welcome
     *  text position 
     */
    useEffect(
        () => {
            messages1_dom = document.querySelector(".intro .messages1");
            messages2_dom = document.querySelector(".intro .messages2");
            messages3_dom = document.querySelector(".intro .messages3");
            scroll_message_dom = document.querySelector(".intro .scroll_message");

            messages1_dom.style["color"] = "hsla(0, 0%, 100%, 0)";
            messages2_dom.style["color"] = "hsla(0, 0%, 100%, 0)";
            messages3_dom.style["color"] = "hsla(0, 0%, 100%, 0)";
            scroll_message_dom.style["color"] = "hsla(0, 0%, 100%, 0)";

            messages1_dom.style['display'] = 'none';
            messages2_dom.style['display'] = 'none';
            messages3_dom.style['display'] = 'none';

            initialAnimations();
            startAnimation();
        },
        []
    );


    /**
     *  React component HTML code
     * 
     *  :Notes
     *  
     */
    return(
        <div className="intro">
            <div className="testing1">
                <div className="testing2">
                    <div className="messages1">WELCOME</div>
                    <div className="messages2">Hi there! My name is</div>
                    <div className="messages3">Lee Kit</div>
                </div>
            </div>

            <div className="testing3">
                <div className="testing4">
                    <div className='scroll_message'>scroll down</div>
                </div>
            </div>
            
            
        </div>
    );
}

export default Intro;


