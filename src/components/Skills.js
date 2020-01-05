import React, { useEffect } from 'react';
import 'web-animations-js/web-animations-next.min';

function Skills(){

    useEffect(
        () => {
            
            document.querySelector('.skills .textIntro1').style.opacity = '0.0';
            document.querySelector('.skills .about_table1').style.opacity = '0.0';
            document.querySelector('.skills .about_table2').style.opacity = '0.0';
            document.querySelector('.skills .textline1').style.opacity = '0.0';

            var observerIntroText = new IntersectionObserver(
                (entries) => {
                    
                    entries.forEach(
                        (entry) => {
                            console.log(entry.intersectionRatio)
                            if(entry.isIntersecting && entry.intersectionRatio > 0.2){
                                document.querySelector('.skills .textIntro1').animate(
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


                                document.querySelector('.skills .about_table1').animate(
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

                                document.querySelector('.skills .about_table2').animate(
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

                                document.querySelector('.skills .textline1').animate(
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
                                observerIntroText.unobserve(document.querySelector('.skills .svgClass'));
                            }
                            
                        }
                        
                    );
                }, 
                {
                    threshold: [0.25]
                }
                
            );
            observerIntroText.observe(document.querySelector('.skills .svgClass'));
            
        },
        []
    );

    return(
        <div className='skills'>
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
                        03
                    </text>

                    <text  
                            x='700px' y='380px'
                            textAnchor='right'
                            fontSize='180px'
                            fill='hsla(240,2%,76%,0.3)'>
                        SKILLS
                    </text>
                </g>

                <path   className="textline1"
                            d='M 320 400 v 1300' 
                            stroke='hsl(170,100%,30%)'
                            strokeWidth='2px'/>


                <g className='about_table1'>
                    <text   
                            x='400px' y='600px'
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
                    <text   x='400px' y='1200px'
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

                
            </svg>

        </div>
    );
}

export default Skills;
