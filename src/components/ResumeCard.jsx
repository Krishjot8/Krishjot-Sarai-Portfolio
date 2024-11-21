import {
  Card,
  CardHeader,
  Text,
  Heading,
  Flex,
  Box,
  Link,
  HStack,
} from "@chakra-ui/react";
import { FcDocument } from "react-icons/fc";
import { motion } from "framer-motion";
const ResumeCard = () => {
  return (
    <Link
      href="https://drive.google.com/file/d/1TtOr0VQb2C8DRgE2IhRYopIvURK-udWn/view?usp=drive_link"
      isExternal
    >
      <motion.div whileHover={{ scale: 1.1 }}>
        <Card maxW="sm">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="6" alignItems="center" flexWrap="wrap">
               
                <Box>
                  <Heading size="sm">Krishjot Sarai</Heading>
                  <Text>Resume</Text>
                </Box>
              </Flex>

              <HStack mt="2" mx="3">
                <FcDocument
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "inline-block",
                  }}//awesome
                />
              </HStack>
            </Flex>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ResumeCard;
