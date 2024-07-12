import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CardRecentTrips from "./CardRecentTrips.js";
import {
  background,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

const Recenttrips = [
  {
  },
];

const RecentTrips = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="RecentTrips-section" fontSize='40'>
      Recent trips information
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1,minmax(0,1fr))"
        gridGap={8}
      >
        {Recenttrips.map((project) => (
          <CardRecentTrips
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default RecentTrips;
