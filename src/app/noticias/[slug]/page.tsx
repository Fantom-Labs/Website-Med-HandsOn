import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { getPostBySlug, getAllPostSlugs } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { urlFor } from "@/lib/sanity.client";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to convert Portable Text to plain text
function portableTextToPlainText(blocks: any[] = []) {
  if (!blocks) return '';
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child: any) => child.text).join('')
    })
    .join('\n\n')
}

// Generate Metadata
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Notícia não encontrada",
    };
  }

  const ogImage = post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : undefined;
  
  // Fallback description if excerpt is missing
  const plainTextContent = portableTextToPlainText(post.content);
  const description = post.excerpt || (plainTextContent.length > 160 ? plainTextContent.substring(0, 157) + '...' : plainTextContent);

  return {
    title: `${post.title} | Med HandsOn Blog`,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Med HandsOn"],
      images: ogImage ? [ogImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

export const revalidate = 60; // ISR

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = format(new Date(post.publishedAt), "dd MMM yyyy", {
    locale: ptBR,
  });

  // Fallback description for JSON-LD
  const plainTextContent = portableTextToPlainText(post.content);
  const description = post.excerpt || (plainTextContent.length > 160 ? plainTextContent.substring(0, 157) + '...' : plainTextContent);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : undefined,
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Med HandsOn"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Med HandsOn",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medhandson.com.br/logo-footer.svg"
      }
    },
    "description": description
  };

  return (
    <main className="bg-[#EDF2FD] min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Article Header */}
      <article className="container mx-auto px-4 md:px-6 pt-32 md:pt-40">
        <Link 
          href="/noticias"
          className="inline-flex items-center text-[#0056b3] hover:text-[#0085FF] mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para notícias
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <span className="bg-[#0085FF]/10 text-[#0085FF] px-3 py-1 rounded-full font-semibold">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {formattedDate}
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
              src={urlFor(post.coverImage).width(1200).height(675).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <PortableTextRenderer content={post.content} />
        </div>
      </article>
    </main>
  );
}
