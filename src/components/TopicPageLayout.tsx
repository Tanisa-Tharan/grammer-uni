import { Link } from "react-router-dom";
import { LucideIcon, ArrowLeft } from "lucide-react";
import WorksheetCard from "./WorksheetCard";

interface Worksheet {
  number: number;
  level: string;
  description: string;
  driveLink: string;
}

interface TopicPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  bgColorClass: string;
  worksheets: Worksheet[];
}

const TopicPageLayout = ({
  title,
  subtitle,
  description,
  icon: Icon,
  colorClass,
  bgColorClass,
  worksheets,
}: TopicPageLayoutProps) => {
  return (
    <div className="min-h-screen">
      {/* Back Link */}
      <div className="container mx-auto px-4 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Topics
        </Link>
      </div>

      {/* Header Section */}
      <section className={`py-8 md:py-12 ${bgColorClass}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div
              className={`w-16 h-16 rounded-2xl bg-card shadow-sm flex items-center justify-center mx-auto mb-6`}
            >
              <Icon className={`w-8 h-8 ${colorClass}`} />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {title}
            </h1>
            
            <p className={`text-lg font-medium ${colorClass} mb-4`}>
              {subtitle}
            </p>
            
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Worksheets Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Practice Worksheets
            </h2>
            <p className="text-muted-foreground mb-8">
              Progress from very basic to advanced concepts
            </p>
            
            <div className="space-y-4">
              {worksheets.map((worksheet, index) => (
                <div
                  key={worksheet.number}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <WorksheetCard {...worksheet} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopicPageLayout;
