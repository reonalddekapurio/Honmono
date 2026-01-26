import { BottomNav } from "@/components/layouts/BottomNav";
import { NewspaperCard } from "@/components/layouts/NewspaperCard";
import { Kabekake2 } from "@/components/layouts/Kabekake2";
import { SmallCard } from "@/components/layouts/SmallCard";

export default function Raoidrist() {
    const mockData = [
        {
        id: 1,
        newspaper: {
            id: 1,
            title: "コメダ新作？コラボを公開！",
            description:
            "コメダ珈琲店は1月21日、公式X（Twitter）に新コラボの“ヒント”を公開。「食べられるコラボ？」「どんな展開になるんだろう」などのコメントが寄せられています。",
            images: "/img/dummy-img.svg",
            likes: 100,
            is_liked: false,
        },
        user: {
            id: 1,
            name: "山田太郎",
            icon_url: "/img/dummy-img.svg",
        },
        },
    ];

    return (
        <main className="flex justify-center">
        <div className="w-full max-w-md pb-24 space-y-4">
            <Kabekake2 />
            
            <div className="border-[10px] 	border-gray-500 bg-gray-300 mx-4">
                <div className="ml-5">
                    {mockData.map((data) => (
                        <NewspaperCard
                        key={data.id}
                        newspaper={data.newspaper}
                        user={data.user}
                        />
                    ))}
                </div>
                <div className="flex mt-8">
                    <p className="text-2xl text-black pl-8">No.2</p>
                    <div className="pl-8">
                        {mockData.map((data) => (
                        <SmallCard
                            key={data.id}
                            title={data.newspaper.title}
                            description={data.newspaper.description}
                            imageUrl={data.newspaper.images}
                            commentCount={12}
                            likeCount={data.newspaper.likes}
                            viewCount={345}
                        />
                    ))}
                    </div>
                    
                </div>
                <div className="flex mt-8">
                    <p className="text-2xl text-black pl-8">No.3</p>
                    <div className="pl-8">
                        {mockData.map((data) => (
                        <SmallCard
                            key={data.id}
                            title={data.newspaper.title}
                            description={data.newspaper.description}
                            imageUrl={data.newspaper.images}
                            commentCount={12}
                            likeCount={data.newspaper.likes}
                            viewCount={345}
                        />
                    ))}
                    </div>
                    
                </div>
                
            </div>
            <BottomNav />
        </div>
        </main>
    );
}
