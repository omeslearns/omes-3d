import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { OmesIs } from './app/Omesis';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Canvas
      frameloop="always"
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2, -2, 4],
      }}
    >
      <OmesIs />
    </Canvas>
    <Leva
      hidden
      titleBar={false} // default = false, hides the GUI header
    />
  </StrictMode>
);
