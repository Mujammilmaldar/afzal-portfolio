import { client } from "../../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Link from "next/link";
import Image from "next/image";
// import "../../mdfile.css"
interface BlogPostProps {
  params: Promise<{ slug: string }>;

}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  
  let post: any = null;
  let error = null;

  try {
    const response = await client.queries.post({
      relativePath: `${slug}.md`,
    });
    post = response.data.post;
  } catch (err) {
    console.error("Error fetching post:", err);
    error = err;
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-lighttype">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8 text-lg">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-lighttype min-h-screen">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-4 md:px-10 lg:px-20 py-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 text-lg font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
      </nav>

      {/* Article Content */}
      <article className="container  mx-auto px-4 md:px-10 lg:px-20 pb-16">
        <div className="max-w-6xl box-shadow-blog mx-auto">
          {/* Article Header */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <div className="text-lg md:text-xl text-primary/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                <TinaMarkdown content={post.excerpt} />
              </div>
            )}

            {/* Featured Image */}
            {post.mainImage && (
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-10 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={post.mainImage.startsWith('http') 
                    ? post.mainImage 
                    : `${post.mainImage}`} // This handles relative paths correctly
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              </div>
            )}
          </header>

          {/* Article Body */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 lg:p-12">
            <div className="blog-content">
              <TinaMarkdown content={post.body} />
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-primary/20">
            <div className="text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Posts
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const response = await client.queries.postConnection();
    const posts = response.data.postConnection.edges?.map(edge => edge?.node).filter(Boolean) || [];
    
    return posts.map((post: any) => ({
      slug: post._sys.filename,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
