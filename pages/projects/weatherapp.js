import { Container, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Project = () => (
  <Layout title="WeatherApp">
    <Container mt={10} maxW="container.lg" >
    <Section delay={0.2}>
      <Title>
        My Portfolio
      </Title>
      <Text mt={10}>WeatherApp is a simple weather application built with HTML, CSS and JavaScript and JQuery, using OpenWeatherMap API and Unsplash API. Users can search for a city to get daily and upcoming forecasts. </Text>

      <List my={4}>
      <ListItem>
          <p><strong>Technologies:</strong> <span>HTML, CSS, JavaScript, JQuery, OpenWeatherMap API, Unsplash API</span></p>
        </ListItem>
        <ListItem mt={5}>
          <Meta>Live Demo</Meta>
          <Link href="https://awesome-gates-c6ffa9.netlify.app/">
          https://awesome-gates-c6ffa9.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/liujiani505/weatherapp">
          https://github.com/liujiani505/weatherapp <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <ProjectImage src="/images/projects/WeatherApp Boston.png" alt="WeatherApp" />
      <ProjectImage src="/images/projects/WeatherApp Shanghai.png" alt="WeatherApp" />
    </Section>
    </Container>
  </Layout>
)

export default Project