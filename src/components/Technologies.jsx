import { TbBrandReact } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { LiaCss3Alt } from "react-icons/lia";
import { DiJavascript } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import {animate, motion} from 'framer-motion'

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

function Technologies() {
  return (
    <div className="pb-24">
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-10}} transition={{duration:1.5}} className="my-20 text-center text-4xl ">
            Technologies
        </motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div  className="p-4"
            initial="initial" 
            animate="animate"
            variants={iconVariants(1)}
            > 
                < FaHtml5 className="text-7xl text-orange-700"/>
            </motion.div>
            <motion.div initial="initial" 
            animate="animate"
            variants={iconVariants(2)} className="p-4"> 
                < LiaCss3Alt className="text-7xl text-sky-700"/>
            </motion.div>
             <motion.div initial="initial" 
            animate="animate"
            variants={iconVariants(3)} className="p-4"> 
                < DiJavascript className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div initial="initial" 
            animate="animate"
            variants={iconVariants(4)} className="p-4"> 
                < SiTailwindcss className="text-7xl text-sky-500"/>
            </motion.div>
            <motion.div initial="initial" 
            animate="animate"
            variants={iconVariants(5)} className="p-4"> 
                < TbBrandReact className="text-7xl text-sky-400"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies