import { Text, Link, HStack, UnorderedList, ListItem, Box, Container } from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Event = () => {
  return (
    <Container minW={"400px"} maxW="container.xl">
      <Box borderWidth={"1px"} p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1">
        <HStack alignItems={"center"}>
          <Text color={"#1B4F8C"} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
            Movie App
          </Text>
          <motion.div whileHover={{ color: "red" }}>
            <Link href="https://64867eb409e5ab7935779221--vermillion-tartufo-efecf9.netlify.app/" isExternal>
              <FiExternalLink style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ color: "red" }}>
            <Link href="https://github.com/Krishjot8/Movie-App" pt="1" isExternal>
              <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
        </HStack>
        <Text color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
         Built a Great Movies Application integrated with real world movie API data using Angular and Node.JS.
        </Text>
        <UnorderedList color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
          <ListItem>Built frontend using PrimeNG and rxjs libraries</ListItem>
          <ListItem>Fetch real world Movie data using API Key</ListItem>
          <ListItem>Added models and services like movies and Tv Show services to fetch data.</ListItem>
          <ListItem>Integrated PrimeNG Components like slider, pagination and carousel components.</ListItem>
          <ListItem>Added Routing Navigation and the ability to filter, search and paginate movies</ListItem>
          <ListItem>Use of Git Repository for version control: Version control with Git.</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default Event;
