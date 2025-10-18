import React from 'react';

interface IDPHeaderProps {
    title: string;
    description: string;
}

const IDPHeader: React.FC<IDPHeaderProps> = ({ title, description }) => {
    return (
        <header className="flex flex-col items-center gap-[7.09px] w-full">
            <div className="flex flex-col items-center w-full">
                <h1 className="w-full text-gray-900 text-center text-[26px] font-extrabold leading-[37.7px] max-md:text-2xl max-md:leading-[34px] max-sm:text-[22px] max-sm:leading-[30px]">
                    {title}
                </h1>
            </div>
            <div className="flex w-full max-w-[760px] flex-col items-center max-md:max-w-full">
                <p className="text-gray-500 text-center text-base font-normal leading-[23.2px] max-md:text-[15px] max-md:leading-[22px] max-sm:text-sm max-sm:leading-5">
                    {description}
                </p>
            </div>
        </header>
    );
};

interface IDPFeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const IDPFeatureCard: React.FC<IDPFeatureCardProps> = ({ icon, title, description }) => {
    return (
        <article className="flex items-center gap-3.5 w-full border shadow-[0_6px_18px_0_rgba(16,24,40,0.06)] bg-white pt-3.5 pb-[15px] px-[15px] rounded-[10px] border-solid border-[#E6E6E6] max-sm:gap-3 max-sm:p-3">
            <div className="flex w-12 h-12 flex-col items-center shrink-0 px-0 py-3 rounded-[10px] max-sm:w-10 max-sm:h-10 max-sm:px-0 max-sm:py-2">
                <div className="flex flex-col items-start">
                    <div dangerouslySetInnerHTML={{ __html: icon }} />
                </div>
            </div>
            <div className="flex flex-col items-start gap-[5px] flex-1">
                <header className="flex flex-col items-start w-full">
                    <h3 className="text-gray-900 text-base font-bold leading-[23.2px] max-sm:text-[15px] max-sm:leading-[21px]">
                        {title}
                    </h3>
                </header>
                <div className="flex flex-col items-start w-full">
                    <p className="text-gray-500 text-sm font-normal leading-[20.3px] max-sm:text-[13px] max-sm:leading-[18px]">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
};

const idpFeatures = [
    {
        icon: `<svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 20px; height: 24px">
      <path d="M4.16667 17.9234H5.35417L13.5 9.77759L12.3125 8.59009L4.16667 16.7359V17.9234ZM2.5 19.5901V16.0484L13.5 5.06925C13.6667 4.91648 13.8507 4.79842 14.0521 4.71509C14.2535 4.63175 14.4653 4.59009 14.6875 4.59009C14.9097 4.59009 15.125 4.63175 15.3333 4.71509C15.5417 4.79842 15.7222 4.92342 15.875 5.09009L17.0208 6.25675C17.1875 6.40953 17.309 6.59009 17.3854 6.79842C17.4618 7.00675 17.5 7.21509 17.5 7.42342C17.5 7.64564 17.4618 7.85745 17.3854 8.05884C17.309 8.26023 17.1875 8.44425 17.0208 8.61092L6.04167 19.5901H2.5ZM12.8958 9.19425L12.3125 8.59009L13.5 9.77759L12.8958 9.19425Z" fill="#5444E9"></path>
    </svg>`,
        title: "Goal Setting",
        description: "Define clear, measurable goals aligned with career aspirations and company needs."
    },
    {
        icon: `<svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 20px; height: 24px">
      <path d="M10 18.7568C9.33337 18.2291 8.61115 17.8193 7.83337 17.5277C7.0556 17.236 6.25004 17.0902 5.41671 17.0902C4.83337 17.0902 4.26046 17.1666 3.69796 17.3193C3.13546 17.4721 2.59726 17.6874 2.08337 17.9652C1.79171 18.1179 1.51046 18.111 1.23962 17.9443C0.968791 17.7777 0.833374 17.5346 0.833374 17.2152V7.1735C0.833374 7.02072 0.871568 6.87489 0.947957 6.736C1.02435 6.59711 1.13893 6.49295 1.29171 6.4235C1.9306 6.09017 2.59726 5.84017 3.29171 5.6735C3.98615 5.50684 4.69449 5.4235 5.41671 5.4235C6.22226 5.4235 7.01046 5.52767 7.78129 5.736C8.55212 5.94434 9.29171 6.25684 10 6.6735V16.7568C10.7084 16.3124 11.4514 15.9791 12.2292 15.7568C13.007 15.5346 13.7917 15.4235 14.5834 15.4235C15.0834 15.4235 15.573 15.4652 16.0521 15.5485C16.5313 15.6318 17.0139 15.7568 17.5 15.9235V5.9235C17.7084 5.99295 17.9132 6.06586 18.1146 6.14225C18.316 6.21864 18.5139 6.31239 18.7084 6.4235C18.8612 6.49295 18.9757 6.59711 19.0521 6.736C19.1285 6.87489 19.1667 7.02072 19.1667 7.1735V17.2152C19.1667 17.5346 19.0313 17.7777 18.7605 17.9443C18.4896 18.111 18.2084 18.1179 17.9167 17.9652C17.4028 17.6874 16.8646 17.4721 16.3021 17.3193C15.7396 17.1666 15.1667 17.0902 14.5834 17.0902C13.75 17.0902 12.9445 17.236 12.1667 17.5277C11.3889 17.8193 10.6667 18.2291 10 18.7568ZM11.6667 14.5902V6.6735L15.8334 2.50684V10.8402L11.6667 14.5902ZM8.33337 15.9443V7.69434C7.87504 7.49989 7.39935 7.35059 6.90629 7.24642C6.41324 7.14225 5.91671 7.09017 5.41671 7.09017C4.90282 7.09017 4.40282 7.13878 3.91671 7.236C3.4306 7.33322 2.95837 7.47906 2.50004 7.6735V15.9443C2.98615 15.7638 3.46879 15.6318 3.94796 15.5485C4.42712 15.4652 4.91671 15.4235 5.41671 15.4235C5.91671 15.4235 6.40629 15.4652 6.88546 15.5485C7.36462 15.6318 7.84726 15.7638 8.33337 15.9443Z" fill="#5444E9"></path>
    </svg>`,
        title: "Skill Development",
        description: "Engage in targeted learning activities, workshops, and mentorship programs."
    },
    {
        icon: `<svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 20px; height: 24px">
      <path d="M16.3333 19.5901L11.0833 14.3401C10.6667 14.6734 10.1875 14.9373 9.64583 15.1318C9.10417 15.3262 8.52778 15.4234 7.91667 15.4234C6.40278 15.4234 5.12153 14.8991 4.07292 13.8505C3.02431 12.8019 2.5 11.5206 2.5 10.0068C2.5 8.49287 3.02431 7.21162 4.07292 6.163C5.12153 5.11439 6.40278 4.59009 7.91667 4.59009C9.43056 4.59009 10.7118 5.11439 11.7604 6.163C12.809 7.21162 13.3333 8.49287 13.3333 10.0068C13.3333 10.6179 13.2361 11.1943 13.0417 11.7359C12.8472 12.2776 12.5833 12.7568 12.25 13.1734L17.5 18.4234L16.3333 19.5901ZM7.91667 13.7568C8.95833 13.7568 9.84375 13.3922 10.5729 12.663C11.3021 11.9338 11.6667 11.0484 11.6667 10.0068C11.6667 8.96509 11.3021 8.07967 10.5729 7.3505C9.84375 6.62134 8.95833 6.25675 7.91667 6.25675C6.875 6.25675 5.98958 6.62134 5.26042 7.3505C4.53125 8.07967 4.16667 8.96509 4.16667 10.0068C4.16667 11.0484 4.53125 11.9338 5.26042 12.663C5.98958 13.3922 6.875 13.7568 7.91667 13.7568Z" fill="#5444E9"></path>
    </svg>`,
        title: "Progress Review",
        description: "Regularly assess progress, identify challenges, and adjust development plans as needed."
    },
    {
        icon: `<svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 20px; height: 24px">
      <path d="M5.83333 19.5901V17.9234H9.16667V15.3401C8.48611 15.1873 7.87847 14.8991 7.34375 14.4755C6.80903 14.0519 6.41667 13.5206 6.16667 12.8818C5.125 12.7568 4.25347 12.3019 3.55208 11.5172C2.85069 10.7324 2.5 9.81231 2.5 8.75675V7.92342C2.5 7.46509 2.66319 7.07273 2.98958 6.74634C3.31597 6.41995 3.70833 6.25675 4.16667 6.25675H5.83333V4.59009H14.1667V6.25675H15.8333C16.2917 6.25675 16.684 6.41995 17.0104 6.74634C17.3368 7.07273 17.5 7.46509 17.5 7.92342V8.75675C17.5 9.81231 17.1493 10.7324 16.4479 11.5172C15.7465 12.3019 14.875 12.7568 13.8333 12.8818C13.5833 13.5206 13.191 14.0519 12.6562 14.4755C12.1215 14.8991 11.5139 15.1873 10.8333 15.3401V17.9234H14.1667V19.5901H5.83333ZM5.83333 11.0901V7.92342H4.16667V8.75675C4.16667 9.28453 4.31944 9.76023 4.625 10.1838C4.93056 10.6074 5.33333 10.9095 5.83333 11.0901ZM10 13.7568C10.6944 13.7568 11.2847 13.5137 11.7708 13.0276C12.2569 12.5415 12.5 11.9512 12.5 11.2568V6.25675H7.5V11.2568C7.5 11.9512 7.74306 12.5415 8.22917 13.0276C8.71528 13.5137 9.30556 13.7568 10 13.7568ZM14.1667 11.0901C14.6667 10.9095 15.0694 10.6074 15.375 10.1838C15.6806 9.76023 15.8333 9.28453 15.8333 8.75675V7.92342H14.1667V11.0901Z" fill="#5444E9"></path>
    </svg>`,
        title: "Achievement Recognition",
        description: "Celebrate milestones and recognize achievements to motivate continued growth."
    }
];

export const IDP: React.FC = () => {
    return (
        <section className="flex w-full max-w-[1160px] flex-col items-center gap-[22px] mx-auto my-0 pt-48 pb-14 px-0 max-md:pt-20 max-md:pb-10 max-md:px-5 max-sm:gap-5 max-sm:pt-[60px] max-sm:pb-[30px] max-sm:px-4">
            <IDPHeader
                title="Individual Development Plans (IDPs): Empower Employees to Own Their Growth"
                description="Growth Charters enables employees to create and manage their own IDPs, aligning personal growth goals with company objectives. Foster a culture of ownership and accountability."
            />
            <div className="flex w-full max-w-[760px] flex-col items-start gap-3 max-md:max-w-full">
                {idpFeatures.map((feature, index) => (
                    <IDPFeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
};
