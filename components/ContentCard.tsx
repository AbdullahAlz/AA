import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  date: string
  content: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const truncatedContent = post.content.length > 100 
    ? post.content.substring(0, 100) + '...'
    : post.content

  return (
    <div className="mb-4 max-w-4xl mx-auto">
      <Link href={`/article/${post.id}`}>
        <div className="block p-8 bg-secondary hover:bg-hover transition-colors cursor-pointer border border-border">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-text-muted mb-3">
            {post.date}
          </p>
          <p className="text-text-secondary">
            {truncatedContent}
          </p>
        </div>
      </Link>
    </div>
  )
}
