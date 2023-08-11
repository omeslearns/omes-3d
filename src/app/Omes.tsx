import {
  Center,
  Instance,
  Instances,
  OrbitControls,
  Stage,
  Text3D,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import chroma from 'chroma-js';
import { useControls } from 'leva';
import { CSSProperties, useEffect, useRef, useState } from 'react';

export function Omes() {
  // const material = new MeshMatcapMaterial();
  // const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);
  // useEffect(() => {
  //   matcapTexture.encoding = sRGBEncoding;
  //   matcapTexture.needsUpdate = true;

  //   material.matcap = matcapTexture;
  //   material.needsUpdate = true;
  // }, []);

  const cubes = [...Array(1000)].map((a) => (Math.random() - 0.5) / 2);
  const refs = useRef([]);

  useFrame((state, delta) => {
    refs.current.forEach((c, i) => {
      c?.rotation.x && (c.rotation.x += delta * cubes[i]);
      c?.rotation.y && (c.rotation.y += delta * cubes[i]);
      c?.rotation.z && (c.rotation.z += delta * cubes[i]);
    });
  });
  console.log('cubes ', cubes);
  console.log('refs ', refs);
  window.cubes = cubes;
  window.refs = refs;

  const LIGHT: CSSProperties['backgroundColor'] = '#DDD';
  const DARK: CSSProperties['backgroundColor'] = '#222';
  const [darkMode, set_darkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      set_darkMode(event.matches);
    });

  const [{ background }, setControls] = useControls(() => ({
    background: darkMode ? DARK : LIGHT,
  }));

  useEffect(() => {
    setControls({ background: darkMode ? DARK : LIGHT });
  }, [darkMode]);

  return (
    <>
      {/* <Perf /> */}
      <color args={[background]} attach="background" />
      <OrbitControls
        enableDamping
        minDistance={20}
        maxDistance={50}
        autoRotate
        autoRotateSpeed={-0.1}
      />
      {/* <axesHelper args={[5]} /> */}

      <Stage shadows={false} adjustCamera={false} environment={null}>
        <Center>
          <Text3D
            renderOrder={1}
            font={'./fonts/helvetiker_regular.typeface.json'}
            // material={material}
            scale={2}
            height={0.2}
            curveSegments={4}
            bevelEnabled
            bevelThickness={0.04}
            bevelSize={0.04}
            bevelOffset={0}
            bevelSegments={4}
          >
            omes.is
            {/* <meshStandardMaterial color={'ivory'} wireframe /> */}
            <meshNormalMaterial wireframe />
          </Text3D>
        </Center>
        <Instances>
          {cubes.map((ref, i) => {
            function createPosition() {
              const pos = [...Array(3)].map((a) => Math.random() - 0.5);
              const [x, y, z] = pos;
              if (
                Math.sqrt(x ** 2 + y ** 2 + z ** 2) < 0.1 ||
                Math.sqrt(x ** 2 + y ** 2 + z ** 2) > 0.5
              )
                return createPosition();
              return pos;
            }

            const position = createPosition().map((a) => a * 100);

            return (
              <>
                <boxGeometry />
                <meshStandardMaterial />
                <Instance
                  position={position}
                  scale={1 + Math.random() * 5}
                  ref={(ref) => (refs.current[i] = ref)}
                  rotation={[
                    Math.random() - 0.5,
                    Math.random() - 0.5,
                    Math.random() - 0.5,
                  ]}
                  color={chroma.random().hex()}
                />
              </>
            );
          })}
          <boxGeometry />
        </Instances>
      </Stage>
    </>
  );
}
