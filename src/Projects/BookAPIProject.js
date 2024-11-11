import {
  Text,
  Link,
  HStack,
  UnorderedList,
  ListItem,
  Box,
  Container,
} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Tour = () => {
  return (
    <Container minW={"400px"} maxW="container.xl" py="5">
      <Box
        borderWidth={"1px"}
        p={{ base: "1em", md: "1.5em", lg: "2em" }}
        mt="-1"
      >
        <HStack alignItems={"center"}>
          <Text
            color={"#1B4F8C"}
            as="b"
            fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
          >
            BookAPIProject
          </Text>
          <motion.div whileHover={{ color: "green" }}>
            <Link
              href="https://github.com/Krishjot8/BookAPIProject"
              pt="1"
              isExternal
            >
              <AiOutlineGithub
                style={{
                  width: "25px",
                  height: "25px",
                  display: "inline-block",
                }}
              />
            </Link>
          </motion.div>
        </HStack>
        <Text color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
          Created an Application program Interface using .NET Core and SQL
          Server that handles CRUD Operations for items such as Books,
          Countries, Authors, Categories, Reviews and Reviewers.
        </Text>
        <UnorderedList
          color={"#1B4F8C"}
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          mt="4"
        >
          <ListItem>
            Added Controllers ,Repositories and Models in the backend.
          </ListItem>
          <ListItem>Excecuted reference loop error handling.</ListItem>
          <ListItem>
            Seeded the database using a database seeding class to fill database
            with data.
          </ListItem>
          <ListItem>Added the table relationships in SQL Server</ListItem>
          <ListItem>
            Added Migrations using DbContext to create tables in SQL Server
          </ListItem>
          <ListItem>Added Data transfer Objects</ListItem>
          <ListItem>Tested API calls using Swagger and Postman</ListItem>
          <ListItem>Initialized Git repository for version control</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Tour;
