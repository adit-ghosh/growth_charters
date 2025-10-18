export default function HeroSectionAbout() {
    return (
        <section className="flex flex-col items-center px-8 py-16 md:py-32 gap-6">
            <h1 className="text-4xl md:text-6xl font-black text-center text-[#111827] leading-tight tracking-tight max-w-4xl">
                Charting the Course for Human Potential
            </h1>

            <p className="text-lg md:text-xl text-[#4B5563] text-center max-w-3xl leading-relaxed">
                We are dedicated to building a future where every individual's growth journey is
                clear, personalized, and impactful for their organization.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                <button className="px-8 py-3 bg-[#5444E9] text-white font-bold rounded-full shadow-lg hover:bg-[#4334D8] transition-colors">
                    Meet the Team
                </button>
                <button className="px-8 py-3 bg-[#E5E7EB] text-[#5444E9] font-bold rounded-full hover:bg-[#D1D5DB] transition-colors">
                    Contact Support
                </button>
            </div>

            <div className="flex flex-wrap items-start justify-center gap-8 pt-14 w-full max-w-5xl">
                <StatCard number="10K+" label="Users Guided" />
                <StatCard number="500+" label="Personalized Growth Plans Created" />
                <StatCard number="50+" label="Industries Benchmarked" />
            </div>
        </section>
    );
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="flex flex-col items-center flex-1 min-w-[200px]">
            <div className="text-5xl font-bold text-[#5444E9]">{number}</div>
            <div className="text-lg text-[#4B5563] text-center mt-2">{label}</div>
        </div>
    );
}
