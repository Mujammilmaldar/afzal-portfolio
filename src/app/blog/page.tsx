import Link from "next/link";
import Image from "next/image";
import { client } from "../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function BlogPage() {
  let posts: any[] = [];

  try {
    const postsResponse = await client.queries.postConnection();
    posts = postsResponse.data.postConnection.edges
      ?.map(edge => edge?.node)
      .filter(Boolean) || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div className="container min-h-screen">
      {/* Blog Header - matching your theme */}
      <div className="card-title bg-light p-6 mb-14">
        <h1 className="text-4xl font-bold text-primary text-center">Blog</h1>
        <p className="text-center text-gray-600 mt-2">
          Healthcare Digital Marketing Insights & Strategies
        </p>
      </div>
      
      <div className="mx-auto px-4 md:px-10 lg:px-20 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              No blog posts found
            </h2>
            <p className="text-gray-500">
              Blog posts will appear here once they are published.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/10]">
                  {post.mainImage ? (
                    <Image
                      src={post.mainImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <svg 
                        className="w-12 h-12 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-3xl font-semibold text-primary mb-3 line-clamp-2">{post.title}</h2>
                  
                  {post.excerpt && (
                    <div className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                      <TinaMarkdown content={post.excerpt} />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    {post.author && (
                      <span className="font-medium">By {post.author}</span>
                    )}
                    {post.date && (
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    )}
                  </div>
                  
                  <Link
                    href={`/blog/${post._sys.filename}`}
                    className="mt-auto text-primary hover:text-primary/80 font-medium transition-colors flex items-center"
                  >
                    Read More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
