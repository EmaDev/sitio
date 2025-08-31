import { BlogCard } from '@/components/pages/blog/blog-card';
import { getUserByName } from '@/services/firebase/users';
import { getPostsByUser } from '@/services/firebase/post';
import Header from '@/components/pages/blog/Header';

export const dynamic = 'force-dynamic';
export default async function BlogPage({ searchParams }: any) {

  const { album } = searchParams;
  const userData: any = await getUserByName("emanuel")
  const post: any = await getPostsByUser("emanuel", album || "");

  console.log(post)
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 m-auto">

      <Header user={userData.data}/>

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
