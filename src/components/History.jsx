import { Center, Text, VStack, useMediaQuery, Box } from "@chakra-ui/react"
import { motion } from 'framer-motion'


const History = () => {

    return (
        <VStack className='section-wrapper'>
            <Text className='section-title' > 03. History </Text>
            <Center className='section-content-wrapper' flexWrap='wrap' maxWidth='80em'>
                <HistoryCard title='Autodesk' desc='Software Engineer' duration='Jul 2022 - present' animate />
                <HistoryCard title='Autodesk' desc='DevOps Engineer intern' duration='May 2021 - Nov 2021' />
                <HistoryCard title='Toppan Ecquaria' desc='System Analyst intern' duration='May 2020 - Jul 2020' />
                <HistoryCard title='National University of Singapore' desc='Bachelor of Computing' duration='Aug 2018 - June 2022' />
            </Center>
        </VStack>
    )
}

const HistoryCard = (props) => {
    const [isLargerThan25em] = useMediaQuery('(min-width: 16em)')
    const petalTransition = { duration: 5, repeatType: "loop", repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" };

    const { title, desc, duration, animate } = props
    return (
        <VStack w={isLargerThan25em ? '25em' : '100%'} h='25em' p='5' position='relative' >
            <Text className='section-text section-text-title' textAlign='center'>
                {title}
            </Text>
            <Text className='section-text' textAlign='center'>
                {desc}
            </Text>
            <Text className='section-text' my='1em' textAlign='center'>
                {duration}
            </Text>
            {
                animate ?
                    <Box position='absolute' top='0' left='0'>
                        <motion.img src='petal.svg' className="petal"
                            initial={{ offsetDistance: "0%", opacity: 0 }}
                            animate={{ offsetDistance: "100%", opacity: 1 }}
                            transition={petalTransition}
                        />
                    </Box> : null
            }
        </VStack>
    )
}





export default History