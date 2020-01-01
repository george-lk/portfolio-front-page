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
            document.querySelector('.textWelcome').style.opacity = '0.0';
            document.querySelector('.text2').style.opacity = '0.0';
            document.querySelector('.text4').style.opacity = '0.0';
            document.querySelector('.text5').style.opacity = '0.0';
            document.querySelector('.textIntro').style.opacity = '0.0';
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
            setMidpointTransform('textWelcome');

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
            d_anim('textWelcome',3500,4000,opacityKeyFrames,'normal','ease-in-out');
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
            d_anim('textWelcome',5500,6000,opacityKeyFrames,'reverse','ease-in-out');

            d_anim('textIntro',7000,7500,[
                {transform : 'translateY(-30px)', opacity : '0.0'},                
                {transform : 'translateY(0)', opacity : '1.0'},],
                'normal','ease-in-out');

            d_anim('text2',7500,8000,[
                {transform : 'translateY(-30px)', opacity : '0.0'},                
                {transform : 'translateY(0)', opacity : '1.0'},],
                'normal','ease-in-out');

            d_anim('textline1',7500,8000,[
                {transform : 'translateX(-50px)', opacity : '0.0'},                
                {transform : 'translateX(0)', opacity : '1.0'},],'normal','ease-in-out');

            d_anim('text4',7500,8000,[
                {transform : 'translateX(50px)', opacity : '0.0'},                
                {transform : 'translateX(0)', opacity : '1.0'},],'normal','ease-in-out');

            d_anim('text5',7500,8000,[
                {transform : 'translateX(50px)', opacity : '0.0'},                
                {transform : 'translateX(0)', opacity : '1.0'},],'normal','ease-in-out');
            
            d_anim('textScroll1',9000,9500,opacityKeyFrames,'normal','ease-in-out');



        },
        []
    );

    return(
        <div className='Intro'>
            <svg width='100vw' height='100vh' viewBox='0 0 2500 2000' >
                <circle className='circle1'
                        cx='1250px' cy='1000px' r='250px'
                        fill='hsl(20,100%,20%)'
                        stroke='transparent'
                        strokeWidth='10px'/>

                <circle className='circle2'
                        cx='1250px' cy='1000px' r='250px'
                        fill='hsl(140,100%,20%)'
                        stroke='transparent'
                        strokeWidth='10px'/>

                <circle className='circle3'
                        cx='1250px' cy='1000px' r='250px'
                        fill='hsl(280,100%,20%)'
                        stroke='transparent'
                        strokeWidth='10px'/>

                <g className='groupName'>
                    <path   className="hline1"
                            d='M 1100 850 h 300' 
                            stroke='white'
                            strokeWidth='5px'/>

                    <path   className="hline2"
                            d='M 1100 950 h 300' 
                            stroke='white'
                            strokeWidth='5px'/>

                    <path   className="hline3"
                            d='M 1100 1050 h 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="hline4"
                            d='M 1100 1150 h 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="vline1"
                            d='M 1100 850 v 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="vline2"
                            d='M 1200 850 v 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="vline3"
                            d='M 1300 850 v 300' 
                            stroke='white'
                            strokeWidth='5px' />

                    <path   className="vline4"
                            d='M 1400 850 v 300' 
                            stroke='white'
                            strokeWidth='5px' />
                </g>

                <text   className='textWelcome'
                        x='1250px' y='1025px'
                        textAnchor='middle'
                        fontSize='150px'
                        fill='hsl(0,0%,100%)'>
                    WELCOME
                </text>

                <g className='textIntro'>
                    <text   
                            x='200px' y='400px'
                            textAnchor='right'
                            fontSize='180px'
                            fill='hsl(170,100%,30%)'>
                        1    INTRO
                    </text>
                </g>

                <g className='text2'>
                    <text 
                            x='400px' y='700px'
                            textAnchor='right'
                            fontSize='120px'
                            fill='hsl(0,0%,100%)'>
                                <tspan>Hi, my name is </tspan>
                                <tspan>LEE KIT</tspan>
                    </text>
                </g>

                <path   className="textline1"
                            d='M 320 500 v 800' 
                            stroke='hsl(170,100%,30%)'
                            strokeWidth='10px'/>

                <g className='text4'>
                    <text   x='400px' y='900px'
                            textAnchor='left'
                            fontSize='100px'
                            fill='hsl(0,0%,50%)'>
                        An inspire software developer
                    </text>
                </g>

                <g className='text5'>
                    <text   x='400px' y='1000px'
                            textAnchor='left'
                            fontSize='50px'
                            fill='hsl(0,0%,50%)'>
                                <tspan x='400' dy='10'>
                                    I am a software developer base on Penang, Malaysia
                                </tspan>
                                <tspan x='400' dy='70'>
                                    I have been working as a software developer for over 6 years
                                </tspan>
                    </text>
                </g>

                

                <rect   className='rect1'
                        x='750' y='750' 
                        width='1000px' height='500px'
                        fill='hsl(20,100%,20%)' />
                <rect   className='rect2'
                        x='750' y='750' 
                        width='1000px' height='500px' 
                        fill='hsl(280,100%,20%)'/>


                <text   className='textScroll1'
                        x='200px' y='1450px'
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

