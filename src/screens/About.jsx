import { Box, Container, Heading } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

const About = () => {
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
        textAlign="center"
        pt={{ base: "20px", xl: "40px" }}
        color={"#1796F3"}
      >
        Experience
      </Heading>
      <Container maxW={"container.xl"} pt="10" minW={"lg"}>
        <Box pt={{ base: "20px", xl: "40px" }}>
          <Container
            w="full"
            minW={"lg"}
            maxW="container.xl"
            mt={-12}
            borderWidth={"1px"}
          >
            <Prose>
              <h4>Courses</h4>
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Training</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/?kw=build+e&src=sac&couponCode=ST2MT110724ANEW"
                      >
                        <u>Online eCommerce Website</u>
                      </a>
                    </td>
                    <td>
                      I learned how to create a fully functional e-commerce
                      application using Angular, .NET Core, Redis, and SQL
                      Server. I created a user interface with Angular, made CRUD
                      API calls with .NET Core Entity Framework, stored data in
                      SQL Server and Redis, accepted payments with Stripe,
                      authenticated users with JSON tokens and identity, handled
                      errors with ngx Toastr. versioned my code with Git and
                      GitHub, and styled my application using Bootstrap,
                      BreadCrumbs, Font-Awesome and rxjs. Additionally, we added
                      lazyLoading in Modules and implemented Paging, Sorting,
                      Searching, and also Filtering.
                    </td>
                    <td>34 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/docker-for-net-and-angular-developers/?couponCode=NVD20PMUS"
                      >
                        <u>
                          Docker & Kubernetes for .NET and Angular developers
                        </u>
                      </a>
                    </td>
                    <td>
                      Learned how to build, test and deploy .net and angular
                      apps using docker. Created docker files for Angular and
                      .NET Core apps. Containerized SQL Server.Created Docker
                      Compose Files. Docker Commands, Virtual Machines, Docker
                      Hub, CI/CD setup with Github actions. Deploying containers
                      on Azure web apps.
                    </td>
                    <td>7 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/devops-aws-code-build-test/?srsltid=AfmBOoqlHyUzvzX4XPVv3c81dAS6xaIjcFESSXYiV8gDi-C4rseSQl7x"
                      >
                        <u>DevOps on AWS</u>
                      </a>
                    </td>
                    <td>
                      Understood the DevOps philosophies and its lifecycle,
                      implement and Manage xontinuous delivery Systems and
                      methodologies on AWS. Branching strategies, Automate
                      testing, Building the pipeline and Automate the SAM
                      Deploy.
                    </td>
                    <td>2 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/json-short-course-step-by-step-for-beginners/?utm_source=bing&utm_medium=udemyads&utm_campaign=BG-Search_DSA_GammaCatchall_NonP_la.EN_cc.US&campaigntype=Search&portfolio=Bing-USA&language=EN&product=Course&test=&audience=DSA&topic=&priority=Gamma&utm_content=deal4584&utm_term=_._ag_1323814378205514_._ad__._kw_udemy_._de_c_._dm__._pl__._ti_dat-2334538064213560:loc-190_._li_65739_._pd__._&matchtype=b&msclkid=17211da888081adb8ad07a85aa3445ba"
                    >
                        <u>JSON</u>
                      </a>
                    </td>
                    <td>
                      Learned about JSON language, Validation, Schema, PATH and
                      its syntax
                    </td>
                    <td>1 hour</td>
                  </tr>

                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/xml-step-by-step-for-beginners/?srsltid=AfmBOoosUWRGgN_C-vhz3TNPccd41wNl-fE373zNAITGpBIMvxKSdBS_"
                      >
                        <u>XML</u>
                      </a>
                    </td>
                    <td>
                      Learned about XML Language
                      , XML, Syntax, the DOM,XML
                      Namespace, XSLT, XSD - XML Schema.
                    </td>
                    <td>1 hour</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/free-cicd-pipeline-devops/?kw=FREE+CI%2F&src=sac"
                      >
                        <u>CI/CD Pipelines</u>
                      </a>
                    </td>
                    <td>
                      Covers Continuous Integration and Continuous Delivery when
                      deploying to Production. CI/CD vs DevOps. Learned about
                      Waterfall vs Agile Methodology and about Jenkins.
                    </td>
                    <td>1 hour</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/animated-sql-for-beginners/?kw=animated+SQL&src=sac"
                      >
                        <u>Animated SQL For Beginners</u>
                      </a>
                    </td>
                    <td>
                      Used PostgreSQL and PgAdmin. Usung logical operators to
                      add logic flow to your SQL queries. Common SQL Join
                      commands. Created tables, Filter Records CRUD Operations,
                      Primary and Foreign Keys, Joining Tables, Grouping &
                      Aggregating. Unions, Subquery, Distinct records and table
                      relationships.
                    </td>
                    <td>2 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/introduction-to-cloud-computing-on-amazon-aws-for-beginners/?couponCode=NVD20PMUS"
                      >
                        <u>Cloud Computing on AWS for Beginners</u>
                      </a>
                    </td>
                    <td>
                      Learned fundamental concepts of cloud computing including
                      storage, database networking, virtualization, containers
                      and cloud architecture. Configured elasticity, high
                      availibility and fault tolerance using Amazon EC2 Auto
                      Scaling and Elastic Load Balancing. Create and configure
                      storage services and upload files and objects using S3
                      buckets Amazon EBS and EFS. Used AWS elastic Beanstalk.
                      Used Devops tools on AWS for Continuous Integration. and
                      Continous Delivery. Created serverless event driven
                      architectures on Lambda.
                    </td>
                    <td>7 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/c-sharp-oop-ultimate-guide-project-master-class/?couponCode=NVD20PMUS"
                      >
                        <u>C# 10 Ultimate Guide Beginner to Advanced</u>
                      </a>
                    </td>
                    <td>
                      Learned about C# Constructors,C# interviews, .NET CORE
                      CLI, Arrays, Collections, Handling Null, Inheritance
                      Classes, Generics and Methods. Better Object Oriented
                      Programming code.
                    </td>
                    <td>61 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/csharp-beginner-to-advanced/?kw=getting+started+with+C%23&src=sac"
                      >
                        <u>Getting Started with C#</u>
                      </a>
                    </td>
                    <td>
                      Learned about C# Data Types, Functions, Loops, Hashtable,
                      Stack, Queue, Operators, Enums, Constants, Variables etc.
                    </td>
                    <td>4 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/50-projects-50-days/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Alpha_Prof_la.EN_cc.US&campaigntype=Search&portfolio=USA&language=EN&product=Course&test=&audience=DSA&topic=JavaScript&priority=Alpha&utm_content=deal4584&utm_term=_._ag_161389392955_._ad_696073743357_._kw__._de_c_._dm__._pl__._ti_dsa-1676636482719_._li_9027616_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnyiFsktFc7cKHcZ4z1l6a25uRpIkwZcNUYfr0c7maSmjy120NCMjewaAi7lEALw_wcB&couponCode=NVD20PMUS"
                      >
                        <u>50 Projects with HTML CSS & JavaScript</u>
                      </a>
                    </td>
                    <td>
                      Created projects using HTML, CSS and JavaScript that
                      relate to the DOM such as Expanding Cards, Progress Steps,
                      Rotating Navigation Animation and Hidden Search Widget.
                    </td>
                    <td>19 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/angular-material-course/?kw=angular+material&src=sac&couponCode=NVD20PMUS"
                      >
                        <u>Angular Material in Depth</u>
                      </a>
                    </td>
                    <td>
                      Learned about the 3rd party Angular Material Library annd
                      its components such as mat-Grid, Mat-Header, Mat-Cell and
                      more.
                    </td>
                    <td>2 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/real-world-app-angular-aspnet-core-web-api-and-sql/?kw=build+amazi&src=sac&couponCode=NVD20PMUS"
                      >
                        <u>Student Admin Portal</u>
                      </a>
                    </td>
                    <td>
                      Created an application where we have a list of students
                      and the user has the ability to sort, filter, paginate and
                      search students in the student list. On one page we have
                      the list of student and on another page we can add another
                      student to the student list. We used Angular to Create the
                      User Interface, .NET Core to handle the CRUD Operations in
                      the backend, and used SQL Server to create, update and
                      delete students in its database. We tested API calls using
                      Postman and Swagger UI. Integrated Form Validation and
                      Created Angular Services. In the backend, used AutoMapper
                      Dependency Injection and also FluentValidation.
                    </td>
                    <td>8 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/learn-web-development-by-building-a-blog/?couponCode=NVD20PMUS"
                      >
                        <u>BlogLab API</u>
                      </a>
                    </td>
                    <td>
                      Built a Full Stack Application using Angular, .NET Core
                      and SQL Server. In this app users have the ability to
                      login, register using JWT tokens and create blogs and also
                      comments. Users can also attach their own photos in the
                      blogs. Different users can log in and view other users
                      blogs in the application as well as adding comments to
                      other users blogs. In the Frontend we used libraries such
                      as Font-Awesome, Bootstrap and ngx-toastr. In the backend,
                      we used Cloudinary to add photos to blogs, Dapper to
                      communicate with SQL server, and added Swagger UI to test
                      our endpoints. In SQL Server, we added stored procedures
                      like account_insert, blog_delete,blog_GetByUserId,
                      blogComment_get, Photo_get and many more.
                    </td>
                    <td>16 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/angular-for-juniors-building-real-world-application/?couponCode=NVD20PMUS"
                      >
                        <u>MovieApp</u>
                      </a>
                    </td>
                    <td>
                      Built a Full Stack Application using Angular, .NET Core
                      and SQL Server. In this app users have the ability to
                      login, register using JWT tokens and create blogs and also
                      comments. Users can also attach their own photos in the
                      blogs. Different users can log in and view other users
                      blogs in the application as well as adding comments to
                      other users blogs. In the Frontend we used libraries such
                      as Font-Awesome, Bootstrap and ngx-toastr. In the backend,
                      we used Cloudinary to add photos to blogs, Dapper to
                      communicate with SQL server, and added Swagger UI to test
                      our endpoints. In SQL Server, we added stored procedures
                      like account_insert, blog_delete,blog_GetByUserId,
                      blogComment_get, Photo_get and many more.
                    </td>
                    <td>9 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/angular-for-juniors-building-real-world-application/?couponCode=NVD20PMUS"
                      >
                        <u>SQL Server Reporting Services</u>
                      </a>
                    </td>
                    <td>
                      We learned how to create different types of reports with
                      data from SQL Server databases and convert them into
                      different formats. Learned how to create tables, Matrices,
                      Lists and Subreports.
                    </td>
                    <td>2 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/creating-net-core-api/?couponCode=NVD20PMUS"
                      >
                        <u>BookAPI Project</u>
                      </a>
                    </td>
                    <td>
                      Created an API which handles CRUD operations from a
                      database using SQL Server and backend using .NET CORE and
                      Entity Framework. Used Crud Operations at all endpoints
                      such as Books, Authors, Categories, Countries, etc.
                    </td>
                    <td>25 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/playlist?list=PLbJ-fy-2JEVkpz73RDkbA7dGtn8CNgwzm"
                      >
                        <u>PragimTech SQL Server</u>
                      </a>
                    </td>
                    <td>
                      SQL Server basics. CRUD Operations. CTE’s, Queries Basics,
                      Classes, Constraints, Joins, StoredQueries Basics,
                      Classes, Constraints, Joins, Stored Procedures, Triggers,
                      Views, Data Types, Indexes,User Defined Functions,
                      Transactions, SQL Injection
                    </td>
                    <td>4 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/playlist?list=PLAC325451207E3105"
                      >
                        <u>PragimTech C# Videos</u>
                      </a>
                    </td>
                    <td>
                      Learned about C# Arrays, Comments, Loops, Operators
                      Inheritance, Type Conversions, Classes, Structs, Enums,
                      Generics Async-Await.
                    </td>
                    <td>10 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/?couponCode=NVD20PMUS"
                      >
                        <u>MySQL Bootcamp</u>
                      </a>
                    </td>
                    <td>
                      Creating Database & tables, Created an Instagram Clone,
                      Inserting Data, Table Joins, Data types. String Functions
                      and Aggregate Functions.
                    </td>
                    <td>36 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/mysql-dba-for-beginners/?couponCode=NVD20PMUS"
                      >
                        <u>My SQL Database Administration</u>
                      </a>
                    </td>
                    <td>
                      I learned about creating queries using MySQL Workbench
                      also created tables which included relational databases,
                      foreign keys, creating and altering, constraints, stored
                      procedures, triggers, CRUD operations. We understood
                      common relational Database Management Systems. and
                      managing users and permissions through administration.
                    </td>
                    <td>7 hours</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=NVD20PMUS"
                      >
                        <u>HTML5 and CSS3 Fundamentals</u>
                      </a>
                    </td>
                    <td>
                      I created a complete website with navigation using HTML
                      and CSS and also included Forms, Links, and video HTML.
                    </td>
                    <td>5 hours</td>
                  </tr>
                </tbody>
              </table>
              <h4>Certifications</h4>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Verification</th>
                    <th>Issued</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        target="_blank"
                        href="https://interstate21.com/certificate/?code=3J04KWF"
                      >
                        <u color="red">Junior Angular Developer</u>
                      </a>
                    </td>
                    <td>Angular Developer Certified Level 1</td>
                    <td>Interstate 21: 3J04KWF</td>
                    <td>October 2022</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h4>Education</h4>
              <table>
                <thead>
                  <tr>
                    <th>College</th>
                    <th>Degree</th>
                    <th>Dates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lone Star College</td>
                    <td>Mobile/Application Development</td>
                    <td>March 2024 – Present</td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <h4>Work Experience & Internships</h4>
              <table>
                <thead>
                  <tr>
                    <th>Employer</th>
                    <th>Title</th>
                    <th>Duty</th>
                    <th>Dates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Medical Billing Service</td>
                    <td>Office Assistant</td>
                    <td>
                      I Entered and sorted patient data for insurance companies
                      and also documented and organized files.
                    </td>
                    <td>July 2018-July 2019</td>
                  </tr>
                  <tr>
                    <td>Axis Epc</td>
                    <td>Junior Developer</td>
                    <td>
                      Solving company's basic programming problems i.e. creating
                      database, modify Angular applications, fixing .net core
                      application bugs, Testing etc.
                    </td>
                    <td>2022-Present</td>
                  </tr>
                  <tr>
                    <td>Jaarvis Technologies</td>
                    <td>Junior Full Stack Developer</td>
                    <td>Created the company websites using HTML, CSS, JavaScript and WordPress.
                      I also learned how to test plugins using JMeter as well as learning more about Continous Integration and Continous Delivery..
                    </td>
                    <td>September 2023 - October 2023</td>
                  </tr>
                </tbody>
              </table>
              <hr />
            </Prose>
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default About;
