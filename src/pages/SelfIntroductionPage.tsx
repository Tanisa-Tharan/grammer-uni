import { User } from "lucide-react";
import TopicPageLayout from "@/components/TopicPageLayout";

const worksheets = [
  {
    number: 1,
    level: "Very Basic",
    description: "Basic self-introduction - saying your name, age, and where you're from. Simple 'I am...' sentences.",
    driveLink: "https://drive.google.com/file/d/SELF_INTRO_WORKSHEET_1/view",
  },
  {
    number: 2,
    level: "Basic",
    description: "Talking about family, hobbies, and favorites. Expanding vocabulary for personal descriptions.",
    driveLink: "https://drive.google.com/file/d/SELF_INTRO_WORKSHEET_2/view",
  },
  {
    number: 3,
    level: "Intermediate",
    description: "Describing daily routines, school/work life, and interests. Using present tense correctly in introductions.",
    driveLink: "https://drive.google.com/file/d/SELF_INTRO_WORKSHEET_3/view",
  },
  {
    number: 4,
    level: "Upper-Intermediate",
    description: "Expressing opinions, goals, and experiences. Past and future tenses in personal narratives.",
    driveLink: "https://drive.google.com/file/d/SELF_INTRO_WORKSHEET_4/view",
  },
  {
    number: 5,
    level: "Advanced",
    description: "Professional introductions, elevator pitches, and formal self-presentations. Advanced vocabulary and fluency.",
    driveLink: "https://drive.google.com/file/d/SELF_INTRO_WORKSHEET_5/view",
  },
];

const SelfIntroductionPage = () => {
  return (
    <TopicPageLayout
      title="Self Introduction"
      subtitle="Introducing Yourself in English"
      description="Learn how to introduce yourself confidently in any situation. From simple greetings to professional presentations, master the art of making a great first impression in English."
      icon={User}
      colorClass="text-topic-selfintro"
      bgColorClass="bg-topic-selfintro-bg"
      worksheets={worksheets}
    />
  );
};

export default SelfIntroductionPage;
