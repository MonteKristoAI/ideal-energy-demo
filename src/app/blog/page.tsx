import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function BlogListing() {
  return (
    <main className="min-h-screen bg-brand-bg flex flex-col relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none transform -translate-y-1/2"></div>
      
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Ideal <span className="text-brand-secondary">Insights</span>
            </h1>
            <p className="text-lg text-slate-300">
              The latest strategies, regulations, and technologies shaping the future of commercial renewable energy.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`}  
                key={post.id}
                className="group flex flex-col bg-brand-surface/30 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:bg-brand-surface/50 hover:border-brand-secondary/30 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,229,255,0.1)] hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-semibold text-white/80">
                    <span className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">{post.date}</span>
                    <span className="bg-brand-secondary/20 backdrop-blur-sm text-brand-secondary px-3 py-1 rounded-full">{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-brand-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <span className="text-sm text-slate-300 font-medium">By {post.author}</span>
                    <span className="text-brand-secondary text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                      Read More <span className="ml-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
