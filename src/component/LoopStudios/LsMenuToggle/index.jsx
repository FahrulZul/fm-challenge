import React from 'react'
import './styles.scss'
import {motion, useCycle} from 'framer-motion'

const LsMenuToggle = ({isOpen, toggle}) => {

    const topVariants = {
        open: {
            top: '50%',
            y: '-50%',
            rotate: -45,
            transition: {
                rotate: {delay: 0.4}
            }
        },
        close: {
            top: '0%',
            y: '0%',
            rotate: 0
        }
    }

    const middleVariants = {
        open: {
            top: '50%',
            y: '-50%',
            rotate: 45,
            transition: {
                rotate: {delay: 0.4}
            }
        },
        close: {
            top: '50%',
            y: '-50%',
            rotate: 0
        }
    }

    const bottomVariants = {
        open: {
            top: '50%',
            y: '-50%',
            rotate: 45,
            transition: {
                rotate: {delay: 0.4}
            }
        },
        close: {
            top: '100%',
            y: '-100%',
            rotate: 0
        }
    }

    return (
        <div 
            className="LsMenuToggle-container"
            onClick={toggle}
        >
            <motion.span
                animate={
                    isOpen ? 'open' : 'close'
                }
                variants={topVariants}
                className="top"
            ></motion.span>

            <motion.span
                animate={
                    isOpen ? 'open' : 'close'
                }
                variants={middleVariants}
                className="middle"
            ></motion.span>

            <motion.span
                animate={
                    isOpen ? 'open' : 'close'
                }
                variants={bottomVariants}
                className="bottom"
            ></motion.span>

            {/* <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span> */}
            
        </div>
    )
}

export default LsMenuToggle
