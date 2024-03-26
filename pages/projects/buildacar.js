import { Container, List, ListItem, Text, Image} from '@chakra-ui/react'
import { Title, ProjectImage} from '../../components/project'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'


const Project = () => (
  <Layout title="Build-A-Car">
    <Container mt={10} maxW="container.lg" >
    <Section delay={0.2}>
      <Title>
        Build-A-Car
      </Title>
      <List>
      <ListItem>
          <p><strong>Role:</strong> <span>Lead UI/UX Designer, Front-End Developer</span></p>
        </ListItem>
      </List>
      <Text fontSize="2xl" fontWeight="bold" mt={10}>
        Project Overview
      </Text>
      <Text mt={5}>The “Build-A-Car” functionality within the Subaru of New England’s (SNE) application is a pivotal aspect of Subaru’s retail experience. Our retailers, who have been navigating a 15-year-old interface, are in dire need of an upgrade to foster their business growth. I was entrusted with leading the development of a new user experience design aimed at tackling the challenge of varied retailer preferences and usage patterns, a principal UX redesign was undertaken to create a universally efficient and intuitive system without compromising individual retailer identity.
      </Text>
      <br></br>
      <p>This is an image of the old interface design:</p>
      <ProjectImage src="/images/projects/Build-A-Car Old.png" alt="Build-A-Car" />
      <Text fontSize="2xl" fontWeight="bold" mt={10}>
        Challenge
      </Text>
      <Text mt={5}>Retailers had divergent design preferences and goals, with usage intensity varying across the board. Striking a balance to accommodate this diversity without diluting the system’s effectiveness or creating an ambiguous user interface was paramount.
      </Text>
      <Text fontSize="2xl" fontWeight="bold" mt={10}>
        Avoiding a Design Identity Crisis
      </Text>
      <Text mt={5}>The goal was to create a new version of the Build-A-Car interface that would enable large retailers to utilize the system without neglecting the needs of smaller retailers. It needed to be universally applicable. To sidestep the pitfalls of a one-size-fits-all solution and a design identity crisis, I adopted a strategy I call harmonized user-centric design. This approach aims to embrace the diversity of user needs while seeking commonalities that inform a cohesive design. I began by segmenting the user base to understand the different roles and their specific needs.
      </Text>
      <ProjectImage src="/images/projects/User Breakdown.png" alt="Build-A-Car" />
      <Text mt={5}>After surveying all 65 retailers, I conducted meetings with general managers, sales managers, and salespersons from 10 selected retailers. Additionally, I engaged with both existing and potential customers to gain a deeper understanding of their behaviors and preferences when purchasing a car. Following these discussions, my team and I reviewed the analytics in detail. Through this comprehensive approach, we identified six key insights:
      </Text>
      <ProjectImage src="/images/projects/6 inghts.jpg" alt="Build-A-Car" />
      <Text mt={5}>So we had insights from our retailers, we understood their needs and challenges. I needed something to help guide design decision, especially when I navigate the complexity of individual preferences and avoid the trap of generic solutions. It led me to three design strategies. 
      </Text>
      <ProjectImage src="/images/projects/3 design principal.jpg" alt="Build-A-Car" />
      <Text mt={5}>Our retailers are the cornerstone of SNE, and they drive the “Build-A-Car” experience. My design decisions are tailored to their daily realities. I craft features, curate information, and choose a language that speaks to them directly, always putting their specific needs at the forefront of our innovation.
      </Text>
      <Text mt={5}>I design for clarity of action, not the retention of attention. Our interface prioritizes elements that require immediate retailer interaction. If there’s no action needed, I keep it out of the way. Our retailers should spend more time engaging customers and less time navigating the application.
      </Text>
      <Text mt={5}>SNEDrive aims to excel at simplifying the car customization process. While there’s the temptation to be good at many things, my focus is to be exceptional at this core function. I prioritize making “Build-A-Car” the best in its class before extending into other areas. Our mission is to streamline, not to overextend.
      </Text>
      <Text mt={5}>The principles helped me a lot throughout the process. Each time I couldn’t work out how to approach a problem, I’d come back to them to help me get back on track.
      </Text>
      <Text fontSize="2xl" fontWeight="bold" mt={10}>
      Crafting Clarity from Complexity
      </Text>
      <Text mt={5}>Tackling this project, the main hurdle was figuring out how to make a lot of information straightforward and navigable. Initially, I set up the system so users would choose a car line and then a model, but feedback from testing showed us it wasn’t quite hitting the mark—it still felt too cluttered. So, I went back to the drawing board. The solution? Combining the car line and model options into one step and adding a filter function to help users quickly zero in on what they’re looking for. This approach really helped us cut through the noise and present the information in a way that’s clear without overwhelming anyone. Now, finding the right car doesn’t feel like a chore anymore.
      </Text>
      <Image src="/images/projects/Build-A-Car.gif" alt="buildacar" mt={10}  width="100%"/>
      <Text mt={5}>One key insight from our research really stood out to me: retailers were concerned about “losing everything” while configuring a new car, especially when interruptions occurred—something quite common when juggling multiple customers.
      </Text>
      <Text mt={5}>To address this, I implemented “Save as Draft” and “View Draft” functionalities. These features allow retailers to handle interruptions without stress, confident that their progress is saved and can be effortlessly picked up later. The introduction of these features was met with great enthusiasm, significantly enhancing workflow and efficiency for our busy retailers.
      </Text>

    </Section>
    </Container>
  </Layout>
)

export default Project