import { Box, Center, Text, VStack, Image, Link } from "@chakra-ui/react"

const About = () => {
    return (
        <VStack className='section-wrapper'>
            <Text className='section-title'> 01. About </Text>
            <Box className='section-content-wrapper' maxWidth='60em'>
                <Center>
                    <Image src='photo.png' w='100%' maxWidth='40em' />
                </Center>

                <Text className='section-text section-text-title' textAlign='center'>
                    Hi! I'm Wai Fong from Singapore :)
                </Text>

                <Text className='section-text'>
                    I graduated from college in 2022 with a major in Computer Science and work at Autodesk as a software engineer.
                </Text>

                <Text className='section-text'>
                    Outside of work, I'm obsessed with bunnies, dogs, korean food, anime and mystery shows.
                    <br />
                    (I also spend way too much time on Reddit and Twitter)
                </Text>

                <Text className='section-text'>
                    Connect with me! I'm open to chatting about anything under the sun :)
                    <br />
                    <Link color='#553C9A' href='www.linkedin.com/in/lee-wai-fong'>
                        LinkedIn
                    </Link>
                </Text>
            </Box>
        </VStack>
    )
}

export default About