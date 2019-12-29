import React, { useEffect } from 'react';
import 'web-animations-js/web-animations-next.min';


function Intro({className}){

    /**
     * 
     * @param {*} queryName 
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} keyframes 
     * @param {*} direction 
     * @param {*} easing 
     */
    function d_anim(queryName,startTime,endTime,keyframes,direction,easing){
        var duration = endTime - startTime;

        var def_direction = direction || 'normal';
        var def_easing = easing || 'linear';

        var anim = document.querySelector(`.${queryName}`).animate(
            keyframes,
            {
                delay : startTime,
                duration : duration,
                fill : 'forwards',
                direction : def_direction,
                easing : def_easing,
            }
        );

        return anim;
    }


    /**
     * 
     * @param {*} queryName 
     */
    function setMidpointTransform(queryName){
        var tempDom = document.querySelector(`.${queryName}`).getBBox();
        
        var midpoint = {
            x : 0,
            y : 0,
        }

        midpoint.x = (tempDom.width / 2) + tempDom.x;
        midpoint.y = (tempDom.height / 2) + tempDom.y;

        document.querySelector(`.${queryName}`).style.transformOrigin = `${midpoint.x}px ${midpoint.y}px` 
    }

    useEffect(
        () => {
            var rotateGroupkeyFrames = [
                { transform : 'rotateZ(0deg)'},
                { transform : 'rotateZ(180deg)'},
            ];

            var scaleKeyFrames = [
                { transform : 'scale(0)'},
                { transform : 'scale(5)'},
            ];

            var scaleXKeyFrames = [
                { transform : 'scaleX(0)'},
                { transform : 'scaleX(1)'},
            ];

            var scaleYKeyFrames = [
                { transform : 'scaleY(0)'},
                { transform : 'scaleY(1)'},
            ];

            var opacityKeyFrames = [
                { opacity : '0.0'},
                { opacity : '1.0'},
            ];

            document.querySelector('.hline1').style.transform = 'scale(0)';
            document.querySelector('.hline2').style.transform = 'scale(0)';
            document.querySelector('.hline3').style.transform = 'scale(0)';
            document.querySelector('.hline4').style.transform = 'scale(0)';
            document.querySelector('.vline1').style.transform = 'scale(0)';
            document.querySelector('.vline2').style.transform = 'scale(0)';
            document.querySelector('.vline3').style.transform = 'scale(0)';
            document.querySelector('.vline4').style.transform = 'scale(0)';
            document.querySelector('.circle1').style.transform = 'scale(0)';
            document.querySelector('.circle2').style.transform = 'scale(0)';
            document.querySelector('.circle3').style.transform = 'scale(0)';
            document.querySelector('.rect1').style.transform = 'scale(0)';
            document.querySelector('.rect2').style.transform = 'scale(0)';
            document.querySelector('.text1').style.opacity = '0.0';
            document.querySelector('.text2').style.opacity = '0.0';
            document.querySelector('.text3').style.opacity = '0.0';
            document.querySelector('.text4').style.opacity = '0.0';
            document.querySelector('.text5').style.opacity = '0.0';
            document.querySelector('.text6').style.opacity = '0.0';
            document.querySelector('.textline1').style.opacity = '0.0';
            document.querySelector('.textScroll1').style.opacity = '0.0';

            setMidpointTransform('circle1');
            setMidpointTransform('circle2');
            setMidpointTransform('circle3');
            setMidpointTransform('rect1');
            setMidpointTransform('rect2');
            setMidpointTransform('hline1');
            setMidpointTransform('hline2');
            setMidpointTransform('hline3');
            setMidpointTransform('hline4');
            setMidpointTransform('vline1');
            setMidpointTransform('vline2');
            setMidpointTransform('vline3');
            setMidpointTransform('vline4');
            setMidpointTransform('groupName');
            setMidpointTransform('text1');

            d_anim('hline1',1000,1500,scaleXKeyFrames,'normal','ease-out');
            d_anim('hline2',1100,1600,scaleXKeyFrames,'normal','ease-out');
            d_anim('hline3',1200,1700,scaleXKeyFrames,'normal','ease-out');
            d_anim('hline4',1300,1800,scaleXKeyFrames,'normal','ease-out');
            d_anim('vline1',1200,1700,scaleYKeyFrames,'normal','ease-out');
            d_anim('vline2',1300,1800,scaleYKeyFrames,'normal','ease-out');
            d_anim('vline3',1400,1900,scaleYKeyFrames,'normal','ease-out');
            d_anim('vline4',1500,2000,scaleYKeyFrames,'normal','ease-out');
            d_anim('groupName',2000,2500,rotateGroupkeyFrames,'normal','ease-in-out');
            d_anim('circle1',2000,2800,scaleKeyFrames,'normal','ease-in-out');
            d_anim('circle2',2100,2900,scaleKeyFrames,'normal','ease-in-out');
            d_anim('circle3',2200,3000,scaleKeyFrames,'normal','ease-in-out');
            d_anim('circle1',3000,4000,scaleKeyFrames,'reverse','ease-in-out');
            d_anim('circle2',3000,4000,scaleKeyFrames,'reverse','ease-in-out');
            d_anim('circle3',3000,4000,scaleKeyFrames,'reverse','ease-in-out');
            d_anim('text1',3500,4000,opacityKeyFrames,'normal','ease-in-out');
            d_anim('hline1',2000,2500,scaleXKeyFrames,'reverse','ease-out');
            d_anim('hline2',2100,2600,scaleXKeyFrames,'reverse','ease-out');
            d_anim('hline3',2200,2700,scaleXKeyFrames,'reverse','ease-out');
            d_anim('hline4',2300,2800,scaleXKeyFrames,'reverse','ease-out');
            d_anim('vline1',2200,2700,scaleYKeyFrames,'reverse','ease-out');
            d_anim('vline2',2300,2800,scaleYKeyFrames,'reverse','ease-out');
            d_anim('vline3',2400,2900,scaleYKeyFrames,'reverse','ease-out');
            d_anim('vline4',2500,3000,scaleYKeyFrames,'reverse','ease-out');
            d_anim('rect1',5000,6000,scaleKeyFrames,'normal','ease-in-out');
            d_anim('rect2',5200,6200,scaleKeyFrames,'normal','ease-in-out');
            d_anim('rect1',6000,7000,scaleKeyFrames,'reverse','ease-in-out');
            d_anim('rect2',6200,7200,scaleKeyFrames,'reverse','ease-in-out');
            d_anim('text1',5500,6000,opacityKeyFrames,'reverse','ease-in-out');
            d_anim('text2',6000,6500,opacityKeyFrames,'normal','ease-in-out');
            d_anim('text3',6000,6500,opacityKeyFrames,'normal','ease-in-out');
            d_anim('text4',6000,6500,opacityKeyFrames,'normal','ease-in-out');
            d_anim('text5',6000,6500,opacityKeyFrames,'normal','ease-in-out');
            d_anim('text6',6000,6500,opacityKeyFrames,'normal','ease-in-out');
            d_anim('textline1',6000,6500,opacityKeyFrames,'normal','ease-in-out');
            d_anim('textScroll1',9000,10000,opacityKeyFrames,'normal','ease-in-out');

        },
        []
    );

    return(
        <div className='Intro'>
            <svg width='100vw' height='100vh' viewBox='0 0 2000 2000' >
                <circle className='circle1'
                        cx='1000px' cy='1000px' r='250px'
                        fill='hsl(20,100%,20%)'
                        stroke='transparent'
                        strokeWidth='10px'/>

                <circle className='circle2'
                        cx='1000px' cy='1000px' r='250px'
                        fill='hsl(140,100%,20%)'
                        stroke='transparent'
                        strokeWidth='10px'/>

                <circle className='circle3'
                        cx='1000px' cy='1000px' r='250px'
                        fill='hsl(280,100%,20%)'
                        stroke='transparent'
                        strokeWidth='10px'/>

                <g className='groupName'>
                    <path   className="hline1"
                            d='M 850 850 h 300' 
                            stroke='white'
                            strokeWidth='5px'/>

                    <path   className="hline2"
                            d='M 850 950 h 300' 
                            stroke='white'
                            strokeWidth='5px'/>

                    <path   className="hline3"
                            d='M 850 1050 h 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="hline4"
                            d='M 850 1150 h 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="vline1"
                            d='M 850 850 v 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="vline2"
                            d='M 950 850 v 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="vline3"
                            d='M 1050 850 v 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="vline4"
                            d='M 1150 850 v 300' 
                            stroke='white'
                            strokeWidth='5px' />
                </g>

                <text   className='text1'
                        x='1000px' y='1025px'
                        textAnchor='middle'
                        fontSize='150px'
                        fill='hsl(0,0%,100%)'>
                    WELCOME
                </text>

                <text   className='text2'
                        x='50px' y='520px'
                        textAnchor='right'
                        fontSize='40px'
                        fill='hsl(0,0%,100%)'>
                    Hi, my name is
                </text>

                <text   className='text3'
                        x='50px' y='650px'
                        textAnchor='left'
                        fontSize='100px'
                        fill='hsl(0,0%,100%)'>
                    LEE KIT
                </text>

                <text   className='text4'
                        x='50px' y='800px'
                        textAnchor='left'
                        fontSize='100px'
                        fill='hsl(0,0%,50%)'>
                    Solutions using software coding
                </text>

                <text   className='text5'
                        x='50px' y='920px'
                        textAnchor='left'
                        fontSize='50px'
                        fill='hsl(0,0%,50%)'>
                    I am a software developer base on Penang, Malaysia
                </text>

                <text   className='text6'
                        x='50px' y='1000px'
                        textAnchor='left'
                        fontSize='50px'
                        fill='hsl(0,0%,50%)'>
                    I have been doing software development for 6 years
                </text>

                <path   className="textline1"
                            d='M 400 620 h 900' 
                            stroke='hsl(0,0%,70%)'
                            strokeWidth='5px'/>

                <rect   className='rect1'
                        x='500' y='750' 
                        width='1000px' height='500px'
                        fill='hsl(20,100%,20%)' />
                <rect   className='rect2'
                        x='500' y='750' 
                        width='1000px' height='500px' 
                        fill='hsl(280,100%,20%)'/>


                <text   className='textScroll1'
                        x='50px' y='1500px'
                        textAnchor='left'
                        fontSize='60px'
                        fill='hsl(0,0%,70%)'>
                    Scroll Down for more info
                </text>

            </svg>
        </div>
    );
}

export default Intro;

