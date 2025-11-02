import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  // Show first 6 posts on homepage
  const featuredPosts = blogPosts.slice(0, 6);

  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">Latest Insights</h2>
          <p className="text-center text-muted-foreground mb-6">Exploring data, development, and digital strategies</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 flex flex-col h-full group">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button variant="outline" className="group">
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
