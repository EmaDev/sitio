import Image from 'next/image';
import Link from 'next/link';
import { BlogCard } from '@/components/pages/blog/blog-card';
import { getUserByName } from '@/services/firebase/users';
import { getPostsByUser, getTravelStubs } from '@/services/firebase/post';
import Header from '@/components/pages/blog/Header';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { convertTimestampToDate } from '@/services/helpers';

export const dynamic = 'force-dynamic';
export default async function BlogPage({ searchParams }: any) {

  const { album } = searchParams;
  const userData: any = await getUserByName("emanuel")
  const post: any = await getPostsByUser("emanuel", album || "");
  const { ok, data: travelLogs }: any = await getTravelStubs("emanuel")

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 m-auto">

      <Header user={userData.data} />

      {travelLogs.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            loop: travelLogs.length > 1,
          }}
          className="w-full my-4 mb-8"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Aventuras Destacadas</h2>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="relative translate-y-0 left-0 right-0 top-0 h-10 w-10" />
              <CarouselNext className="relative translate-y-0 left-0 right-0 top-0 h-10 w-10" />
            </div>
          </div>
          <CarouselContent className="-ml-4">
            {travelLogs.map((log:any) => {
              return (
                <CarouselItem key={log.slug} className="pl-4 md:basis-1/2">
                  <Card className="overflow-hidden h-full flex flex-row">
                    <div className="relative h-full w-1/3 flex-shrink-0">
                        <Image
                          src={log.coverImage}
                          alt={log.title}
                          fill
                          className="object-cover"
                          data-ai-hint={log.id}
                        />
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-black mb-1">{log.title}</h3>
                        <p className="text-sm mb-2">{convertTimestampToDate(log.date)}</p>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                          {log.shortDescription}
                        </p>
                      </div>
                      <Button asChild className="mt-auto w-full sm:w-fit self-end">
                        <Link href={`/blog/aventuras/${log.id}`}>
                          Ver aventura <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      ) : (
        <div className="text-center py-8">
          <h2 className="font-headline text-4xl mb-4">Aventuras Destacadas</h2>
          <p className="text-muted-foreground">No travel logs for this destination yet.</p>
        </div>
      )}

      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {post.data.map((post: any) => (
          <BlogCard
            key={post.id}
            post={post} />
        ))}
      </div>
    </div>
  );
}
