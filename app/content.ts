import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export interface ArticleMetadata {
  title: string;
  date: string;
  displayOnHomepage: boolean;
  image?: string | null;
  excerpt?: string;
}

export interface Article {
  id: string;
  metadata: ArticleMetadata;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'content');

export async function getAllArticleIds(): Promise<string[]> {
  try {
    const fileNames = await fs.readdir(contentDirectory);
    return fileNames
      .filter((name: string) => name.endsWith('.md'))
      .map((name: string) => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading content directory:', error);
    return [];
  }
}

export async function getArticleById(id: string): Promise<Article | null> {
  try {
    const fullPath = path.join(contentDirectory, `${id}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { id, metadata: data as ArticleMetadata, content };
  } catch (error) {
    console.error(`Error reading article ${id}:`, error);
    return null;
  }
}

export async function getAllArticles(): Promise<Article[]> {
  const articleIds = await getAllArticleIds();
  const articles = await Promise.all(articleIds.map(id => getArticleById(id)));
  
  return articles
    .filter((article): article is Article => article !== null)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
}

export async function getHomepageArticles(): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => article.metadata.displayOnHomepage);
}
