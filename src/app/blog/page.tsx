import { Header } from "@/components/layout/Header";
import { BlogCard } from "@/components/blog/BlogCard";
import { Newspaper } from "lucide-react";
import { getAllPosts } from "@/lib/sanity.queries";

export const revalidate = 60; // Revalidar a cada 60 segundos (ISR)

export default async function BlogPage() {
  const posts = await getAllPosts();

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
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">
                Nenhum post publicado ainda.
              </p>
              <p className="text-gray-400">
                Acesse <span className="font-mono text-[#0085FF]">/studio</span> para criar seu primeiro post!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
