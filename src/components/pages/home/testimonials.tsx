"use client"

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar } from '@/components/ui/avatar';
import { TESTIMONIAL } from '@/lib/data/testimonial';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6 m-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Testimonios</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Lo que otros dicen de mi trabajo.
          </p>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {TESTIMONIAL.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-8 space-y-4 text-center">
                      <p className="text-lg italic">"{testimonial.testimonio}"</p>
                      <div className="flex items-center gap-4 pt-4">
                        <Avatar>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image alt={testimonial.nombre}
                              src={testimonial.img} className="h-12 w-12 object-cover" loading="lazy" width="46" height="46" />
                          </div>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.nombre}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.posicion}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex'/>
          <CarouselNext className='hidden md:flex'/>
           
        </Carousel>
      </div>
    </section>
  );
}
