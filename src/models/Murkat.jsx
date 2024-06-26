import { useRef } from 'react'
import murkatScene from '../assets/3d/Muskrat_Animations MESHOPT.glb';
import { useGLTF } from '@react-three/drei';




const Murkat= ({...props}) => {
    const murkat = useRef();
    const { scene  } = useGLTF(murkatScene);
   
   

  
  return (
    <mesh 
    {...props}
    ref ={murkat}
    >
        <primitive object = {scene} />
    </mesh>
  )
}


export default Murkat