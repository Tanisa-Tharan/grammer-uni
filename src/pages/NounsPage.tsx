import { BookText } from "lucide-react";
import TopicPageLayout from "@/components/TopicPageLayout";

const worksheets = [
  {
    number: 1,
    level: "Very Basic",
    description: "Introduction to nouns - identifying people, places, and things. Simple exercises with common everyday nouns.",
    driveLink: "https://drive.google.com/file/d/NOUNS_WORKSHEET_1/view",
  },
  {
    number: 2,
    level: "Basic",
    description: "Common and proper nouns. Learn the difference between general nouns and specific names. Practice capitalization rules.",
    driveLink: "https://drive.google.com/file/d/NOUNS_WORKSHEET_2/view",
  },
  {
    number: 3,
    level: "Intermediate",
    description: "Singular and plural nouns, including regular and irregular forms. Practice changing nouns from singular to plural.",
    driveLink: "https://drive.google.com/file/d/NOUNS_WORKSHEET_3/view",
  },
  {
    number: 4,
    level: "Upper-Intermediate",
    description: "Abstract and concrete nouns. Collective nouns and countable vs. uncountable nouns. More complex exercises.",
    driveLink: "https://drive.google.com/file/d/NOUNS_WORKSHEET_4/view",
  },
  {
    number: 5,
    level: "Advanced",
    description: "Compound nouns, possessive nouns, and noun phrases. Advanced exercises covering all noun types in context.",
    driveLink: "https://drive.google.com/file/d/NOUNS_WORKSHEET_5/view",
  },
];

const NounsPage = () => {
  return (
    <TopicPageLayout
      title="Nouns"
      subtitle="Types of Nouns"
      description="Nouns are naming words that represent people, places, things, or ideas. They are the building blocks of sentences and one of the most fundamental parts of speech in English grammar."
      icon={BookText}
      colorClass="text-topic-noun"
      bgColorClass="bg-topic-noun-bg"
      worksheets={worksheets}
    />
  );
};

export default NounsPage;
