
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default async function Blog() {
  const allPosts = await getAllPosts();
  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.metadata.title}
            </Link>
            <br />
            <small>
              {post.metadata.date}
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
