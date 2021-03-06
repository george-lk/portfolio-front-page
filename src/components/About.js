import './About.css';
import React, { useEffect } from 'react';
import 'web-animations-js/web-animations-next.min';


function About(){

    useEffect(
        () => {
            
            document.querySelector('.about .textIntro1').style.opacity = '0.0';
            document.querySelector('.about .about_text1').style.opacity = '0.0';
            document.querySelector('.about .textline1').style.opacity = '0.0';

            var observerIntroText = new IntersectionObserver(
                (entries) => {
                    
                    entries.forEach(
                        (entry) => {
                            console.log(entry.intersectionRatio)
                            if(entry.isIntersecting && entry.intersectionRatio > 0.2){
                                document.querySelector('.about .textIntro1').animate(
                                    [
                                        { transform : 'translateY(100px)', opacity : '0.0'},
                                        { transform : 'translateY(0px)', opacity : '1.0'},
                                    ],
                                    {
                                        duration: 500,
                                        fill: 'forwards',
                                        easing: 'ease-in-out' ,
                                    }
                                );

                                document.querySelector('.about .about_text1').animate(
                                    [
                                        { transform : 'translateY(100px)', opacity : '0.0'},
                                        { transform : 'translateY(0px)', opacity : '1.0'},
                                    ],
                                    {
                                        duration: 500,
                                        fill: 'forwards',
                                        easing: 'ease-in-out' ,
                                    }
                                );

                    

                                document.querySelector('.about .textline1').animate(
                                    [
                                        { transform : 'translateY(100px)', opacity : '0.0'},
                                        { transform : 'translateY(0px)', opacity : '1.0'},
                                    ],
                                    {
                                        duration: 500,
                                        fill: 'forwards',
                                        easing: 'ease-in-out' ,
                                    }
                                );
                                observerIntroText.unobserve(document.querySelector('.about .svgClass'));
                            }
                            
                        }
                        
                    );
                }, 
                {
                    threshold: [0.25]
                }
                
            );
            observerIntroText.observe(document.querySelector('.about .svgClass'));
            
        },
        []
    );

    return(
        <div className='about'>
            <svg className='svgClass' width='100vw' height='100vh' viewBox='0 0 2500 2000' >                
                
                <g className='textIntro1'>
                    <rect   x='400px' y='50px' 
                            width='50px' height='400px'
                            fill='#E89529' />

                    <rect   x='480px' y='280px' 
                            width='100px' height='10px'
                            fill='#E89529' />
                    
                    <rect   x='480px' y='310px' 
                            width='140px' height='10px'
                            fill='#E89529' />

                    <rect   x='480px' y='340px' 
                            width='180px' height='10px'
                            fill='#E89529' />

                
                    <text  
                            x='480px' y='200px'
                            textAnchor='right'
                            fontSize='150px'
                            fill='hsla(240,2%,76%,0.3)'>
                        02
                    </text>

                    <text  
                            x='700px' y='380px'
                            textAnchor='right'
                            fontSize='180px'
                            fill='hsla(240,2%,76%,0.3)'>
                        ABOUT
                    </text>
                </g>

                <path   className="textline1"
                            d='M 320 400 v 1100' 
                            stroke='hsl(170,100%,30%)'
                            strokeWidth='2px'/>

                <g className='about_text1'>
                    <text   x='400px' y='550px'
                            textAnchor='left'
                            fontSize='50px'
                            fill='hsl(0,0%,100%)'>
                                <tspan x='400' dy='10'>
                                    I am a software developer based in Penang, Malaysia with 6 years 
                                </tspan>
                                <tspan x='400' dy='70'>
                                    experience in software development. I am a passionate software 
                                </tspan>
                                <tspan x='400' dy='70'>
                                    developer and love learning new things. I spent time to learn new
                                </tspan>
                                <tspan x='400' dy='70'>
                                    technologies that impact the software development process.
                                </tspan>
                    </text>

                    <text   x='400px' y='900px'
                            textAnchor='left'
                            fontSize='50px'
                            fill='hsl(0,0%,100%)'>
                                <tspan x='400' dy='10'>
                                    Throughout my professional working experience, I have been 
                                </tspan>
                                <tspan x='400' dy='70'>
                                    involve in embedded system programming and middleware 
                                </tspan>
                                <tspan x='400' dy='70'>
                                    application development. Programming languages use are C/C++
                                </tspan>
                                <tspan x='400' dy='70'>
                                    and python.
                                </tspan>
                    </text>

                    <text   x='400px' y='1250px'
                            textAnchor='left'
                            fontSize='50px'
                            fill='hsl(0,0%,100%)'>
                                <tspan x='400' dy='10'>
                                    In my free time, I have learn about software web development. I 
                                </tspan>
                                <tspan x='400' dy='70'>
                                    have learn about frameworks such as React.js, Node.js, and 
                                </tspan>
                                <tspan x='400' dy='70'>
                                    express.js. The languages use in these frameworks is JavaScript.
                                </tspan>
                    </text>
                </g>

                
            </svg>

        </div>
    );
}

export default About;
