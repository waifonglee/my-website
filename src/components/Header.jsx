import { Box, Image } from "@chakra-ui/react"
import { getAniContainer } from "./helper"



const Header = () => {
    const StarContainer = getAniContainer()
    const starTransition = {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop"
    }

    return (
        <Box w='100%' h='100vh' bgGradient="linear(to-b, #20202c 0%,#515175 100%)" position='relative' >
            <StarContainer h='100%' w='100%'
                animate={{
                    opacity: [0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25]
                }}
                transition={ starTransition }
                position='absolute'
            >
                <Image src='stars1.png' h='100%' w='100%' />
            </StarContainer>
            <StarContainer h='100%' w='100%'
                animate={{
                    opacity: [1, 0.75, 0.5, 0.25, 0, 0.25, 0.5, 0.75]
                }}
                transition={ starTransition }
                position='absolute'
            >
                <Image src='stars2.png' h='100%' w='100%'/>
            </StarContainer>
            <Image src='moon.svg' position='absolute' right='5vw' top='5vh' />
            <Image src='cloud.svg' position='absolute'right='7vw' top='9vh' />
        </Box>
    )
}

export default Header