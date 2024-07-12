import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardBusTime from "./CardBusTime";
import {
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

const Bustime = [{}];

const ProjectsSection = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");

  useEffect(() => {
    const coursesData = require("./MOCK_DATA.json");
    setCourses(coursesData);
  }, []);

  const handleChangeCourse = (event) => {
    setCourse(event.target.value);
  };

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
      backgroundColor="#512DA8"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="Bustime-section" fontSize="40">
        Bus time information
      </Heading>
      <FormControl>
        <FormLabel htmlFor="type" fontSize="28">
          Choose your starting location
        </FormLabel>
        <Select
          value={course}
          onChange={handleChangeCourse}
          fontSize="26"
          height={"65px"}
          background={"dark"}
          color={"darkblue"}
        >
          {uniqueCouse.map((course) => (
            <option key={course.id} value={course.tag}>
              {course.tag}
            </option>
          ))}
        </Select>
      </FormControl>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1,minmax(0,1fr))"
        gridGap={8}
      >
        {Bustime.map((project) => (
          <CardBusTime />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
