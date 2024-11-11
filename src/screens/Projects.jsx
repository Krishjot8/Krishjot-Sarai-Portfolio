import { Tabs, Tab, TabList, TabPanels, TabPanel} from "@chakra-ui/react";

import Ecomm from "../Projects/EComm";
import StudentAdminPortal from "../Projects/StudentAdminPortal";
import BlogLab from "../Projects/BlogLab";
import MovieApp from "../Projects/MovieApp"
import BookApiProject from "../Projects/BookAPIProject";


const Contact = () => {
  return (
    <>
      <Tabs isFitted variant="enclosed" mt="10" >
        <TabList color={"#1B4F8C"} mb="1em">
          <Tab _selected={{ color: "white", bg: 'blue' }} fontWeight={"bold"}>
            eCommerce
          </Tab>  
          <Tab _selected={{ color: "white", bg: "#fcd700" }} fontWeight={"bold"}>
            BlogLab
          </Tab>
          <Tab _selected={{ color: "white", bg: "red" }} fontWeight={"bold"}>
            MovieApp
          </Tab>
          <Tab _selected={{ color: "white", bg: "#c702f3" }} fontWeight={"bold"}>
            StudentAdminPortal
          </Tab>
          <Tab _selected={{ color: "white", bg: "green" }} fontWeight={"bold"}>
            BookAPIProject
          </Tab>

        </TabList>
        <TabPanels>
          <TabPanel>
            <Ecomm />
          </TabPanel>
          <TabPanel>
          <BlogLab/>
          </TabPanel>
          <TabPanel>
          <MovieApp/>
          </TabPanel>
          <TabPanel>
          <StudentAdminPortal/>
          </TabPanel>
          <TabPanel > 
          <BookApiProject/>
          </TabPanel>
         
       
         
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Contact;
