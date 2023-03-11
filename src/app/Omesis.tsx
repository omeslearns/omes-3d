import { Center, OrbitControls, Stage, Text3D } from '@react-three/drei';
import { useControls } from 'leva';
import { CSSProperties, useEffect, useState } from 'react';

export function OmesIs() {
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
      <color args={[background]} attach="background" />
      <Stage shadows={false}>
        <OrbitControls />
        <Center>
          <Text3D
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
      </Stage>
    </>
  );
}
