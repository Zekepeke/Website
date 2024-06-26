import { useRef, useEffect } from 'react'

import fishScene from '../assets/3d/Herring_AnimationsMESHOPT.glb';
import { useAnimations, useGLTF } from '@react-three/drei';




const Herring= ({...props}) => {
    const fishRef = useRef();
    const { scene,  animations  } = useGLTF(fishScene);
    const {actions} = useAnimations(animations,fishRef);

    useEffect(() => { 
    
      actions["Splash"].play();

  });
  return (
    <mesh 
    {...props}
    ref ={fishRef}
    >
        <primitive object = {scene} />
    </mesh>
  )
}


export default Herring