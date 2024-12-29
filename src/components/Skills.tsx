import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Next.js",
    "Tailwind CSS",
    "Figma Design",
    "APIs",
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gray-100 relative bg-cover bg-center"
      style={{ backgroundImage: "url('background2.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Skills & Technologies
        </h2>
        <Card className="shadow-lg rounded-lg bg-white">
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-lg text-white bg-blue-950 hover:bg-blue-950 rounded-full px-6 py-3 transition-transform transform hover:scale-110"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
