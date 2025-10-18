export default function ResourceHubSection() {
    return (
        <section className="bg-[#F6F6F8] py-16 md:py-24 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-[#111827] tracking-tight mb-6">
                    Resource Hub
                </h2>
                <p className="text-lg text-[#4B5563] text-center max-w-2xl mx-auto mb-16">
                    Explore insights, best practices, and stories on talent development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ResourceCard
                        image="https://api.builder.io/api/v1/image/assets/TEMP/dadff3ea39982a42e8b21b8d58462e40f713e5a9?width=764"
                        title="The ROI of Investing in Employee Development"
                        description="Learn how strategic investment in your team's skills can drive significant business returns."
                    />
                    <ResourceCard
                        image="https://api.builder.io/api/v1/image/assets/TEMP/dadff3ea39982a42e8b21b8d58462e40f713e5a9?width=764"
                        title="Case Study: How Acme Corp Boosted Retention by 30%"
                        description="Discover the strategies that leading companies use to retain top talent through growth opportunities."
                    />
                    <ResourceCard
                        image="https://api.builder.io/api/v1/image/assets/TEMP/dadff3ea39982a42e8b21b8d58462e40f713e5a9?width=764"
                        title="Guide to Creating Effective Individual Development Plans"
                        description="A step-by-step guide to helping your employees build meaningful and actionable IDPs."
                    />
                </div>
            </div>
        </section>
    );
}

function ResourceCard({ image, title, description }: { image: string; title: string; description: string }) {
    return (
        <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden flex flex-col">
            <img src={image} alt={title} className="w-full h-52 object-cover" />
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#111827] mb-3 leading-snug">{title}</h3>
                <p className="text-base text-[#4B5563] leading-relaxed mb-6 flex-1">{description}</p>
                <a href="#" className="text-[#5444E9] font-bold text-base hover:underline">
                    Read More →
                </a>
            </div>
        </div>
    );
}