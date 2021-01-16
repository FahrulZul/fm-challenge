import React from 'react'
import './styles.scss'
import { motion } from 'framer-motion'

const LsSidebar = ({isOpen}) => {

    const lsSidebarVariants = {
        open: {
            opacity: 1,
            x: 0
        },
        close: {
            opacity: 0,
            x: "100%",
            transition: {
                delay: 0.7
            }
        }
    }

    const lsLinkBoxVariants = {
        open: {
            transition: {
                staggerChildren: 0.07, delayChildren: 0.2 
            }
        },
        close: {
            transition: {
                staggerChildren: 0.05, staggerDirection: -1
            }
        }
    }

    const lsLiinkVariants = {
        open: {
            y: 0,
            opacity: 1
        },
        close: {
            y: 20,
            opacity: 0
        }
    }

    return (
        <motion.div
            initial={false}
            animate={
                isOpen ? "open" : "close"
            }
            className="lsSidebar"
            variants={lsSidebarVariants}
            transition={{ease: [0.43, 0.13, 0.23, 0.96]}}
        >
            <motion.div 
                className="lsSidebar-linkContainer"
                variants={lsLinkBoxVariants}
            >
                <motion.a href="#about" variants={lsLiinkVariants}>About</motion.a>
                <motion.a href="#careers" variants={lsLiinkVariants}>Careers</motion.a>
                <motion.a href="#events" variants={lsLiinkVariants}>Events</motion.a>
                <motion.a href="#products" variants={lsLiinkVariants}>Products</motion.a>
                <motion.a href="#support" variants={lsLiinkVariants}>Support</motion.a>
            </motion.div>
        </motion.div>
    )
}

export default LsSidebar
