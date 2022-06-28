import { chakra } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

function getAniContainer() {
    return chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    })    
}

export {
    getAniContainer
}
