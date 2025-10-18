import { Plus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    return (
        <div className="flex flex-col gap-4 w-full">
            {items.map((item, index) => (
                <details
                    key={index}
                    className="group bg-[#F9FAFB] rounded-lg px-6 py-6 cursor-pointer"
                >
                    <summary className="flex items-center justify-between list-none cursor-pointer">
                        <h3 className="text-[18px] font-medium text-[#111827] leading-[1.56] pr-4">
                            {item.question}
                        </h3>
                        <div className="flex-shrink-0 transition-transform group-open:rotate-45">
                            <Plus className="w-6 h-6 text-[#1F2937]" strokeWidth={2} />
                        </div>
                    </summary>
                </details>
            ))}
        </div>
    );
}
