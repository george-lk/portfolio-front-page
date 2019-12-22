import React, { useEffect } from 'react';
import 'web-animations-js/web-animations-next.min';

var seq1_loading_cricle1_anim_state1;
var seq1_loading_cricle2_anim_state1;
var seq1_loading_text_anim_state1;

var welcome_anim_state1;
var sequenceText_anim_state1;
var welcomeSideLine1_anim_state1;
var welcomeSideLine2_anim_state1;
var welcomeTopLine1_anim_state1;
var welcomeTopLine2_anim_state1;

var welcome_anim_state2;
var welcomeSideLine1_anim_state2;
var welcomeSideLine2_anim_state2;
var nameText_anim_state1;


var seq3_top_left_line_anim_state1;
var seq3_top_right_line_anim_state1;
var seq3_btm_left_line_anim_state1;
var seq3_btm_right_line_anim_state1;


function Intro({className}){

    useEffect(
        () => {
            document.querySelector('.WelcomeText').style.opacity = '0.0';
            document.querySelector('.SequenceText').style.opacity = '0.0';
            document.querySelector('.sideLine1').style.opacity = '0.0';
            document.querySelector('.sideLine2').style.opacity = '0.0';
            document.querySelector('.TopLine1').style.opacity = '0.0';
            document.querySelector('.TopLine2').style.opacity = '0.0';

            document.querySelector('.NameText').style.opacity = '0.0';

            document.querySelector('.seq3_top_left_line').style.opacity = '0.0';
            document.querySelector('.seq3_top_right_line').style.opacity = '0.0';
            document.querySelector('.seq3_btm_left_line').style.opacity = '0.0';
            document.querySelector('.seq3_btm_right_line').style.opacity = '0.0';

            /**
             *  Sequence 1 Definition
             */
            document.querySelector('.seq1_loading_circle1').style.opacity = '0.0';
            document.querySelector('.seq1_loading_circle1').style.transformOrigin = '400px 400px';
            document.querySelector('.seq1_loading_circle1').style.transform = 'rotateX(60deg)';

            document.querySelector('.seq1_loading_circle2').style.opacity = '0.0';
            document.querySelector('.seq1_loading_circle2').style.transformOrigin = '400px 400px';
            document.querySelector('.seq1_loading_circle2').style.transform = 'rotateX(60deg)';

            document.querySelector('.seq1_loading_text1').style.opacity = '0.0';

            seq1_loading_cricle1_anim_state1 = document.querySelector('.seq1_loading_circle1').animate(
                [
                    { transform : 'rotateX(75deg) rotateZ(+360deg) scale(1.0)', opacity : '0.0'},
                    { transform : 'rotateX(75deg) rotateZ(+720deg) scale(1.1)', opacity : '1.0'},
                    { transform : 'rotateX(75deg) rotateZ(+1080deg) scale(1.0)', opacity : '1.0'},
                    { transform : 'rotateX(75deg) rotateZ(+1440deg) scale(1.1)', opacity : '0.0'},
                ],
                {
                    duration : 7000,
                    delay : 1000,
                    fill : 'forwards'
                }
            );
            
            seq1_loading_cricle2_anim_state1 = document.querySelector('.seq1_loading_circle2').animate(
                [
                    { transform : 'rotateX(75deg) rotateZ(+1800deg) scale(1.0)', opacity : '0.0'},
                    { transform : 'rotateX(75deg) rotateZ(+1440deg) scale(1.1)', opacity : '1.0'},
                    { transform : 'rotateX(75deg) rotateZ(+1080deg) scale(1.0)', opacity : '0.0'},
                ],
                {
                    duration : 7000,
                    delay : 1000,
                    fill : 'forwards',
                }

            );

            seq1_loading_text_anim_state1 = document.querySelector('.seq1_loading_text1').animate(
                [
                    { opacity : '0.0' , offset: 0.0},
                    { opacity : '0.7' , offset: 0.02},
                    { opacity : '0.2' , offset: 0.04},
                    { opacity : '0.7' , offset: 0.06},
                    { opacity : '0.2' , offset: 0.08},
                    { opacity : '1.0' , offset: 0.10},
                    { opacity : '1.0' , offset: 0.4},
                    { opacity : '0.2' , offset: 0.42},
                    { opacity : '0.7' , offset: 0.44},
                    { opacity : '0.2' , offset: 0.46},
                    { opacity : '1.0' , offset: 0.48},
                    { opacity : '1.0' , offset: 0.98},
                    { opacity : '0.0' , offset: 1.0},
                 
                ],
                {
                    duration : 7000,
                    delay : 1000,
                    fill : 'forwards',
                }
            );

            seq1_loading_cricle1_anim_state1.cancel();
            seq1_loading_cricle2_anim_state1.cancel();
            seq1_loading_text_anim_state1.cancel();


            /**
             *  Sequence 2 Definition
             */
            welcome_anim_state1 = document.querySelector(".WelcomeText").animate(
                [ 
                    { transform : 'translateY(-20px)', webkitTransform: 'translateY(-20px)' ,opacity : '0.0', offset: 0.0},
                    { transform : 'translateY(-20px)', webkitTransform: 'translateY(-20px)' , opacity : '0.0', offset: 0.9},
                    { transform : 'translateY(0px)',  webkitTransform: 'translateY(0px)' ,opacity : '1' , offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards'
                }
            );
            


            sequenceText_anim_state1 = document.querySelector(".SequenceText").animate(
                [ 
                    { transform : 'translateY(-20px)', opacity : '0.0', offset: 0.0},
                    { transform : 'translateY(-20px)', opacity : '0.0', offset: 0.8},
                    { transform : 'translateX(0px)', opacity : '1', offset: 0.9},
                    { transform : 'translateX(0px)', opacity : '1', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards'
                }
            );

            welcomeSideLine1_anim_state1 = document.querySelector('.sideLine1').animate(
                [
                    { strokeDashoffset : '200', opacity : '0.0', offset: 0.0},
                    { strokeDashoffset : '200', opacity : '0.0', offset: 0.8},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 0.9},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards'
                }
            );

            welcomeSideLine2_anim_state1 = document.querySelector('.sideLine2').animate(
                [
                    { strokeDashoffset : '200', opacity : '0.0', offset: 0.0},
                    { strokeDashoffset : '200', opacity : '0.0', offset: 0.8},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 0.9},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards'
                }
            );

            welcomeTopLine1_anim_state1 = document.querySelector('.TopLine1').animate(
                [
                    { strokeDashoffset : '200', opacity : '0.0', offset: 0.0},
                    { strokeDashoffset : '200', opacity : '0.0', offset: 0.6},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 0.8},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards'
                }
            );

            welcomeTopLine2_anim_state1 = document.querySelector('.TopLine2').animate(
                [
                    { strokeDashoffset : '200', opacity : '0.0', offset: 0.0},
                    { strokeDashoffset : '200', opacity : '0.0', offset: 0.6},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 0.8},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards'
                }
            );
            welcome_anim_state1.cancel();
            sequenceText_anim_state1.cancel();
            welcomeSideLine1_anim_state1.cancel();
            welcomeSideLine2_anim_state1.cancel();
            welcomeTopLine1_anim_state1.cancel();
            welcomeTopLine2_anim_state1.cancel();


            /**
             *  Sequence 3 Definition
             */
            welcome_anim_state2 = document.querySelector(".WelcomeText").animate(
                [ 
                    { transform : 'translateX(0px)', opacity : '1' , offset: 0.0},
                    { transform : 'translateX(0px)', opacity : '1' , offset: 0.9},
                    { transform : 'translateY(-30px)', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards'
                }
            );

            nameText_anim_state1 = document.querySelector(".NameText").animate(
                [ 
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.0},
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.9},
                    { transform : 'translateY(+30px)', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards'
                }
            );

            welcomeSideLine1_anim_state2 = document.querySelector('.sideLine1').animate(
                [
                    { strokeDashoffset : '0', opacity : '1.0', offset: 0.0},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 0.9},
                    { strokeDashoffset : '200', opacity : '0.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards',
                }
            );

            welcomeSideLine2_anim_state2 = document.querySelector('.sideLine2').animate(
                [
                    { strokeDashoffset : '0', opacity : '1.0', offset: 0.0},
                    { strokeDashoffset : '0', opacity : '1.0', offset: 0.9},
                    { strokeDashoffset : '200', opacity : '0.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards',
                }
            );


            seq3_top_left_line_anim_state1 = document.querySelector('.seq3_top_left_line').animate(
                [
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.0},
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.9},
                    { transform : 'translateY(-100px)', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards',
                }
            );

            seq3_top_right_line_anim_state1 = document.querySelector('.seq3_top_right_line').animate(
                [
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.0},
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.9},
                    { transform : 'translateY(-100px)', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards',
                }
            );

            seq3_btm_left_line_anim_state1 = document.querySelector('.seq3_btm_left_line').animate(
                [
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.0},
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.9},
                    { transform : 'translateY(+100px)', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards',
                }
            );

            seq3_btm_right_line_anim_state1 = document.querySelector('.seq3_btm_right_line').animate(
                [
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.0},
                    { transform : 'translateX(0px)', opacity : '0' , offset: 0.9},
                    { transform : 'translateY(+100px)', opacity : '1.0', offset: 1.0},
                ],
                {
                    duration : 2000,
                    fill : 'forwards',
                }
            );

            welcome_anim_state2.cancel();
            nameText_anim_state1.cancel();
            welcomeSideLine1_anim_state2.cancel();
            welcomeSideLine2_anim_state2.cancel();
            seq3_top_left_line_anim_state1.cancel();
            seq3_top_right_line_anim_state1.cancel();
            seq3_btm_left_line_anim_state1.cancel();
            seq3_btm_right_line_anim_state1.cancel();
            
            /**
             *  Animations Sequnces
             */
            seq1_loading_text_anim_state1.onfinish = () => {
                seq1_loading_cricle1_anim_state1.cancel();
                seq1_loading_cricle2_anim_state1.cancel();
                seq1_loading_text_anim_state1.cancel();
                welcome_anim_state1.play();
                sequenceText_anim_state1.play();
                welcomeSideLine1_anim_state1.play();
                welcomeSideLine2_anim_state1.play();
                welcomeTopLine1_anim_state1.play();
                welcomeTopLine2_anim_state1.play();
                seq1_loading_text_anim_state1.onfinish = null;
            }

            welcome_anim_state1.onfinish = () => {
                welcome_anim_state1.finish();
                
                sequenceText_anim_state1.finish();
                welcomeSideLine1_anim_state1.finish();
                welcomeSideLine2_anim_state1.finish();
                welcomeTopLine1_anim_state1.finish();
                welcomeTopLine2_anim_state1.finish();
                welcome_anim_state2.play();
                nameText_anim_state1.play();
                welcomeSideLine1_anim_state2.play();
                welcomeSideLine2_anim_state2.play();
                seq3_top_left_line_anim_state1.play();
                seq3_top_right_line_anim_state1.play();
                seq3_btm_left_line_anim_state1.play();
                seq3_btm_right_line_anim_state1.play();
                welcome_anim_state1.onfinish = null;
            }

            welcome_anim_state2.onfinish = () => {
     
            }

            seq1_loading_cricle1_anim_state1.play();
            seq1_loading_cricle2_anim_state1.play();
            seq1_loading_text_anim_state1.play();

        },
        []
    );

    return(
        <div className={className}>
            <svg width='90vw' height='90vh' viewBox='0 0 800 800'>
                <circle className='seq1_loading_circle1'
                        stroke='hsl(190,100%,30%)'
                        strokeWidth='10px'
                        strokeDasharray='220px'
                        fill='transparent'
                        cx='400px' cy='400px'
                        r='150px'/>

                <circle className='seq1_loading_circle2'
                        stroke='hsl(190,100%,30%)'
                        strokeWidth='10px'
                        strokeDasharray='270px'
                        fill='transparent'
                        cx='400px' cy='400px'
                        r='180px'/>

                <text   className='seq1_loading_text1' 
                        textAnchor='middle'
                        fontSize='45px'
                        x='400px' y='410px' 
                        fill='white'>LOADING</text>


                <text   className='WelcomeText' 
                        textAnchor='middle'
                        fontSize='30px'
                        x='400px' y='400px' 
                        fill='white'>WELCOME</text>

                <path   className='sideLine1'
                        fill='transparent' 
                        stroke='white'
                        strokeDasharray='200'
                        d='M00 393 h 150' />

                <path   className='sideLine2'
                        fill='transparent' 
                        stroke='white'
                        strokeDasharray='200'
                        d='M800 393 h -150' />

                <path   className='TopLine1'
                        fill='transparent' 
                        stroke='white'
                        strokeDasharray='200'
                        d='M300 150 v 20 l 100 20' />

                <path   className='TopLine2'
                        fill='transparent' 
                        stroke='white'
                        strokeDasharray='200'
                        d='M500 150 v 20 l -100 20' />

                <text   className='SequenceText' 
                        textAnchor='middle' 
                        fontSize='10px'
                        x='400px' y='165px'
                        fill='white'>Sequence1</text>

                <text   className='NameText' 
                        textAnchor='middle' 
                        fontSize='50px'
                        x='400px' y='400px'
                        fill='white'>My name is Lee Kit</text>


                <rect   className='seq3_top_left_line'
                        fill='hsl(190,100%,30%)'
                        stroke='hsl(190,100%,30%)'
                        width='50px' height='10px'
                        x='0px' y='350px'/>

                <rect   className='seq3_btm_left_line'
                        fill='hsl(190,100%,30%)'
                        stroke='hsl(190,100%,30%)'
                        width='50px' height='10px'
                        x='0px' y='420px'/>

                <rect   className='seq3_top_right_line'
                        fill='hsl(190,100%,30%)'
                        stroke='hsl(190,100%,30%)'
                        width='50px' height='10px'
                        x='750px' y='350px'/>

                <rect   className='seq3_btm_right_line'
                        fill='hsl(190,100%,30%)'
                        stroke='hsl(190,100%,30%)'
                        width='50px' height='10px'
                        x='750px' y='420px'/>



            </svg>
        </div>
    );
}

export default Intro;

