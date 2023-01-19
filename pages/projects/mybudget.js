import { Container, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Project = () => (
  <Layout title="MyBudget">
    <Container mt={10} maxW="container.lg" >
    <Section delay={0.2}>
      <Title>
        MyBudget
      </Title>
      <Text mt={10}>Mybudget is a budget tracker with full CRUD bulit with Django. Users can create, edit, delete their expense and income.</Text>

      <List my={4}>
      <ListItem>
          <p><strong>Technologies:</strong> <span>Python, Django, Bootstrap, PostgreSQL</span></p>
        </ListItem>
        <ListItem mt={5}>
          <Meta>Live Demo</Meta>
          <Link href="https://jl-mybudget.herokuapp.com/">
          https://jl-mybudget.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/liujiani505/mybudget">
          https://github.com/liujiani505/mybudget/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/MyBudget login.png" alt="MyBudget" />
      <ProjectImage src="/images/projects/MyBudget dashboard.png" alt="Inkdrop" />
    </Section>
    </Container>
  </Layout>
)

export default Project
