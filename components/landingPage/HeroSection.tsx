"use client";

import React, { useState } from 'react';

interface ProgressBarProps {
    progress: number;
    color: 'indigo' | 'emerald';
    className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
                                                     progress,
                                                     color,
                                                     className = ''
                                                 }) => {
    const colorClasses = {
        indigo: 'bg-indigo-500',
        emerald: 'bg-emerald-500'
    };

    const progressWidth = Math.min(Math.max(progress, 0), 100);

    return (
        <div className={`h-2 relative rounded bg-gray-100 ${className}`}>
            <div
                className={`h-2 absolute rounded left-0 top-0 transition-all duration-300 ${colorClasses[color]}`}
                style={{ width: `${progressWidth}%` }}
                role="progressbar"
                aria-valuenow={progressWidth}
                aria-valuemin={0}
                aria-valuemax={100}
            />
        </div>
    );
};

interface ScoreCardProps {
    score: number;
    skillProgress: number;
    growthProgress: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({
                                                 score,
                                                 skillProgress,
                                                 growthProgress
                                             }) => {
    return (
        <article className="flex w-[524px] justify-between items-center absolute border shadow-[0_10px_30px_0_rgba(16,24,40,0.08)] bg-white p-[17px] rounded-[10px] border-solid border-[#E6E6E6] left-5 bottom-[19.695px] max-md:w-[calc(100%_-_40px)] max-md:left-5 max-md:bottom-5 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
            <div className="flex min-w-[209px] flex-col items-start relative">
                <div className="flex flex-col items-start self-stretch relative">
                    <div className="text-gray-500 text-[13px] font-normal leading-[19px] relative">
                        GC Score
                    </div>
                </div>
                <div className="flex flex-col items-start self-stretch relative">
                    <div className="text-gray-900 text-[28px] font-extrabold leading-[40.6px] relative">
                        {score}
                    </div>
                </div>
                <div className="flex flex-col items-start self-stretch relative pt-[5px]">
                    <div className="text-gray-500 text-[13px] font-normal leading-[19px] relative">
                        Explainable employability score — updated in real-time
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 relative max-sm:w-full max-sm:justify-between">
                <div className="flex w-[114px] flex-col items-start gap-1.5 relative max-sm:w-full max-sm:max-w-[150px]">
                    <ProgressBar
                        progress={skillProgress}
                        color="indigo"
                        className="self-stretch"
                    />
                    <ProgressBar
                        progress={growthProgress}
                        color="emerald"
                        className="self-stretch"
                    />
                </div>
                <div className="flex items-start gap-[8.01px] relative max-sm:w-full max-sm:justify-end">
                    <div className="flex w-14 h-12 flex-col justify-center items-center border relative pl-[16.69px] pr-[16.68px] py-[9px] rounded-lg border-solid border-[#E6E6E6]" />
                    <div className="flex w-[74px] h-12 min-w-[74px] flex-col justify-center items-center border relative px-[18.3px] py-[9px] rounded-lg border-solid border-[#E6E6E6]" />
                </div>
            </div>
        </article>
    );
};

const HeroVisual: React.FC = () => {
    return (
        <div className="flex w-[564px] min-h-[360px] flex-col items-start shadow-[0_12px_36px_0_rgba(16,24,40,0.08)] relative bg-[rgba(255,255,255,0.00)] rounded-[14px] max-md:w-full max-md:max-w-[500px]">
            <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/03686464adb28a698dd2330eec924b61e95a981d?width=1128"
                alt="Team working together on talent development"
                className="h-[564px] max-w-[564px] self-stretch relative rounded-[14px] max-md:h-auto max-md:w-full"
            />
            <div className="w-[564px] h-[564px] absolute rounded-[14px] left-0 top-0 max-md:w-full max-md:h-full" />
            <ScoreCard
                score={72}
                skillProgress={65}
                growthProgress={75}
            />
        </div>
    );
};

const HeroContent: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    function handshake () {
        console.log('Handshake initiated');
    }
    const handleGetStarted = async () => {
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        // Here you would typically handle the actual form submission
        console.log('Get Started clicked');
    };

    const handleRequestDemo = () => {
        // Here you would typically open a demo request form or modal
        console.log('Request Demo clicked');
    };

    return (
        <div className="flex w-[564px] flex-col items-start gap-[4.8px] relative pt-[13px] pb-0 px-0 max-md:w-full max-md:max-w-[600px] max-md:p-0">
            <div className="flex flex-col items-start self-stretch relative">
                <div className="self-stretch text-gray-500 text-sm font-semibold leading-[20.3px] relative">
                    For organizations that want people to grow — not churn.
                </div>
                <header className="flex flex-col items-start self-stretch relative pb-px">
                    <h1 className="self-stretch text-gray-900 text-[40px] font-black leading-[40.8px] relative max-md:text-[32px] max-md:leading-9 max-sm:text-[28px] max-sm:leading-8">
                        Unlock Your Team's Potential with AI-Powered Talent Development
                    </h1>
                </header>
                <div className="flex max-w-[590px] flex-col items-start self-stretch relative pt-3">
                    <p className="self-stretch text-gray-500 text-lg font-normal leading-[26.1px] relative max-md:text-base max-md:leading-6 max-sm:text-base max-sm:leading-[22px]">
                        Growth Charters is the leading AI-powered platform for talent
                        development, helping organizations identify skill gaps, create
                        personalized growth plans, and track progress.
                    </p>
                </div>
                <div className="flex items-start content-start gap-[0_12px] self-stretch flex-wrap relative pt-[13.2px] max-sm:flex-col max-sm:gap-[12px_0]">
                    <button
                        onClick={handleGetStarted}
                        disabled={isSubmitting}
                        className="flex justify-center items-center shadow-[0_6px_18px_0_rgba(84,68,233,0.18)] relative bg-[#5444E9] px-[15px] py-[9px] rounded-[10px] max-sm:w-full max-sm:justify-center hover:bg-[#4a3dd1] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Get started with Growth Charters"
                    >
            <span className="text-white text-center text-sm font-bold relative">
              {isSubmitting ? 'Getting Started...' : 'Get Started'}
            </span>
                    </button>
                    <button
                        onClick={handleRequestDemo}
                        className="flex justify-center items-center relative px-[14px] py-[10px] rounded-[10px] max-sm:w-full max-sm:justify-center hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Download Growth Charters"
                    >
            <span className="text-[#5444E9] text-center text-l font-bold relative">
              Download
            </span>
                    </button>
                </div>
                <div className="flex flex-col items-start self-stretch relative pt-[7.2px]">
                    <div className="self-stretch text-gray-500 text-[13px] font-normal leading-[19px] relative">
                        Trusted by HR teams • SOC 2 • GDPR-compliant
                    </div>
                </div>
            </div>
        </div>
    );
};

export const HeroSection: React.FC = () => {
    function handshake() {
        console.log("Handshake initiated");
    }

    React.useEffect(() => {
        handshake();
    }, []);

    return (
        <section className="flex justify-center items-center gap-8 self-stretch relative pt-[52px] pb-16 px-0 max-md:flex-col max-md:gap-6 max-md:pt-10 max-md:pb-[50px] max-md:px-5 max-sm:gap-5 max-sm:pt-[30px] max-sm:pb-10 max-sm:px-4">
            <HeroContent />
            <HeroVisual />
        </section>
    );
};