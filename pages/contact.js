import { Container, Box, Heading, Button, Input, Textarea, FormControl, FormLabel} from "@chakra-ui/react";
import Section from '../components/section';
import { useState } from "react";
import { useColorModeValue } from '@chakra-ui/react';


const Contact = () => {

    const [newForm, setNewForm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    async function handleOnSubmit(e){
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if ( !field.name ) return;
            formData[field.name] = field.value;
        })
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        setMessage(`Thank you for your message! I'll get back to you as soon as possible.`)
        setNewForm({
            name:"",
            email:"",
            message: "",
        })
    }

    return (
        <Container mt={10} maxW="container.lg">
            
                <Section delay={0.1}>
                    <Heading as="h3" fontSize={35} mb={4}>Contact Me</Heading>
                    <p>To inquire about collaborations or potential projects, get in touch with me!</p>
                </Section>
                <Section delay={0.2}>
                    <Box maxWidth="600px" ml={0}>
                    <form method ="post" onSubmit={handleOnSubmit}>
                        <FormControl isRequired>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input name='name' type='text' placeholder='Enter your name' value={newForm.name} onChange={handleChange}/>
                            <FormLabel htmlFor='email' mt={3}>Email</FormLabel>
                            <Input name='email' type='email' placeholder='Enter your email' value={newForm.email} onChange={handleChange}/>
                            <FormLabel htmlFor='message' mt={3}>Message</FormLabel>
                            <Textarea name='message' placeholder='Enter your message' value={newForm.message} onChange={handleChange}/>                       
                        </FormControl>
                        <Button color={useColorModeValue('#FAF9F6', 'black')} bg={useColorModeValue('black', '#FAF9F6')} type="submit" size='md' mt={6}>Submit</Button><br/>
                    </form>
                    </Box>
                <Box mt={5} color="#38B2AC">{message}</Box>
                </Section>

        </Container>
    )
}

export default Contact