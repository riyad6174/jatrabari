import { AllTeachersGrid } from "./_components/AllTeachersGrid";

export default function TeachersPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Faculty</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the caring and dedicated teachers who form the heart of Jatrabari Preparatory School.
          </p>
        </div>
        
        <AllTeachersGrid />

      </div>
    </div>
  );
}
