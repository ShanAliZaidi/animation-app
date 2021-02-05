import React, { useEffect, useState } from 'react';
import logo from './logo-junto-main.png';
import useWebAnimations,{lightSpeedInLeft} from "@wellyshen/use-web-animations";
import TextTransition, { presets } from "react-text-transition";

const MyElement = () => {
    const TEXTS = [
        "'WE HAVE BEEN WORKING WITH JUNTO DURING OUR GROWTH PERIOD AND THEY HAVE BEEN NOTHING BUT PROFESIONAL.JUNTO HAS EXCEPTIONAL TALENT AND IS ALWAYS TIMELY '",
        "'WE HAVE WORKED WITH JUNTO ON A NUMBR OF CLIENT PROJECTS AS WELL AS INTERNALLY FOR OU RBUSINESS, I COULDNT BE HAPIER WITH OUR EXPERIENCE WITH THE JUNTO TEAM'",
        "'THE JUNTO HAS FANTASTIC WORK WHICH LOOK AESTETICALLY PLEASING AND FUNCTION PERFECTLY. ON TOP OF THAT THEIR CUSTOMER SERVICE IS SECOND TO NONE'",
        "'THE TEAM AT JUNTO IS PROFESSIONAL AND RESPONSIVE AND VERY KNOELDGEABLE HAVE ENJOYED WORKING WITH THEM AND RECOMMEND THEM'"
      ];

      const [index,setIndex] = useState(0);
      useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          10000
        );
      }, []);

    const { keyframes, timing } = lightSpeedInLeft;
    const { ref } = useWebAnimations({
                keyframes,
                timing: {
                    ...timing,
                    delay: 2000, // Delay 1s
                    duration: timing.duration * 2, // Speed up the animation
                    iterations: Infinity,
                },
});
    return(
        <div className='main-div'>
            <header className='header'>
                <img className='logo' src={logo} alt=''/>
                <div className='buttons-div'>
                    <button>HOME</button>
                    <button>ABOUT US</button>
                    <button>BLOGS</button>
                    <button>SERVICES</button>
                </div>
            </header>
            <div className='main-text-div'>
                <h2>Hi! Welcome to Junto</h2>
                <h1>WE'RE HERE TO HELP YOU</h1>
                <h1 ref={ref}>OUTRANK THE COMEPTITION</h1>
                <div>
                    <button className='button1'>LET'S MAKE IT HAPPEN</button>
                    <button className='button2'>HOW WE WORK</button>
                </div>
            </div>
            <div className='reviews'>
                <div className='review-box'>
                    <p>REVIEWS</p>
                    <p>
                    <TextTransition
                            text={ TEXTS[index % TEXTS.length] }
                            springConfig={ presets.wobbly }
                        />
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default MyElement;