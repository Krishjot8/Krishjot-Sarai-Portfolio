import { Text, Link, HStack, UnorderedList, ListItem, Box, Container } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Chat = () => {
  return (
    <Container minW={"400px"} maxW="container.xl">
      <Box borderWidth={"1px"} p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems={"center"}>
          <Text color={"#1B4F8C"} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
          StudentAdminPortal
          </Text>
          <motion.div whileHover={{ color: "#c702f3" }}>
            <Link href="https://github.com/Krishjot8/StudentAdminPortal" pt="1" isExternal>
              <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
        </HStack>
        <Text color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        Built a Portal where we display a list of students and the user has the ability to add, update and delete students from the list
        </Text>
        <UnorderedList color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
          <ListItem>Created nice looking User interface using FlexBoxGrid and Angular Material Libraries</ListItem>
          <ListItem>Added filtering, sorting, and pagination of students</ListItem>
          <ListItem>Used Controllers, Repositories and DbContext using .NET CORE.</ListItem>
          <ListItem>Added Components like student list to show and update list of students and a student-add page to add another student to the current list.</ListItem>
          <ListItem>Added Domain and Data Models to Backend</ListItem>
          <ListItem>Created Migrations to Generate SQL Server Tables.</ListItem>
          <ListItem>Added server and client side validations using FluentValidation</ListItem>
          <ListItem>Used CRUD Operations for adding, updating and deleting students.</ListItem>
          <ListItem>Added Reactive Form Validation</ListItem>
          <ListItem>Integrated Automapper functionality to map students and addresses easier.</ListItem>
          <ListItem>Tested API calls using Swagger and Postman</ListItem>
          <ListItem>Initialized Git Repository for version control</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Chat;
