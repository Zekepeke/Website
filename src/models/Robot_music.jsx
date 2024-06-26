import { useRef, useEffect } from 'react'

import robotScene from '../assets/3d/keyboardist_robotDRACO.glb';
import { useAnimations, useGLTF  } from '@react-three/drei';


const Robot_music = ({RobotCurrentAnimation, ...props}) => {
    const robotRef = useRef();
    const { scene,  animations  } = useGLTF(robotScene);
    const {actions} = useAnimations(animations,robotRef);

    useEffect(() =>{

      
      if (actions[RobotCurrentAnimation]) {
        actions['Keyboard'].play();
      }
      else{
        actions['Keyboard'].stop();
      }
     
      


    }, [actions, RobotCurrentAnimation] )

  return (
    <mesh 
    {...props}
    ref ={robotRef}
    >
        <primitive object = {scene} />
    </mesh>
  )
}

export default Robot_music