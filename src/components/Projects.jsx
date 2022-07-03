import { Center, Flex, Text, VStack, LinkBox, LinkOverlay, useMediaQuery } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { MotionDiv } from "./helper"

const Projects = () => {
    return (
        <VStack className='section-wrapper'>
            <Text className='section-title' > 02. Projects </Text>
            <Center className='section-content-wrapper' flexWrap='wrap' gap='1em' maxWidth='80em'>
                <Project title='this page' desc='Portfolio' stack='React' link='https://github.com/waifonglee/my-website' />
                <Project title='theme bot' desc='Discord bot that curates and plays a music playlist based on your theme' stack='Go' link='' />
            </Center>
        </VStack>
    )
}

const Project = (props) => {
    const [isLargerThan38em] = useMediaQuery('(min-width: 24.5em)')
    // this query uses 1em = 16px, for some reason it doesnt resize it to 1em = 10px (as i had set 1rem = 62.5%)
    // hence 24.5 em * 16 = 38 em * 10
    const { title, desc, stack, link } = props
    return (
        <MotionDiv w={isLargerThan38em ? '35em' : '100%'} h='35em' borderWidth='1px' whileHover={{ borderColor: '#553C9A' }}>
            <LinkBox h='100%' w='100%' p='5'>
                <Flex flexDirection='column' h='100%' w='100%'>
                    <Center h='15em' w='100%' bgColor='purple.50' >
                        <Text className='section-text section-text-title' textAlign='center'>
                            {title}
                        </Text>
                    </Center>
                    <Flex h='20em' w='100%' flexDirection='column' justifyContent='space-between'>
                        <Text className='section-text' textAlign={'center'} color='black'>
                            {desc}
                        </Text>

                        <Text className='section-text' my='1em' textAlign={'center'}>
                            Built with {stack} <br />
                            <LinkOverlay href={link}>
                                github<ExternalLinkIcon ml='1' mb='0.5' w='1.4rem' />
                            </LinkOverlay>
                        </Text>
                    </Flex>
                </Flex>
            </LinkBox>
        </MotionDiv>
    )
}





export default Projects