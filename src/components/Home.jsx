import React,{useState} from "react";
import Logo from '../assets/logo1.png'
import Kevin from '../assets/kevinRushProfile.png'
import About from '../assets/about.jpg'
import { motion } from "framer-motion"

const Home =()=>{
    return (
<div className="items-center">
    <motion.h1
        id="about"
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
        className="text-center py-16 text-5xl">About us</motion.h1>
        <div className="border-b border-neutral-900 pb-4 lg:mb-32">

            <div  className="flex flex-wrap">

                 <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}} className="w-full lg:w-1/2 lg:p-8" >
                    <div className="flex justify-center">
                        <img src={About} alt="Kevin"/>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full lg:w-1/2">

                    <div className="flex flex-col items-center lg:items-start">

                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            orem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.

                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.

                            Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. </p>
                    </div>

                </motion.div>
            </div>

        </div>
</div>
    )
}
export default Home