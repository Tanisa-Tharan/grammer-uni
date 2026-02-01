import { FileText, ExternalLink } from "lucide-react";

interface WorksheetCardProps {
  number: number;
  level: string;
  description: string;
  driveLink: string;
}

const levelStyles: Record<string, string> = {
  "Very Basic": "level-very-basic",
  "Basic": "level-basic",
  "Intermediate": "level-intermediate",
  "Upper-Intermediate": "level-upper-intermediate",
  "Advanced": "level-advanced",
};

const WorksheetCard = ({
  number,
  level,
  description,
  driveLink,
}: WorksheetCardProps) => {
  return (
    <div className="worksheet-card group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
          <FileText className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <h4 className="font-semibold text-foreground">
              Worksheet {number}
            </h4>
            <span className={`level-badge ${levelStyles[level]}`}>
              {level}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:gap-3"
          >
            Open Worksheet
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorksheetCard;
