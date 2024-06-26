import { useRef, useEffect } from 'react'

import geckoScene from '../assets/3d/Gecko_AnimationsMESHOPT.glb';
import { useAnimations, useGLTF } from '@react-three/drei';




const Gecko= ({...props}) => {
    const geckoRef = useRef();
    const { scene,  animations  } = useGLTF(geckoScene);
    const {actions} = useAnimations(animations,geckoRef);

    useEffect(() => { 
    
      actions["Jump"].play();

  });
  return (
    <mesh 
    {...props}
    ref ={geckoRef}
    >
        <primitive object = {scene} />
    </mesh>
  )
}


export default Gecko