import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { urlFor } from "@/lib/sanity.client";
import { BlogPost } from "@/lib/sanity.types";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = format(new Date(post.publishedAt), "dd MMM yyyy", {
    locale: ptBR,
  });

  return (
    <Link 
      href={`/noticias/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={urlFor(post.coverImage).width(600).height(400).url()}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-[#0f1c2e] mb-3 group-hover:text-[#0085FF] transition-colors line-clamp-2 font-sans">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-sans">
          {post.excerpt}
        </p>

        <div className="flex items-center text-[#0085FF] font-medium text-sm group/link mt-auto">
          Ler artigo completo
          <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

