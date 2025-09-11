import { BlogCard } from '@/components/ContentCard'
import strings from '@/app/data' 
import { getHomepageArticles } from '@/app/content'
import { Github, Linkedin, Book } from 'lucide-react'
import Image from 'next/image'

export default async function Home() {
  const articles = await getHomepageArticles()

  return (
    <div className="bg-primary">
      <section className="pt-24 pb-12 px-6" >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-text-primary mb-4">
                {strings.greeting}
              </h2>
              <p className="text-lg text-text-secondary mb-6">
                {strings.welcomeMessage}
              </p>
              <div className="flex items-center space-x-4">
                {[
                  { href: strings.about, icon: Book },
                  { href: strings.github, icon: Github },
                  { href: strings.linkedin, icon: Linkedin },
                ].map(({ href, icon: Icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-hover transition-colors"
                  >
                    <Icon className="w-5 h-5 text-text-secondary" />
                  </a>
                ))}
              </div>
            </div>
              
                <Image
                  src="/joker.png"
                  objectFit="cover"
                  width={128}
                  height={128}
                  alt="Profile Picture"
                  className="rounded-lg"
                />
          </div>
        </div>
      </section>
      
      <section className="pb-12">
        {articles.map((article) => (
          <BlogCard key={article.id} post={{
            id: article.id,
            title: article.metadata.title,
            date: article.metadata.date,
            content: article.metadata.excerpt || article.content.substring(0, 200) + '...'
          }} />
        ))}
      </section>

    </div>
  )
}
