"use client"

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export default function Animate(
    {element, children, animation, duration, styles}: 
    {element: 'div' | 'p' | 'h1', children: React.ReactNode, animation: string, duration: number, styles: string})
{
    return (
        <>
            {element == `div` &&
                <motion.div
                variants={fadeIn(animation, duration)} initial="hidden" animate="show"
                exit="hidden"
                className={styles}>
                    {children}
                </motion.div>
            }
            {element == 'p' &&
                <motion.p
                variants={fadeIn(animation, duration)} initial="hidden" animate="show"
                exit="hidden"
                className={styles}>
                    {children}
                </motion.p>
            }
            {element == 'h1' &&
                <motion.h1
                variants={fadeIn(animation, duration)} initial="hidden" animate="show"
                exit="hidden"
                className={styles}>
                    {children}
                </motion.h1>
            }
        </>
        
    );
}