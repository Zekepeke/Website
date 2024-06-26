import { useRef, useEffect, act } from 'react'
import rubuScene from '../assets/3d/Pudu_AnimationsDRACO.glb';
import { useAnimations, useGLTF } from '@react-three/drei';




const Pubu= ({...props}) => {
    const rubu = useRef();
    const { scene,  animations  } = useGLTF(rubuScene);
    const {actions} = useAnimations(animations,rubu);

    useEffect(() => {

      actions['Swim'].play();
      
       
    })

  
  return (
    <mesh 
    {...props}
    ref ={rubu}
    >
        <primitive object = {scene} />
    </mesh>
  )
}


export default Pubu