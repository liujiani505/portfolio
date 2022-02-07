import { Container, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Project = () => (
  <Layout title="EyeOnArt">
    <Container mt={10} maxW="container.lg" >
    <Section delay={0.2}>
      <Title>
        Eye on Art
      </Title>
      <Text mt={10}>Eye on Art is a blog application with full CRUD (Create, Read, Update, Destroy) built with Ruby on Rails for backend and React for frontend. Users can browse through all of the blog posts from different users, as well as create, update and delete their own posts.</Text>

      <List my={4}>
      <ListItem>
          <p><strong>Technologies:</strong> <span>Ruby, Rails, React, PostgreSQL</span></p>
        </ListItem>
        <ListItem mt={5}>
          <Meta>Live Demo</Meta>
          <Link href="https://happy-hypatia-ae5f10.netlify.app/">
          https://happy-hypatia-ae5f10.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/liujiani505/blogs_client.git">
          https://github.com/liujiani505/blogs_client.git <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/EyeOnArt home.png" alt="Eye On Art" />
      <ProjectImage src="/images/projects/EyeOnArt posts.png" alt="Eye On Art" />
    </Section>
    </Container>
  </Layout>
)

export default Project