import { BottomNav } from "@/components/layouts/BottomNav";
import { NewspaperCard } from "@/components/layouts/NewspaperCard";
import { Kabekake1 } from "@/components/layouts/Kabekake1";

export default function Home() {
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
        <Kabekake1 />
        <div className="ml-5">
          {mockData.map((data) => (
            <NewspaperCard
              key={data.id}
              newspaper={data.newspaper}
              user={data.user}
            />
          ))}
        </div>
        <div className="border-[10px] 	border-gray-500 bg-gray-300 mx-4">
            <p className="px-4 py-2 bg-amber-200 rounded">dummy</p>
        </div>
        <BottomNav />
      </div>
    </main>
  );
}
