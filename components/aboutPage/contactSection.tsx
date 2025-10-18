import { Mail, Briefcase, HelpCircle } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="py-16 md:py-24 px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl font-bold text-[#111827] tracking-tight">
                        Support & Contact
                    </h2>
                    <p className="text-lg text-[#4B5563] leading-relaxed">
                        Have questions? Our team is here to help. Reach out for
                        support, sales inquiries, or partnership opportunities.
                    </p>

                    <div className="flex flex-col gap-6 pt-4">
                        <ContactItem
                            icon={<Mail className="w-6 h-6 text-[#5444E9]" />}
                            text="support@growthcharters.com"
                        />
                        <ContactItem
                            icon={<Briefcase className="w-6 h-6 text-[#5444E9]" />}
                            text="sales@growthcharters.com"
                        />
                        <ContactItem
                            icon={<HelpCircle className="w-6 h-6 text-[#5444E9]" />}
                            text="Help Center"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-lg p-8">
                    <form className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-sm font-medium text-[#374151]">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="h-10 px-3 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5444E9]"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-sm font-medium text-[#374151]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="h-10 px-3 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5444E9]"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-sm font-medium text-[#374151]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="px-3 py-2 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5444E9] resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="px-6 py-3 bg-[#5444E9] text-white font-bold rounded-full shadow-lg hover:bg-[#4334D8] transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-6">
            <div className="flex-shrink-0">{icon}</div>
            <span className="text-base text-[#4B5563]">{text}</span>
        </div>
    );
}
