import NextLink from 'next/link'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'white')
    return (
        <NextLink href={href} passHref>
            <Link 
            bg={active ? 'gray.900' : undefined}
            color={active ? 'white' : inactiveColor}
            {...props}
            >{children}</Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    const bg = useColorModeValue('#ffffff', '#20202380')
    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={bg}
        zIndex={1}
        {...props}
        >
            <Container display="flex" mt={3} maxW="container.lg" wrap="wrap" justifyContent="space-between" >

                <Flex>
                    <a href='/'>
                    <Heading as="h6" size="sm" mt={2} letterSpacing={'widest'}>JIANI LIU</Heading>
                    </a>
                </Flex>

                <Stack 
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                // flexGrow={3}
                mt={{ base: 4, md: 0 }}
                >
                    <LinkItem  p={2} href="/" path={path} >About</LinkItem>
                    <LinkItem  p={2} href="/projects" path={path} >Projects</LinkItem>
                    <LinkItem  p={2} href="/contact" path={path} >Contact</LinkItem>
                </Stack>

                <Box align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" 
                            aria-label="Options" 
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link}>Contact</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Container>
        </Box>   
    )  
}

export default Navbar