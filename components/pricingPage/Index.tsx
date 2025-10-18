import { PricingCard } from "@/components/pricingPage/pricingCard";
import ComparisonTable from "@/components/pricingPage/comparisonTable";
import FAQAccordion from "@/components/pricingPage/FAQAccordian";

export default function Index() {
    const faqItems = [
        {
            question: "Can I try Growth Charters before I buy?",
            answer: "",
        },
        {
            question: 'How is a "user" defined?',
            answer: "",
        },
        {
            question: "Can I change my plan later?",
            answer: "",
        },
        {
            question: "What kind of support do you offer?",
            answer: "",
        },
    ];

    return (
        <div className="min-h-screen bg-[#F6F6F8]">
            <div className="w-full max-w-[1920px] mx-auto">
                <div className="flex flex-col items-center py-16 md:py-24 gap-16 md:gap-24 px-4 sm:px-6 lg:px-8">

                    {/* Hero Section */}
                    <section className="flex flex-col items-center gap-4 max-w-[1216px] w-full">
                        <h1 className="text-[40px] sm:text-[48px] md:text-[60px] font-[900] text-[#111827] text-center leading-[1] tracking-[-0.05em]">
                            Find the perfect plan for your team
                        </h1>
                        <div className="max-w-[672px]">
                            <p className="text-[16px] sm:text-[18px] text-[#4B5563] text-center leading-[1.56]">
                                Start for free, then scale as you grow. All plans include our core AI-powered talent development features.
                            </p>
                        </div>
                    </section>

                    {/* Pricing Cards */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1216px] w-full">
                        <PricingCard
                            name="Free"
                            price={0}
                            description="For small teams getting started."
                            features={[
                                "Up to 10 users",
                                "AI-powered skill gap analysis",
                                "Basic reporting dashboard",
                                "Community support",
                            ]}
                            buttonText="Get Started Free"
                        />

                        <PricingCard
                            name="Pro"
                            price={15}
                            description="For growing teams that need more power."
                            features={[
                                "Up to 50 users",
                                "Everything in Free",
                                "Personalized Growth Plans (IDPs)",
                                "Advanced analytics & reporting",
                                "Priority email support",
                            ]}
                            buttonText="Start Your Trial"
                            buttonVariant="primary"
                            highlighted={true}
                            badge="MOST POPULAR"
                        />

                        <PricingCard
                            name="Premium"
                            price={25}
                            description="For large organizations with complex needs."
                            features={[
                                "Unlimited users",
                                "Everything in Pro",
                                "Dedicated Account Manager",
                                "Custom integrations",
                                "24/7 priority support",
                            ]}
                            buttonText="Contact Sales"
                        />
                    </section>

                    {/* Feature Comparison */}
                    <section className="bg-white py-16 md:py-24 w-full flex justify-center px-4 sm:px-6 lg:px-8">
                        <div className="max-w-[1280px] w-full flex flex-col items-center gap-12">
                            <div className="flex flex-col items-center gap-4 max-w-[672px]">
                                <h2 className="text-[30px] sm:text-[36px] font-bold text-[#111827] text-center leading-[1.11] tracking-[-0.05em]">
                                    Feature Comparison
                                </h2>
                                <p className="text-[16px] sm:text-[18px] text-[#4B5563] text-center leading-[1.56]">
                                    A detailed breakdown of what's included in each plan.
                                </p>
                            </div>

                            <div className="w-full overflow-x-auto">
                                <ComparisonTable />
                            </div>
                        </div>
                    </section>

                    {/* Payment & Billing */}
                    <section className="max-w-[896px] w-full flex flex-col items-center gap-12">
                        <div className="flex flex-col items-center gap-4 max-w-[672px]">
                            <h2 className="text-[30px] sm:text-[36px] font-bold text-[#111827] text-center leading-[1.11] tracking-[-0.05em]">
                                Payment & Billing
                            </h2>
                            <p className="text-[16px] sm:text-[18px] text-[#4B5563] text-center leading-[1.56]">
                                Secure payments and flexible billing options to suit your needs.
                            </p>
                        </div>

                        <div className="w-full bg-white border border-[#E5E7EB] rounded-xl shadow-sm p-8 flex flex-col gap-8">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eec6cb82dc5f879c0f0a188ec1d4847ddebcc58?width=64"
                                    alt="Visa"
                                    className="w-8 h-8"
                                />
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7550ae11ec2dd0612ab6163ac5670ae94c73b24c?width=64"
                                    alt="Mastercard"
                                    className="w-8 h-8"
                                />
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b2a988eb4bee39f4197d5107680eb71648508cc?width=64"
                                    alt="American Express"
                                    className="w-8 h-8"
                                />
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dfc355e02bf47a92c2f662e953b6a97546aca25?width=64"
                                    alt="PayPal"
                                    className="w-8 h-8"
                                />
                            </div>

                            <p className="text-sm text-[#4B5563] text-center leading-relaxed">
                                We accept all major credit cards and PayPal. All transactions are securely processed.
                                You can choose to be billed monthly or annually. Annual billing includes a 10% discount.
                            </p>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="bg-white py-16 md:py-24 w-full flex justify-center px-4 sm:px-6 lg:px-8">
                        <div className="max-w-[896px] w-full flex flex-col items-center gap-12">
                            <div className="flex flex-col items-center gap-4 max-w-[672px]">
                                <h2 className="text-[30px] sm:text-[36px] font-bold text-[#111827] text-center leading-[1.11] tracking-[-0.05em]">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-[16px] sm:text-[18px] text-[#4B5563] text-center leading-[1.56]">
                                    Have questions? We've got answers.
                                </p>
                            </div>

                            <FAQAccordion items={faqItems} />
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="max-w-[1216px] w-full bg-[rgba(84,68,233,0.1)] rounded-xl p-8 sm:p-12">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                            <div className="flex flex-col gap-4 max-w-[544px]">
                                <h2 className="text-[30px] sm:text-[36px] font-bold text-[#111827] leading-[1.11] tracking-[-0.05em]">
                                    Ready to empower your team?
                                </h2>
                                <p className="text-[16px] sm:text-[18px] text-[#4B5563] leading-[1.56]">
                                    Start your free trial today and see the difference AI-powered talent development can make.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-end flex-shrink-0">
                                <button className="px-6 py-3 bg-[#5444E9] text-white font-bold rounded-lg shadow-lg hover:bg-[#4334D8] transition-colors whitespace-nowrap">
                                    Start 14-Day Free Trial
                                </button>
                                <button className="px-6 py-3 bg-white text-[#5444E9] font-bold rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
