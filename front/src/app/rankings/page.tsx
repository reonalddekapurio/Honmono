import Image from "next/image";
import rankingsMockData from "@/mocks/rankings.json";
import { NewspaperCard, PostButton } from "@/components/layouts";

export default function Rankings() {
  return (
    <main>
      <div className="flex flex-col items-center gap-6">
        {rankingsMockData.map((data, i) => {
          const index = i + 1;
          
          return (
            <div
              key={data.id}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative w-36 h-11 flex justify-center items-center">
                <Image
                  src={`/img/tag/tag-ranking${index <= 3 ? index : "-4below"}.svg`}
                  alt={`${index}位`}
                  fill
                  className="absolute"
                />
                <span className="relative z-10 text-black text-xl font-yosugara">
                  {index}位
                </span>
              </div>
              <NewspaperCard
                key={data.id}
                newspaper={data.newspaper}
                user={data.user}
              />
            </div>
          )
        })}
      </div>
      <PostButton />
    </main>
  )
}