import React from 'react'
import './styles.scss'
import {motion} from 'framer-motion'

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
            rotate: 0,
            transition: {
                y: {delay: 0.5},
                top: {delay: 0.5}
            }
        }
    }

    const middleVariants = {
        open: {
            y: '-50%',
            rotate: 45,
            transition: {
                rotate: {delay: 0.4}
            }
        },
        close: {
            y: '-50%',
            rotate: 0,
            transition: {
                y: {delay: 0.4}
            }
        }
    }

    const bottomVariants = {
        open: {
            bottom: '50%',
            y: '50%',
            rotate: 45,
            transition: {
                rotate: {delay: 0.4}
            }
        },
        close: {
            bottom: '0%',
            y: '0%',
            rotate: 0,
            transition: {
                y: {delay: 0.5}, 
                bottom: {delay: 0.5}
            }
        }
    }

    return (
        <div 
            className="LsMenuToggle-container"
            onClick={toggle}
        >
            <motion.span
                initial={false}
                animate={
                    isOpen ? 'open' : 'close'
                }
                variants={topVariants}
                className="top"
            ></motion.span>

            <motion.span
                initial={false}
                animate={
                    isOpen ? 'open' : 'close'
                }
                variants={middleVariants}
                className="middle"
            ></motion.span>

            <motion.span
                initial={false}
                animate={
                    isOpen ? 'open' : 'close'
                }
                variants={bottomVariants}
                className="bottom"
            ></motion.span>

            
        </div>
    )
}

export default LsMenuToggle
