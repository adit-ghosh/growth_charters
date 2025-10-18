import { Check } from "lucide-react";

interface PricingCardProps {
    name: string;
    price: number;
    period?: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonVariant?: "primary" | "secondary";
    highlighted?: boolean;
    badge?: string;
}

export function PricingCard({
                                name,
                                price,
                                period = "/user/month",
                                description,
                                features,
                                buttonText,
                                buttonVariant = "secondary",
                                highlighted = false,
                                badge,
                            }: PricingCardProps) {
    return (
        <div className="relative">
            {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-3 py-1 rounded-full bg-[#5444E9] text-white text-xs font-semibold tracking-wide">
                        {badge}
                    </div>
                </div>
            )}
            <div
                className={
                    highlighted
                        ? "flex flex-col h-full rounded-xl bg-white transition-all border-2 border-[#5444E9] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-[33px]"
                        : "flex flex-col h-full rounded-xl bg-white transition-all border border-[#E5E7EB] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] p-[33px]"
                }
            >
                <h3 className="text-[20px] font-bold text-[#111827] leading-[1.4] mb-2">{name}</h3>

                <div className="flex items-baseline gap-0.5 mb-4">
                    <span className="text-[24px] font-bold text-[#111827] leading-[1.33]">${price}</span>
                    <span className="text-[14px] text-[#6B7280] leading-[1.43]">{period}</span>
                </div>

                <p className="text-[14px] text-[#4B5563] leading-[1.43] pb-4 mb-2">{description}</p>

                <button
                    className={
                        buttonVariant === "primary"
                            ? "w-full px-4 py-2 rounded text-[14px] font-bold leading-[1.43] transition-all bg-[#5444E9] text-white hover:bg-[#4334D8]"
                            : "w-full px-4 py-2 rounded text-[14px] font-bold leading-[1.43] transition-all bg-[rgba(84,68,233,0.1)] text-[#5444E9] hover:bg-[rgba(84,68,233,0.15)]"
                    }
                >
                    {buttonText}
                </button>

                <div className="flex flex-col gap-3 mt-6 pt-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                    <Check className="w-5 h-5 text-[#22C55E]" strokeWidth={2.5} />
                                </div>
                            </div>
                            <span className="text-[14px] text-[#4B5563] leading-[1.43]">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
