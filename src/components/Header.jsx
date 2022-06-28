import { Box, Image, chakra } from "@chakra-ui/react"
import { getAniContainer } from "./helper"
import { useAnimation, isValidMotionProp, motion } from 'framer-motion'



const Header = () => {
    const StarContainer1 = getAniContainer()
    const StarContainer2 = getAniContainer()
    const starTransition = {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop"
    }
    const ParallaxContainer = getAniContainer()
    const parallaxControls = useAnimation()

    const handleMouseMove = (e) => {
        const offset = 100
        const moveX = (e.clientX - window.innerWidth) / offset
        const moveY = (e.clientY - window.innerHeight) / offset
        parallaxControls.start({
            x: moveX,
            y: moveY
        })
    }

    const title = 'WAI FONG LEE'
    const subtitle = 'software engineer'

    const headingAni = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                staggerChildren: 0.25
            }
        }
    }

    const letterAni = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    const AniText = chakra(motion.h2, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    })

    const AniSpan = chakra(motion.span, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    })


    return (
        <Box w='100%' h='100vh' bgGradient="linear(to-b, #020111 10%,#3a3a52 100%)" position='relative' onMouseMove={handleMouseMove} >
            <ParallaxContainer position='absolute' h='100%' w='100%' animate={parallaxControls}>
                <StarContainer1 h='100%' w='100%'
                    animate={{
                        opacity: [0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25]
                    }}
                    transition={starTransition}
                    position='absolute'
                >
                    <Image src='stars1.png' h='100%' w='100%' />
                </StarContainer1>
                <StarContainer2 h='100%' w='100%'
                    animate={{
                        opacity: [1, 0.75, 0.5, 0.25, 0, 0.25, 0.5, 0.75]
                    }}
                    transition={starTransition}
                    position='absolute'
                >
                    <Image src='stars2.png' h='100%' w='100%' />
                </StarContainer2>

                <Image src='moon.svg' position='absolute' right='5vw' top='5vh' />
                <Image src='cloud.svg' position='absolute' right='7vw' top='9vh' />
            </ParallaxContainer>
            <AniText
                variants={headingAni}
                animate="visible"
                initial="hidden"
                position='absolute'
                color='white'
                h='100%' w='100%'
            >
                {title.split("").map((c, ind) => {
                    return (
                        <AniSpan key={c + ind} variants={letterAni}>
                            {c}
                        </AniSpan>
                    )
                })}
            </AniText>
        </Box>
    )
}

export default Header