import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack } from "@chakra-ui/react";


/**
 * This component illustrates the use of both the useRef hook and useEffect hook.
 * The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation.
 * The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted.
 * Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements.
 */
const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
      fontSize='200%'
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#Bustime" onClick={handleClick("Bustime")}>
              Bus time
              {/* <img src={ImgSetting} alt=""></img> */}
              </a>
              <a href="#RecentTrips" onClick={handleClick("RecentTrips")}>
              Recent trips
              </a>
              <a href="#SettingsMe" onClick={handleClick("SettingsMe")}>
              Settings
              </a>
              <a href="/" onClick={handleClick("Sign_out")}>
              Sign out
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
