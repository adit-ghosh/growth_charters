export default function CTA() {
    return (
        <section className="w-full max-w-[760px] mx-auto pb-12 pt-0 px-4 flex flex-col items-center gap-[7px]">
            <h2 className="text-[28px] font-black text-[#111827] text-center leading-[145%] w-full">
                Ready to Transform Your Team's Potential?
            </h2>
            <div className="pb-3 w-full">
                <p className="text-base text-[#6B7280] text-center leading-[145%]">
                    Start your free trial today and experience the power of AI-driven talent development.
                </p>
            </div>
            <button className="px-[15px] py-[9px] bg-[#5444E9] text-white text-sm font-bold rounded-[10px] shadow-[0_6px_18px_0_rgba(84,68,233,0.18)] hover:bg-[#4335D8] transition-colors">
                Get Started
            </button>
        </section>
    );
}