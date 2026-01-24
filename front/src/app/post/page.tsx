"use client"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import { ButtonWithBgImage } from "@/components/layouts";

export default function Post() {
  const router = useRouter();
  const [templateNum, setTemplateNum] = useState<1 | 2>(1); // 初期値: 1
  const [isTemplateFinalised, setIsTemplateFinalised] = useState(false);

  return (
    <main>
      {!isTemplateFinalised ? (
        <div
          className="relative w-88.25 h-130.5 mx-auto pt-10 px-4 bg-[url(/img/news-paper/news-paper-type3.svg)] bg-no-repeat bg-center"
        >
          <ArrowLeft
            size={20}
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
              <ButtonWithBgImage
                onClick={() => setIsTemplateFinalised(true)}
              >
                テンプレートを確定
              </ButtonWithBgImage>
          </form>
        </div>
      ): (
        <div
          className="relative w-88.25 h-172.25 mx-auto pt-10 px-8 bg-[url(/img/news-paper/news-paper-type4.svg)] bg-no-repeat bg-center text-black"
        >
          <ArrowLeft
            size={20}
            color="black"
            onClick={() => setIsTemplateFinalised(false)}
            className="absolute top-6 left-4"
          />
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-full">
              <h2 className="text-sm mb-4">
                サムネイルを設定
              </h2>
              <label className="flex items-center justify-center w-full h-28.75 bg-[#d9d9d9]">
                <ImageIcon
                  size={24}
                  color="black"
                />
                <input
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
            <div className="py-4 px-4.5">
              <input 
                type="text"
                placeholder="記事タイトル"
                className="w-full text-sm placeholder-black outline-none"
              />
              <div className="flex flex-col gap-5 mt-6">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className={`
                      flex gap-2 justify-between
                      ${i === 1 && "flex-row-reverse"}
                    `}
                  >
                    <label className="flex items-center justify-center w-29.5 h-29.5 bg-[#d9d9d9]">
                      <ImageIcon
                        size={24}
                        color="black"
                      />
                      <input
                        type="file"
                        className="hidden"
                      />
                    </label>
                    <textarea
                      placeholder="文章を入力"
                      className="w-29.25 text-[12px] placeholder-black outline-none"
                    />
                  </div>
                ))}
              </div>
              <textarea 
                placeholder="文章を入力"
                className="w-full text-center text-[12px] mt-6 placeholder-black outline-none"
              />
            </div>
            <ButtonWithBgImage
              // TODO: 投稿処理
              onClick={() => router.push("/")} // 仮でTOPページへ遷移
            >
              とうこうする
            </ButtonWithBgImage>
          </form>
        </div>
      )}
    </main>
  )
}