import React from 'react';
import { motion } from 'motion/react';

const DragHover = () => {
    return (
        <div className='h-100 w-full border'>
            <motion.div
                drag
                whileDrag={{
                    scale: 0.9
                }}
                dragConstraints={{
                    left: 0,
                    top: 0,
                    bottom: 200,
                    right: 1000
                }}
                dragDirectionLock='true'
                className="h-50 w-50 bg-lime-600 rounded-full flex items-center justify-center">
                Dragged / Hovered!
            </motion.div>
        </div>
    );
};

export default DragHover;