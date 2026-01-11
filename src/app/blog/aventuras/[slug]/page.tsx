"use client";
import { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, BarChart, ArrowLeft, Grid, LayoutGrid, CalendarIcon, Mountain, TrendingUp, Maximize2, Minimize2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getTravelById } from '@/services/firebase/post';
import { LazyMap } from '@/components/pages/blog/LazyMap';
import { convertTimestampToDate } from '@/services/helpers';
import ShareButton from '@/components/pages/blog/share-button';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function TravelLogPage({ params }: PageProps) {

  const { slug } = use(params);
  const [log, setLog] = useState<any>(null);
  const [loading, setLoading] = useState(true);


  const [isSpotifyExpanded, setIsSpotifyExpanded] = useState(false);
  const [singleColumn, setSingleColumn] = useState(false);

  useEffect(() => {

    if (!slug) return;

    const fetchLog = async () => {
      console.log("Buscando el slug:", slug);
      const result = await getTravelById("emanuel", slug);

      if (result.ok) {
        setLog(result.data);
      }
      setLoading(false);
    };

    fetchLog();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!log) {
    notFound();
  }

  const hasWikiloc = log.wikiloc && log.wikiloc.url;
  const hasCoordinates = log.location.lat && log.location.lng;

  return (
    <>
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <Link href={`/blog`} className="mb-4 inline-block">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground">{log.title}</h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-lg text-muted-foreground">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  <p className="text-sm">{convertTimestampToDate(log.date)}</p>

                </div>
              </div>
            </div>
            <ShareButton log={log} />
          </div>

        </div>

        <div className="relative h-[60vh] w-full mb-8 md:mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={log.coverImage}
            alt={log.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg leading-relaxed text-foreground/80">{log.description}</p>

            <div className="lg:hidden">
              <Separator />
              <Card className="mt-8">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="font-headline text-2xl">Trip Soundtrack</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setIsSpotifyExpanded(!isSpotifyExpanded)}>
                    {isSpotifyExpanded ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                    <span className="sr-only">{isSpotifyExpanded ? "Collapse" : "Expand"} Spotify Player</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <iframe
                    className="rounded-xl"
                    src={`https://open.spotify.com/embed/track/${log.spotifyUrl}?utm_source=generator`}
                    width="100%"
                    height={isSpotifyExpanded ? "352" : "152"}
                    frameBorder="0"
                    allowFullScreen={false}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </CardContent>
              </Card>
            </div>

            <Separator />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-headline text-3xl">Photo Gallery</h2>
                <Button variant="outline" size="icon" className="md:hidden" onClick={() => setSingleColumn(!singleColumn)}>
                  {singleColumn ? <Grid className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
                  <span className="sr-only">Change Layout</span>
                </Button>
              </div>
              <div className={cn(
                "grid gap-4",
                singleColumn ? "grid-cols-1" : "grid-cols-2",
                "md:grid-cols-3"
              )}>
                {log.gallery.map((url: string, index: number) => (
                  <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-md">
                    <Image src={url} alt={`Gallery ${index}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-8 lg:sticky lg:top-24 h-fit">
            {/* Soundtrack Card - Visible on desktop */}
            <div className="hidden lg:block">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="font-headline text-2xl">Trip Soundtrack</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setIsSpotifyExpanded(!isSpotifyExpanded)}>
                    {isSpotifyExpanded ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                    <span className="sr-only">{isSpotifyExpanded ? "Collapse" : "Expand"} Spotify Player</span>
                  </Button>
                </CardHeader>
                <CardContent>
                  <iframe
                    className="rounded-xl"
                    src={`https://open.spotify.com/embed/track/${log.spotifyUrl}?utm_source=generator`}
                    width="100%"
                    height={isSpotifyExpanded ? "352" : "152"}
                    frameBorder="0"
                    allowFullScreen={false}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{hasWikiloc ? "Wikiloc Route" : "Location"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-video w-full rounded-lg">
                  {hasWikiloc ? (
                    <iframe
                      className="rounded-xl w-full"
                      src={log.wikiloc.url}
                      height="500"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                    ></iframe>
                  ) : hasCoordinates ? (
                    <div className='w-full my-2 rounded-lg  h-32 relative overflow-hidden'>
                      <LazyMap lng={log.location.lng} lat={log.location.lat} />
                    </div>
                  ) : (
                    <div className="bg-muted h-full w-full flex items-center justify-center text-muted-foreground">
                      <p>No map data available.</p>
                    </div>
                  )}
                </div>
                {hasWikiloc && (
                  <div className="space-y-3 text-foreground/80">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span><strong>Distance:</strong> {log.wikiloc.distance}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span><strong>Time:</strong> {log.wikiloc.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart className="h-5 w-5 text-primary" />
                      <span><strong>Difficulty:</strong> {log.wikiloc.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mountain className="h-5 w-5 text-primary" />
                      <span><strong>Elevation Gain:</strong> {log.wikiloc.elevationGain}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span><strong>Max Altitude:</strong> {log.wikiloc.maxAltitude}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </>
  );
}