import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Jiani Liu | Developer + Designer</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.xl" pt={16} >
                {children}
            </Container>
            <Footer mt={14}/>
        </Box>
    )
}

export default Main