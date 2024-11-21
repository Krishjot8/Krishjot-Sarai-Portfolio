import { Container, Box, Center, Image, Heading } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavLink to="/">
        <Box pt={{ base: "20px", xl: "40px" }}>
          <Center>
            <Image
              src="/assets/KrishjotSarai.jpg"
              boxSize={{ base: "175px", md: "275px", xl: "375px" }}
              borderRadius={"full"}
              boxShadow={"Base"}
            />
          </Center>
          <Heading as="h1" color={'#FFFFF'} fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }} textAlign="center" mt={4}>
        About Me
      </Heading>
      <Container w="full" maxW="container.xl" mt={-2} minW={'sm'}>
        <Prose>
          <p>
          My name is <strong>Krishjot Sarai</strong> and I am certified as a Junior Angular Developer and enjoy building fullstack applications utilizing Angular, .NET CORE and SQL Server. I have created a variety of applications utilizing Angular for the frontend and various packages to handle state management and UI design such as Bootstrap, PrimeNG, Telerik and Angular Material while creating CRUD operational APIs utilizing .NET CORE and various packages for security such as Role Based Access Control, and JWT tokens.
          </p>
          </Prose>
          </Container>
        </Box>
      </NavLink>
    </>
  );
};

export default Home;

//h="calc(100vh)"
//Box is a div
//Flex is a box with the flex property
//Main axis is horizontal for rows and vertical columns, while cross axis is the opposite for each.
//<Box bg="green" w="full" h="100vh"></Box> --> This is full Screen, and Finally

//Golden Standard!
/*  <VStack spacing='24px' mt='24px' mb='24px'>
      <Box bg="grey" w="200px" h="150px"/>
      <Box bg="teal" w="200px" h="150px" />
      <Box bg="purple" w="200px" h="150px" />
      <Box bg="orange" w="200px" h="150px" />
      <Box bg="orange" boxSize={'4xl'} />
    </VStack>
  );
}; */

//HEADINGS
// just pass as prop and select h12345... so like html // this is for naminmg/// fontSize is for size. confusing.
//margin='auto' also centers stuff
