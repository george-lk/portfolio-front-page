import './About.css';
import React, { useEffect } from 'react';
import 'web-animations-js/web-animations-next.min';


function About(){

    useEffect(
        () => {
            document.querySelector('.about .textIntro').style.opacity = '0.0';
            document.querySelector('.about .about_text1').style.opacity = '0.0';
            document.querySelector('.about .about_table1').style.opacity = '0.0';
            document.querySelector('.about .about_table2').style.opacity = '0.0';
            document.querySelector('.about .textline1').style.opacity = '0.0';

            var observerIntroText = new IntersectionObserver(
                (entries) => {
                    
                    entries.forEach(
                        (entry) => {
                            console.log(entry.intersectionRatio)
                            if(entry.isIntersecting && entry.intersectionRatio > 0.2){
                                document.querySelector('.about .textIntro').animate(
                                    [
                                        { transform : 'translateY(100px)', opacity : '0.0'},
                                        { transform : 'translateY(0px)', opacity : '1.0'},
                                    ],
                                    {
                                        duration: 1000,
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
                                        duration: 1000,
                                        fill: 'forwards',
                                        easing: 'ease-in-out' ,
                                    }
                                );

                                document.querySelector('.about .about_table1').animate(
                                    [
                                        { transform : 'translateY(100px)', opacity : '0.0'},
                                        { transform : 'translateY(0px)', opacity : '1.0'},
                                    ],
                                    {
                                        duration: 1000,
                                        fill: 'forwards',
                                        easing: 'ease-in-out' ,
                                    }
                                );

                                document.querySelector('.about .about_table2').animate(
                                    [
                                        { transform : 'translateY(100px)', opacity : '0.0'},
                                        { transform : 'translateY(0px)', opacity : '1.0'},
                                    ],
                                    {
                                        duration: 1000,
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
                                        duration: 1000,
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
                    threshold: [0.2]
                }
                
            );
            observerIntroText.observe(document.querySelector('.about .svgClass'));
        },
        []
    );

    return(
        <div className='about'>
            <svg className='svgClass' width='100vw' height='100vh' viewBox='0 0 2500 2000' >                
                <g className='textIntro'>
                    <text  
                            x='200px' y='100px'
                            textAnchor='right'
                            fontSize='140px'
                            fill='hsl(170,100%,30%)'>
                        2    ABOUT
                    </text>
                </g>

                <g className='about_text1'>
                    <text   x='400px' y='300px'
                            textAnchor='left'
                            fontSize='50px'
                            fill='hsl(0,0%,50%)'>
                                <tspan x='400' dy='10'>
                                    I am an experience software developer with over 6 years of working experience.
                                </tspan>
                                <tspan x='400' dy='70'>
                                    I enjoy learning new software technologies that I have not previous learn.
                                </tspan>
                                <tspan x='400' dy='70'>
                                    The following are some of my software skill sets
                                </tspan>
                    </text>
                </g>

                <g className='about_table1'>
                    <text   
                            x='400px' y='700px'
                            textAnchor='left'
                            fontSize='50px'
                            fill='hsl(170,100%,30%)'>
                                <tspan fill='hsl(190,100%,50%)' fontSize='70px' x='400' dy='10'>Programming Language</tspan>
                                <tspan x='500' dy='100'>Javascript</tspan>
                                <tspan x='500' dy='70'>Python</tspan>
                                <tspan x='500' dy='70'>C/C++</tspan>
                                <tspan x='500' dy='70'>C#</tspan>
                                <tspan x='500' dy='70'>Java</tspan>
                                <tspan x='500' dy='70'>SQL</tspan>
                    </text>
                </g>

                <g className='about_table2'>
                    <text   x='400px' y='1400px'
                            textAnchor='left'
                            fontSize='50px'
                            fill='hsl(170,100%,30%)'>
                                <tspan fill='hsl(190,100%,50%)' fontSize='70px' x='400' dy='10'>Frameworks</tspan>
                                <tspan x='500' dy='100'>Nodejs</tspan>
                                <tspan x='500' dy='70'>React</tspan>
                                <tspan x='500' dy='70'>Expressjs</tspan>
                                <tspan x='500' dy='70'>MySql</tspan>
                                <tspan x='500' dy='70'>Unity Engine</tspan>
                    </text>
                </g>

                <path   className="textline1"
                            d='M 320 200 v 1600' 
                            stroke='hsl(170,100%,30%)'
                            strokeWidth='10px'/>
            </svg>

        </div>
    );
}

export default About;
