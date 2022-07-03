import { Box, Image, Center } from "@chakra-ui/react"
import { useAnimation } from 'framer-motion'
import { MotionDiv, MotionSpan } from "./helper"

const Landing = () => {
    const parallaxControls = useAnimation()
    const handleParallaxMouseMove = (e) => {
        const offset = 100
        const moveX = (e.clientX - window.innerWidth) / offset
        const moveY = (e.clientY - window.innerHeight) / offset
        parallaxControls.start({
            x: moveX,
            y: moveY
        })
    }

    const starsAnimationProp = {
        transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "loop"
        },
        animateOne: {
            opacity: [0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25]
        },
        animateTwo: {
            opacity: [1, 0.75, 0.5, 0.25, 0, 0.25, 0.5, 0.75]
        }
    }


    return (
        <Box w='100vw' h='100vh' bgGradient="linear(to-b, #020111 10%,#3a3a52 100%)" position='relative' onMouseMove={handleParallaxMouseMove}>
            <MotionDiv animate={{ opacity: [0, 1] }} transition={{ delay: 2, duration: 0.7 }} position='absolute' h='100%' w='100%'>
                <MotionDiv animate={starsAnimationProp.animateOne} transition={starsAnimationProp.transition} position='absolute' h='100%' w='100%'>
                    <Image src='stars1.png' position='absolute' h='100%' w='100%' />
                </MotionDiv>

                <MotionDiv animate={starsAnimationProp.animateTwo} transition={starsAnimationProp.transition} position='absolute' h='100%' w='100%'>
                    <Image src='stars2.png' position='absolute' h='100%' w='100%' />
                </MotionDiv>

                <MotionDiv animate={parallaxControls} position='absolute' h='100%' w='100%'>   
                    <Image src='moon.svg' position='absolute' right='0' top='0' margin='1rem' h={['150px', '200px']} maxH='30%'/>
                </MotionDiv>
                <Image src='lighthouse.svg' position='absolute' left='0' bottom='0' h={['350px', '450px', '500px']} maxH='45%'/>
            </MotionDiv>

            <Center w='100%' h='100%' position='absolute' display='flex' flexDirection='column' >
                <TextAnimation className='landing-title' text='Wai Fong Lee' color='pink' fontSize={['2.5rem', '3.5rem']} />
                <MotionDiv
                    animate={{ opacity: [0, 1] }} transition={{ delay: 1.8, duration: 0.2 }}
                    className='landing-title'
                    color='white'
                    fontSize={['1.6rem','2rem']}
                >
                    Software developer
                </MotionDiv>

            </Center>

        </Box>

    )
}


const TextAnimation = (props) => {
    const textAnimationProp = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: props.speed ? props.speed : 0.15
            }
        }
    }

    const letterAnimationProp = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1
        }
    }

    const mapLetterAnimation = (content) => (
        content.split("").map((c, ind) => (
            <MotionSpan key={c + ind} variants={letterAnimationProp}>
                {c}
            </MotionSpan>
        ))
    )
    
    const {text, speed, ...newProps} = props;

    return (
            <MotionDiv
                variants={textAnimationProp}
                animate="visible"
                initial="hidden"
                {...newProps}
            >
                {mapLetterAnimation(text)}
            </MotionDiv>
    )
}


/*
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
                staggerChildren: 0.15
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

    const AniText = chakra(motion.h1, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    })

    const AniSpan = chakra(motion.span, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    })

    const Test = getAniContainer()


    const viewportControl = useAnimation()
    const viewportVariant = {
        offScreen: {
            opacity: 0,
            transition: {
                ease: "easeOut",
                duration: 0.5
            }
        },
        onScreen: {
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.5
            }
        }
    }

    const onVpEntry = () => {
        viewportControl.start({
            opacity: [0,0.5,1],
            transition: {
                ease: "easeIn",
                duration: 2
            }
        })
    }
    
    const onVpLeave = () => {
        viewportControl.start({
            opacity: 0,
            transition: {
                ease: "easeOut",
                duration: 1
            }
        })
    }


    return (
        <Box w='100%' h='100vh' bgGradient="linear(to-b, #020111 10%,#3a3a52 100%)" position='relative' onMouseMove={handleMouseMove} >
            <Test
                animate={{ opacity: [0, 1] }} transition={{ delay: 2, ease: "easeIn"}} position='absolute' h='100%' w='100%' >
                <ParallaxContainer position='absolute' h='100%' w='100%' animate={parallaxControls}>
                    <Image src='moon.svg' position='absolute' right='5vw' top='5vh' />
                        <Image src='cloud.svg' position='absolute' right='7vw' top='9vh' />
                </ParallaxContainer>
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

                <Test position='absolute' h='100%' w='100%'  >   
                    <motion.img src='lighthouse.svg' position='absolute' left='7vw' bottom='0vh' animate={viewportControl} onViewportLeave={onVpLeave} onViewportEnter={onVpEntry} />
                    <Image src='cloud.svg' position='absolute' left='8vw' bottom='0vh' />
                </Test>
            </Test>
            <AniText
                variants={headingAni}
                animate="visible"
                initial="hidden"
                position='absolute'
                color='white'
                h='100%' w='100%'
                fontSize='50px'
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
*/
export default Landing