import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, GradientTexture, useCursor ,useGLTF} from '@react-three/drei'
import { PresentationControls } from '@react-three/drei'
import  {Model2}  from './LittlestTokyo'
import './App.css'
function Flag() {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  const data = useGLTF('LittlestTokyo.glb',true)
  console.log(data)

 
  return (
    <PresentationControls
    global
    zoom={0.8}
    rotation={[0, -Math.PI / 4, 0]}
    polar={[0, Math.PI / 4]}
    azimuth={[-Math.PI / 4, Math.PI / 4]}>
    <group ref={ref}>
      <Model2/>
    </group>
    </PresentationControls>
  )
}

function Model() {
  return (
    <Canvas concurrent shadowMap camera={{ position: [1, 1.5, 800] }}>
      <ambientLight />
      <Flag/>
    </Canvas>
  )
}

export default function App(){
  return(
    <div className='App'>
      <Model/>
    
    </div>
  )
}
