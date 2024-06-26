import { useRef, useEffect } from 'react'
import spaScene from '../assets/3d/Sparrow_AnimationsMESHOPT.glb';
import { useAnimations, useGLTF } from '@react-three/drei';




const Pubu= ({ ...props}) => {
    const spa = useRef();
    const { scene,  animations  } = useGLTF(spaScene);
    const {actions} = useAnimations(animations,spa);

    useEffect(() =>{
        actions['Sit'].play();
       
    
  

    })
  
  return (
    <mesh 
    {...props}
    ref ={spa}
    >
        <primitive object = {scene} />
    </mesh>
  )
}


export default Pubu