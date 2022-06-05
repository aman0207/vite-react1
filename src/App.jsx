import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei' 
import Box from './components/Box'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight 
        intensity={0.5}
        />
        <directionalLight 
        position={[-2, 5, 2]}
        intensity={1}
        />
        <Box />
      </Canvas>
    </div>
  )
}

export default App
