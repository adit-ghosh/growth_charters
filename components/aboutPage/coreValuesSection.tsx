import { Users, Lightbulb, ShieldCheck, HandshakeIcon } from "lucide-react";

export default function CoreValuesSection() {
    return (
        <section className="py-16 md:py-24 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-[#111827] tracking-tight mb-6">
                    Our Core Values
                </h2>
                <p className="text-lg text-[#4B5563] text-center max-w-2xl mx-auto mb-16">
                    The principles that guide our work and culture.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ValueCard
                        icon={<Users className="w-9 h-9 text-[#5444E9]" />}
                        title="People-Centric"
                        description="We prioritize the growth and well-being of individuals."
                    />
                    <ValueCard
                        icon={<Lightbulb className="w-9 h-9 text-[#5444E9]" />}
                        title="Innovation-Driven"
                        description="We relentlessly pursue new and better ways to solve problems."
                    />
                    <ValueCard
                        icon={<ShieldCheck className="w-9 h-9 text-[#5444E9]" />}
                        title="Integrity & Trust"
                        description="We are committed to transparency and accountability in all we do."
                    />
                    <ValueCard
                        icon={<HandshakeIcon className="w-9 h-9 text-[#5444E9]" />}
                        title="Collaborative Spirit"
                        description="We believe the best results come from working together."
                    />
                </div>
            </div>
        </section>
    );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#5444E9]/10 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-3">{title}</h3>
            <p className="text-base text-[#4B5563] leading-relaxed">{description}</p>
        </div>
    );
}