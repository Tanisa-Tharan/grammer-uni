import { Sparkles } from "lucide-react";
import TopicPageLayout from "@/components/TopicPageLayout";

const worksheets = [
  {
    number: 1,
    level: "Very Basic",
    description: "Introduction to adjectives - describing words for people, places, and things. Colors, sizes, and simple qualities.",
    driveLink: "https://drive.google.com/file/d/ADJECTIVES_WORKSHEET_1/view",
  },
  {
    number: 2,
    level: "Basic",
    description: "Position of adjectives in sentences. Using multiple adjectives together. Common describing words practice.",
    driveLink: "https://drive.google.com/file/d/ADJECTIVES_WORKSHEET_2/view",
  },
  {
    number: 3,
    level: "Intermediate",
    description: "Comparative adjectives (bigger, more beautiful) and superlative adjectives (biggest, most beautiful). Regular forms.",
    driveLink: "https://drive.google.com/file/d/ADJECTIVES_WORKSHEET_3/view",
  },
  {
    number: 4,
    level: "Upper-Intermediate",
    description: "Irregular comparatives and superlatives. Adjective order rules. Participial adjectives (-ed and -ing forms).",
    driveLink: "https://drive.google.com/file/d/ADJECTIVES_WORKSHEET_4/view",
  },
  {
    number: 5,
    level: "Advanced",
    description: "Compound adjectives, proper adjectives, and predicate adjectives. Advanced descriptive writing techniques.",
    driveLink: "https://drive.google.com/file/d/ADJECTIVES_WORKSHEET_5/view",
  },
];

const AdjectivesPage = () => {
  return (
    <TopicPageLayout
      title="Adjectives"
      subtitle="Types of Adjectives"
      description="Adjectives are describing words that modify nouns and pronouns. They add detail and color to your writing by telling us more about the qualities, quantities, or states of what we're talking about."
      icon={Sparkles}
      colorClass="text-topic-adjective"
      bgColorClass="bg-topic-adjective-bg"
      worksheets={worksheets}
    />
  );
};

export default AdjectivesPage;
