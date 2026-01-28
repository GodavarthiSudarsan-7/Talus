import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CalendarBlank, ArrowRight } from '@phosphor-icons/react';

const blogPosts = [
  {
    title: 'The Future of Open Innovation: Why Blockchain Changes Everything',
    excerpt: 'Traditional open innovation faces a trust problem. Blockchain-based reputation systems offer a solution that could transform how enterprises and innovators collaborate.',
    category: 'Open Innovation',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    featured: true,
  },
  {
    title: 'Cross-Industry Collaboration: Breaking Down the Silos',
    excerpt: 'The most innovative solutions often come from unexpected places. Learn how cross-industry expertise is solving problems no single company could tackle alone.',
    category: 'Collaboration',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
  },
  {
    title: 'Understanding Verifiable Attribution in Innovation Ecosystems',
    excerpt: 'What does it mean to truly own your contributions? We explore how blockchain verification protects innovators while enabling unprecedented transparency.',
    category: 'Blockchain',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
  },
  {
    title: 'From Idea to Prototype: Accelerating Innovation Cycles',
    excerpt: 'How community validation and mentor feedback can reduce prototype development from years to months without sacrificing quality or rigor.',
    category: 'Innovation',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
  },
  {
    title: 'Building Trust Without Revealing Identity: The Power of Reputation',
    excerpt: 'Pseudonymous innovators with verified track records are changing how enterprises think about talent and collaboration.',
    category: 'Reputation',
    date: 'Nov 20, 2024',
    readTime: '5 min read',
  },
  {
    title: 'IP Protection in Open Innovation: A New Paradigm',
    excerpt: 'How smart contracts and blockchain verification are creating new models for intellectual property protection that benefit both enterprises and innovators.',
    category: 'IP & Legal',
    date: 'Nov 15, 2024',
    readTime: '9 min read',
  },
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span className="text-sm text-primary uppercase tracking-wider font-medium">
              Blog & Insights
            </span>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mt-4 mb-6 opacity-100">
              Thought Leadership on{' '}
              <span className="gradient-text">Open Innovation</span>
            </h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Explore insights on blockchain-backed collaboration, cross-industry innovation, 
              and the future of verified attribution.
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="glass-card p-8 md:p-12 group hover:border-primary/30 transition-all duration-500 cursor-pointer">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        Featured
                      </span>
                      <span className="text-sm text-foreground/50">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 opacity-100 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-foreground/60 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-foreground/50">
                      <div className="flex items-center gap-2">
                        <CalendarBlank size={16} weight="light" />
                        {featuredPost.date}
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ArrowRight size={20} weight="light" className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-500 cursor-pointer"
              >
                <span className="text-sm text-primary mb-3 block">
                  {post.category}
                </span>
                <h3 className="text-xl font-medium tracking-tight mb-3 opacity-100 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-foreground/60 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-foreground/50">
                  <div className="flex items-center gap-2">
                    <CalendarBlank size={14} weight="light" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
