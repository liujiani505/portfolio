import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('white', '#202023')(props)
        }
    })
}

const components = {
    Heading:{
        variants: {
            'section-title': {
                fontSize: 25,
                textDecorationThickness: 1,
                textUnderlineOffset: 6,
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#444444', '#999999')(props),
            textUnderlineOffset: 3,
            _focus: {
                boxShadow: 'none',
            }

        })
    },
    Button: {
        baseStyle: props => ({
            _hover: {
                color: mode('black', 'white')(props), 
            },
        }),
    },
    Menu: {
        parts: ['list', 'item'], 
        baseStyle: (props) => ({
            list: {
                bg: mode('white', '#202023')(props),
                boxShadow: mode('sm', 'dark-lg')(props),
            },
            item: {
                _focus: {
                    bg: mode('gray.100', 'gray.700')(props),
                },
                _active: {
                    bg: mode('gray.200', 'gray.600')(props),
                },
            },
        }),
    },
}

const colors = {
    black: "#000",
    white: "#fff",
    gray: {
        50: '#f7fafc',
        800: '#1A202C',
        900: '#171923',
    }
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

const theme = extendTheme({ config, styles, components, colors })
export default theme