import NextLink from 'next/link';
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, children, ...props }) => {
    const textColor = useColorModeValue('black', 'white');
    return (
        <NextLink href={href} passHref>
            <Link 
                bg='transparent'
                color={textColor}
                {...props}
            >{children}</Link>
        </NextLink>
    );
};

const Navbar = ({ props }) => {
    const bg = useColorModeValue('#ffffff', '#20202380');
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={bg}
            zIndex={1}
            {...props}
        >
            <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center" wrap="wrap" mt={3}>
                <Flex align="center" mr={12}>
                    <NextLink href="/" passHref>
                        <Link>
                            <Heading as="h6" size="md" letterSpacing={'widest'}>
                                JIANI LIU
                            </Heading>
                        </Link>
                    </NextLink>
                </Flex>

                <Box
                    display={{ base: 'none', md: 'block' }} 
                    flexBasis={{ base: "100%", md: "auto" }}
                >
                    <Stack 
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={8}
                    >
                        <LinkItem p={2} href="/" >About</LinkItem>
                        <LinkItem p={2} href="/projects" >Projects</LinkItem>
                        <LinkItem p={2} href="/contact" >Contact</LinkItem>
                    </Stack>
                </Box>

                <Box flex={1} textAlign="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options"/>
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
    );
};

export default Navbar;