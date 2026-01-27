"use client";

import { useState } from "react";
import Image from "next/image";
import mockData from "@/mocks/newspapers.json";
import pickupsMockData from "@/mocks/pickups.json";
import { NewspaperCard } from "@/components/layouts/";

export default function Home() {
  const genreNavItems = ["タイムライン", "ピックアップ"];
  const [isTimeLine, setIsTimeLine] = useState(true); // 初期状態: タイムラインを表示

  return (
    <main className="mx-5">
      <div className="flex justify-between w-full mb-6">
        {genreNavItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setIsTimeLine(!isTimeLine)}
            className="relative flex flex-col justify-end pb-1 w-36 h-14.5 text-1xl text-white font-yosugara"
          >
            <Image 
              src="/img/tag/tag-wood.png"
              alt={`${item}`}
              fill
              className="absolute object-cover"
            />
            <span className="relative z-10">
              {item}
            </span>
          </button>
        ))}
      </div>
      {isTimeLine ? (
        <div className="flex flex-col items-center gap-6 pb-20 px-4">
          {/* TODO: 実際のデータを取得して表示 */}
          {mockData.map((data) => (
            <NewspaperCard 
              key={data.id} 
              newspaper={data.newspaper} 
              user={data.user} 
            />
          ))}
        </div>
      ): (
        <div className="flex flex-col items-center gap-6 pb-20 px-4">
          {/* TODO: 実際のデータを取得して表示 */}
          {pickupsMockData.map((data) => (
            <NewspaperCard 
              key={data.id}
              newspaper={data.newspaper}
              user={data.user}
            />
          ))}
        </div>
      )}
    </main>
  );
}
