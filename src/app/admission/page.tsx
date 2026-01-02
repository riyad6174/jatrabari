import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Calendar, FileText, UserCheck } from 'lucide-react';

export default function AdmissionPage() {
  return (
    <div className='bg-card'>
      <div className='container py-16 md:py-24'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold font-headline text-primary'>
            Admissions
          </h1>
          <p className='mt-4 text-lg text-muted-foreground'>
            Begin your child's learning journey at Jatrabari Preparatory School.
            Find all the information you need to apply.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          <Card className='shadow-lg'>
            <CardHeader className='items-center text-center'>
              <div className='bg-accent/20 p-4 inline-block'>
                <UserCheck className='h-8 w-8 text-accent' />
              </div>
              <CardTitle className='font-headline mt-4'>Eligibility</CardTitle>
            </CardHeader>
            <CardContent className='text-center text-muted-foreground'>
              Review the age and other requirements for our Playgroup, Nursery,
              and KG classes.
            </CardContent>
          </Card>
          <Card className='shadow-lg'>
            <CardHeader className='items-center text-center'>
              <div className='bg-accent/20 p-4 inline-block'>
                <FileText className='h-8 w-8 text-accent' />
              </div>
              <CardTitle className='font-headline mt-4'>How to Apply</CardTitle>
            </CardHeader>
            <CardContent className='text-center text-muted-foreground'>
              Our step-by-step guide will walk you through the application form,
              required documents, and submission process.
            </CardContent>
          </Card>
          <Card className='shadow-lg'>
            <CardHeader className='items-center text-center'>
              <div className='bg-accent/20 p-4 inline-block'>
                <Calendar className='h-8 w-8 text-accent' />
              </div>
              <CardTitle className='font-headline mt-4'>Key Dates</CardTitle>
            </CardHeader>
            <CardContent className='text-center text-muted-foreground'>
              Stay informed about important deadlines for application submission
              and admission interviews.
            </CardContent>
          </Card>
        </div>

        <div className='bg-background p-8 md:p-12 shadow-xl'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <h2 className='text-3xl font-headline font-bold text-primary mb-4'>
                Application Process
              </h2>
              <ol className='list-decimal list-inside space-y-4 text-muted-foreground'>
                <li>
                  <strong>Collect Application Form:</strong> Visit our school
                  office to collect the admission form.
                </li>
                <li>
                  <strong>Fill the Application Form:</strong> Provide your
                  child's and parent's details.
                </li>
                <li>
                  <strong>Submit Documents:</strong> Submit the filled form
                  along with a copy of the birth certificate and recent
                  photographs.
                </li>
                <li>
                  <strong>Informal Interview:</strong> Attend a brief, friendly
                  interview with your child and the Headmistress.
                </li>
                <li>
                  <strong>Admission Confirmation:</strong> You will be notified
                  about the admission decision within a week.
                </li>
              </ol>
            </div>
            <div className='text-center'>
              <h3 className='text-2xl font-headline font-bold text-primary'>
                Ready to Join Us?
              </h3>
              <p className='text-muted-foreground my-4'>
                Take the first step towards a bright future for your child. Our
                admissions team is here to support you.
              </p>
              <Button size='lg' className='bg-accent hover:bg-accent/90'>
                <a href='mailto:jatrabaripreparatoryschool@gmail.com'>
                  Contact Admissions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
