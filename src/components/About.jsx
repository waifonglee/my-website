import { Box, Text, VStack, Image, Link } from "@chakra-ui/react"

const About = () => {
    return (
        <VStack w='90%' margin='auto'>
            <Text className='section-title' fontSize={['3.5rem', '4rem']}> 01. About </Text>
                <Image src='photo.png' w='100%' maxWidth='60em' />
                <Box w='100%' maxWidth='60em' margin='auto' >
                    <Text className='section-text' textAlign='center' fontSize='2rem' color='black' fontWeight='medium' >
                        Hi! I'm Wai Fong from Singapore :)
                    </Text>
        
                    <Text className='section-text' color='grey'>
                        I graduated from college in June 2022 with a major in Computer Science.
                        Come August, I will be contributing to Autodesk as a backend software engineer.
                    </Text>

                    <Text className='section-text' color='grey'>
                        Outside of work, I'm obsessed with bunnies, dogs, korean food, anime and mystery shows.
                        <br/>
                        (I also spend way too much time on Reddit and Twitter)
                    </Text>
                    
                    <Text className='section-text' color='grey'>
                        Connect with me! I'm open to chatting about anything under the sun :)
                        <br/>
                        <Link color='pink' href='www.linkedin.com/in/lee-wai-fong'>
                            LinkedIn
                        </Link>
                    </Text>
                </Box>
        </VStack>
    )
}

export default About