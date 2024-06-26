import { useEffect, useRef } from 'react'

import monkeyScene from '../assets/3d/monkey_dancingMESHOPT.glb';
import { useAnimations, useGLTF } from '@react-three/drei';




const Monkey_dance= ({...props}) => {
    const monkeyRef = useRef();
    const { scene,  animations  } = useGLTF(monkeyScene);
    const {actions} = useAnimations(animations,monkeyRef);

    useEffect(() =>{
      actions["mixamo.com"].play();
    })

  
  return (
    <mesh 
    {...props}
    ref ={monkeyRef}
    >
        <primitive object = {scene} />
    </mesh>
  )
}


export default Monkey_dance