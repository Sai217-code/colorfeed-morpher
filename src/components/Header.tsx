import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 glass-card mb-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-semibold">Feed</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="nav-link">All</a>
            <a href="#" className="nav-link">News</a>
            <a href="#" className="nav-link">Exclusives</a>
            <a href="#" className="nav-link">Guides</a>
            <a href="#" className="nav-link">Recommended</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button>Get in touch</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;