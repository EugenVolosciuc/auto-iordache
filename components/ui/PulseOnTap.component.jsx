import React from 'react'
import { motion } from 'framer-motion'

const PulseOnTap = ({ children, style = {}, className = '', smallerScale = false }) => {
    return (
        <motion.span whileTap={{ scale: smallerScale ? 0.96 : 0.9 }} style={style} className={className}>
            {children}
        </motion.span>
    )
}

export default PulseOnTap