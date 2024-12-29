import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export function Hero() {
  return (
    <section 
      id="home" 
      className="pt-24 pb-12 md:pt-32 md:pb-20 bg-cover bg-center relative text-white" 
      style={{ backgroundImage: 'url("/background.png")' }} // Replace with your image path
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              <span className="text-primary text-white"> Syeda Aliza Masood </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400">
              Electrical Engineer | Frontend Developer | Machine Learning Specialist
            </p>
          </div>
          <p className="mt-8 text-white max-w-3xl mx-auto">
            I specialize in crafting responsive front-end designs and UI/UX solutions, transforming Figma designs into seamless, user-friendly web experiences.
          </p>  
          <p className="text-white mt-4">
            Check out my projects and feel free to get in touch!
          </p>
          <div className="mt-8 flex space-x-6 justify-center">
            <a
              href="https://www.linkedin.com/in/syeda-aliza-masood-550a73283"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaLinkedin className="w-8 h-8 text-white" />
            </a>
            <a
              href="https://github.com/Syeda-Aliza-Masood"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FaGithub className="w-8 h-8 text-white" />
            </a>
          </div>
          <div className="mt-12 space-x-4 text-center">
            <Button asChild>
              <a
                href="#projects"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-900 hover:bg-gradient-to-l text-white font-bold rounded shadow-md"
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </a>
            </Button>
            <Button asChild>
              <a
                href="/Syeda Aliza Masood cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-900 hover:bg-gradient-to-l text-white font-bold rounded shadow-md"
              >
                Hire Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
