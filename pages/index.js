import { Container, Box, Heading, Stack, Image, Divider, Wrap, WrapItem} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import {SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiExpress, SiMongodb, SiPostgresql, SiRubyonrails, SiPython, SiDjango, SiJquery, SiHeroku, SiNetlify} from 'react-icons/si';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {DiRuby} from 'react-icons/di'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useColorModeValue } from '@chakra-ui/react'


const Page = () => {
    return (
        <>
        <Container mt={14} maxW="container.lg">
            
            <Box display={{md:'flex'}} direction={{ base: 'column', md: 'row' }}>
                <Box>
                <RoughNotationGroup>
                    <Heading as="h1" variant="page-title">
                        Hello! I&apos;m Jiani, a <RoughNotation type="highlight" color={useColorModeValue('#fff176', '#2D3748')} show={true}>developer</RoughNotation> and
                        <RoughNotation type="highlight" color={useColorModeValue('#fff176', '#2D3748')} show={true}> designer</RoughNotation> based in Boston.
                    </Heading>
                    <br/>
                    <p>I enjoy using my <RoughNotation type="highlight" color={useColorModeValue('#CBD5E0', '#2D3748')} show={true}>full-stack developer skills</RoughNotation> and design <RoughNotation type="highlight" color={useColorModeValue('#CBD5E0', '#2D3748')} show={true}> aesthetics</RoughNotation> to build tools that are intuitive and easy to use. I&apos;ve spent seven years creating digital designs to help universities advance their mission in building better experiences for students and the campus community. My goal is to combine my experiences and passion working with vision driven organizations to make a larger social impact.</p> 
                    <br/>
                    <p>Interested in collaborating? <RoughNotation type="underline" color="#666666" show={true}>Let&apos;s <NextLink href="/contact">get in touch.</NextLink></RoughNotation></p>
                    </RoughNotationGroup>
                    <Stack spacing={4} direction='row' mt={8}>
                        <NextLink href="https://www.linkedin.com/in/jianiliudev/"><Button color='#000000' bg="#CBD5E0" size='md'>View LinkedIn</Button></NextLink>
                        <NextLink href="https://github.com/liujiani505" ><Button color='#000000' bg="#CBD5E0" size='md'>View Github</Button></NextLink>
                    </Stack>
                </Box> 
                <Section delay={0.1}>
                <Box>
                    <Image borderRadius="md" width="950px" ml={{base: 0, md: 3}} mt={{ base: 8, md: 0 }} display="inline-block" src="/images/About+me+photo.jpg" alt="Profile Image"/>
                </Box> 
                </Section>
            </Box>
            <Divider mt={12}/>
            <Section delay={0.2}>
                <Heading variant='section-title' mt={10} mb={8}>Technologies I&apos;ve used</Heading>
                <Wrap spacing='2em'>
                    <WrapItem>
                    <SiCss3 size="3em" color="#3c99dc"/>
                    </WrapItem>
                    <WrapItem>
                    <SiHtml5 size="3em" color="#e34c26"/>
                    </WrapItem>
                    <WrapItem>
                    <SiJavascript size="3em" color="#F0db4f"/>
                    </WrapItem>
                    <WrapItem>
                    <SiJquery size="3em" color="#0868AC"/>
                    </WrapItem>
                    <WrapItem>
                    <SiBootstrap size="3em" color="#563d7c"/>
                    </WrapItem>
                    <WrapItem>
                    <FaReact size="3em" color="#61DAFB"/>
                    </WrapItem>
                    <WrapItem>
                    <FaNodeJs size="3em" color="#3c873a"/>
                    </WrapItem>
                    <WrapItem>
                    <SiExpress size="3em" color={useColorModeValue('#444444', '#999999')} />
                    </WrapItem>
                    <WrapItem>
                    <SiMongodb size="3em" color="#4DB33D"/>
                    </WrapItem>
                    <WrapItem>
                    <SiPostgresql size="3em" color="#28547E"/>
                    </WrapItem>
                    <WrapItem>
                    <DiRuby size="3em" color="#A91401"/>
                    </WrapItem>
                    <WrapItem>
                    <SiRubyonrails size="3em" color="#cc0000"/>
                    </WrapItem>
                    <WrapItem>
                    <SiPython size="3em" color="#306998"/>
                    </WrapItem>
                    <WrapItem>
                    <SiDjango size="3em" color={useColorModeValue('#092e20', '#21694d')}/>
                    </WrapItem>
                    <WrapItem>
                    <SiHeroku size="3em" color={useColorModeValue('#6762A6', '#C9C3E6')}/>
                    </WrapItem>
                    <WrapItem>
                    <SiNetlify size="3em" color="32b4ba"/>
                    </WrapItem>
                </Wrap>
            </Section>
        </Container>
        </>
    )
}

export default Page

