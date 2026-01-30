import React from 'react';
import { anticipate, easeInOut, motion } from 'motion/react';

const CircleAniamtion = () => {
    return (
        <div className='h-screen'>
            <motion.div
                animate={{
                    x: 100,
                    y: 500
                }}
                transition={{
                    duration: 5,
                    delay: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
                className="h-50 w-50 bg-lime-400 rounded-full flex items-center justify-center"
            >
                Circle!
            </motion.div>
        </div>
    );
};

export default CircleAniamtion;