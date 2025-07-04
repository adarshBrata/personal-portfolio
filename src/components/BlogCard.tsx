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
      <article className="relative overflow-hidden rounded-lg bg-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-video overflow-hidden">
          <img
            src={heroImage || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-zinc-900 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold text-zinc-100 mb-2 hover:text-amber-300 transition-colors">
            <a href={`/blog/${post.slug}`}>{title}</a>
          </h2>
          <p className="text-zinc-300 text-sm mb-4 line-clamp-3">{description}</p>
          <div className="flex items-center justify-between">
            <time className="text-zinc-400 text-sm">{formattedDate}</time>
            <a
              href={`/blog/${post.slug}`}
              className="text-amber-300 hover:text-amber-400 text-sm font-medium transition-colors"
            >
              Read more →
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={heroImage || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
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
        <h3 className="text-lg font-semibold text-zinc-100 mb-2 hover:text-amber-300 transition-colors">
          <a href={`/blog/${post.slug}`}>{title}</a>
        </h3>
        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
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