import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
    <Box w="100%" textAlign="left" boxShadow='lg'>  
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}><strong>{title}</strong></Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>    
    </Box>
)

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="left">
      <NextLink href={`/projects/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/projects/${id}`}>
            <Text mt={4} fontSize={20}>
            <strong>{title}</strong>
            </Text>
          </LinkOverlay>
          <Text fontSize={14} mt={2}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )

  
export const GridItemStyle = () => (
<Global
    styles={`
    .grid-item-thumbnail {
        border-radius: 5px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    `}
/>
)

