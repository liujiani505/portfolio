import { Container, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Project = () => (
  <Layout title="HomeChef">
    <Container mt={10} maxW="container.lg" >
    <Section delay={0.2}>
      <Title>
        HomeChef
      </Title>
      <Text mt={10}>HomeChef is a recipe book with full CRUD bulit with Angular. Users can create, edit, delete recipes.</Text>

      <List my={4}>
      <ListItem>
          <p><strong>Technologies:</strong> <span>Angular, Bootstrap, Firebase</span></p>
        </ListItem>
        <ListItem mt={5}>
          <Meta>Live Demo</Meta>
          <Link href="https://homechef-a8f12.web.app/">
          https://homechef-a8f12.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/liujiani505/HomeChef">
          https://github.com/liujiani505/HomeChef/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/HomeChef home.png" alt="HomeChef" />
      <ProjectImage src="/images/projects/HomeChef shopping list.png" alt="HomeChef" />
    </Section>
    </Container>
  </Layout>
)

export default Project
