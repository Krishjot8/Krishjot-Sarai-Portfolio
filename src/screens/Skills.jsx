import { Heading, Container } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const Skills = () => {
  return (
    <Container maxW="container.xl" minW={"lg"}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
        textAlign="center"
        pt={{ base: "20px", xl: "40px" }}
        color={"#1796F3"}
      >
        Technical Skills
      </Heading>

      <Container maxW="container.xl" borderWidth={"1px"} mt="3">
        <Prose>
          <h4>Programming Languages</h4>
          <ul>
            <li>
              <b>JavaScript:</b> &emsp;Mastery in creating variables, arrays,
              and objects to store data, clean function design, use of methods
              to loop through data, conditional logic, and operators.
            </li>
            <li>
              <b>TypeScript:</b> &emsp;Knowledgeable on utilizing type safety to
              help prevent errors and make code more readable
            </li>
            <li>
              <b>HTML & CSS:</b> &emsp;Strong command on creating highly
              accessible and user-friendly client applicatons
            </li>
            <li>
              <b>C#:</b> &emsp;Proficient in object-oriented programming (OOP) with a focus on classes, interfaces, inheritance, and polymorphism. Skilled in creating and managing APIs with ASP.NET Core, implementing data models, and using LINQ for efficient data queries.
            </li>
            <li>
              <b>Python:</b> &emsp;Comfortable with fundamental Python concepts such as variables, data types, control flow (if statements, loops), and functions. Gained hands-on experience with writing basic scripts and solving problems through online coursework, and continuing to build foundational skills for more advanced projects.
            </li>
          </ul>

          <hr />
          <h4>Front End Frameworks</h4>
          <ul>
            <li>
              <b>Angular</b> &emsp; constructing components, services and
              models; creating forms with client-side validation. Handling
              Errors using interceptors.
            </li>
          </ul>

          <h4>Back End Frameworks</h4>
          <ul>
            <li>
              <b>ASP.NET Core</b> &emsp; A high-performance, cross-platform framework for building modern web applications and APIs. Proficient in creating scalable backend services using controllers, services, and middleware, with expertise in integrating Entity Framework Core for database management, implementing RESTful APIs, and utilizing Swagger UI for API documentation.
            </li>
          </ul>

          <hr />
          <h4>Databases</h4>
          <ul>
            <li>
              <b>Microsoft SQL Server</b> &emsp; A powerful relational database management system used for storing and managing data with high scalability and security. Experienced in writing SQL queries, creating stored procedures, and working with Entity Framework Core for backend integration in .NET applications. I used this for many projects including BlogLab, StudentAdminPortal, and Amazon eCommerce Application.
            </li>
            <li>
              <b>MySQL</b> &emsp; An open-source relational database known for its speed and reliability, often used in web applications. Proficient in SQL query writing, database design, and optimizing performance for smaller to medium-sized applications.
            </li>
            <li>
            <b>Microsoft Access</b> &emsp;A desktop relational database used for creating small-scale applications. Skilled in building databases, creating forms, and generating reports for business processes and internal data management. Created and learned many Access databases such as Hotel Management, eCommerce Database, Hospital Database and many more.
            </li>
            <li>
            <b>Redis</b> &emsp; An in-memory NoSQL database used primarily for caching, real-time data processing, and session management. Familiar with using Redis for fast data access in high-performance applications and message queueing. I used it with the eCommerce application.
            </li>
          </ul>
          <hr />
          <h4>Cloud Services</h4>
          <ul>
            <li>
              <b>AWS</b> &emsp; Familiar with the fundamentals of cloud computing, including services like EC2, S3, and RDS for scalable hosting and storage. Basic understanding of deploying and managing applications in a cloud environment.
            </li>
            <li>
              <b>Docker</b> &emsp; Basic understanding of containerization, creating Dockerfiles, and using containers to package applications for consistent and efficient deployment. Familiar with running and managing Docker containers in development environments.
            </li>
          </ul>

          <h4>Content Management Systems (CMS)</h4>
          <ul>
            <li>
              <b>WordPress</b> &emsp;Experience in building and customizing websites, creating themes, and managing plugins for dynamic content management.
            </li>
          </ul>
          <hr />
        </Prose>
      </Container>
    </Container>
  );
};

export default Skills;
