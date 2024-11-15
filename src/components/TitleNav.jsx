import { Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const TitleNav = () => {
  return (
    <Text
      fontWeight="extrabold"
      marginLeft={6}
      marginTop={4}
      fontSize={{ base: "md", md: "lg", xl: "xl" }}
      
    >
      <Link as={ReactLink} to="/" style={{ textDecoration: "none" }}>
        <motion.div whileHover={{ scale: 1.2, color: '#FF9E0D' }}>Krishjot Sarai</motion.div>
      </Link>
    </Text>
  );
};

export default TitleNav;
