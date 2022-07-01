import { VStack } from "@chakra-ui/react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <VStack overflowX='hidden'>
      <Landing/>
      <About />
      <Projects/>
    </VStack>
  );
}

export default App;
