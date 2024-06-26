import { useState, Suspense, useEffect, useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { CanvasLoader, Homeinfo } from '../components'
import { Monkey_dance,Herring, Colobus, Gecko, Aztec, Sky, Plane1, Pubu, Sparrow, Murkat } from '../models';

const Home = () => {
  

  
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)


  const [cameraAngle, setCameraAngle] = useState(0); // Angle in radians
  const cameraDistance = 5.5; // Distance from the center of the aztec
  const cameraHeight = 0; // Height of the camera


  
  const rotationSpeed = useRef(0);
  const lastX = useRef(0);
  const dampingFactor = 0.95;


 

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      setCameraAngle((prev) => prev - 0.05); // Rotate left
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      setCameraAngle((prev) => prev + 0.05); // Rotate right
      rotationSpeed.current = -0.007;
    }
  };
  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };


    


  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true); 
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  }

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (isRotating) {
       // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const deltaX = event.clientX - lastX.current;
      setCameraAngle((prev) => prev + deltaX * 0.002);
      // Update the reference for the last clientX position
      lastX.current = event.clientX;

      //Update the rotation speed
      rotationSpeed.current = deltaX * 0.01 * Math.PI;
    }

  }

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
  };


  const handleTouchStart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  
  };
  
  const handleTouchMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
  
    
    if (isRotating) {
      const deltaX = event.touches[0].clientX - lastX.current;
      setCameraAngle((prev) => prev + deltaX * 0.002);
      lastX.current = event.touches[0].clientX;

      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  
  const handleTouchEnd = (event) => {
    setIsRotating(false);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };



  useEffect(() => {
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    


      

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
     window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener("touchstart", handleTouchStart);
     window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  
  }, [handlePointerDown, handlePointerUp, handlePointerMove]);



  const adjustAztecForScreenSize = ()  =>{
    let screenScale = null;
    let screenPosition = [0, -1, -0.37];
    let rotation = [0,3.7,0];


    if(window.innerWidth < 768) {
      screenScale = [0.0038,0.0038,0.0038];

    } else {
      screenScale = [0.004,0.004,0.004];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = ()  =>{
    let screenScale, screenPosition;
    if(window.innerWidth < 768) {
      screenScale = [0.5,0.5,0.5];
      screenPosition = [0, 1, 3];

    } else {
      screenScale = [0.6,0.6,0.6];
      screenPosition = [0, 1, 3];
    } 
    return [screenScale, screenPosition];
  }
  const adjustMonkeyDance = ()  =>{
    let screenScale, screenPosition;
    if(window.innerWidth < 768) {
      screenScale = [0.15,0.15,0.15];
      screenPosition = [-1,  -1.9, -0.1]; ///x , y, z

    } else {
      screenScale = [0.2,0.2,0.2];
      screenPosition = [-1, -1.9, -0.08];
    } 
    return [screenScale, screenPosition];
  }
  const adjustMonkey = () => {
    let screenScale, screenPosition;
    if(window.innerWidth < 768) {
      screenScale = [0.2,0.2,0.2];
      screenPosition = [-0.1,-0.1,-1.4];

    } else {
      screenScale = [0.3,0.3,0.3];
      screenPosition = [-0.1,-0.1,-1.4];
    } 
    return [screenScale, screenPosition];
  }

  
  const [AztecScale, AztecPosition, AztecRotation] = adjustAztecForScreenSize();
  const [PlaneScale, PlanePosition] = adjustPlaneForScreenSize();
  const [MonkDanceScale, MonkPositionScale] = adjustMonkeyDance();
  const [MonkeyScale, MonkeyPosition ] = adjustMonkey();

  const cameraPosition = [
    cameraDistance * Math.sin(cameraAngle),
    cameraHeight,
    cameraDistance * Math.cos(cameraAngle)
  ];

  
  const CameraController = ({ angle }) => {
  
    useFrame(({ camera }) => {
      const radius = 5.5; // Distance from the center of the Aztec
      const height = 0; // Height of the camera
      const x = Math.sin(angle) * radius
      const z = Math.cos(angle) * radius
      const rotation = camera.position.z;
      
    
      camera.position.set(x, height, z);
      camera.lookAt(0, 0, 0); // Ensure the camera looks at the center of the Aztec

      
    
      
      if(!isRotating){
        rotationSpeed.current *= dampingFactor;

        if(Math.abs(rotationSpeed.current) < 0.01){
          rotationSpeed.current = 0;
        }
        
      
        setCameraAngle((prev) => (prev + rotationSpeed.current))
        

      

      }
    
  
      const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 0.0000000000001 * Math.PI) % (2 * Math.PI);

  
      switch (true) {
        case normalizedRotation >= -5.5 && normalizedRotation <= -3.5:
        setCurrentStage(4);
        break;
      case normalizedRotation >= -3 && normalizedRotation <= 0.5:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 0.6 && normalizedRotation <= 3.8:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.2 && normalizedRotation <= 5.55:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
      }
      }
    
      
  
    );
    return null;
    
  };

  
  
  
  return (
    <section className = " w-full h-screen relative bg-slate-400">

      <div className = "absolute top-28 left-0 right-0 z-10 flex items-center justify-center">

        {currentStage  && <Homeinfo currentStage = {currentStage}/> }
      </div>

      <Canvas 
        className = {'w-full h-screen bg-transparent ${isRotating ? cursor-grabbing : cursor-grab }' }


        camera = {{ near: 1.1, far: 1000 }}

      >

        <Suspense fallback={<CanvasLoader />}>
          <CameraController angle={cameraAngle} />

          <directionalLight position={[-0.8,-1,-1.4]} intensity={0.8} />
          <ambientLight intensity={1.2} position={[-1,-1.7,0.6]}/>
          
          <Aztec
            position = {AztecPosition}
            scale = {AztecScale}
            rotation = {AztecRotation}
          />

          <Monkey_dance
            position={MonkPositionScale}
            scale={MonkDanceScale}
          />


          <Gecko
            position = {[MonkDanceScale[0]+ 1, MonkDanceScale[1] - 1.45, MonkDanceScale[2]]}
            scale = {[MonkDanceScale[0],MonkDanceScale[1],MonkDanceScale[2]]}
            rotation = {[-1,-1,-1]}
          />

          <Herring
            position = {[0.2,-1.8,0.9]}
            scale = {[0.2,0.2,0.2]}
            rotation = {[0,0,0]}
          />

          <Colobus
            position = {MonkeyPosition}
            scale = {MonkeyScale}
            rotation = {[0,0.2,0]}
          />
          <Pubu
            position = {[MonkeyPosition[0]+ 0.6, MonkeyPosition[1] - 1.96, MonkeyPosition[2] + 1.8]}
            scale = {[MonkeyScale[0],MonkeyScale[1],MonkeyScale[2]]}
            rotation={[-0.1,-0.1,0]}

          />

          <Sparrow
            position = {[MonkeyPosition[0] + 1, MonkeyPosition[1] - 0.66, MonkeyPosition[2] + 1.8]}
            scale = {[MonkeyScale[0],MonkeyScale[1],MonkeyScale[2]]}
            rotation={[0,0,0]}
          />
          <Murkat
            position = {[MonkPositionScale[0] - 0.5, MonkPositionScale[1] , MonkPositionScale[2] + 0.5]}
            scale = {[MonkDanceScale[0] + 0.1, MonkDanceScale[1] + 0.1, MonkDanceScale[2] + 0.1]}
            rotation={[-1,0.2,0.3]}
          />
          
      

          <Sky 
            isRotating = {isRotating}
          />

          <Plane1
          isRotating={isRotating}
          position = {PlanePosition}
          scale = {PlaneScale}
          rotation ={[0,1.6,0]}
           />

        </Suspense>

        
      </Canvas>
    </section>
  );

  
};



export default Home