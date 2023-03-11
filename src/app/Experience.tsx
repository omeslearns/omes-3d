import {
  Box,
  OrbitControls,
  PivotControls,
  Sphere,
  Stage,
} from '@react-three/drei';
import chroma from 'chroma-js';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';

export function Experience() {
  const cube = useRef<Mesh>(null!);
  const ball = useRef<Mesh>(null!);

  const Material = () => <meshStandardMaterial color={chroma.random().hex()} />;

  useEffect(() => {
    console.log(ball.current?.position);
  }, [ball]);

  return (
    <Stage
      adjustCamera={false}
      environment={{
        preset: 'apartment',
        background: true,
      }}
    >
      <OrbitControls />
      <PivotControls anchor={[0, 1, 0]}>
        <Box ref={cube} position={[-1, 0, 0]}>
          <Material />
        </Box>
      </PivotControls>
      <PivotControls anchor={[0, 1, 0]}>
        <Sphere ref={ball} position={[1, 0, 0]} scale={0.7}>
          <Material />
        </Sphere>
      </PivotControls>
    </Stage>
  );
}
