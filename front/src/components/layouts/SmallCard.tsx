import Image from "next/image";
import { MessageCircleMore } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Bookmark } from 'lucide-react';

type Props = {
    title: string;
    description: string;
    imageUrl: string;
    commentCount: number;
    likeCount: number;
    viewCount: number;
};

export function SmallCard({
    title,
    description,
    imageUrl,
    commentCount,
    likeCount,
    viewCount,
    }: Props) {
    return (
        <div className="bg-white shadow-md border p-3 space-y-3 w-56 flex-shrink-0">
            {/* ピン */}
            <div className=" -translate-x-1/2 w-3 h-3 mx-[50%] bg-gray-800 rounded-full z-10" />
            {/* 画像 */}
            <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
                <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                />
            </div>

            {/* タイトル */}
            <h3 className="font-bold text-base text-black">-------</h3>

            {/* 説明文 */}
            <p className="text-sm text-black line-clamp-2">-------</p>

            {/* コメント */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
                <div className="w-6 h-6 rounded-full bg-gray-400" />
                <p className="text-sm text-gray-500 truncate">
                テキストテキストテキスト…
                </p>
                <span className="ml-auto text-gray-500">›</span>
            </div>

            {/* アイコン */}
            <div className="flex justify-between text-sm text-gray-600 pt-1">
                <MessageCircleMore />
                <Heart />
                <Eye />
                <Bookmark />
            </div>
        </div>
    );
}
