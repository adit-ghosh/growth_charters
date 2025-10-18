export default function TeamSection() {
    return (
        <section className="bg-[#F6F6F8] py-16 md:py-24 px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-[#111827] tracking-tight mb-6">
                    Meet the Team
                </h2>
                <p className="text-lg text-[#4B5563] text-center max-w-2xl mx-auto mb-16">
                    The passionate individuals driving Growth Charters forward.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-items-center">
                    <TeamMember
                        image="https://api.builder.io/api/v1/image/assets/TEMP/8b3926b7f03cacaebfe8267d99558fe4e0f20405?width=288"
                        name="Alex Chen"
                        role="Co-Founder & CEO"
                    />
                    <TeamMember
                        image="https://api.builder.io/api/v1/image/assets/TEMP/0132d576f3ad43ae4d96804dd576b8abebaa3981?width=288"
                        name="Brianna Lee"
                        role="Co-Founder & CTO"
                    />
                    <TeamMember
                        image="https://api.builder.io/api/v1/image/assets/TEMP/70ee70cf6f58684317bbaef1a2f265d1c17572d9?width=288"
                        name="Carlos Gomez"
                        role="Head of Product"
                    />
                    <TeamMember
                        image="https://api.builder.io/api/v1/image/assets/TEMP/480903b12d4a1893c4c356ea12dfe7f2edf48cf7?width=288"
                        name="Diana Smith"
                        role="Head of Customer Success"
                    />
                    <TeamMember
                        image="https://api.builder.io/api/v1/image/assets/TEMP/c63a1e55c4dfdc746aac97ed9e4f6fa190521215?width=288"
                        name="Ethan Jones"
                        role="Lead Data Scientist"
                    />
                </div>
            </div>
        </section>
    );
}

function TeamMember({ image, name, role }: { image: string; name: string; role: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg mb-6">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-[#111827] text-center">{name}</h3>
            <p className="text-base text-[#5444E9] text-center mt-1 font-medium">{role}</p>
        </div>
    );
}