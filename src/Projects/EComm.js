import React from "react";
import { Text, Link, HStack, UnorderedList, ListItem, Box, Container} from "@chakra-ui/react";
import { AiOutlineGithub } from "react-icons/ai";

import { motion } from "framer-motion";

const EComm = () => {
  return (
    <Container minW={'400px'} maxW='container.xl'>
      <Box borderWidth={"1px"} p={{ base: "1em", md: "1.5em", lg: "2em" }} mt="-1" >
        <HStack alignItems={"center"}>
          <Text color={"#1B4F8C"} as="b" fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}>
            eCommerce Project
          </Text>
      
          <motion.div whileHover={{ color: "blue" }}>
            <Link href="https://github.com/Krishjot8/SkiNet-Ecommerce-App" pt="1" isExternal>
              <AiOutlineGithub style={{ width: "25px", height: "25px", display: "inline-block" }} />
            </Link>
          </motion.div>
        </HStack>
        <Text color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
        I built an eCommerce site using Angular, .NET Core, Redis and SQL Server. The site has features such as user accounts, login security, shop, shopping baskets, orders, orderdetails, and many checkout pages. We added stripe to take in as a fake payment method to purchase products. The site is secure and uses a variety of server and client-side security measures to protect user data.
        </Text>
        <UnorderedList color={"#1B4F8C"} fontSize={{ base: "sm", md: "md", lg: "lg" }} mt="4">
          <ListItem>
          Built an eCommerce site using Angular, .NET Core, Redis and SQL Server.
          </ListItem>
          <ListItem>
          Created Controllers, DbContexts, Models, Services and Repositories using Entity Framework.
          </ListItem>
          <ListItem>Used JWT token-based authentication and password hashing to secure the site.</ListItem>
          <ListItem>Developed API endpoints for Accounts, Products, Orders, Payments and Errors</ListItem>
          <ListItem>Added Paging, Filtering, Sorting and Searching for shopping products in the frontend</ListItem>
          <ListItem>Created a responsive design for the frontend using libraries like Bootstrap, Font-Awesome ngx-spinner, ngx-toastr, and rxjs.</ListItem>
          <ListItem>
          Used FormControl and FormGroup for form validation.
          </ListItem>
          <ListItem>Handled errors using rxjs observables with try and catch blocks in the frontend inside interceptors and exeptions, Responses and Validation Error Response in the backend.</ListItem>
          <ListItem>Added Migrations to the backend to create SQL Server tables.</ListItem>
          <ListItem>Used AutoMapper to map objects from one type to another.</ListItem>
          <ListItem>Added Backend services like Token, Order and PaymentServices</ListItem>
          <ListItem>Implemented the Unit of Work Pattern</ListItem>
          <ListItem>Integrated Stripe for purchasing products using fake payment method</ListItem>
          <ListItem>Used Redis Database to store shopping basket.</ListItem>
          <ListItem>Used a Git repository for version control.</ListItem>
        </UnorderedList>
      </Box>
    </Container>
  );
};

export default EComm;
