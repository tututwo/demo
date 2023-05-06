// import { useThree, extend } from '@react-three/fiber'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// extend({ OrbitControls })

import {
    PivotControls,
    TransformControls,
    OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";
export default function Experience() {
    // const { camera, gl } = useThree()
    const cube = useRef();
    return (
        <>
            <OrbitControls makeDefault />
            {/* <orbitControls args={ [ camera, gl.domElement ] } /> */}

            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <PivotControls anchor={[0, 0, 0]} depthTest={false}>
                <mesh position-x={-2} >
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </PivotControls>
            <mesh position-x={2} scale={1.5} ref={cube}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>

            <TransformControls object={cube}/>
            {/* <TransformControls position-x={2}>
                <mesh  scale={1.5}>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </TransformControls> */}
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
        </>
    );
}
