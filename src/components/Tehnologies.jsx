import React from "react";
import git from '../assets/github.png'
import mongo from '../assets/mongo.png'
import react from '../assets/react.png'
import firebase from '../assets/firebase.png'
import js from '../assets/javascript.png'
import tw from '../assets/tailwind.png'
import { motion } from "framer-motion"

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",

        }
    }
})
const Tehnologies = () => {


    return (
        <div id="skills" className="border-b border-neutral-800 pb-24">
            <motion.div
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1}}
                className="my-20 text-center text-4xl">Technologies</motion.div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants=
                                {iconVariants(2)}
                                initial="initial"
                                animate="animate"

                            className="rounded-2xl border-4 border-neutral-800 p-4">
                  <img src={git} width={40}/>
                </motion.div>
                <motion.div
                    variants=
                        {iconVariants(6)}
                    initial="initial"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={mongo} width={40}/>
                </motion.div>
                <motion.div
                    variants=
                        {iconVariants(2.5)}
                    initial="initial"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={js} width={40}/>
                </motion.div>
                <motion.div
                    variants=
                        {iconVariants(6)}
                    initial="initial"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={tw} width={40}/>
                </motion.div>
                <motion.div
                    variants=
                        {iconVariants(2)}
                    initial="initial"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={react} width={40}/>
                </motion.div>
                <motion.div
                    variants=
                        {iconVariants(2.5)}
                    initial="initial"
                    animate="animate"

                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={firebase} width={40}/>
                </motion.div>
            </div>
        </div>
    );
}

export default Tehnologies;
