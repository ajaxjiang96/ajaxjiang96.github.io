import styled from '@emotion/styled';
import { FC, Suspense, useRef, useState } from 'react';
import { Section } from '../../components/Section';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls, PresentationControls, useFBX, useGLTF } from '@react-three/drei';
import { MeshToonMaterial } from 'three';

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!);
  // const [hovered, hover] = useState(false);
  // const [clicked, click] = useState(false);
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  const f = useGLTF('/assets/char.glb');
  return (
    <Suspense fallback={<div>Loading</div>}>
      <primitive object={f.scene} material={new MeshToonMaterial()} />
    </Suspense>
  );
  // return (
  //   <mesh
  //     {...props}
  //     ref={ref}
  //     scale={clicked ? 1.5 : 1}
  //     onClick={(event) => click(!clicked)}
  //     onPointerOver={(event) => hover(true)}
  //     onPointerOut={(event) => hover(false)}
  //   >
  //     <boxGeometry args={[1, 1, 1]} />
  //     <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  //   </mesh>
  // );
}


export const HomeSection: FC = () => {
  return (
    <Section id="home">
      <Container>
        <PortraitContainer>
          {/* <PortraitImg src="assets/portrait.svg" /> */}
          <Suspense fallback={<div>Loading Canvas</div>}>
            <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 4, 5] }}>
              <ambientLight />
              {/* <pointLight position={[10, 10, 10]} /> */}
              {/* <Box position={[-1.2, 0, 0]} /> */}
              {/* <PresentationControls
                global
                zoom={0.8}
                rotation={[0, -Math.PI / 4, 0]}
                polar={[0, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              > */}
              <Box position={[0, 0, 0]} />
              {/* </PresentationControls> */}
              <OrbitControls />
            </Canvas>
          </Suspense>
        </PortraitContainer>
        <div
          className=""
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 10,
          }}
        >
          <Name>Ajax (Jiacheng) Jiang</Name>
          <Tag inverse>Suzhou, China</Tag>
          <Tag>Software Developer</Tag>
          <Tag>UI/UX Designer</Tag>
          <Tag>Cat Owner</Tag>
        </div>
      </Container>
    </Section>
  );
};

const Name = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Tag: FC<{ inverse?: boolean }> = ({ inverse, children }) => {
  return (
    <TagBase inverse={inverse}>
      <div className="content">{children}</div>
      <div className="shadow"></div>
    </TagBase>
  );
};

const TagBase = styled.div<{ inverse?: boolean }>`
  box-sizing: content-box;
  position: relative;

  .content {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: ${(props) => (props.inverse ? '#000' : '#fff')};
    color: ${(props) => (props.inverse ? '#fff' : '#000')};
    border: 1px solid #000;
    /* box-shadow: 0 0 ${(props) => (props.inverse ? '#fff' : '#000')}; */
    transition: 300ms ease-in-out;
    position: relative;
  }

  .shadow {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: ${(props) => (props.inverse ? '#fff' : '#000')};
    border: 1px solid ${(props) => (props.inverse ? '#000' : '#fff')};
    transition: 300ms ease-in-out;
    z-index: -1;
  }
  &:hover {
    .shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 4px;
      top: 4px;
      z-index: -1;
    }
    .content {
      transform: translate(-4px, -4px);
    }
    /* box-shadow: 8px 8px ${(props) => (props.inverse ? '#fff' : '#000')}; */
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-self: flex-end;
  align-items: center;
  justify-content: center;
`;

const PortraitImg = styled.img`
  height: 80%;
`;

const PortraitContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;
