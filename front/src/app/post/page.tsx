"use client"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ButtonWithBgImage } from "@/components/layouts";

export default function Post() {
  const router = useRouter();
  const [templateNum, setTemplateNum] = useState<1 | 2>(1); // 初期値: 1

  return (
    <main>
      <div
        className="relative w-88.25 h-130.5 mx-auto pt-10 px-4 bg-[url(/img/news-paper/news-paper-type3.svg)] bg-no-repeat bg-center"
      >
        <ArrowLeft 
          color="black"
          onClick={router.back}
          className="absolute top-6 left-4"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center"
        >
          <h1 className="font-yosugara text-base text-black">
            テンプレートをせんたくしてください
          </h1>
            <div className="flex justify-between w-full mt-3 mb-7">
              {[...Array(2)].map((_, i) => {
                const index = i + 1 as 1 | 2;
                const isActive = index === templateNum;

                return (
                  <button
                    key={i}
                    onClick={() => setTemplateNum(index)}
                    className="flex flex-col gap-6 items-center cursor-pointer"
                  >
                    <Image
                      src={`/img/post/template-option-${index}.svg`}
                      alt={`template-image-${index}`}
                      width={141}
                      height={227}
                    />
                    <span
                      onClick={() => setTemplateNum(index)}
                      className={`
                        w-5 h-5 rounded-full border border-black
                        ${isActive ? "bg-red" : "bg-white"}
                      `}
                    />
                  </button>
                )
              })}
            </div>
            <ButtonWithBgImage>
              テンプレートを確定
            </ButtonWithBgImage>
        </form>
      </div>
    </main>
  )
}