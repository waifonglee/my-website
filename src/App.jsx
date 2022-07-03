import { VStack } from "@chakra-ui/react";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import History from "./components/History";
import { useEffect, useState } from "react";

const App = () => {
  const [headerLoaded, setHeaderLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHeaderLoaded(true)
    }, 3000)
  })

  return (
    <VStack>
      <Landing />
      {headerLoaded ?
        <VStack w={['100%', '100%', '80%', '70%']} maxW='1200px' gap='5em' >
          <About />
          <Projects />
          <History />
          <Footer />
        </VStack> : null}
    </VStack>
  );
}

export default App;
