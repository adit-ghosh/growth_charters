"use client"

import React, { useState } from 'react';

const Features: React.FC = () => {
    const [selectedAction, setSelectedAction] = useState<string | null>(null);
    const [skills] = useState([
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 72 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Technical', level: 68 }
    ]);

    const featureCards = [
        {
            image: "https://api.builder.io/api/v1/image/assets/TEMP/0d84405e8972ef62c8407d38b7e308c297dcf08a?width=665",
            title: "AI-Powered Skill Gap Analysis",
            description: "Identify critical skill gaps within your team using our advanced AI algorithms. Gain insights into individual and team-level strengths and weaknesses.",
            altText: "AI-Powered Skill Gap Analysis illustration"
        },
        {
            image: "https://api.builder.io/api/v1/image/assets/TEMP/a2b16132ae08241542de6ed22682458dbf970dc8?width=665",
            title: "Personalized Growth Plans",
            description: "Create tailored development plans for each employee based on their skill gaps, career goals, and company objectives.",
            altText: "Personalized Growth Plans illustration"
        },
        {
            image: "https://api.builder.io/api/v1/image/assets/TEMP/a46d200b97c463d6910183a8cce5c6aee145af24?width=665",
            title: "Real-Time Progress Tracking",
            description: "Monitor employee progress against their development plans in real-time. Track skill growth, identify roadblocks, and provide timely support.",
            altText: "Real-Time Progress Tracking illustration"
        }
    ];

    const maxHeight = 118;

    const handleActionClick = (action: string) => {
        setSelectedAction(action);
        console.log(`Selected action: ${action}`);
    };

    return (
        <main className="flex w-full max-w-[1200px] flex-col items-center box-border mx-auto my-0 pt-0 pb-14 px-5 max-md:pt-0 max-md:pb-10 max-md:px-4 max-sm:pt-0 max-sm:pb-8 max-sm:px-3">
            {/* Hero Section */}
            <section className="flex flex-col items-start gap-7 w-full px-0 py-14 max-md:gap-6 max-md:px-0 max-md:py-10 max-sm:gap-5 max-sm:px-0 max-sm:py-8">
                <section className="flex flex-col items-center gap-[7px] w-full">
                    <header className="flex flex-col items-center w-full">
                        <h1 className="w-full text-gray-900 text-center text-[28px] font-extrabold leading-[40.6px] max-md:text-2xl max-md:leading-8 max-sm:text-[22px] max-sm:leading-7">
                            A Comprehensive Toolkit for Growth
                        </h1>
                    </header>
                    <div className="flex w-full max-w-[650px] flex-col items-center">
                        <p className="text-gray-500 text-center text-base font-normal leading-[23.2px] max-md:text-[15px] max-md:leading-[22px] max-sm:text-sm max-sm:leading-5">
                            Everything you need to foster a culture of continuous learning and
                            development.
                        </p>
                    </div>
                </section>

                {/* Feature Cards */}
                <div className="flex justify-center items-start content-start gap-6 w-full flex-wrap max-md:gap-5 max-sm:flex-col max-sm:gap-4">
                    {featureCards.map((card, index) => (
                        <article key={index} className="flex min-w-[260px] flex-col items-start flex-[1_0_0] max-w-[371px] max-sm:max-w-full">
                            <div className="h-[325px] w-full border shadow-[0_6px_18px_0_rgba(16,24,40,0.06)] relative box-border bg-white rounded-xl border-solid border-[#E6E6E6] max-md:h-auto max-md:min-h-[300px] max-sm:h-auto max-sm:min-h-[280px]">
                                <img
                                    src={card.image}
                                    alt={card.altText}
                                    className="absolute w-[calc(100%_-_38px)] h-40 object-cover left-[19px] top-[19px] max-md:h-[140px] max-sm:h-[120px]"
                                />
                                <header className="flex w-[calc(100%_-_38px)] flex-col items-start absolute h-[27px] left-[19px] top-[190px] max-md:top-[170px] max-sm:top-[150px]">
                                    <h3 className="text-gray-900 text-lg font-bold leading-[26.1px] max-sm:text-base max-sm:leading-[22px]">
                                        {card.title}
                                    </h3>
                                </header>
                                <div className="flex w-[calc(100%_-_38px)] flex-col items-start absolute left-[19px] top-56 max-md:top-[204px] max-sm:top-[184px]">
                                    <p className="text-gray-500 text-sm font-normal leading-[20.3px] max-sm:text-[13px] max-sm:leading-[18px]">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* GC Score and Skill Growth Section */}
            <section className="flex justify-center items-center gap-7 w-full flex-wrap px-0 py-14 max-md:gap-5 max-md:flex-col max-md:px-0 max-md:py-10 max-sm:gap-4 max-sm:px-0 max-sm:py-8">
                {/* GC Score Section */}
                <article className="flex w-full max-w-[566px] flex-col items-start gap-[7.3px] border shadow-[0_6px_18px_0_rgba(16,24,40,0.06)] box-border bg-white p-[19px] rounded-xl border-solid border-[#E6E6E6] max-md:max-w-full max-sm:p-4">
                    <header className="flex flex-col items-start w-full">
                        <h2 className="w-full text-gray-900 text-xl font-extrabold leading-[29px] max-sm:text-lg max-sm:leading-6">
                            GC Score: Measure and Improve Your Team's Skill Growth
                        </h2>
                    </header>
                    <div className="flex flex-col items-start w-full">
                        <p className="w-full text-gray-500 text-base font-normal leading-[23.2px] max-sm:text-sm max-sm:leading-5">
                            The GC Score is a proprietary metric that quantifies your team's
                            overall skill growth and development. It provides a clear,
                            actionable benchmark for measuring progress and identifying areas
                            for improvement.
                        </p>
                    </div>
                    <div className="flex items-center gap-6 w-full flex-wrap pt-[3.7px] max-md:flex-col max-md:gap-4 max-md:items-center">
                        <div className="flex flex-col items-start">
                            <div>
                                <svg
                                    width="96"
                                    height="97"
                                    viewBox="0 0 96 97"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="gc-score-chart"
                                    style={{ width: '96px', height: '96px' }}
                                >
                                    <path
                                        d="M47.9999 91.2314C71.4396 91.2314 90.4413 72.2298 90.4413 48.7901C90.4413 25.3504 71.4396 6.34875 47.9999 6.34875C24.5602 6.34875 5.55859 25.3504 5.55859 48.7901C5.55859 72.2298 24.5602 91.2314 47.9999 91.2314Z"
                                        stroke="#F3F4F6"
                                        strokeWidth="8"
                                    />
                                    <text
                                        fill="#111827"
                                        xmlSpace="preserve"
                                        style={{ whiteSpace: 'pre' }}
                                        fontFamily="Inter"
                                        fontSize="14.6667"
                                        fontStyle="italic"
                                        fontWeight="bold"
                                        letterSpacing="0em"
                                    >
                                        <tspan x="38.6863" y="55.1234">72</tspan>
                                    </text>
                                    <path
                                        d="M90.8827 50.2314C90.8827 26.7917 71.881 7.79005 48.4413 7.79005C25.0016 7.79005 6 26.7917 6 50.2314C6 73.6711 25.0016 92.6727 48.4413 92.6727C71.881 92.6727 90.8827 73.6711 90.8827 50.2314Z"
                                        stroke="url(#paint0_linear_37_936)"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_37_936"
                                            x1="6"
                                            y1="92.6727"
                                            x2="6"
                                            y2="7.79005"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#10B981" />
                                            <stop offset="1" stopColor="#5444E9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-3 flex-1 min-w-[200px] max-md:min-w-full">
                            <div className="flex justify-center items-center w-full">
                                <div className="flex flex-col items-start gap-[5.42px] flex-1">
                                    <div className="flex flex-col items-start w-full">
                                        <h3 className="w-full text-gray-900 text-base font-bold leading-[23.2px] max-sm:text-sm max-sm:leading-5">
                                            Employability Snapshot
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-start w-full">
                                        <p className="w-full text-gray-500 text-[13px] font-normal leading-[19px] max-sm:text-xs max-sm:leading-4">
                                            78% match for Product Management • 62% match for Data
                                            Science • 45% match for Sales
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start content-start gap-2 w-full flex-wrap max-md:justify-center">
                                <button
                                    onClick={() => handleActionClick('Start IDP')}
                                    className={`flex flex-col justify-center items-center border px-[11px] py-[9px] rounded-lg border-solid border-[#E6E6E6] max-sm:px-2.5 max-sm:py-2 transition-colors hover:bg-gray-50 ${
                                        selectedAction === 'Start IDP' ? 'bg-gray-100' : ''
                                    }`}
                                >
                  <span className="text-gray-500 text-center text-[13px] font-normal max-sm:text-xs">
                    Start IDP
                  </span>
                                </button>
                                <button
                                    onClick={() => handleActionClick('Book Coach')}
                                    className={`flex flex-col justify-center items-center border px-[11px] py-[9px] rounded-lg border-solid border-[#E6E6E6] max-sm:px-2.5 max-sm:py-2 transition-colors hover:bg-gray-50 ${
                                        selectedAction === 'Book Coach' ? 'bg-gray-100' : ''
                                    }`}
                                >
                  <span className="text-gray-500 text-center text-[13px] font-normal max-sm:text-xs">
                    Book Coach
                  </span>
                                </button>
                                <button
                                    onClick={() => handleActionClick('Share report')}
                                    className={`flex flex-col justify-center items-center border px-[11px] py-[9px] rounded-lg border-solid border-[#E6E6E6] max-sm:px-2.5 max-sm:py-2 transition-colors hover:bg-gray-50 ${
                                        selectedAction === 'Share report' ? 'bg-gray-100' : ''
                                    }`}
                                >
                  <span className="text-gray-500 text-center text-[13px] font-normal max-sm:text-xs">
                    Share report
                  </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Skill Growth Section */}
                <article className="flex w-full max-w-[566px] flex-col items-start gap-[7.2px] border shadow-[0_6px_18px_0_rgba(16,24,40,0.06)] box-border bg-white p-[19px] rounded-xl border-solid border-[#E6E6E6] max-md:max-w-full max-sm:p-4">
                    <header className="flex flex-col items-start w-full">
                        <h2 className="w-full text-gray-900 text-xl font-extrabold leading-[29px] max-sm:text-lg max-sm:leading-6">
                            Skill Growth Matrix
                        </h2>
                    </header>
                    <div className="flex flex-col items-start w-full">
                        <p className="w-full text-gray-500 text-base font-normal leading-[23.2px] max-sm:text-sm max-sm:leading-5">
                            The Skill Growth Matrix provides a visual representation of your
                            team's skill proficiency across various domains. Identify skill
                            clusters, areas of expertise, and potential development
                            opportunities.
                        </p>
                    </div>
                    <div className="flex h-[145px] justify-center items-end gap-2 w-full max-sm:h-[120px] max-sm:gap-1">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex w-[126px] flex-col items-center pt-[13.5px] max-sm:w-auto max-sm:flex-1 max-sm:pt-2.5"
                            >
                                <div className="flex flex-col items-center justify-end h-full w-full">
                                    <div
                                        className="w-8 bg-gradient-to-t from-[#10B981] to-[#5444E9] rounded-t-sm mb-2 transition-all duration-300 hover:opacity-80"
                                        style={{
                                            height: `${(skill.level / 100) * maxHeight}px`,
                                            minHeight: '20px'
                                        }}
                                        title={`${skill.name}: ${skill.level}%`}
                                    />
                                    <span className="text-gray-500 text-xs font-normal leading-[17.4px] max-sm:text-[11px] max-sm:leading-[14px] text-center">
                    {skill.name}
                  </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </section>

            {/* Final Section */}
            <section className="flex justify-center items-center gap-6 w-full relative pb-14 max-md:flex-col max-md:h-auto max-md:relative max-sm:pb-8">
                <div className="flex w-[568px] min-w-[300px] flex-col items-start absolute h-[300px] left-0 top-0 max-md:relative max-md:w-full max-md:h-[250px] max-md:left-auto max-md:top-auto max-sm:h-[200px]">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/34b4b2fcd26df455f35f570cb701bc09ceba4791?width=1136"
                        alt="Skill Growth Matrix visualization"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="flex w-[568px] min-w-80 flex-col items-start gap-[15.19px] absolute h-[172px] pb-4 right-0 top-[63px] max-md:relative max-md:w-full max-md:h-auto max-md:right-auto max-md:top-auto">
                    <header className="flex flex-col items-start w-full pb-px">
                        <h2 className="w-full text-gray-900 text-2xl font-extrabold leading-[34.8px] max-md:text-[22px] max-md:leading-[30px] max-sm:text-xl max-sm:leading-[26px]">
                            Skill Growth Matrix: Visualize Your Team's Skill Landscape
                        </h2>
                    </header>
                    <div className="flex flex-col items-start w-full">
                        <p className="w-full text-gray-500 text-base font-normal leading-[23.2px] max-sm:text-sm max-sm:leading-5">
                            The Skill Growth Matrix provides a visual representation of your
                            team's skill proficiency across various domains. Identify skill
                            clusters, areas of expertise, and potential development
                            opportunities.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Features;
