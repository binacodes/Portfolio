export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "data-visualization-best-practices",
    title: "Data Visualization Best Practices",
    excerpt: "Learn essential principles for creating clear, impactful visualizations that tell compelling data stories.",
    date: "March 20, 2024",
    readTime: "5 min read",
    category: "Data Analytics"
  },
  {
    id: "python-pandas-guide",
    title: "Master Data Analysis with Pandas",
    excerpt: "A practical guide to using Python's Pandas library for efficient data manipulation and analysis.",
    date: "March 15, 2024",
    readTime: "7 min read",
    category: "Data Science"
  },
  {
    id: "seo-fundamentals",
    title: "SEO Fundamentals for 2024",
    excerpt: "Essential SEO strategies to improve your website's visibility and organic search rankings.",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Digital Marketing"
  },
  {
    id: "react-performance-optimization",
    title: "React Performance Optimization",
    excerpt: "Techniques to build faster, more efficient React applications with better user experience.",
    date: "March 8, 2024",
    readTime: "8 min read",
    category: "Development"
  },
  {
    id: "social-media-analytics",
    title: "Social Media Analytics Guide",
    excerpt: "Track and measure your social media performance with data-driven insights and metrics.",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "Digital Marketing"
  },
  {
    id: "sql-data-analysis",
    title: "SQL for Data Analysis",
    excerpt: "Master SQL queries and database management for effective data analysis workflows.",
    date: "March 1, 2024",
    readTime: "6 min read",
    category: "Data Analytics"
  },
  {
    id: "wordpress-development-tips",
    title: "WordPress Development Best Practices",
    excerpt: "Essential tips for building fast, secure, and maintainable WordPress websites.",
    date: "February 25, 2024",
    readTime: "7 min read",
    category: "Development"
  },
  {
    id: "data-cleaning-techniques",
    title: "Data Cleaning Techniques",
    excerpt: "Learn effective methods to clean and prepare messy datasets for analysis.",
    date: "February 20, 2024",
    readTime: "6 min read",
    category: "Data Science"
  },
  {
    id: "content-marketing-strategy",
    title: "Building a Content Marketing Strategy",
    excerpt: "Create a data-driven content strategy that drives engagement and conversions.",
    date: "February 15, 2024",
    readTime: "8 min read",
    category: "Digital Marketing"
  },
  {
    id: "javascript-async-patterns",
    title: "Modern JavaScript Async Patterns",
    excerpt: "Understanding promises, async/await, and error handling in modern JavaScript.",
    date: "February 10, 2024",
    readTime: "7 min read",
    category: "Development"
  },
  {
    id: "google-analytics-guide",
    title: "Google Analytics 4 Setup Guide",
    excerpt: "Complete guide to setting up and tracking key metrics with Google Analytics 4.",
    date: "February 5, 2024",
    readTime: "6 min read",
    category: "Digital Marketing"
  },
  {
    id: "machine-learning-basics",
    title: "Machine Learning for Data Analysts",
    excerpt: "Introduction to ML concepts and algorithms every data analyst should know.",
    date: "February 1, 2024",
    readTime: "9 min read",
    category: "Data Science"
  }
];
