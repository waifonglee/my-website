import { Center, Text, VStack, useMediaQuery } from "@chakra-ui/react"

const History = () => {
    return (
        <VStack className='section-wrapper'>
            <Text className='section-title' > 03. History </Text>
            <Center className='section-content-wrapper' flexWrap='wrap' maxWidth='80em'>
                <HistoryCard title='Autodesk' desc='Software Engineer' duration='Jul 2022 - present' />
                <HistoryCard title='Autodesk' desc='DevOps Engineer intern' duration='May 2021 - Nov 2021' />
                <HistoryCard title='Toppan Ecquaria' desc='System Analyst intern' duration='May 2020 - Jul 2020' />
                <HistoryCard title='National University of Singapore' desc='Bachelor of Computing' duration='Aug 2018 - June 2022' />
            </Center>
        </VStack>
    )
}

const HistoryCard = (props) => {
    const [isLargerThan25em] = useMediaQuery('(min-width: 16em)')

    const { title, desc, duration } = props
    return (
        <VStack w={isLargerThan25em ? '25em' : '100%'} h='25em' p='5' >
            <Text className='section-text section-text-title' textAlign='center'>
                {title}
            </Text>
            <Text className='section-text' textAlign='center'>
                {desc}
            </Text>
            <Text className='section-text' my='1em' textAlign='center'>
                {duration}
            </Text>
        </VStack>
    )
}





export default History