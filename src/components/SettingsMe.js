import React, { useEffect } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Select,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { useState } from "react";
import profilePic from "../images/logo.png"

import { Avatar } from "@chakra-ui/react";

/**
 * Covers a complete form implementation using formik and yup for validation
 */
const SettingsMe = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesData = require("./MOCK_DATA.json");
    setCourses(coursesData);
  }, []);


  const getUnique = (arr, comp) => {
    const unique = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  };

  const uniqueCouse = getUnique(courses, "tag");


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" h="1500px" p={32} alignItems="flex-start">
        <Heading as="h1" id="SettingsMe-section" fontSize='40'>
        Settings
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel htmlFor="location" fontSize='28'>Location</FormLabel>
                <Select
                  id="location"
                  name="location"
                  background={"dark"}
                  color={"darkblue"}
                  fontSize='26' height={'65px'}
                >
                  {uniqueCouse.map((course) => (
                    <option key={course.id} value={course.tag}>
                      {course.tag}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="language" fontSize='28'>The language</FormLabel>
                <Select
                  id="language"
                  name="language"
                  background={"dark"}
                  color={"darkblue"}
                  fontSize='26' height={'65px'}
                >
                  <option value="Arabic">العربية</option>
                  <option value=" English">
                     English
                  </option>
                </Select>
              </FormControl>
            </VStack>
          </form>
        </Box>
        
      </VStack>
      <div>
      <VStack spacing={4} alignItems="center">
        <Avatar sx={{ width: 64, height: 64}} src={profilePic} size="2x1" name="logo" />
      </VStack>
      </div>
    </FullScreenSection>
  );
};

export default SettingsMe;
