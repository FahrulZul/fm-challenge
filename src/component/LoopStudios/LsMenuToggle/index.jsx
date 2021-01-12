import React from 'react'
import './styles.scss'
import {motion, useCycle} from 'framer-motion'

const LsMenuToggle = ({toggle}) => {

    const [isOpen, toggleOpen] = useCycle(false, true)

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
            y: '-50%',
            rotate: 45,
            transition: {
                rotate: {delay: 0.4}
            }
        },
        close: {
            y: '-50%',
            rotate: 0
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
            rotate: 0
        }
    }

    return (
        <div 
            className="LsMenuToggle-container"
            onClick={() => toggleOpen()}
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

            
        </div>
    )
}

export default LsMenuToggle
