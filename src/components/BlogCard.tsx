import type { CollectionEntry } from 'astro:content';

interface BlogCardProps {
  post: CollectionEntry<'blog'>;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const { title, description, pubDate, heroImage, tags } = post.data;
  const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <article className="relative overflow-hidden rounded-lg bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={heroImage || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 sm:p-6 flex flex-col h-full">
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-zinc-900 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-zinc-100 mb-2 hover:text-amber-300 transition-colors flex-grow">
            <a href={`/blog/${post.slug}`} className="block">{title}</a>
          </h2>
          <p className="text-zinc-300 text-sm mb-3 sm:mb-4 line-clamp-3 flex-grow">{description}</p>
          <div className="flex items-center justify-between mt-auto">
            <time className="text-zinc-400 text-xs sm:text-sm">{formattedDate}</time>
            <a
              href={`/blog/${post.slug}`}
              className="text-amber-300 hover:text-amber-400 text-xs sm:text-sm font-medium transition-colors"
            >
              Read more →
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img
          src={heroImage || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-zinc-700 text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-zinc-100 mb-2 hover:text-amber-300 transition-colors flex-grow">
          <a href={`/blog/${post.slug}`} className="block">{title}</a>
        </h3>
        <p className="text-zinc-400 text-sm mb-3 line-clamp-2 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <time className="text-zinc-500 text-xs">{formattedDate}</time>
          <a
            href={`/blog/${post.slug}`}
            className="text-amber-300 hover:text-amber-400 text-xs font-medium transition-colors"
          >
            Read →
          </a>
        </div>
      </div>
    </article>
  );
};