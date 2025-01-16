import Header from "@/components/Header";
import FeaturedArticle from "@/components/FeaturedArticle";
import RecommendedArticles from "@/components/RecommendedArticles";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FeaturedArticle />
          </div>
          <div>
            <RecommendedArticles />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;