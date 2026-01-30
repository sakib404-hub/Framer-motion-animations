import React from 'react';
import { motion } from "motion/react"

const FirstAnimation = () => {
    return (
        <div className='min-h-screen border-2 border-red-300 p-4'>
            <motion.div
                animate={{
                    x: [0, 800, 800, 0, 0],
                    y: [0, 0, 400, 400, 0],
                }}
                transition={{
                    duration: 6,
                    delay: 1,
                    repeat: Infinity,
                    ease: 'anticipate'
                }}
                className='h-50 w-50 border-2 border-black bg-green-500 text-white'>
                Box!
            </motion.div>
        </div>
    );
};

export default FirstAnimation;