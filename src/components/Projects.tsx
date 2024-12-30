import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  interface DataOfObj {
    title: string 
    description: string 
    image: string 
    github: string 
    demo: string 
    tags: string[];  // Changed to string[] for correct typing of tags
  };

  const projects: DataOfObj[] = [
    {
      title: "E-commerce Platform",
      description: "A responsive full-stack e-commerce platform built with Next.js",
      image: "/images/p1.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Hackthon-2-",
      demo: "https://hackthon-2-updated.vercel.app/",
      tags: ["Next.js", "React", "Node.js", "Stripe"],
    },
    {
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with Next.js",
      image: "/images/p2.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Internship-tasks",
      demo: "https://internship-tasks-eosin.vercel.app/",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
    },
    {
      title: "Perfume Website",
      description: "A responsive perfume website built with Next.js and Tailwind CSS",
      image: "/images/p3.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Responsive-Perfume-Website",
      demo: "https://responsive-perfume-website.vercel.app/",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "S.A.M Technologist",
      description: "A company website using HTML and CSS (Not Responsive)",
      image: "/images/p4.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Company-Website-using-HTML-CSS",
      demo: "https://company-website-eta-five.vercel.app/",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Portfolio Website",
      description: "A portfolio website built with HTML and CSS (Not Responsive)",
      image: "/images/p5.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Portfolio-website-through-HTML-CSS",
      demo: "https://portfolio-website-lemon-xi.vercel.app/",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Interactive Counter",
      description: "A responsive Interactive counter built with Next.js and Tailwind CSS",
      image: "/images/p11.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Interactive-Counter",
      demo: "https://interactive-counter-nine.vercel.app/",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Static Interactive Resume Builder",
      description: "A responsive Static Interactive Resume Builder built with HTML and CSS",
      image: "/images/p6.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Hackathon-Milestones/tree/main/Milestone%201",
      demo: "https://milestone-1-red.vercel.app/",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Dynamic Resume Builder",
      description: "A responsive Dynamic Resume Builder built with HTML and CSS",
      image: "/images/p7.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Hackathon-Milestones/tree/main/Milestone%203",
      demo: "https://milestone-3-seven-eosin.vercel.app/",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Editable Resume Builder",
      description: "A responsive Editable Resume Builder built with HTML and CSS",
      image: "/images/p8.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Hackathon-Milestones/tree/main/Milestone%204",
      demo: "https://milestone-4-gamma-jade.vercel.app/",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Shareable Resume Builder",
      description: "A responsive Shareable Resume Builder built with HTML and CSS",
      image: "/images/p9.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/Hackathon-Milestones/tree/main/Milestone%205",
      demo: "https://milestone-5-zeta-teal.vercel.app/",
      tags: ["HTML", "CSS"],
    },
    {
      title: "API Use",
      description: "A responsive API Use built with Next.js and Tailwind CSS",
      image: "/images/p10.jpg",
      github: "https://github.com/Syeda-Aliza-Masood/API-Class-Assignment",
      demo: "https://api-class-assignment.vercel.app/",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={`${project.title}-${index}`}
                      className="bg-blue-950 text-white rounded-full py-1 px-3 text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
