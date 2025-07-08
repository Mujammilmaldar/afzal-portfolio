
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getAllPosts() {
  const filenames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const slug = filename.replace(/\.md$/, "");
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        metadata: data,
        content: marked(content),
      };
    })
  );

  return posts.sort((a, b) => (a.metadata.date < b.metadata.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const html = marked.parse(content);
    return {
      slug,
      metadata: data,
      content: html,
    };
  } catch (e) {
    return null;
  }
}

export async function getAllPostSlugs() {
    const filenames = await fs.readdir(postsDirectory);
    return filenames.map((filename) => {
        return {
            slug: filename.replace(/\.md$/, '')
        }
    });
}
