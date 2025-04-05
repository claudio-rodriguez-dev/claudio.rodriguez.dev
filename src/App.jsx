import './App.css'
import NavBar from './views/NavBar'
import Home from './views/Home'
import Experience from './views/Experience'
import Contact from './views/Contact'
import { Toaster } from "@/components/ui/sonner"
import { motion } from 'framer-motion'


function App() {

  return (
    <div>
      <motion.div className="bg-[#381624] fixed top-[0rem] -z-10 right-[0rem] h-[15rem] w-[15rem] lg:h-[30rem] lg:w-[30rem] 2xl:h-[40rem] 2xl:w-[40rem] blur-[10rem] rounded-full"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 99,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} />
      <motion.div className="bg-[#002928] fixed bottom-[0rem] -z-10 left-[0rem] h-[15rem] w-[15rem] lg:h-[30rem] lg:w-[30rem] 2xl:h-[40rem] 2xl:w-[40rem] blur-[10rem] rounded-full" animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
        transition={{
          duration: 99,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} />

      <NavBar />
      <Home />
      <Experience />
      <Contact />
      <Toaster />
    </div>
  )
}

export default App