// import { Container, List, ListItem, Text, Image} from '@chakra-ui/react'
// import { Title, ProjectImage} from '../../components/project'
// import Layout from '../../components/layouts/article'
// import Section from '../../components/section'


// const Project = () => (
//   <Layout title="Build-A-Car">
//     <Container mt={10} maxW="container.md" >
//     <Section delay={0.2}>
//       <Title>
//         Build-A-Car
//       </Title>
//       <List>
//         <ListItem>
//           <p><strong>Role:</strong> <span>Lead UI/UX Designer, Front-End Developer</span></p>
//         </ListItem>
//       </List>
//       <Text fontSize="2xl" fontWeight="bold" mt={10}>
//         Project Overview
//       </Text>
//       <Text mt={5}>The "Build-A-Car" functionality within the Subaru of New England's (SNE) application is a pivotal aspect of Subaru's retail experience. Our retailers, who have been navigating a 15-year-old interface, are in dire need of an upgrade to foster their business growth. I was entrusted with leading the development of a new user experience design aimed at tackling the challenge of varied retailer preferences and usage patterns. A high-level UI/UX redesign was undertaken to create a universally efficient and intuitive system without compromising individual retailer identity.
//       </Text>
//       <br></br>
//       <p>This is an image of the old interface design:</p>
//       <ProjectImage src="/images/projects/Build-A-Car Old.png" alt="Build-A-Car Old Interface" />
//       <Text fontSize="2xl" fontWeight="bold" mt={10}>
//         Challenge
//       </Text>
//       <Text mt={5}>Retailers had divergent design preferences and goals, with usage intensity varying across the board. Striking a balance to accommodate this diversity without diluting the system's effectiveness or creating an ambiguous user interface was paramount.
//       </Text>
//       <Text fontSize="2xl" fontWeight="bold" mt={10}>
//         Avoiding a Design Identity Crisis
//       </Text>
//       <Text mt={5}>The goal was to create a new version of the Build-A-Car interface that would enable large retailers to utilize the system without neglecting the needs of smaller retailers; it needed to be universally applicable. To sidestep the pitfalls of a one-size-fits-all solution and a design identity crisis, I adopted a strategy I call harmonized user-centric design. This approach aims to embrace the diversity of user needs while seeking commonalities that inform a cohesive design. I began by segmenting the user base to understand the different roles and their specific needs.
//       </Text>
//       <ProjectImage src="/images/projects/User Breakdown.png" alt="Build-A-Car User Breakdown" />
//       <Text mt={5}>After surveying all 65 retailers, I conducted meetings with general managers, sales managers, and salespersons from 10 selected retailers. Additionally, I engaged with both existing and potential customers to gain a deeper understanding of their behaviors and preferences when purchasing a car. Following these discussions, my team and I reviewed the analytics in detail. Through this comprehensive approach, we identified six key insights:
//       </Text>
//       <ProjectImage src="/images/projects/six insights.jpg" alt="Build-A-Car six insights" />
//       <Text mt={5}>So, having gained insights from our retailers and understood their needs and challenges, I needed something to help guide design decisions, especially as I navigated the complexity of individual preferences and avoided the trap of generic solutions. This led me to three design strategies.
//       </Text>
//       <ProjectImage src="/images/projects/three design principles.jpg" alt="Build-A-Car three design principles" />
//       <Text mt={5}>Our retailers are the cornerstone of SNE, and they drive the "Build-A-Car" experience. My design decisions are tailored to their daily realities. I craft features, curate information, and choose a language that speaks directly to them, always putting their specific needs at the forefront of our innovation.
//       </Text>
//       <Text mt={5}>I design for clarity of action, not for the retention of attention. Our interface prioritizes elements that require immediate retailer interaction; if there's no action needed, I keep it out of the way. Our retailers should spend more time engaging with customers and less time navigating the application.
//       </Text>
//       <Text mt={5}>SNEDrive aims to excel in simplifying the car customization process. While there's the temptation to excel in many things, my focus is on being exceptional at this core function. I prioritize making the "Build-A-Car" feature the best in its class before extending into other areas. Our mission is to streamline, not to overextend.
//       </Text>
//       <Text mt={5}>The principles were of great help throughout the process. Each time I encountered a challenge I couldn't overcome, I would return to them to help me get back on track.
//       </Text>
//       <Text fontSize="2xl" fontWeight="bold" mt={10}>
//       Crafting Clarity from Complexity
//       </Text>
//       <Text mt={5}>In tackling this project, the main hurdle was making a wealth of information straightforward and navigable. Initially, I designed the system so users would select a car line and then a model. However, feedback from testing revealed it wasn't quite effective—it still felt too cluttered. So, I went back to the drawing board. The solution was to combine the car line and model selection into one step and introduce a filter function to help users quickly find what they're looking for. This streamlined approach significantly cut through the clutter, presenting the information clearly without overwhelming users. Now, finding the right car no longer feels like a chore.
//       </Text>
//       <ProjectImage src="/images/projects/Build-A-Car.gif" alt="buildacar" mt={10}  width="100%"/>
//       <Text mt={5}>A key insight from our research particularly stood out: retailers were concerned about "losing everything" while configuring a new car, especially amid interruptions—a common scenario when juggling multiple customers.
//       </Text>
//       <Text mt={5}>To address this issue, I implemented "Save as Draft" and "View Draft" functionalities. These features enable retailers to manage interruptions stress-free, assured that their progress is preserved and can be easily resumed later. The introduction of these features received enthusiastic feedback, significantly improving workflow and efficiency for our busy retailers.
//       </Text>
//       <ProjectImage src="/images/projects/Save and View Draft.gif" alt="Save and View Draft" mt={10}  width="100%"/>
//       <Text fontSize="2xl" fontWeight="bold" mt={10}>
//       Bringing the Design to Life
//       </Text>
//       <Text mt={5}>With the user-centric design established, the next step was to animate the static visuals, transforming them into a dynamic, fully-functional application. This phase saw the development process take center stage, focusing on implementing the refined "Build-A-Car" feature using Angular for the front end and .NET for the backend.
//       </Text>
//       <Text mt={5}>As a member of the front-end team, I played a key role in developing the user interface, which showcases a selection of available cars in a clean, grid-based layout designed for ease of access and interaction. By leveraging Angular's dynamic data binding capabilities, I ensured a seamless transition to the customization process via each car's "Configure" button. Utilizing Angular's reactive forms, I focused on making form inputs and validations responsive, providing instant feedback to guide retailers during customer interactions. Additionally, my contributions included state management enhancements, where I played a part in implementing "Save as Draft" and "View Draft" functionalities through Angular services and RxJS observables. This was instrumental in preserving user data across sessions and ensuring a fluid experience for our retailers.
//       </Text>
//       <Text mt={5}>In close collaboration with the back-end team, which leveraged .NET's capabilities, we built a solid infrastructure for the application's data operations. Working alongside .NET specialists, I contributed to defining the requirements for RESTful APIs, facilitating efficient data transfer, including customer details and car configurations.
//       </Text>
//       <Text fontSize="2xl" fontWeight="bold" mt={10}>
//       Measuring the Impact of the Redesign
//       </Text>
//       <Text mt={5}>The ultimate measure of any development effort lies in its outcomes post-implementation. For SNE's "Build-A-Car" feature, the metrics not only highlight the system's enhanced functionality but also its substantial impact on business results.
//       </Text>
//       <Text mt={5}><strong>Increase in Sales:</strong>
//       </Text>
//       <Text mt={5}>The year-on-year sales figures are revealing. In 2023, there was a remarkable 16.8% increase in car sales, showcasing the effectiveness of the streamlined purchasing process and the enhanced dealership experience provided by the SNEDrive application.
//       </Text>
//       <ProjectImage src="/images/projects/Sales Metric.png" alt="Sales Metrics" />
//       <Text mt={5}><strong>User Satisfaction and Time Savings Projections Based on User Testing Feedback:</strong>
//       </Text>
//       <Text mt={5}>While direct metrics for user satisfaction and time savings were not initially established, positive feedback from user testing—particularly about the streamlined process and the interface's clarity—suggests an estimated 40% increase in overall user satisfaction.
//       </Text>
//       <Text mt={5}>By streamlining the configuration process and minimizing the required clicks, we estimate an average time saving of 5 minutes per configuration for retailers. This results in significant time savings throughout a day. Furthermore, with the "Save as Draft" feature's implementation, retailers are estimated to recover from interruptions and resume work 50% faster than before, reducing downtime and enhancing productivity.
//       </Text>
//     </Section>
//     </Container>
//   </Layout>
// )

// export default Project


import { Container, List, ListItem, Text} from '@chakra-ui/react'
import { Title, ProjectImage} from '../../components/project'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'


const Project = () => (
  <Layout title="Build-A-Car">
    <Container mt={10} maxW="container.md" >
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
      <Text mt={5}>The &quot;Build-A-Car&quot; functionality within the Subaru of New England&apos;s (SNE) application is a pivotal aspect of Subaru&apos;s retail experience. Our retailers, who have been navigating a 15-year-old interface, are in dire need of an upgrade to foster their business growth. I was entrusted with leading the development of a new user experience design aimed at tackling the challenge of varied retailer preferences and usage patterns. A high-level UI/UX redesign was undertaken to create a universally efficient and intuitive system without compromising individual retailer identity.
      </Text>
      <br></br>
      <p>This is an image of the old interface design:</p>
      <ProjectImage src="/images/projects/Build-A-Car Old.png" alt="Build-A-Car Old Interface" />
      <Text fontSize="2xl" fontWeight="bold" mt={10}>
        Challenge
      </Text>
      <Text mt={5}>Retailers had divergent design preferences and goals, with usage intensity varying across the board. Striking a balance to accommodate this diversity without diluting the system&apos;s effectiveness or creating an ambiguous user interface was paramount.
      </Text>
      <Text fontSize="2xl" fontWeight="bold" mt={10}>
        Avoiding a Design Identity Crisis
      </Text>
      <Text mt={5}>The goal was to create a new version of the Build-A-Car interface that would enable large retailers to utilize the system without neglecting the needs of smaller retailers; it needed to be universally applicable. To sidestep the pitfalls of a one-size-fits-all solution and a design identity crisis, I adopted a strategy I call harmonized user-centric design. This approach aims to embrace the diversity of user needs while seeking commonalities that inform a cohesive design. I began by segmenting the user base to understand the different roles and their specific needs.
      </Text>
      <ProjectImage src="/images/projects/User Breakdown.png" alt="Build-A-Car User Breakdown" />
      <Text mt={5}>After surveying all 65 retailers, I conducted meetings with general managers, sales managers, and salespersons from 10 selected retailers. Additionally, I engaged with both existing and potential customers to gain a deeper understanding of their behaviors and preferences when purchasing a car. Following these discussions, my team and I reviewed the analytics in detail. Through this comprehensive approach, we identified six key insights:
      </Text>
      <ProjectImage src="/images/projects/six insights.jpg" alt="Build-A-Car six insights" />
      <Text mt={5}>So, having gained insights from our retailers and understood their needs and challenges, I needed something to help guide design decisions, especially as I navigated the complexity of individual preferences and avoided the trap of generic solutions. This led me to three design strategies.
      </Text>
      <ProjectImage src="/images/projects/three design principles.jpg" alt="Build-A-Car three design principles" />
      <Text mt={5}>Our retailers are the cornerstone of SNE, and they drive the &quot;Build-A-Car&quot; experience. My design decisions are tailored to their daily realities. I craft features, curate information, and choose a language that speaks directly to them, always putting their specific needs at the forefront of our innovation.
      </Text>
      <Text mt={5}>I design for clarity of action, not for the retention of attention. Our interface prioritizes elements that require immediate retailer interaction; if there&apos;s no action needed, I keep it out of the way. Our retailers should spend more time engaging with customers and less time navigating the application.
      </Text>
      <Text mt={5}>SNEDrive aims to excel in simplifying the car customization process. While there&apos;s the temptation to excel in many things, my focus is on being exceptional at this core function. I prioritize making the &quot;Build-A-Car&quot; feature the best in its class before extending into other areas. Our mission is to streamline, not to overextend.
      </Text>
      <Text mt={5}>The principles were of great help throughout the process. Each time I encountered a challenge I couldn&apos;t overcome, I would return to them to help me get back on track.
      </Text>
      <Text fontSize="2xl" fontWeight="bold" mt={10}>
      Crafting Clarity from Complexity
      </Text>
      <Text mt={5}>In tackling this project, the main hurdle was making a wealth of information straightforward and navigable. Initially, I designed the system so users would select a car line and then a model. However, feedback from testing revealed it wasn&apos;t quite effective—it still felt too cluttered. So, I went back to the drawing board. The solution was to combine the car line and model selection into one step and introduce a filter function to help users quickly find what they&apos;re looking for. This streamlined approach significantly cut through the clutter, presenting the information clearly without overwhelming users. Now, finding the right car no longer feels like a chore.
      </Text>
      <ProjectImage src="/images/projects/Filtering.gif" alt="Filtering" mt={10}  width="100%"/>
      <Text mt={5}>A key insight from our research particularly stood out: retailers were concerned about &quot;losing everything&quot; while configuring a new car, especially amid interruptions—a common scenario when juggling multiple customers.
      </Text>
      <Text mt={5}>To address this issue, I implemented &quot;Save as Draft&quot; and &quot;View Draft&quot; functionalities. These features enable retailers to manage interruptions stress-free, assured that their progress is preserved and can be easily resumed later. The introduction of these features received enthusiastic feedback, significantly improving workflow and efficiency for our busy retailers.
      </Text>
      <ProjectImage src="/images/projects/Save and View Draft.gif" alt="Save and View Draft" mt={10}  width="100%"/>
      <Text fontSize="2xl" fontWeight="bold" mt={10}>
      Bringing the Design to Life
      </Text>
      <Text mt={5}>With the user-centric design established, the next step was to animate the static visuals, transforming them into a dynamic, fully-functional application. This phase saw the development process take center stage, focusing on implementing the refined &quot;Build-A-Car&quot; feature using Angular for the front end and .NET for the backend.
      </Text>
      <Text mt={5}>As a member of the front-end team, I played a key role in developing the user interface, which showcases a selection of available cars in a clean, grid-based layout designed for ease of access and interaction. By leveraging Angular&apos;s dynamic data binding capabilities, I ensured a seamless transition to the customization process via each car&apos;s &quot;Configure&quot; button. Utilizing Angular&apos;s reactive forms, I focused on making form inputs and validations responsive, providing instant feedback to guide retailers during customer interactions. Additionally, my contributions included state management enhancements, where I played a part in implementing &quot;Save as Draft&quot; and &quot;View Draft&quot; functionalities through Angular services and RxJS observables. This was instrumental in preserving user data across sessions and ensuring a fluid experience for our retailers.
      </Text>
      <Text mt={5}>In close collaboration with the back-end team, which leveraged .NET&apos;s capabilities, we built a solid infrastructure for the application&apos;s data operations. Working alongside .NET specialists, I contributed to defining the requirements for RESTful APIs, facilitating efficient data transfer, including customer details and car configurations.
      </Text>
      <Text fontSize="2xl" fontWeight="bold" mt={10}>
      Measuring the Impact of the Redesign
      </Text>
      <Text mt={5}>The ultimate measure of any development effort lies in its outcomes post-implementation. For SNE&apos;s &quot;Build-A-Car&quot; feature, the metrics not only highlight the system&apos;s enhanced functionality but also its substantial impact on business results.
      </Text>
      <Text mt={5}><strong>Increase in Sales:</strong>
      </Text>
      <Text mt={5}>The year-on-year sales figures are revealing. In 2023, there was a remarkable 16.8% increase in car sales, showcasing the effectiveness of the streamlined purchasing process and the enhanced dealership experience provided by the SNEDrive application.
      </Text>
      <ProjectImage src="/images/projects/Sales Metric.png" alt="Sales Metrics" />
      <Text mt={5}><strong>User Satisfaction and Time Savings Projections Based on User Testing Feedback:</strong>
      </Text>
      <Text mt={5}>While direct metrics for user satisfaction and time savings were not initially established, positive feedback from user testing—particularly about the streamlined process and the interface&apos;s clarity—suggests an estimated 40% increase in overall user satisfaction.
      </Text>
      <Text mt={5}>By streamlining the configuration process and minimizing the required clicks, we estimate an average time saving of 5 minutes per configuration for retailers. This results in significant time savings throughout a day. Furthermore, with the &quot;Save as Draft&quot; feature&apos;s implementation, retailers are estimated to recover from interruptions and resume work 50% faster than before, reducing downtime and enhancing productivity.
      </Text>
    </Section>
    </Container>
  </Layout>
)

export default Project