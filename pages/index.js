import { Container, Box, Heading, Stack, Image, Divider, Wrap, WrapItem} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import {SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiExpress, SiMongodb, SiPostgresql, SiRubyonrails, SiPython, SiDjango, SiJquery} from 'react-icons/si';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {DiRuby} from 'react-icons/di'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useColorModeValue } from '@chakra-ui/react'


// import { Canvas, useFrame } from 'react-three-fiber'
// import { useRef } from 'react'
// import { OrbitControls, MeshWobbleMaterial} from '@react-three/drei'


// const SpinningMesh = ({position, args, color, speed}) => {
//     const mesh = useRef(null)
//     useFrame(()=> (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
//     return (
//         <mesh castShadow position={position} ref={mesh}>
//         <boxBufferGeometry attach='geometry' args={args} />
//         <MeshWobbleMaterial attach='material' color={color} speed={speed} factor={0.6}/>
//         </mesh>
//     )
// }

const Page = () => {
    return (
        <>
        {/* <Canvas shadowMap colorManagement camera={{position: [-5, 2, 10], fov: 20}}>
            <ambientLight intensity={0.3} />
            <directionalLight castShadow position={[0,10,0]} intensity={1.5} shadow-mapSize-width={1024} shadow-mapSize-height={1024}
            shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10}
            />
            <pointLight position={[-10,0,0]} intensity={0.5}/>
            <pointLight position={[0,-10,0]} intensity={1}/>

            <group>
                <mesh receiveShadow rotation={[-Math.PI / 2,0,0]} position={[0,-3,0]}>
                    <planeBufferGeometry attach="geometry" args={[100,100]}/> 
                    <shadowMaterial attach='material' opacity={1.3}/>
                </mesh>
            </group>
            <SpinningMesh position={[0, 1, 0]} args={[3,2,1]} color="lightblue" speed={2}/>
            <SpinningMesh position={[-2, 0, -5]} color="pink" speed={6}/>
            <SpinningMesh position={[5, 0, -2]} color="pink" speed={6}/>
            <OrbitControls />
        </Canvas> */}

            
        <Container mt={14} maxW="container.lg">
            
            <Box display={{md:'flex'}} direction={{ base: 'column', md: 'row' }}>
                <Box>
                <RoughNotationGroup>
                    <Heading as="h1" variant="page-title">
                        Hello! I&apos;m Jiani, a <RoughNotation type="highlight" color={useColorModeValue('#fff176', '#4A5568')} show={true}>developer</RoughNotation> and
                        <RoughNotation type="highlight" color={useColorModeValue('#fff176', '#4A5568')} show={true}> designer</RoughNotation> based in Boston.
                    </Heading>
                    <br/>
                    <p>I enjoy using my <RoughNotation type="highlight" color={useColorModeValue('#CBD5E0', '#4A5568')} show={true}>full-stack development skills</RoughNotation> and <RoughNotation type="highlight" color={useColorModeValue('#CBD5E0', '#4A5568')} show={true}>design aesthetics</RoughNotation> to build tools that are intuitive and easy to use. I&apos;ve spent seven years creating digital designs to help universities advance their mission in building better experiences for students and the campus community. My goal is to combine my experiences and passion working with vision driven organizations to make a larger social impact.</p> 
                    <br/>
                    <p>Interested in collaborating? <RoughNotation type="underline" color="#666666" show={true}>Let&apos;s <NextLink href="/contact">get in touch.</NextLink></RoughNotation></p>
                    </RoughNotationGroup>
                    <Stack spacing={4} direction='row' mt={14}>
                        <NextLink href="https://www.linkedin.com/in/jianiliudev/"><Button color='#000000' bg="#CBD5E0" size='md'>View LinkedIn</Button></NextLink>
                        <NextLink href="https://github.com/liujiani505" ><Button color='#000000' bg="#CBD5E0" size='md'>View Github</Button></NextLink>
                    </Stack>
                </Box> 
                <Section delay={0.1}>
                <Box>
                    <Image borderRadius="md" maxWidth="300px" ml={{base: 0, md: 12}} mt={{ base: 8, md: 0 }} display="inline-block" src="/images/About+me+photo.jpg" alt="Profile Image"/>
                </Box> 
                </Section>
            </Box>
            <Divider mt={12}/>
            <Section delay={0.2}>
                <Heading  mt={8} mb={10}>Technologies I&apos;ve used</Heading>
                <Wrap spacing='2em'>
                    <WrapItem>
                    <SiCss3 size="4em" color="#3c99dc"/>
                    </WrapItem>
                    <WrapItem>
                    <SiHtml5 size="4em" color="#e34c26"/>
                    </WrapItem>
                    <WrapItem>
                    <SiJavascript size="4em" color="#F0db4f"/>
                    </WrapItem>
                    <WrapItem>
                    <SiJquery size="4em" color="#0868AC"/>
                    </WrapItem>
                    <WrapItem>
                    <SiBootstrap size="4em" color="#563d7c"/>
                    </WrapItem>
                    <WrapItem>
                    <FaReact size="4em" color="#61DAFB"/>
                    </WrapItem>
                    <WrapItem>
                    <FaNodeJs size="4em" color="#3c873a"/>
                    </WrapItem>
                    <WrapItem>
                    <SiExpress size="4em" color={useColorModeValue('#444444', '#999999')} />
                    </WrapItem>
                    <WrapItem>
                    <SiMongodb size="4em" color="#4DB33D"/>
                    </WrapItem>
                    <WrapItem>
                    <SiPostgresql size="4em" color="#28547E"/>
                    </WrapItem>
                    <WrapItem>
                    <DiRuby size="4em" color="#A91401"/>
                    </WrapItem>
                    <WrapItem>
                    <SiRubyonrails size="4em" color="#cc0000"/>
                    </WrapItem>
                    <WrapItem>
                    <SiPython size="4em" color="#306998"/>
                    </WrapItem>
                    <WrapItem>
                    <SiDjango size="4em" color={useColorModeValue('#092e20', '#21694d')}/>
                    </WrapItem>
                </Wrap>
            </Section>
        </Container>
        </>
    )
}

export default Page

