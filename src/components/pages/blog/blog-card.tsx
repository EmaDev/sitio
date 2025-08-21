
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, ExternalLink, MapPin } from 'lucide-react';
import { IBlogPost } from '@/lib/interfaces/BlogPost';
import { convertTimestampToDate } from '@/services/helpers';
import { LazyMap } from './LazyMap';

interface BlogCardProps {
  post: IBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const mapUrl = `https://www.google.com.ar/maps?q=${post.location.lat}, ${post.location.lng}`;

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/20">
      <div className="relative">
        <Image
          src={post.image}
          width={600}
          height={800}
          alt={post.title}
          className="w-full h-auto object-cover aspect-[3/4]"
          data-ai-hint="travel landscape"
        />
      </div>
      <CardContent className="p-4 flex-grow flex flex-col">
        <p className="text-sm">{convertTimestampToDate(post.date)}</p>
        <h3 className="text-lg font-black mb-2">{post.title}</h3>
        <div className="flex items-center text-xs text-muted-foreground mb-2">
          <Camera className="mr-1.5 h-3 w-3" />
          <span className='italic font-[300] text-xs'>{post.camera}</span>
        </div>
        <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
          <small className="text-default-500">{`${post.location.lng}, ${post.location.lat}`}</small>
          <Link href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
            Abrir en mapa <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="relative h-40 w-full rounded-md overflow-hidden mt-auto">
          {
            post.map &&
            <div className='w-full my-2 rounded-lg  h-32 relative overflow-hidden'>
              {/*<MapComponenet lng={post.location.lng} lat={post.location.lat} />*/}
              <LazyMap lng={post.location.lng} lat={post.location.lat} />
            </div>
          }
        </div>
      </CardContent>
    </Card>
  );
}
