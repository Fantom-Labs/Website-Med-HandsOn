"use client";

import { Header } from "@/components/layout/Header";
import { BlogCard } from "@/components/blog/BlogCard";
import { Newspaper } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <main className="bg-[#EDF2FD] min-h-screen">
      <Header />
      
      {/* Hero Section Simples */}
      <section className="min-h-[120px] py-0 pt-40 px-4 md:px-6 relative overflow-hidden flex justify-center items-center">
        <div className="container mx-auto relative z-10 flex justify-center">
           <div 
             className="inline-flex items-center gap-2 px-4 py-2.5 text-base font-medium"
             style={{
               backgroundColor: 'rgba(196, 213, 235, 0.20)',
               border: '1px solid #93B9FF',
               borderRadius: '40px',
               color: '#111827'
             }}
           >
             <Newspaper className="w-4 h-4 text-[#0085FF]" />
             <span style={{ fontFamily: 'var(--font-open-sans), sans-serif', fontSize: '18px' }}>Blog & Notícias</span>
           </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Load More (Optional) */}
          <div className="mt-16 flex justify-center">
            <button className="px-8 py-4 bg-transparent border border-[#0085FF] text-[#0085FF] hover:bg-[#0085FF] hover:text-white rounded-lg font-medium transition-all duration-300">
              Carregar mais artigos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
