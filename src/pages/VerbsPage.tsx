import { Zap } from "lucide-react";
import TopicPageLayout from "@/components/TopicPageLayout";

const worksheets = [
  {
    number: 1,
    level: "Very Basic",
    description: "Introduction to action verbs - words that show what someone or something does. Simple everyday actions.",
    driveLink: "https://drive.google.com/file/d/VERBS_WORKSHEET_1/view",
  },
  {
    number: 2,
    level: "Basic",
    description: "Being verbs (am, is, are, was, were) and helping verbs. Learn how verbs work together in sentences.",
    driveLink: "https://drive.google.com/file/d/VERBS_WORKSHEET_2/view",
  },
  {
    number: 3,
    level: "Intermediate",
    description: "Regular and irregular verbs. Past tense forms and common irregular verb patterns. Practice exercises.",
    driveLink: "https://drive.google.com/file/d/VERBS_WORKSHEET_3/view",
  },
  {
    number: 4,
    level: "Upper-Intermediate",
    description: "Verb tenses - present, past, and future. Progressive and perfect forms. Subject-verb agreement practice.",
    driveLink: "https://drive.google.com/file/d/VERBS_WORKSHEET_4/view",
  },
  {
    number: 5,
    level: "Advanced",
    description: "Modal verbs, phrasal verbs, and verb moods. Complex tense usage and advanced verb structures in context.",
    driveLink: "https://drive.google.com/file/d/VERBS_WORKSHEET_5/view",
  },
];

const VerbsPage = () => {
  return (
    <TopicPageLayout
      title="Verbs"
      subtitle="Types of Verbs"
      description="Verbs are action or state words that form the core of every sentence. They tell us what the subject does, feels, or is. Understanding verbs is essential for constructing meaningful sentences."
      icon={Zap}
      colorClass="text-topic-verb"
      bgColorClass="bg-topic-verb-bg"
      worksheets={worksheets}
    />
  );
};

export default VerbsPage;
