import React, { useState } from "react";

import {
  Box,
  Flex,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Text,
  MenuItem

} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "../components/NavLink";

const NavBar = () => {
 
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");

  return (
    <Box>
      {isLargerThan500 ? (
        <>
          <Flex flexDirection="row" justifyContent="space-evenly">
         
            
            <NavLink to="/" onClick={() => handleLinkClick("/")} active={activeLink === "/"}>
              <Text as="b" fontSize={{ base: "md", md: "lg", xl: "xl" }}>
                Krishjot Sarai
              </Text>
            </NavLink>
            <NavLink
              to="/experience"
              onClick={() => handleLinkClick("/experience")}
              active={activeLink === "/experience"}
            >
              <Text fontSize={{ base: "md", md: "lg", xl: "xl" }}>Experience</Text>
            </NavLink>
            <NavLink
              to="/skills"
              onClick={() => handleLinkClick("/skills")}
              active={activeLink === "/skills"}
            >
              <Text fontSize={{ base: "md", md: "lg", xl: "xl" }}>Skills</Text>
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => handleLinkClick("/projects")}
              active={activeLink === "/projects"}
            >
              <Text fontSize={{ base: "md", md: "lg", xl: "xl" }}>Projects</Text>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              active={activeLink === "/contact"}
            >
              <Text fontSize={{ base: "md", md: "lg", xl: "xl" }}>Contact</Text>
            </NavLink>
          </Flex>
        </>
      ) : (
        <Flex mt="4" gap="4">
          <Menu>
            <MenuButton as={Button} rightIcon={<HamburgerIcon />} variant="link" fontSize="xl" />

            <MenuList>
              <MenuItem>
                <NavLink to="/" onClick={() => handleLinkClick("/")}>
                  About Me
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/experience" onClick={() => handleLinkClick("/experience")}>
                  Experience
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/skills" onClick={() => handleLinkClick("/skills")}>
                  Skills
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/projects" onClick={() => handleLinkClick("/projects")}>
                  Project
                </NavLink>
              </MenuItem>

              <MenuItem>
                <NavLink to="/contact" onClick={() => handleLinkClick("/contact")}>
                  Contact
                </NavLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )}
    </Box>
  );
};

export default NavBar;
