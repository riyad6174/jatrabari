import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const MessageCard = ({ name, title, imageUrl, imageHint, children }: { name: string, title: string, imageUrl: string, imageHint: string, children: React.ReactNode }) => (
    <Card className="shadow-lg h-full">
        <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <Image 
                    src={imageUrl}
                    alt={`Portrait of ${name}`}
                    width={120}
                    height={120}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-cover flex-shrink-0"
                    data-ai-hint={imageHint}
                />
                <div className="text-center sm:text-left">
                    <p className="text-muted-foreground">"{children}"</p>
                    <h4 className="font-headline font-bold mt-4">{name}</h4>
                    <p className="text-sm text-accent">{title}</p>
                </div>
            </div>
        </CardContent>
    </Card>
)

export function MessagesSection() {
    const chairmanImage = PlaceHolderImages.find(p => p.id === 'chairman');
    const principalImage = PlaceHolderImages.find(p => p.id === 'principal');
    
    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Words from Our Leaders</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Guiding our school with a vision for the future.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {chairmanImage && (
                        <MessageCard name="Mr. Mosharraf Hossain" title="Chairman" imageUrl={chairmanImage.imageUrl} imageHint={chairmanImage.imageHint}>
                            At Jatrabari Preparatory School, we are dedicated to creating a nurturing environment that fosters not just academic learning, but also the development of strong moral character in our children.
                        </MessageCard>
                    )}
                    {principalImage && (
                        <MessageCard name="Mrs. Farida Yasmin" title="Headmistress" imageUrl={principalImage.imageUrl} imageHint={principalImage.imageHint}>
                             We welcome you to a community where every child's curiosity is cherished. Together, we work to build a strong foundation for their academic and personal success.
                        </MessageCard>
                    )}
                </div>
            </div>
        </section>
    );
}
