

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import aztecScene from '../assets/3d/aztecDRACO.glb';

const Aztec = ({ ...props}) => {
  
    
    const aztecRef = useRef();

    const { scene, animations } = useGLTF(aztecScene);
    const {actions} = useAnimations(animations, aztecRef);

    useEffect(() => {
      actions['CINEMA_4D_Main'].play()
    })


    return (
      <mesh 
      {...props}
      ref ={aztecRef}
      >
          <primitive object = {scene} />
      </mesh>
    )
  }

export default Aztec;
