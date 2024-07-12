import { ChakraProvider } from "@chakra-ui/react"; 
import Header from "./Header"; 
import LandingSection from "./LandingSection"; 
import BusTime from "./BusTime"; 
import SettingsMe from "./SettingsMe"; 
import Footer from "./Footer"; 
import { AlertProvider } from "../context/alertContext"; 
import RecentTrips from "./RecentTrips.js"


function HomePage() { 
 return ( 
   <ChakraProvider> 
     <AlertProvider> 
       <main> 
       <Header />
       <LandingSection />
       <BusTime />
       <RecentTrips />
       <SettingsMe />
       <Footer />
       </main> 
     </AlertProvider> 
   </ChakraProvider> 
 ); 
} 

export default HomePage;