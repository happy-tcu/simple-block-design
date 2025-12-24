import { Link } from "react-router-dom";
import { BrutalistButton } from "@/components/ui/brutalist-card";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        <div className="border-4 border-foreground p-8 inline-block">
          <h1 className="text-9xl font-black text-foreground">404</h1>
        </div>
        <p className="text-2xl font-bold text-foreground uppercase tracking-wider">
          Page Not Found
        </p>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <BrutalistButton>Return Home</BrutalistButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
