import { useState, Suspense, useEffect, useRef} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { socials } from '../constants';
import { Link } from 'react-router-dom'

import { Canvas } from '@react-three/fiber';
import { Robot_music, Robot_expressive, Bender } from '../models';
import {CanvasLoader} from '../components';
import bitAudio from '../assets/bit.mp3';
import { pixel_soundoff, pixel_soundon } from '../assets/icons';


const Contact = () => {
  const formRef = useRef(null);
  const audioRef = useRef(new Audio(bitAudio));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const [RobotCurrentAnimation, RobotSetCurrentAnimation] = useState("Static pose");
  const [Robot1CurrentAnimation, Robot1SetCurrentAnimation] = useState("Static pose");
  const [BenderCurrentAnimation, BenderSetCurrentAnimation] = useState("Static pose");


  useEffect(() =>{

    if(isPlayingMusic){
      audioRef.current.play();
      RobotSetCurrentAnimation("Keyboard");
      BenderSetCurrentAnimation("mixamo.com");
      Robot1SetCurrentAnimation("Dance");
      
    }

    return () => {
      audioRef.current.pause();
      RobotSetCurrentAnimation("Static pose");
      BenderSetCurrentAnimation("Static pose");
      Robot1SetCurrentAnimation("Static pose");
    }

  }, [isPlayingMusic])

  



  return (
    <Suspense fallback={<CanvasLoader />}>
    <section className=' bg-blue-100'>
      <section className = "relative flex lg:flex-row flex-col max-container ">
        <div className = "flex-1 min-w-[50%] flex flex-col">
          <h1 className= "head-text">Get In <span className="blue-gradient_text font-semibold drop-shadow">Touch.</span></h1>
          <div className = "mt-5 flex flex-col gap-3 text-slate-700 text-xl font-semibold">
            <p>
              I'm just one click away!
            </p>
        </div>
            
          <div className='mt-6 flex w-full'>
            <VerticalTimeline>
              {socials.map((social) => (
                <VerticalTimelineElement
        
                  key={social.social_name}
    
                  icon={<div className='flex justify-center items-center w-full h-full p-1'>
                    <img
                      src={social.iconUrl}
                      alt={social.social_name}
                      className='w-[80%] h-[80%] object-contain '
                    />

                  </div>}
                  iconStyle={{ background: social.theme}}
                  contentStyle={{
                    borderBottom: '5px',
                    borderStyle: 'solid',
                    borderBottomColor: 'social.theme',
                    boxShadow: 'none'
                  }}
                >
                  <div className='my-5 ml-5 text-sm flex justify-center items-center '>
                    <Link
                      to={social.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='font-semibold text-blue-500 items-center justify-center flex'
                      >
                      {social.name}
                    </Link>
                    
                  </div>

              
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>

          </div>



        </div>
        <hr className='border-gray-950' />


        <div className= "lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[350px] ">

          <Canvas
            camera={{
              position: [0,0,5],
              fov:  75,
              near: 0.1,
              far:  1000
              
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]}/>
            <ambientLight intensity={0.5}/>

            <Suspense fallback={<CanvasLoader/>}>

              
              <Robot_expressive
                RobotCurrentAnimation={Robot1CurrentAnimation}
                position = {[-1,-0.5,0]}
                scale = {[0.15,0.15,0.15]}
                rotation = {[0,-0.5,0]}
              />

              <Bender
                RobotCurrentAnimation={BenderCurrentAnimation}
                position = {[0,-2,0]}
                scale = {[1,1,1]}
                rotation = {[0,-0.7,0]}
              />
              <Robot_music
                RobotCurrentAnimation={RobotCurrentAnimation}
                position = {[2,-2,0]}
                scale = {[0.001,0.001,0.001]}
                rotation = {[0,-1,0]}
              />

              
              
          

            </Suspense>

          </Canvas>
          <div className='absolute bottom-2 left-2 '>
          <img
            src={!isPlayingMusic ? pixel_soundoff : pixel_soundon}
            alt='sound'
            className='w-20 h-20 cursor-pointer object-contain'
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
        
        </div> 
      </section>
    </section>
    </Suspense>
  )
}

export default Contact