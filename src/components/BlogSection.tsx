"use client";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useState, useEffect, useCallback } from "react";

export default function BlogSection() {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  // Set cards per view based on screen size
  const getCardsPerView = useCallback(() => {
    if (windowWidth < 640) return 1; // Mobile: 1 card
    if (windowWidth < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  }, [windowWidth]);

  // Handle window resize
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Reset to first slide when screen size changes to prevent empty slides
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postsResponse = await client.queries.postConnection({
          first: 10, // Get more posts for the slider
        });
        const fetchedPosts = postsResponse.data.postConnection.edges
          ?.map(edge => edge?.node)
          .filter(Boolean) || [];
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  const cardsPerView = getCardsPerView();
  const totalSlides = Math.max(1, posts.length - (cardsPerView - 1));

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || posts.length <= cardsPerView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [posts.length, isAutoPlaying, cardsPerView, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (posts.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-lighttype to-white">
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Healthcare Digital Marketing Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No blog posts available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Show all posts in grid if fewer than cards per view
  if (posts.length <= cardsPerView) {
    return (
      <section className="py-16 bg-gradient-to-br from-lighttype to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-two rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-6">
              Healthcare Digital Marketing Insights
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead in healthcare marketing with proven strategies and expert insights
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-two mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Grid Layout for Few Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-xl hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore All Insights
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Slider Layout for More Posts
  return (
    <section className="py-16 bg-gradient-to-br from-lighttype to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-two rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-6">
            Healthcare Digital Marketing Insights
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead in healthcare marketing with proven strategies and expert insights
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-two mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slider Wrapper */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {posts.map((post, index) => (
                <div 
                  key={post.id} 
                  className={`px-2 ${
                    cardsPerView === 1 ? 'w-full' : 
                    cardsPerView === 2 ? 'w-1/2' : 
                    'w-1/3'
                  }`}
                  style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                >
                  <BlogCard post={post} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-xl hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Explore All Insights
            <svg className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// BlogCard component (unchanged)
function BlogCard({ post, index }: { post: any; index: number }) {
  return (
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden transform hover:-translate-y-2">
      {/* Featured Badge for First Post */}
      {index === 0 && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        {post.mainImage ? (
          <Image
            src={post.mainImage}
            alt={post.title || "Blog post image"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-primary-two/30 to-primary/5 flex items-center justify-center">
            <div className="text-center">
              <svg 
                className="w-16 h-16 text-primary/40 mx-auto mb-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" 
                />
              </svg>
              <p className="text-primary/60 text-sm font-medium">Healthcare Insights</p>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold">
            Digital Marketing
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-xl font-bold text-primary mb-4 line-clamp-2 group-hover:text-primary/80 transition-colors leading-tight">
          {post.title}
        </h3>
        
        {post.excerpt && (
          <div className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
            <TinaMarkdown content={post.excerpt} />
          </div>
        )}
        
        {/* Read More Link */}
        <Link
          href={`/blog/${post._sys.filename}`}
          className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-300 mt-auto group/link border-b-2 border-transparent hover:border-primary/30 pb-1"
        >
          Read Full Article
          <svg
            className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}