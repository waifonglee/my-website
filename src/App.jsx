import { Flex, VStack, Text } from "@chakra-ui/react";
import Landing from "./components/Landing";
import About from "./components/About";

function App() {
  return (
    <VStack>
      <Landing/>
      <About />
    </VStack>
  );
}

export default App;
