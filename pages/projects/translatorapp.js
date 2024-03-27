import { Container, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Project = () => (
  <Layout title="translatorapp">
    <Container mt={10} maxW="container.md" >
    <Section delay={0.2}>
      <Title>
        Translator App
      </Title>
      <Text mt={10}>This is a simple translator app built with JavaScript, HTML, and CSS.</Text>

      <List my={4}>
      <ListItem>
          <p><strong>Technologies:</strong> <span>JavaScript, Translator API</span></p>
        </ListItem>
        <ListItem mt={5}>
          <Meta>Live Demo</Meta>
          <Link href="https://master--translatorappexercise.netlify.app/">
          https://master--translatorappexercise.netlify.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/liujiani505/translator-app">
          https://github.com/liujiani505/translator-app<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/translatorapp.png" alt="Translator App" />
    </Section>
    </Container>
  </Layout>
)

export default Project