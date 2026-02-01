import { Volume2 } from "lucide-react";
import TopicPageLayout from "@/components/TopicPageLayout";

const worksheets = [
  {
    number: 1,
    level: "Very Basic",
    description: "Introduction to adverbs - words that describe how actions are done. Simple manner adverbs (slowly, quickly, happily).",
    driveLink: "https://drive.google.com/file/d/ADVERBS_WORKSHEET_1/view",
  },
  {
    number: 2,
    level: "Basic",
    description: "Adverbs of time (now, yesterday, soon) and place (here, there, everywhere). Using adverbs in simple sentences.",
    driveLink: "https://drive.google.com/file/d/ADVERBS_WORKSHEET_2/view",
  },
  {
    number: 3,
    level: "Intermediate",
    description: "Adverbs of frequency (always, usually, sometimes, never) and degree (very, quite, extremely). Position in sentences.",
    driveLink: "https://drive.google.com/file/d/ADVERBS_WORKSHEET_3/view",
  },
  {
    number: 4,
    level: "Upper-Intermediate",
    description: "Comparative and superlative adverbs. Adverbs that modify adjectives and other adverbs. Sentence adverbs.",
    driveLink: "https://drive.google.com/file/d/ADVERBS_WORKSHEET_4/view",
  },
  {
    number: 5,
    level: "Advanced",
    description: "Adverb clauses and conjunctive adverbs. Advanced placement rules. Distinguishing adverbs from adjectives.",
    driveLink: "https://drive.google.com/file/d/ADVERBS_WORKSHEET_5/view",
  },
];

const AdverbsPage = () => {
  return (
    <TopicPageLayout
      title="Adverbs"
      subtitle="Types of Adverbs"
      description="Adverbs modify verbs, adjectives, and other adverbs. They tell us how, when, where, and to what extent something happens, adding precision and clarity to our sentences."
      icon={Volume2}
      colorClass="text-topic-adverb"
      bgColorClass="bg-topic-adverb-bg"
      worksheets={worksheets}
    />
  );
};

export default AdverbsPage;
