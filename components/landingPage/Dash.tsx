export default function Dash() {
    return (
        <div className="min-h-screen bg-white pt-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-bold text-[#111827] mb-1.5 leading-[145%]">
                        Employer Dashboard: Gain Insights and Drive Impact
                    </h1>
                    <p className="text-base text-[#6B7280] leading-[145%] max-w-[760px] mx-auto">
                        The Employer Dashboard provides a comprehensive overview of team skill growth, development
                        progress, and key metrics. Track ROI, identify trends, and make data-driven decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1160px] mx-auto">
                    <div className="rounded-xl border border-[#E6E6E6] bg-white shadow-[0_6px_18px_0_rgba(16,24,40,0.06)] p-4">
                        <div className="w-full h-[120px] rounded-lg bg-[#F3F4F6] mb-3"></div>
                        <h2 className="text-base font-bold text-[#111827] leading-[145%] mb-2">
                            Team Skill Growth
                        </h2>
                        <p className="text-base text-[#6B7280] leading-[145%]">
                            Track overall team skill growth and identify areas for improvement.
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#E6E6E6] bg-white shadow-[0_6px_18px_0_rgba(16,24,40,0.06)] p-4">
                        <div className="w-full h-[120px] rounded-lg bg-[#F3F4F6] mb-3"></div>
                        <h2 className="text-base font-bold text-[#111827] leading-[145%] mb-2">
                            Development Plan Completion
                        </h2>
                        <p className="text-base text-[#6B7280] leading-[145%]">
                            Monitor the completion rate of individual development plans and identify potential roadblocks.
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#E6E6E6] bg-white shadow-[0_6px_18px_0_rgba(16,24,40,0.06)] p-4">
                        <div className="w-full h-[120px] rounded-lg bg-[#F3F4F6] mb-3"></div>
                        <h2 className="text-base font-bold text-[#111827] leading-[145%] mb-2">
                            Employee Engagement
                        </h2>
                        <p className="text-base text-[#6B7280] leading-[145%]">
                            Measure employee engagement with development activities and identify opportunities to enhance participation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}