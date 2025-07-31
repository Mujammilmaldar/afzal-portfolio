import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "../../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post: any;

  try {
    const response = await client.queries.post({
      relativePath: `${params.slug}.md`,
    });
    post = response.data.post;
  } catch (error) {
    console.error("Error fetching post:", error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Blog Link */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <TinaMarkdown content={post.excerpt} />
              </p>
            )}
            
            <div className="flex items-center justify-center gap-6 text-gray-500">
              {post.author && (
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {post.author}
                </span>
              )}
              {post.date && (
                <time dateTime={post.date} className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              )}
            </div>
          </header>

          {/* Article Body */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg prose-blue max-w-none">
              <TinaMarkdown content={post.body} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const postsResponse = await client.queries.postConnection();
    const posts = postsResponse.data.postConnection.edges?.map(edge => edge?.node).filter(Boolean) || [];
    
    return posts.map((post) => ({
      slug: post?._sys.filename || '',
    })).filter(param => param.slug);
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
