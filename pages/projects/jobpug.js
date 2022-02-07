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
            JobPug
        </Title>
        <Text mt={10}>JobPug is a job application tracker with full CRUD bulit with React. Users can create, edit, delete their jobs. This was a gruop project. </Text>

        <List my={4}>
        <ListItem>
            <p><strong>Technologies:</strong> <span>React, Sass, MongoDB, Mongoose, Heroku, Netlify</span></p>
            </ListItem>
            <ListItem mt={5}>
            <Meta>Live Demo</Meta>
            <Link href="https://condescending-bardeen-3c488a.netlify.app/">
            https://condescending-bardeen-3c488a.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
            <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/dannyroddd/project3-frontend">
            https://github.com/dannyroddd/project3-frontend <ExternalLinkIcon mx="2px" />
            </Link>
            </ListItem>
        </List>

        <ProjectImage src="/images/projects/JobPug login.png" alt="JobPug" />
        <ProjectImage src="/images/projects/JobPug addnew.png" alt="JobPug" />
    </Section>
    </Container>
  </Layout>
)

export default Project