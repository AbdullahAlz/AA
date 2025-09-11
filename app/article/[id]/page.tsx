import { MarkdownContent } from '@/components/MarkdownParser'
import { notFound } from 'next/navigation'
import { getArticleById, getAllArticleIds } from '@/app/content'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const articleIds = await getAllArticleIds()
  return articleIds.map((id) => ({ id }))
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <article className="pt-24 pb-12 px-6 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            {article.metadata.title}
          </h1>
          <p className="text-text-muted mb-8">
            {article.metadata.date}
          </p>

          {article.metadata.image && (
            <div className="mb-8">
              <img 
                src={article.metadata.image} 
                alt={article.metadata.title}
                className="w-full max-w-2xl mx-auto rounded-lg"
              />
            </div>
          )}
          
          <MarkdownContent content={article.content} />
        </div>
      </article>
    </div>
  )
}
