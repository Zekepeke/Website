import { useRef, useEffect } from 'react'

import robotScene from '../assets/3d/robot_expressiveDRACO.glb';
import { useAnimations, useGLTF  } from '@react-three/drei';



const Robot_expressive = ({RobotCurrentAnimation, ...props}) => {
    const robotRef = useRef();
    const { scene,  animations  } = useGLTF(robotScene);
    const {actions} = useAnimations(animations,robotRef);

    useEffect(() =>{

      
      if (actions[RobotCurrentAnimation]) {
        actions['Dance'].play();
      }
      else{
        actions['Dance'].stop();
        actions['Idle'].play();
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

export default Robot_expressive