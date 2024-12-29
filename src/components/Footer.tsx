import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-6 md:py-0 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS. Deployed on Vercel.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Syeda-Aliza-Masood"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          
            <a
              href="https://www.linkedin.com/in/syeda-aliza-masood-550a73283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

