import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ 
    slug: string 
  }>;
};

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.metadata.title,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{post.metadata.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.metadata.date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html: post.content as string,
        }}
      />
    </div>
  );
}