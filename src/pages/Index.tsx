import { BookText, Zap, UserCircle, Sparkles, Volume2 } from "lucide-react";
import TopicCard from "@/components/TopicCard";

const topics = [
  {
    title: "Nouns",
    description: "Learn about naming words - people, places, things, and ideas. Master common, proper, abstract, and collective nouns.",
    icon: BookText,
    path: "/nouns",
    colorClass: "text-topic-noun",
    bgColorClass: "bg-topic-noun-bg",
    worksheetCount: 5,
  },
  {
    title: "Verbs",
    description: "Explore action and state words. Understand tenses, regular/irregular verbs, and helping verbs.",
    icon: Zap,
    path: "/verbs",
    colorClass: "text-topic-verb",
    bgColorClass: "bg-topic-verb-bg",
    worksheetCount: 5,
  },
  {
    title: "Pronouns",
    description: "Discover words that replace nouns. Learn personal, possessive, reflexive, and relative pronouns.",
    icon: UserCircle,
    path: "/pronouns",
    colorClass: "text-topic-pronoun",
    bgColorClass: "bg-topic-pronoun-bg",
    worksheetCount: 5,
  },
  {
    title: "Adjectives",
    description: "Study describing words that modify nouns. Explore comparative, superlative, and compound adjectives.",
    icon: Sparkles,
    path: "/adjectives",
    colorClass: "text-topic-adjective",
    bgColorClass: "bg-topic-adjective-bg",
    worksheetCount: 5,
  },
  {
    title: "Adverbs",
    description: "Learn words that modify verbs, adjectives, and other adverbs. Understand manner, time, place, and degree.",
    icon: Volume2,
    path: "/adverbs",
    colorClass: "text-topic-adverb",
    bgColorClass: "bg-topic-adverb-bg",
    worksheetCount: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <BookText className="w-4 h-4" />
              Free Learning Resources
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              English Grammar
              <span className="block text-primary">Practice Worksheets</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Progressive worksheets for confident English learning. From very basic to advanced, 
              master grammar at your own pace.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                5 Grammar Topics
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                25 Worksheets
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                5 Difficulty Levels
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              How Our Worksheets Are Organized
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Each grammar topic contains 5 carefully structured worksheets that build upon each other, 
              taking you from foundational concepts to advanced mastery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              {[
                { level: "Very Basic", desc: "Introduction & fundamentals" },
                { level: "Basic", desc: "Core concepts & simple exercises" },
                { level: "Intermediate", desc: "Building complexity" },
                { level: "Upper-Int.", desc: "Challenging applications" },
                { level: "Advanced", desc: "Mastery & nuances" },
              ].map((item, index) => (
                <div
                  key={item.level}
                  className="text-center p-4 rounded-xl bg-card border border-border animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {index + 1}
                  </div>
                  <div className="font-medium text-foreground text-sm mb-1">
                    {item.level}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Explore Grammar Topics
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose a topic to view all available worksheets and start learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topics.map((topic, index) => (
              <div
                key={topic.path}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TopicCard {...topic} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Improve Your Grammar?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start with any topic that interests you. Each worksheet includes clear instructions 
              and exercises designed for self-study or classroom use.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-lg">
              <span className="text-primary font-medium">Tip:</span>
              Begin with "Very Basic" worksheets and progress at your own pace
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
