import { ArrowRight } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <div className="relative h-[400px] glass-card overflow-hidden mb-8">
      <div className="featured-gradient" />
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <div className="max-w-3xl">
          <span className="text-primary mb-2 inline-block">BEST OF THE WEEK</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Analyst Unveils Ethereum Catalyst That Could Trigger Nearly 50% Surge for ETH
          </h2>
          <p className="text-muted-foreground mb-4">
            A detailed analysis of the upcoming market trends and potential catalysts for Ethereum's growth.
          </p>
          <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
            Read article <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;