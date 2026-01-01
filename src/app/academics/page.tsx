import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookCopy, BrainCircuit, Landmark, Briefcase, Palette, Microscope, Sigma, Clapperboard, PenTool, Globe, Music, Drama } from "lucide-react";

const subjects = [
  {
    name: "Bangla",
    icon: PenTool,
    description: "Developing strong foundational skills in reading, writing, and understanding our mother tongue through engaging stories and poems.",
    topics: ["Alphabet and Word Formation", "Reading Comprehension", "Basic Grammar", "Creative Writing"]
  },
  {
    name: "English",
    icon: BookCopy,
    description: "Building confidence in the English language with a focus on phonics, vocabulary, conversation, and simple storytelling.",
    topics: ["Phonics and Pronunciation", "Vocabulary Building", "Simple Sentences", "Story Reading"]
  },
  {
    name: "Mathematics",
    icon: Sigma,
    description: "Introducing the world of numbers, shapes, and basic calculations through fun, interactive activities and games.",
    topics: ["Number Recognition and Counting", "Basic Addition and Subtraction", "Shapes and Patterns", "Problem Solving"]
  },
  {
    name: "General Science",
    icon: Microscope,
    description: "Exploring the wonders of the natural world, from plants and animals to the weather, fostering a spirit of inquiry and discovery.",
    topics: ["Living and Non-living things", "Plants and Animals", "Our Body", "The Environment"]
  },
  {
    name: "Social Studies & GK",
    icon: Globe,
    description: "Learning about our community, culture, national heroes, and the world around us to build responsible and aware citizens.",
    topics: ["Our Family and Community", "National Symbols of Bangladesh", "Festivals and Culture", "Good Manners"]
  },
  {
    name: "Art, Music, and Drama",
    icon: Palette,
    description: "Nurturing creativity and self-expression through drawing, singing, dancing, and role-playing activities.",
    topics: ["Drawing and Coloring", "Singing Rhymes", "Creative Movement", "Storytelling"]
  },
];

export default function AcademicsPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Academics</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our curriculum designed to build a strong foundation for young learners in a fun and supportive environment.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {subjects.map((dept) => (
                    <AccordionItem key={dept.name} value={dept.name} className="border-b-0 mb-4">
                        <AccordionTrigger className="bg-card p-6 shadow-md hover:no-underline hover:bg-secondary/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <dept.icon className="h-8 w-8 text-accent" />
                                <h3 className="text-xl font-headline font-semibold text-left">{dept.name}</h3>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="bg-card p-6 border-t">
                            <p className="text-muted-foreground mb-4">{dept.description}</p>
                            <h4 className="font-bold mb-2">Key Areas of Focus:</h4>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                {dept.topics.map(course => <li key={course}>{course}</li>)}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </div>
  );
}
