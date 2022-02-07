import { Container, Heading, Button, Input, FormLabel, Textarea } from "@chakra-ui/react";
import Section from '../components/section'
// import { HiOutlineMailOpen } from "react-icons/hi"
// import { FaLinkedinIn, FaGithub } from "react-icons/fa"


const Contact = () => {

    async function handleOnSubmit(e){
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if ( !field.name ) return;
            formData[field.name] = field.value;
        })
        console.log(formData)
    }

    return (
        <Container mt={10} maxW="container.lg">
                <Section delay={0.1}>
                    <Heading as="h3" fontSize={35} mb={4}>Contact Me</Heading>
                    <p>To inquire about collaborations or potential projects, get in touch with me!</p>
                </Section>
                <Section delay={0.2}>
                    {/* <Wrap spacing='2em' height="600px" mt={14}>
                        <Button boxSize={40}>
                        <HiOutlineMailOpen size="4em" color="#999999"/>
                        </Button>
                        <Button boxSize={40}>
                        <FaLinkedinIn size="4em" color="#999999"/>
                        </Button>
                        <Button boxSize={40}>
                        <FaGithub size="4em" color="#999999"/>
                        </Button>
                    </Wrap> */}
                    <form method ="post" onSubmit={handleOnSubmit}>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input name='name' type='text' placeholder='Enter your name'/>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input name='email' type='email' placeholder='Enter your email'/>
                            <FormLabel htmlFor='message'>Message</FormLabel>
                            <Textarea name='message' placeholder='Enter your message'/>
                        <Button type="submit" color='#000000' bg="#CBD5E0" size='md' mt={6}>Submit</Button>
                    </form>
                </Section>
        </Container>
    )
}

export default Contact