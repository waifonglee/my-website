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
                    <Image src='moon.svg' position='absolute' right='0' top='0' m='2em' h={['200px', '250px']} maxH='50%' />
                    <Image src='lighthouse.svg' position='absolute' left='0' bottom='0' h={['350px', '450px', '500px']} maxH='45%' />
                </MotionDiv>
            </MotionDiv>

            <Center w='100%' h='100%' position='absolute' display='flex' flexDirection='column' >
                <TextAnimation className='landing-title' text='Wai Fong Lee' color='pink' fontSize='3.5em' />
                <TextAnimation className='landing-title' text='Software engineer' color='white' fontSize='2em' stagger='0.1' />
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
                staggerChildren: props.stagger ? parseFloat(props.stagger) : 0.15
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

    const { text, speed, ...newProps } = props;

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


export default Landing