import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  const blogData: Record<string, any> = {
    "data-visualization-best-practices": {
      title: "Data Visualization Best Practices",
      date: "March 20, 2024",
      readTime: "5 min read",
      content: `
        <p>Creating effective data visualizations is both an art and a science. Clear, impactful visualizations transform complex data into compelling stories that drive decision-making.</p>
        
        <h2>Choose the Right Chart Type</h2>
        <p>Different data requires different visualization approaches. Bar charts excel at comparing categories, line charts show trends over time, and scatter plots reveal relationships between variables.</p>
        <ul>
          <li>Use bar charts for categorical comparisons</li>
          <li>Line charts for time-series data</li>
          <li>Pie charts sparingly (only for simple proportions)</li>
          <li>Heatmaps for correlation matrices</li>
        </ul>

        <h2>Design Principles</h2>
        <p>Keep your visualizations clean and focused. Remove unnecessary elements that don't add value to the story. Use color intentionally to highlight key insights, not just for decoration.</p>

        <h2>Tell a Story</h2>
        <p>Every visualization should answer a specific question. Guide your audience through the data with clear titles, annotations, and progressive disclosure of information.</p>

        <h2>Tools and Technologies</h2>
        <p>Modern tools like Tableau, Power BI, and Python libraries (Matplotlib, Seaborn, Plotly) make creating professional visualizations accessible. Choose based on your audience and technical requirements.</p>
      `,
    },
    "python-pandas-guide": {
      title: "Master Data Analysis with Pandas",
      date: "March 15, 2024",
      readTime: "7 min read",
      content: `
        <p>Pandas is the cornerstone of data analysis in Python. This powerful library provides intuitive data structures and methods that make data manipulation efficient and enjoyable.</p>

        <h2>DataFrame Fundamentals</h2>
        <p>The DataFrame is Pandas' primary data structure—a two-dimensional labeled array. Think of it as a supercharged spreadsheet with powerful analytical capabilities built in.</p>

        <h2>Essential Operations</h2>
        <p>Master these core operations to become proficient with Pandas:</p>
        <ul>
          <li>Filtering and selecting data with boolean indexing</li>
          <li>Grouping and aggregating with groupby()</li>
          <li>Merging and joining datasets</li>
          <li>Handling missing data effectively</li>
        </ul>

        <h2>Performance Tips</h2>
        <p>Use vectorized operations instead of loops. Apply method chaining for cleaner code. Leverage built-in functions optimized for speed.</p>

        <h2>Real-World Applications</h2>
        <p>From cleaning messy datasets to performing complex statistical analyses, Pandas handles it all. It's the go-to tool for data scientists and analysts worldwide.</p>
      `,
    },
    "seo-fundamentals": {
      title: "SEO Fundamentals for 2024",
      date: "March 12, 2024",
      readTime: "6 min read",
      content: `
        <p>Search engine optimization continues to evolve. Understanding the fundamentals ensures your website ranks well and attracts organic traffic in 2024 and beyond.</p>

        <h2>On-Page Optimization</h2>
        <p>Start with the basics: optimize title tags, meta descriptions, and header tags. Use keywords naturally—focus on user intent rather than keyword stuffing.</p>

        <h2>Technical SEO</h2>
        <p>Site speed, mobile responsiveness, and proper site architecture are crucial. Search engines prioritize websites that provide excellent user experiences.</p>
        <ul>
          <li>Optimize images and minimize file sizes</li>
          <li>Implement proper URL structure</li>
          <li>Create XML sitemaps</li>
          <li>Fix broken links and redirects</li>
        </ul>

        <h2>Content Quality</h2>
        <p>Create valuable, original content that addresses user needs. Long-form, comprehensive content tends to perform better in search results.</p>

        <h2>Link Building</h2>
        <p>Quality backlinks remain a key ranking factor. Focus on earning links naturally through great content and outreach to relevant websites in your niche.</p>
      `,
    },
    "react-performance-optimization": {
      title: "React Performance Optimization",
      date: "March 8, 2024",
      readTime: "8 min read",
      content: `
        <p>Building fast React applications requires understanding performance bottlenecks and applying optimization techniques strategically. Let's explore proven methods to keep your React apps blazing fast.</p>

        <h2>Component Optimization</h2>
        <p>Use React.memo() to prevent unnecessary re-renders of functional components. Implement useMemo and useCallback hooks to memoize expensive computations and callback functions.</p>

        <h2>Code Splitting</h2>
        <p>Break your application into smaller chunks that load on demand. React.lazy() and Suspense make code splitting straightforward and effective.</p>

        <h2>Virtual Lists</h2>
        <p>When rendering large lists, use libraries like react-window or react-virtualized to render only visible items. This dramatically reduces DOM nodes and improves performance.</p>

        <h2>Production Build</h2>
        <p>Always use production builds for deployment. They include optimizations like minification, dead code elimination, and efficient bundling that significantly improve load times.</p>
      `,
    },
    "social-media-analytics": {
      title: "Social Media Analytics Guide",
      date: "March 5, 2024",
      readTime: "5 min read",
      content: `
        <p>Tracking and measuring social media performance is essential for any digital marketing strategy. Data-driven insights help you understand what works and optimize your social presence.</p>

        <h2>Key Metrics to Track</h2>
        <p>Focus on metrics that align with your goals:</p>
        <ul>
          <li>Engagement rate (likes, comments, shares)</li>
          <li>Reach and impressions</li>
          <li>Click-through rate</li>
          <li>Conversion rate</li>
          <li>Audience growth rate</li>
        </ul>

        <h2>Platform-Specific Analytics</h2>
        <p>Each platform offers unique insights. Facebook Insights, Twitter Analytics, and Instagram Insights provide valuable data about your audience and content performance.</p>

        <h2>Tools and Dashboards</h2>
        <p>Use tools like Hootsuite, Sprout Social, or Google Analytics to consolidate data across platforms. Create custom dashboards to track your most important KPIs.</p>

        <h2>Actionable Insights</h2>
        <p>Don't just collect data—use it. Identify your best-performing content, optimal posting times, and audience preferences to refine your strategy.</p>
      `,
    },
    "sql-data-analysis": {
      title: "SQL for Data Analysis",
      date: "March 1, 2024",
      readTime: "6 min read",
      content: `
        <p>SQL remains the most important tool for working with relational databases. Mastering SQL empowers you to extract, transform, and analyze data efficiently.</p>

        <h2>Essential Queries</h2>
        <p>Learn these fundamental operations:</p>
        <ul>
          <li>SELECT statements with WHERE clauses</li>
          <li>JOIN operations to combine tables</li>
          <li>GROUP BY for aggregations</li>
          <li>Subqueries and CTEs for complex logic</li>
        </ul>

        <h2>Window Functions</h2>
        <p>Window functions like ROW_NUMBER(), RANK(), and LEAD() enable advanced analytical queries without complex self-joins. They're essential for time-series analysis and ranking operations.</p>

        <h2>Query Optimization</h2>
        <p>Write efficient queries by understanding indexes, execution plans, and query optimization techniques. A well-optimized query can be orders of magnitude faster.</p>

        <h2>Real-World Applications</h2>
        <p>From business intelligence to data warehousing, SQL is ubiquitous. It's the foundation of modern data analytics across industries.</p>
      `,
    },
    "wordpress-development-tips": {
      title: "WordPress Development Best Practices",
      date: "February 25, 2024",
      readTime: "7 min read",
      content: `
        <p>WordPress powers over 40% of the web. Building fast, secure, and maintainable WordPress sites requires following best practices and understanding the platform's architecture.</p>

        <h2>Theme Development</h2>
        <p>Use child themes for customizations to preserve your changes during updates. Follow WordPress coding standards and leverage template hierarchy effectively.</p>

        <h2>Performance Optimization</h2>
        <ul>
          <li>Use caching plugins and CDNs</li>
          <li>Optimize images and lazy load media</li>
          <li>Minimize plugins and choose quality over quantity</li>
          <li>Implement proper database optimization</li>
        </ul>

        <h2>Security Best Practices</h2>
        <p>Keep WordPress core, themes, and plugins updated. Use strong passwords, implement two-factor authentication, and regularly backup your site.</p>

        <h2>Custom Post Types</h2>
        <p>Extend WordPress functionality with custom post types and taxonomies. This allows you to structure content beyond standard posts and pages.</p>
      `,
    },
    "data-cleaning-techniques": {
      title: "Data Cleaning Techniques",
      date: "February 20, 2024",
      readTime: "6 min read",
      content: `
        <p>Clean data is the foundation of accurate analysis. Learning systematic approaches to identify and fix data quality issues is essential for every data professional.</p>

        <h2>Common Data Issues</h2>
        <p>Identify these frequent problems in raw datasets:</p>
        <ul>
          <li>Missing values and null handling</li>
          <li>Duplicate records</li>
          <li>Inconsistent formatting</li>
          <li>Outliers and anomalies</li>
        </ul>

        <h2>Cleaning Strategies</h2>
        <p>Use standardized approaches: validate data types, handle missing values appropriately (imputation vs deletion), standardize formats, and document your cleaning steps.</p>

        <h2>Tools and Libraries</h2>
        <p>Python's Pandas and NumPy libraries provide powerful functions for data cleaning. Learn fillna(), drop_duplicates(), and apply() methods.</p>

        <h2>Validation</h2>
        <p>Always validate your cleaned data. Check distributions, ranges, and relationships to ensure your cleaning process didn't introduce new errors.</p>
      `,
    },
    "content-marketing-strategy": {
      title: "Building a Content Marketing Strategy",
      date: "February 15, 2024",
      readTime: "8 min read",
      content: `
        <p>A data-driven content marketing strategy helps you create the right content for the right audience at the right time. Learn to build a framework that drives measurable results.</p>

        <h2>Define Your Goals</h2>
        <p>Start with clear, measurable objectives. Are you building awareness, generating leads, or driving conversions? Your goals shape your content strategy.</p>

        <h2>Audience Research</h2>
        <p>Understand your target audience deeply. Create detailed buyer personas, identify pain points, and map content to different stages of the customer journey.</p>

        <h2>Content Planning</h2>
        <ul>
          <li>Conduct keyword research</li>
          <li>Analyze competitor content</li>
          <li>Create a content calendar</li>
          <li>Diversify content formats</li>
        </ul>

        <h2>Measure and Optimize</h2>
        <p>Track key metrics like engagement, conversions, and ROI. Use data to refine your strategy continuously and focus on what works.</p>
      `,
    },
    "javascript-async-patterns": {
      title: "Modern JavaScript Async Patterns",
      date: "February 10, 2024",
      readTime: "7 min read",
      content: `
        <p>Asynchronous programming is fundamental to modern JavaScript development. Understanding promises, async/await, and error handling patterns is essential for building robust applications.</p>

        <h2>Promises</h2>
        <p>Promises represent eventual completion or failure of asynchronous operations. They provide a cleaner alternative to callback hell with better error handling.</p>

        <h2>Async/Await</h2>
        <p>The async/await syntax makes asynchronous code look synchronous, improving readability. Functions marked as async automatically return promises.</p>

        <h2>Error Handling</h2>
        <ul>
          <li>Use try/catch blocks with async/await</li>
          <li>Implement proper error propagation</li>
          <li>Handle both success and failure cases</li>
          <li>Use Promise.allSettled() for parallel operations</li>
        </ul>

        <h2>Best Practices</h2>
        <p>Avoid mixing async patterns. Choose async/await for sequential operations and Promise.all() for parallel operations. Always handle errors appropriately.</p>
      `,
    },
    "google-analytics-guide": {
      title: "Google Analytics 4 Setup Guide",
      date: "February 5, 2024",
      readTime: "6 min read",
      content: `
        <p>Google Analytics 4 represents a complete redesign of web analytics. This guide covers everything you need to set up GA4 and start tracking meaningful metrics.</p>

        <h2>Initial Setup</h2>
        <p>Create a GA4 property, install the tracking code, and configure basic settings. The setup differs significantly from Universal Analytics.</p>

        <h2>Event Tracking</h2>
        <p>GA4 uses an event-based model. Configure custom events to track user interactions like button clicks, form submissions, and video plays.</p>

        <h2>Key Reports</h2>
        <ul>
          <li>Acquisition reports for traffic sources</li>
          <li>Engagement metrics for content performance</li>
          <li>Conversion tracking for goal completions</li>
          <li>User demographics and interests</li>
        </ul>

        <h2>Integration Tips</h2>
        <p>Connect GA4 with Google Tag Manager for flexible tracking, link to Google Ads for campaign optimization, and set up BigQuery exports for advanced analysis.</p>
      `,
    },
    "machine-learning-basics": {
      title: "Machine Learning for Data Analysts",
      date: "February 1, 2024",
      readTime: "9 min read",
      content: `
        <p>Machine learning is transforming data analysis. This introduction covers essential ML concepts and algorithms that every data analyst should understand.</p>

        <h2>Supervised vs Unsupervised Learning</h2>
        <p>Supervised learning uses labeled data to make predictions. Unsupervised learning finds patterns in unlabeled data. Understanding this distinction is fundamental.</p>

        <h2>Common Algorithms</h2>
        <ul>
          <li>Linear and Logistic Regression</li>
          <li>Decision Trees and Random Forests</li>
          <li>K-Means Clustering</li>
          <li>Neural Networks basics</li>
        </ul>

        <h2>Model Evaluation</h2>
        <p>Learn to assess model performance using metrics like accuracy, precision, recall, and F1 score. Understand overfitting and how to prevent it.</p>

        <h2>Practical Applications</h2>
        <p>Apply ML to real-world problems: customer segmentation, churn prediction, recommendation systems, and demand forecasting.</p>
      `,
    },
  };

  const post = blogData[id || ""];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog post not found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={20} />
            <span>Back to all blogs</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
