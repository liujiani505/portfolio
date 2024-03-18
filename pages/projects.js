import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbHomeChef from '../public/images/projects/HomeChef home.png'
import thumbtranslatorapp from '../public/images/projects/translatorapp.png'
import thumbWeatherApp from '../public/images/projects/WeatherApp.png'
import thumbcoinwatch from '../public/images/projects/coinwatch.png'

const Projects = () => {
    return (
        <Container mt={10} maxW="container.lg">
                <Section delay={0.1}>
                    <Heading as="h3" fontSize={35} mb={4}>Projects</Heading>
                </Section>
                <Section delay={0.2}>
                    <SimpleGrid columns={[1,1,2]} gap={10}>
                        <ProjectGridItem id="coinwatch" title="coinwatch" thumbnail={thumbcoinwatch}>coinwatch is a cryptocurrency price tracker built with Angular and Angular Material UI.</ProjectGridItem>
                        <ProjectGridItem id="homechef" title="HomeChef" thumbnail={thumbHomeChef}>HomeChef is a recipe book with full CRUD bulit with Angular. Users can create/edit/delete recipes.</ProjectGridItem>
                        <ProjectGridItem id="translatorapp" title="Translator App" thumbnail={thumbtranslatorapp}>This is a simple translator app built with vanilla JavaScript and a translator API.</ProjectGridItem>
                        <ProjectGridItem id="weatherapp" title="WeatherApp" thumbnail={thumbWeatherApp}>This is a simple application to check weather information based on city.</ProjectGridItem>
                    </SimpleGrid>
                </Section>
        </Container>
    )
}

export default Projects

