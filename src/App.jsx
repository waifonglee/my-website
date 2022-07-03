import { VStack } from "@chakra-ui/react";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/footer";
import Projects from "./components/Projects";

function App() {
  return (
    <VStack>
      <Landing/>
      <VStack w={['100%', '100%', '80%', '70%']} maxW='1200px' gap='3em' >
        <About />
        <Projects/>
        <Footer/>
      </VStack>
    </VStack>
  );
}

export default App;
