import { Container, Box, Heading, Stack, Image} from '@chakra-ui/react'
import { Button, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import {SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiExpress, SiMongodb, SiPostgresql, SiRubyonrails, SiPython, SiDjango, SiJquery, SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobexd, SiAdobeaftereffects} from 'react-icons/si';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {DiRuby} from 'react-icons/di'


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

        <Section delay={0.1}>
            
        <Container mt={10} maxW="container.lg">
            
            <Box display={{md:'flex'}} direction={{ base: 'column', md: 'row' }}>
                <Box>
                    <Heading as="h1" variant="page-title">
                        Hello! I&apos;m Jiani, a developer and designer based in Boston.
                    </Heading>
                    <br/>
                    <p>I love using my full-stack development skills and design aesthetics to build tools that are intuitive and easy to use. I've spent seven years creating digital designs to help universities advance their mission in building better experiences for students and the campus community.</p>
                    <br/>
                    <p>My goal is to combine my experiences and passion working with vision driven organizations to make a larger social impact. </p> 
                    <br/>
                    <p>Interested in collaborating? Let's get in touch.</p>

                    <Stack spacing={4} direction='row' mt={8}>
                        <NextLink href="https://www.linkedin.com/in/jianiliudev/"><Button color='#ffffff' bg="black" size='md'>View LinkedIn</Button></NextLink>
                        <NextLink href="https://github.com/liujiani505" ><Button color='#ffffff' bg="black" size='md'>View Github</Button></NextLink>
                    </Stack>
                </Box> 
                <Box>
                    <Image borderRadius="md" maxWidth="300px" ml={{base: 0, md: 12}} mt={{ base: 8, md: 0 }} display="inline-block" src="/images/About+me+photo.jpg" alt="Profile Image"/>
                </Box> 
            </Box>

            <Section delay={0.2}>
                <Heading variant="section-title" mt={14} mb={6}>Technologies I've used</Heading>
                <Section>
                <p>Development and Design:</p><br/>
                <Flex gap={3}>
                    <Box>
                    <SiCss3 size="2em" color="#3c99dc"/>
                    </Box>
                    <Box>
                    <SiHtml5 size="2em" color="#e34c26"/>
                    </Box>
                    <Box>
                    <SiJavascript size="2em" color="#F0db4f"/>
                    </Box>
                    <Box>
                    <SiJquery size="2em" color="#0868AC"/>
                    </Box>
                    <Box>
                    <SiBootstrap size="2em" color="#563d7c"/>
                    </Box>
                    <Box>
                    <FaReact size="2em" color="#61DAFB"/>
                    </Box>
                    <Box>
                    <FaNodeJs size="2em" color="#3c873a"/>
                    </Box>
                    <Box>
                    <SiExpress size="2em" color="#444444"/>
                    </Box>
                    <Box>
                    <SiMongodb size="2em" color="#4DB33D"/>
                    </Box>
                    <Box>
                    <SiPostgresql size="2em" color="#28547E"/>
                    </Box>
                    <Box>
                    <DiRuby size="2em" color="#A91401"/>
                    </Box>
                    <Box>
                    <SiRubyonrails size="2em" color="#cc0000"/>
                    </Box>
                    <Box>
                    <SiPython size="2em" color="#306998"/>
                    </Box>
                    <Box>
                    <SiDjango size="2em" color="#092e20"/>
                    </Box>
                </Flex>
                </Section>

                <Section>
                <Flex gap={3}>
                    <SiAdobephotoshop size="2em" color="#18152E"/>
                    <SiAdobeillustrator size="2em" color="#3c240c"/>
                    <SiAdobeindesign size="2em" color="#562f44"/>
                    <SiAdobexd size="2em" colora="#6c124c"/>
                    <SiAdobeaftereffects size="2em" color="#393665"/>
                </Flex>
                </Section>
            </Section>
        </Container>
        </Section>
        </>
    )
}

export default Page

