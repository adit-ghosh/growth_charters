import { Check, Minus } from "lucide-react";

interface FeatureRow {
    feature: string;
    free: boolean | string;
    pro: boolean | string;
    premium: boolean | string;
}

const features: FeatureRow[] = [
    {
        feature: "Number of users",
        free: "Up to 10",
        pro: "Up to 50",
        premium: "Unlimited",
    },
    {
        feature: "AI Skill Gap Analysis",
        free: true,
        pro: true,
        premium: true,
    },
    {
        feature: "Personalized Growth Plans",
        free: false,
        pro: true,
        premium: true,
    },
    {
        feature: "Advanced Analytics",
        free: false,
        pro: true,
        premium: true,
    },
    {
        feature: "Dedicated Account Manager",
        free: false,
        pro: false,
        premium: true,
    },
];

function FeatureCell({ value }: { value: boolean | string }) {
    if (typeof value === "string") {
        return (
            <div className="text-[14px] text-[#6B7280] text-center leading-[1.43]">{value}</div>
        );
    }

    if (value) {
        return (
            <div className="flex justify-center">
                <Check className="w-6 h-6 text-[#22C55E]" strokeWidth={2.5} />
            </div>
        );
    }

    return (
        <div className="flex justify-center">
            <Minus className="w-6 h-6 text-[#9CA3AF]" strokeWidth={2} />
        </div>
    );
}

export default function ComparisonTable() {
    return (
        <div className="border border-[#E5E7EB] rounded-xl overflow-hidden w-full">
            <div className="bg-[#F9FAFB]">
                <div className="grid grid-cols-4 gap-4">
                    <div className="px-6 py-3.5">
                        <span className="text-[14px] font-semibold text-[#111827] leading-[1.43]">Feature</span>
                    </div>
                    <div className="px-6 py-3.5 text-center">
                        <span className="text-[14px] font-semibold text-[#111827] leading-[1.43]">Free</span>
                    </div>
                    <div className="px-6 py-3.5 text-center">
                        <span className="text-[14px] font-semibold text-[#111827] leading-[1.43]">Pro</span>
                    </div>
                    <div className="px-6 py-3.5 text-center">
                        <span className="text-[14px] font-semibold text-[#111827] leading-[1.43]">Premium</span>
                    </div>
                </div>
            </div>

            <div className="bg-white divide-y divide-[#E5E7EB]">
                {features.map((row, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4">
                        <div className="px-6 py-4">
                            <span className="text-[14px] text-[#111827] leading-[1.43]">{row.feature}</span>
                        </div>
                        <div className="px-6 py-4 flex items-center justify-center">
                            <FeatureCell value={row.free} />
                        </div>
                        <div className="px-6 py-4 flex items-center justify-center">
                            <FeatureCell value={row.pro} />
                        </div>
                        <div className="px-6 py-4 flex items-center justify-center">
                            <FeatureCell value={row.premium} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
