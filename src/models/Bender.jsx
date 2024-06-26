import { useRef, useEffect } from 'react'

import robotScene from '../assets/3d/benderMESHOPT.glb';
import { useAnimations, useGLTF  } from '@react-three/drei';


const Bender = ({RobotCurrentAnimation, ...props}) => {
    const robotRef = useRef();
    const { scene,  animations  } = useGLTF(robotScene);
    const {actions} = useAnimations(animations,robotRef);

    useEffect(() =>{

      
      if (actions[RobotCurrentAnimation]) {
        actions['mixamo.com'].play();
      }
      else{
        actions['mixamo.com'].stop();
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

export default Bender