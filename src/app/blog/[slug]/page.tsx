import { Header } from "@/components/layout/Header";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#EDF2FD] min-h-screen pb-20">
      <Header />
      
      {/* Article Header */}
      <article className="container mx-auto px-4 md:px-6 pt-32 md:pt-40">
        <Link 
          href="/blog"
          className="inline-flex items-center text-[#0056b3] hover:text-[#0085FF] mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o blog
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <span className="bg-[#0085FF]/10 text-[#0085FF] px-3 py-1 rounded-full font-semibold">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f1c2e] mb-8 font-sans leading-tight">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div 
            className="font-sans text-gray-600 leading-relaxed text-lg
              [&>p]:mb-6 
              [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-[#0f1c2e] [&>h3]:mt-10 [&>h3]:mb-4
              [&>h4]:text-xl [&>h4]:font-bold [&>h4]:text-[#0f1c2e] [&>h4]:mt-8 [&>h4]:mb-3
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:space-y-2
              [&>li]:marker:text-[#0085FF]
              [&_strong]:text-[#0f1c2e] [&_strong]:font-bold
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </main>
  );
}


