import { Rocket, Eye } from "lucide-react";

export default function MissionVisionSection() {
    return (
        <section className="bg-[#F6F6F8] py-16 md:py-24 px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
                <MissionCard
                    icon={<Rocket className="w-8 h-8 text-[#5444E9]" />}
                    title="Our Mission"
                    description="To unlock human potential by providing intelligent, personalized, and data-driven tools that foster continuous growth and development for every individual within an organization."
                />
                <MissionCard
                    icon={<Eye className="w-8 h-8 text-[#5444E9]" />}
                    title="Our Vision"
                    description="To create a world where every employee is empowered to chart their own course for success, and every organization thrives on the collective growth of its people."
                />
            </div>
        </section>
    );
}

function MissionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#5444E9]/10 flex items-center justify-center flex-shrink-0">
                    {icon}
                </div>
                <h2 className="text-3xl font-bold text-[#111827] tracking-tight">{title}</h2>
            </div>
            <p className="text-lg text-[#4B5563] leading-relaxed">{description}</p>
        </div>
    );
}