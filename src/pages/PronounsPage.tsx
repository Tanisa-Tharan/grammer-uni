import { UserCircle } from "lucide-react";
import TopicPageLayout from "@/components/TopicPageLayout";

const worksheets = [
  {
    number: 1,
    level: "Very Basic",
    description: "Introduction to personal pronouns - I, you, he, she, it, we, they. Replacing nouns with pronouns in simple sentences.",
    driveLink: "https://drive.google.com/file/d/PRONOUNS_WORKSHEET_1/view",
  },
  {
    number: 2,
    level: "Basic",
    description: "Subject and object pronouns. Learn when to use 'I' vs. 'me', 'he' vs. 'him', and other pronoun pairs.",
    driveLink: "https://drive.google.com/file/d/PRONOUNS_WORKSHEET_2/view",
  },
  {
    number: 3,
    level: "Intermediate",
    description: "Possessive pronouns (mine, yours, his, hers) and possessive adjectives (my, your, his, her). Practice exercises.",
    driveLink: "https://drive.google.com/file/d/PRONOUNS_WORKSHEET_3/view",
  },
  {
    number: 4,
    level: "Upper-Intermediate",
    description: "Reflexive pronouns (myself, yourself) and demonstrative pronouns (this, that, these, those). Usage in context.",
    driveLink: "https://drive.google.com/file/d/PRONOUNS_WORKSHEET_4/view",
  },
  {
    number: 5,
    level: "Advanced",
    description: "Relative pronouns (who, which, that), interrogative pronouns, and indefinite pronouns. Complex pronoun usage.",
    driveLink: "https://drive.google.com/file/d/PRONOUNS_WORKSHEET_5/view",
  },
];

const PronounsPage = () => {
  return (
    <TopicPageLayout
      title="Pronouns"
      subtitle="Types of Pronouns"
      description="Pronouns are words that take the place of nouns to avoid repetition and make sentences smoother. They include personal, possessive, reflexive, and relative pronouns."
      icon={UserCircle}
      colorClass="text-topic-pronoun"
      bgColorClass="bg-topic-pronoun-bg"
      worksheets={worksheets}
    />
  );
};

export default PronounsPage;
