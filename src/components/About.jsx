import { Box, Center, Flex, Text, VStack, Image, Link } from "@chakra-ui/react"

const About = () => {
    return (
        <VStack>
            <Text fontSize={['30px', '50px', '60px', '70px', '80px']} margin='1em' color='black'> 01. About </Text>
            <Flex flexDirection={['column', 'column', 'row', 'row', 'row']} justifyContent='center' gap='20px'>
                <Center>
                    <Image src='photo.png' w={['287px', '287px', '287px', '287px', '287px']} />
                </Center>
                <Box backgroundColor={'pink'} w={['300px', '450px', '500px', '500px', '500px']}>
                    <Center>
                        <Text margin='1em'  fontSize={['20px', '20px', '20px', '20px', '20px']} color='black' fontWeight='bold' >
                            Hi! I'm Wai Fong from Singapore :)
                        </Text>
                    </Center>
                    <Text marginLeft='1em' marginRight='1em' fontSize={['15px', '15px', '15px', '15px', '15px']} color='grey'>
                        I graduated from college in May 2022 with a major in Computer Science.
                        Come August, I will be contributing to Autodesk as a backend software engineer.
                    </Text>

                    <Text margin='1em' fontSize={['15px', '15px', '15px', '15px', '15px']} color='grey'>
                        Outside of work, I am obsessed with bunnies, dogs, korean food, anime and mystery shows.
                        <br/>
                        (I also spend too much time on Reddit and Twitter)
                    </Text>
                    
                    <Text margin='1em' fontSize={['15px', '15px', '15px', '15px', '15px']} color='grey'>
                        Connect with me!
                        <br/>
                        <Link color='teal' href='www.linkedin.com/in/lee-wai-fong'>
                            LinkedIn
                        </Link>
                    </Text>
                </Box>
            </Flex>
        </VStack>
    )
}

export default About