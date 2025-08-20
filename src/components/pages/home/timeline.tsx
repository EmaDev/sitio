import { ButtonLink } from '@/components/ui/ButtonLink';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { experience } from '@/lib/data';
import { EXPERIENCE } from '@/lib/data/experience';
import { formatExperienceTime } from '@/lib/utils';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-20 lg:py-3 relative">
      <div aria-hidden="true" className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:opacity-80">
        <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[160px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[160px] dark:to-indigo-600"></div>
      </div>
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Experiencia Laboral</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Mi trayectoria profesional a lo largo de los años.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 top-0 h-full w-0.5 bg-border" aria-hidden="true" />
          <ul className="space-y-12">
            {EXPERIENCE.slice(0, 3).map((item, index) => (
              <li key={index} className="relative pl-12">
                <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center 
                rounded-full bg-[#0D25B9] ring-8 ring-background">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <Card>
                  <CardHeader>
                    <div className='flex gap-2 items-center'>
                      <time className="text-sm text-muted-foreground">{formatExperienceTime(item.time).time}</time>
                      {index === 0 &&
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
                          Actualmente
                        </span>
                      }
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="font-medium text-[#FD6585]">{item.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      {
                        item.liteitems.map((item, i) => (
                          <span key={i}>- {item}<br /></span>
                        ))
                      }
                    </p>
                    <ButtonLink href='/curriculum'/>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
