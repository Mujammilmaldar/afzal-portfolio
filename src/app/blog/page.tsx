import Link from "next/link";
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
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
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
                className="main-card-service bg-white p-6 relative shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden"
              >
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  {post.excerpt && (
                    <div className="text-gray-500 text-sm mb-4 line-clamp-3">
                      <TinaMarkdown content={post.excerpt} />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
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
                    className="inline-flex items-center text-primary cursor-pointer font-medium hover:text-primary/80 transition-colors duration-300"
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
