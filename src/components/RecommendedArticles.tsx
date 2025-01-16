import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    id: 1,
    title: "Over 85% of Crypto-Related Tweets and 54% of Communications on Reddit Were Positive in 2023",
    time: "4 hours ago",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "STX Price Prediction: After 125% Price Jump in December, What's in Store for 2024?",
    time: "6 hours ago",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "US-Approved Spot Bitcoin ETFs Could Surpass Entire $50 Billion Crypto ETP Market",
    time: "8 hours ago",
    image: "/placeholder.svg"
  }
];

const RecommendedArticles = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Recommended</h3>
        <a href="#" className="text-primary text-sm hover:text-primary/80 transition-colors">
          View all
        </a>
      </div>
      <div className="space-y-4">
        {articles.map((article) => (
          <Card key={article.id} className="bg-card/50 hover:bg-card/80 transition-colors cursor-pointer">
            <CardContent className="flex items-center p-4">
              <div className="flex-1 pr-4">
                <h4 className="font-medium mb-1 line-clamp-2">{article.title}</h4>
                <span className="text-sm text-muted-foreground">{article.time}</span>
              </div>
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img src={article.image} alt="" className="w-full h-full object-cover" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendedArticles;