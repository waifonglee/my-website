import { VStack, Box, Flex } from "@chakra-ui/react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <VStack overflowX='hidden'>
      <Landing/>
      <Flex w={['100%', '100%', '80%', '70%']} maxW='1200px' flexDirection='column' gap='3rem'>
        <About />
        <Projects/>
      </Flex>
      
    </VStack>
  );
}

export default App;
