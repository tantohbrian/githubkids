import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQAccordion = () => {
  const faqData = [
    {
      key: "1",
      title: "Is Bitcoin Kids safe for children?",
      content:
        "Yes! Bitcoin Kids is designed with children's safety and learning in mind. Kids don't need to share personal information to use the platform, and all content is age-appropriate, fun, and educational. Parents and teachers can monitor progress through guides and dashboards, ensuring a safe and supportive experience.",
    },
    {
      key: "2",
      title: "Do I need to know Bitcoin first?",
      content:
        "Not at all. Bitcoin Kids is built for beginners — both children and adults. Through comics, stories, games, and puzzles, kids learn the basics step by step. Parents and teachers get structured guides to help them teach, even if they're new to Bitcoin themselves.",
    },
    {
      key: "3",
      title: "How much does it cost?",
      content:
        "The core resources, including the Bitcoin Kids book and quizzes, are free to access. We also offer optional premium memberships for parents and teachers, which unlock extra resources, community discussions, and exclusive learning tools. You can start free anytime and upgrade later if you wish.",
    },
    {
      key: "4",
      title: "Do I need to download anything?",
      content:
        "No downloads are required. Bitcoin Kids works directly in your browser and is mobile-friendly, so kids can learn from any device. If you choose to buy digital books or guides, they'll be available as instant downloads in PDF or interactive formats for offline use.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="space-y-4"
      >
        {faqData.map((item) => (
          <AccordionItem
            key={item.key}
            value={`item-${item.key}`}
            className="bg-gray-50 border border-gray-200 rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold text-gray-900">{item.title}</span>
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
