import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface TopicCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  colorClass: string;
  bgColorClass: string;
  worksheetCount: number;
}

const TopicCard = ({
  title,
  description,
  icon: Icon,
  path,
  colorClass,
  bgColorClass,
  worksheetCount,
}: TopicCardProps) => {
  return (
    <Link
      to={path}
      className="topic-card group block"
    >
      <div
        className={`w-14 h-14 rounded-xl ${bgColorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-7 h-7 ${colorClass}`} />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {worksheetCount} worksheets
        </span>
        <span className={`text-sm font-medium ${colorClass} group-hover:translate-x-1 transition-transform duration-200`}>
          Explore →
        </span>
      </div>
    </Link>
  );
};

export default TopicCard;
