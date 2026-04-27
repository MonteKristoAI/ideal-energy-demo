import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Ideal Energy Blog`,
    description: post.excerpt,
  };
}

// Generate static params for all demo posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // A very simple markdown-like renderer for demo purposes
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-heading font-bold text-white mt-8 mb-4">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-heading font-bold text-brand-secondary mt-12 mb-6">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-brand-secondary pl-6 py-2 my-8 bg-brand-surface/20 italic text-xl text-slate-200">
            {line.replace('> ', '')}
          </blockquote>
        );
      }
      if (line.startsWith('* ') || line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
        return <li key={index} className="ml-6 mb-2 text-slate-300 list-disc">{line.substring(line.indexOf(' ') + 1)}</li>;
      }
      if (line.trim() === '') return <br key={index} />;
      return <p key={index} className="text-slate-300 text-lg leading-relaxed mb-6">{line}</p>;
    });
  };

  return (
    <main className="min-h-screen bg-brand-bg flex flex-col">
      <Navbar />

      <article className="flex-grow pb-24">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] w-full mt-24">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12 z-10">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/blog"
                className="inline-flex items-center text-brand-secondary hover:text-white transition-colors mb-6 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
                <span className="flex items-center font-medium">
                  <div className="w-8 h-8 rounded-full bg-brand-secondary/20 flex items-center justify-center mr-3 text-brand-secondary font-bold">
                    {post.author.charAt(0)}
                  </div>
                  {post.author}
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">{post.date}</span>
                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-16">
          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
