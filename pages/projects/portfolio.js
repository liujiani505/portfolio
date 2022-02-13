import { Container, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Project = () => (
  <Layout title="MyPortfolio">
    <Container mt={10} maxW="container.lg" >
    <Section delay={0.2}>
      <Title>
        My Portfolio
      </Title>
      <Text mt={10}>This portfolio was crafted with Next.js and Chakra UI to showcase my developer projects.</Text>

      <List my={4}>
      <ListItem>
          <p><strong>Technologies:</strong> <span>Next.js, Chakra UI, React Rough Notation, Framer Motion, SendGrid API</span></p>
        </ListItem>
        <ListItem mt={5}>
          <Meta>Live Demo</Meta>
          <Link href="https://www.jianiliu.tech/">
          https://www.jianiliu.tech/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/liujiani505/portfolio">
          https://github.com/liujiani505/portfolio <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/EyeOnArt home.png" alt="My Portfolio" />
      <ProjectImage src="/images/projects/EyeOnArt posts.png" alt="My Portfolio" />
    </Section>
    </Container>
  </Layout>
)

export default Project