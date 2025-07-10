import React from 'react';
import { motion } from 'framer-motion';
import type { CollectionEntry } from 'astro:content';

interface AnimatedBlogCardProps {
  post: CollectionEntry<'blog'>;
  featured?: boolean;
  index: number;
}

export const AnimatedBlogCard = ({ post, featured = false, index }: AnimatedBlogCardProps) => {
  const { title, description, pubDate, heroImage, tags } = post.data;
  const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  if (featured) {
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full border border-zinc-700/50 group cursor-pointer"
        onClick={() => window.location.href = `/blog/${post.slug}`}
      >
        <motion.div 
          className="aspect-video overflow-hidden relative"
          variants={hoverVariants}
        >
          <img
            src={heroImage || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
          <motion.div 
            className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <span className="text-amber-300 text-xs font-semibold">Featured</span>
          </motion.div>
        </motion.div>
        <div className="p-6 flex flex-col h-full">
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 + tagIndex * 0.05 }}
                className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-zinc-900 font-semibold shadow-lg"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          <motion.h2 
            className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-amber-300 transition-colors duration-300 flex-grow leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <a href={`/blog/${post.slug}`} className="block hover:underline decoration-amber-300">
              {title}
            </a>
          </motion.h2>
          <motion.p 
            className="text-zinc-300 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <time className="text-zinc-400 text-sm font-medium">{formattedDate}</time>
            <motion.a
              className="text-amber-400 hover:text-amber-300 text-sm font-semibold transition-all duration-300 group-hover:translate-x-1 transform flex items-center gap-1"
              whileHover={{ x: 4 }}
            >
              Read more →
            </motion.a>
          </motion.div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-zinc-700/50 group cursor-pointer"
      onClick={() => window.location.href = `/blog/${post.slug}`}
    >
      <motion.div 
        className="aspect-video overflow-hidden relative"
        variants={hoverVariants}
      >
        <img
          src={heroImage || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
      </motion.div>
      <div className="p-4 flex flex-col flex-grow">
        <motion.div 
          className="flex flex-wrap gap-1 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {tags.slice(0, 2).map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 + tagIndex * 0.05 }}
              className="px-2 py-1 text-xs rounded-full bg-zinc-700/80 text-zinc-300 border border-zinc-600/50"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <motion.h3 
          className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-amber-300 transition-colors duration-300 flex-grow leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <a href={`/blog/${post.slug}`} className="block hover:underline decoration-amber-300">
            {title}
          </a>
        </motion.h3>
        <motion.p 
          className="text-zinc-400 text-sm mb-3 line-clamp-2 flex-grow leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {description}
        </motion.p>
        <motion.div 
          className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
        >
          <time className="text-zinc-500 text-xs font-medium">{formattedDate}</time>
          <motion.a
            className="text-amber-400 hover:text-amber-300 text-xs font-semibold transition-all duration-300 group-hover:translate-x-1 transform"
            whileHover={{ x: 2 }}
          >
            Read →
          </motion.a>
        </motion.div>
      </div>
    </motion.article>
  );