import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import type { CollectionEntry } from 'astro:content';

interface BlogCarouselProps {
  posts: CollectionEntry<'blog'>[];
}

export const BlogCarousel = ({ posts }: BlogCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postsPerView = 3;
  const totalSlides = Math.ceil(posts.length / postsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCurrentPosts = () => {
    const start = currentIndex * postsPerView;
    return posts.slice(start, start + postsPerView);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {getCurrentPosts().map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-zinc-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zinc-700/50"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={post.data.heroImage || 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'}
                    alt={post.data.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.data.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-amber-500/20 to-amber-300/20 text-amber-200 border border-amber-500/30 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-amber-300 transition-colors duration-300 line-clamp-2">
                    <a href={`/blog/${post.slug}`} className="block">
                      {post.data.title}
                    </a>
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {post.data.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-zinc-500 text-xs font-medium">
                      {new Date(post.data.pubDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-amber-400 hover:text-amber-300 text-sm font-semibold transition-colors duration-300 group-hover:translate-x-1 transform"
                    >
                      Read →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-zinc-800/90 backdrop-blur-sm hover:bg-zinc-700/90 text-zinc-300 hover:text-amber-300 p-3 rounded-full shadow-lg border border-zinc-600/50 transition-all duration-300"
            aria-label="Previous posts"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-zinc-800/90 backdrop-blur-sm hover:bg-zinc-700/90 text-zinc-300 hover:text-amber-300 p-3 rounded-full shadow-lg border border-zinc-600/50 transition-all duration-300"
            aria-label="Next posts"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </motion.button>
        </>
      )}

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-amber-500 to-amber-300 shadow-lg shadow-amber-500/30'
                  : 'bg-zinc-600 hover:bg-zinc-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};