export default function JourneySection() {
    return (
        <section className="py-16 md:py-24 px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-[#111827] tracking-tight mb-6">
                    Our Journey
                </h2>
                <p className="text-lg text-[#4B5563] text-center max-w-2xl mx-auto mb-16">
                    From a simple idea to a leading platform, our journey has been one of
                    innovation and dedication to our mission.
                </p>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E5E7EB] transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-12">
                        <TimelineItem
                            year="2021"
                            title="The Spark & MVP"
                            description="Growth Charters was founded. We launched our MVP, introducing core AI-powered skill gap analysis and personalized growth plans to our first beta customers."
                            align="right"
                        />
                        <TimelineItem
                            year="2022"
                            title="Scaling Up"
                            description="Secured Series A funding, expanded our team, and introduced the GC Score and Employer Dashboard, enhancing our analytics capabilities."
                            align="left"
                        />
                        <TimelineItem
                            year="2023"
                            title="Future-Focused"
                            description="Continuing to innovate with a focus on predictive analytics, deeper platform integrations, and expanding our global reach to new markets and industries."
                            align="right"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ year, title, description, align }: { year: string; title: string; description: string; align: "left" | "right" }) {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-6 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
            <div className={`flex-1 ${align === "right" ? "md:text-right" : "md:text-left"} text-center md:pr-8 md:pl-8`}>
                <h3 className="text-xl font-bold text-[#111827] mb-1">{title}</h3>
                <p className="text-base text-[#4B5563] leading-relaxed">{description}</p>
            </div>

            <div className="w-12 h-12 rounded-full bg-[#5444E9] flex items-center justify-center flex-shrink-0 z-10 relative">
                <span className="text-lg font-bold text-white">{year}</span>
            </div>

            <div className={`flex-1 hidden md:block`} />
        </div>
    );
}