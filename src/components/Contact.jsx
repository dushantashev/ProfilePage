import React,{useState} from "react";
import Logo from '../assets/logo1.png'
import Kevin from '../assets/kevinRushProfile.png'
import {Experiences} from "../index";
import { motion } from "framer-motion"
const Contact =()=>{
    return (
      <motion.div id="contact"
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-20}}
          transition={{duration:1}}
          className="border-b border-neutral-900 pb-20">
          <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
          <div className="text-center tracking-tighter">
              <p className="my-4">Brakja Hadzi Tefovi br.26 Kavadarci/Macedonia</p>
              <p className="my-4">dushantashev@gmail.com</p>

          </div>
      </motion.div >
    )
}
export default Contact