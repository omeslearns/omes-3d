import { Center, OrbitControls, Stage, Text3D } from '@react-three/drei';
import { useControls } from 'leva';
import { CSSProperties, useEffect, useState } from 'react';

export function Omes() {
  // const material = new MeshMatcapMaterial();
  // const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);
  // useEffect(() => {
  //   matcapTexture.encoding = sRGBEncoding;
  //   matcapTexture.needsUpdate = true;

  //   material.matcap = matcapTexture;
  //   material.needsUpdate = true;
  // }, []);

  const LIGHT: CSSProperties['backgroundColor'] = 'white';
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
      <OrbitControls enableDamping maxDistance={100} />
      {/* <axesHelper args={[5]} /> */}

      <Stage shadows={false} adjustCamera={true}>
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
            omes is
            {/* <meshStandardMaterial color={'ivory'} wireframe /> */}
            <meshNormalMaterial wireframe />
          </Text3D>
        </Center>
        {/* <Instances>
          {[...Array(4000)].map((a, i) => {
            const x = (Math.random() - 0.5) * 2 * 100;
            const y = (Math.random() - 0.5) * 2 * 100;
            const z = (Math.random() - 0.5) * 2 * 100;

            return (
              <>
                <boxGeometry />
                <meshStandardMaterial />
                <Instance
                  position={[x, y, z]}
                  scale={1 + Math.random() * 5}
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
        </Instances> */}
      </Stage>
    </>
  );
}
