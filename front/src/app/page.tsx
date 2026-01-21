import { BottomNav } from "@/components/layouts/BottomNav";
import { NewspaperCard } from "@/components/layouts/NewspaperCard";
import { ProfileNewspaperCard } from "@/components/layouts/ProfileNewspaperCard";

export default function Home() {
  const mockData = [
    {
      id: 1,
      newspaper: {
        id: 1,
        title: "コメダ新作？コラボを公開！",
        description: "コメダ珈琲店は1月21日、公式X（Twitter）に新コラボの“ヒント”を公開。「食べられるコラボ？」「どんな展開になるんだろう」などのコメントが寄せられています。",
        images: "/img/dummy-img.svg",
        likes: 100,
        is_liked: false
      },
      user: {
        id: 1,
        name: "山田太郎",
        icon_url: "/img/dummy-img.svg"
      }
    }
  ];

  return (
    <div className="flex flex-col items-center pb-20">
      {mockData.map((data) => (
        <NewspaperCard key={data.id} newspaper={data.newspaper} user={data.user} />
      ))}
      <BottomNav />
    </div>
  );
}
