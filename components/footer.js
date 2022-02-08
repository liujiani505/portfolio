import { Box, Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
        <Container mt={16} maxW="container.lg">
        <Box align="left" opacity={0.4} fontSize="sm">
        &copy; Jiani Liu {new Date().getFullYear()}. All Rights Reserved. Built with Next.js and Chakra UI.
        </Box>
        </Container>
    </>
  )
}

export default Footer 