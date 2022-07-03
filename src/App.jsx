import { VStack } from "@chakra-ui/react";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import History from "./components/History";
import { MotionDiv } from "./components/helper";

function App() {
  return (
    <VStack>
      <Landing/>
      <VStack w={['100%', '100%', '80%', '70%']} maxW='1200px' gap='5em' >
        <About />
        <Projects/>
        <History/>
        <Footer/>
      </VStack>
    </VStack>
  );
}

export default App;
