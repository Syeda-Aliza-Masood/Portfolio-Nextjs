import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  I am a dedicated engineer with a passion for solving complex problems using technology. 
                  From developing machine learning solutions to crafting engaging frontend designs, 
                  I strive to make an impact in every project I undertake.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  My journey in front-end development started when I built my first website, 
                  and since then, I have been hooked on creating beautiful and functional front-end design.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image 
              src="/1.jpg" 
              alt="Example Image" 
              fill 
              sizes="(max-width: 768px) 100vw, 
                     (max-width: 1200px) 50vw, 
                     33vw"
              priority // Optional: Use this if the image is critical for the page load
            />
          </div>
        </div>
      </div>
    </section>
  )
}
