import { Container, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Project = () => (
  <Layout title="coinwatch">
    <Container mt={10} maxW="container.lg" >
    <Section delay={0.2}>
      <Title>
        coinwatch
      </Title>
      <Text mt={10}>coinwatch is a cryptocurrency price tracker built with Angular and Angular Material UI, using Routing, Rxjs features and Angular HttpClient for API calls. </Text>

      <List my={4}>
      <ListItem>
          <p><strong>Technologies:</strong> <span>Angular, Angular Material UI, CoinAPI</span></p>
        </ListItem>
        <ListItem mt={5}>
          <Meta>Live Demo</Meta>
          <Link href="https://visionary-arithmetic-bdf3e0.netlify.app/">
          https://visionary-arithmetic-bdf3e0.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/liujiani505/coinwatch">
          https://github.com/liujiani505/coinwatch <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/coinwatch home.png" alt="WeatherApp" />
      <ProjectImage src="/images/projects/coinwatch detail.png" alt="WeatherApp" />
    </Section>
    </Container>
  </Layout>
)

export default Project