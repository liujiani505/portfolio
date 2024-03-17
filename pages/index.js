import React, { useState } from 'react'
import { Container, Box, Heading, Stack, Image, Divider, Wrap, WrapItem} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import {SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiExpress, SiMongodb, SiPostgresql, SiRubyonrails, SiPython, SiDjango, SiJquery, SiHeroku, SiNetlify} from 'react-icons/si'
import {FaReact, FaNodeJs, FaAngular} from 'react-icons/fa'
import {DiRuby} from 'react-icons/di'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import { useColorModeValue } from '@chakra-ui/react'


const technologies = [
    { icon: SiHtml5, color: "#e34c26" },
    { icon: SiCss3, color: "#3c99dc" },
    { icon: SiJavascript, color: "#F0db4f" },
    { icon: SiTypescript, color: "#3178c6" },
    { icon: SiBootstrap, color: "#563d7c" },
    { icon: SiExpress, color: "#444444" },
    { icon: SiMongodb, color: "#4DB33D" },
    { icon: SiPostgresql, color: "#28547E" },
    { icon: SiRubyonrails, color: "#cc0000" },
    { icon: SiPython, color: "#306998" },
    { icon: SiDjango, color: "#092e20" }, 
    { icon: SiJquery, color: "#0868AC" },
    { icon: SiHeroku, color: "#6762A6" }, 
    { icon: SiNetlify, color: "32b4ba" },
    { icon: FaAngular, color: "#dd0031", size: "3.2em" },
    { icon: FaReact, color: "#61DAFB" },
    { icon: FaNodeJs, color: "#3c873a" },
    { icon: DiRuby, color: "#A91401" }
  ];


const Page = () => {
    const [showRoughNotation] = useState(true);

    return (
        <>
        <Container mt={14} maxW="container.lg">
            
            <Box display={{md:'flex'}} flexDirection={{ base: 'column', md: 'row' }}>
                <Box>
                    <RoughNotationGroup show={showRoughNotation}>
                        <Heading as="h1" variant="page-title">
                            Hello! I&apos;m Jiani, a <RoughNotation type="highlight" color={useColorModeValue('#cde881', '#44635d')} >developer</RoughNotation> and
                            <RoughNotation type="highlight" color={useColorModeValue('#cde881', '#44635d')} > designer</RoughNotation> based in Boston.
                        </Heading>
                        <br/>
                        <p>I enjoy leveraging my <RoughNotation type="highlight" color={useColorModeValue('#CBD5E0', '#2D3748')} >front-end</RoughNotation> development skills and <RoughNotation type="highlight" color={useColorModeValue('#CBD5E0', '#2D3748')} >UI/UX </RoughNotation>design knowledge to create intuitive and user-friendly tools. Over the past eight years, I&apos;ve been dedicated to bridging design and technical solutions that empower both non-profit and profit-driven organizations to enhance their missions by delivering better experiences for their communities. My goal is to combine my experiences and passion for working with vision-driven organizations to make a more substantial social impact.</p> 
                        <br/>
                        <p>Interested in collaborating?<NextLink href="/contact"> Let&apos;s get in touch.</NextLink></p>
                    </RoughNotationGroup>
        
                    <Stack spacing={4} direction='row' mt={8}>
                        <NextLink href="https://www.linkedin.com/in/jianiliudev/"><Button color={useColorModeValue('#FAF9F6', 'black')} bg={useColorModeValue('black', '#FAF9F6')} size='md'>View LinkedIn</Button></NextLink>
                        <NextLink href="https://github.com/liujiani505" ><Button color={useColorModeValue('#FAF9F6', 'black')} bg={useColorModeValue('black', '#FAF9F6')} size='md'>View Github</Button></NextLink>
                    </Stack>
                </Box> 
                <Section delay={0.1}>
                    <Box position="relative"  minWidth="330px" minHeight="380px" justifyContent="center" alignItems="center" overflow="hidden" borderRadius="md" mx="auto" ml={{ md: 8}} mt={{ base: 8, md: 0 }}>
                        <Image src="/images/Profile.jpg" alt="Profile Image" objectFit="cover" width="100%" height="100%" />
                    </Box>
                </Section>
            </Box>
            <Divider mt={12}/>
            <Section delay={0.2}>
                <Heading variant='section-title' mt={10} mb={8}>Technologies I&apos;ve used</Heading>
                <Wrap spacing='2em'>
                    {technologies.map(({icon:Icon, color, size="3em"}, index)=>(
                        <WrapItem key={index}><Icon size={size} color={color}/></WrapItem>
                    ))}
                </Wrap>
            </Section>
        </Container>
        </>
    )
}

export default Page

