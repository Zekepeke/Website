import { useRef, useEffect } from 'react'

import monkeyScene from '../assets/3d/Colobus_AnimationsMESHOPT.glb';
import { useAnimations, useGLTF } from '@react-three/drei';




const Colobus= ({...props}) => {
    const monkeyRef = useRef();
    const { scene,  animations  } = useGLTF(monkeyScene);
    const {actions} = useAnimations(animations,monkeyRef);
    useEffect(() => {
      actions['Death'].play();
       
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


export default Colobus