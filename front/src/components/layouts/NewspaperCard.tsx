import Image from "next/image";
import Link from "next/link";
import { Newspaper,User} from "../../types/newspaper"; 

interface NewspaperCardProps {
    newspaper: Newspaper;
    user: User;
}

export function NewspaperCard({ newspaper, user }: NewspaperCardProps) {
    const isLongDescription = newspaper.description.length > 30;
    const displayDescription = isLongDescription 
        ? newspaper.description.substring(0, 30) + "..." 
        : newspaper.description;

    return (
        <div className="relative flex flex-col align-start justify-center w-[353px] h-[333px] gap-4 bg-[url('/img/newspaper.svg')] bg-no-repeat bg-center bg-cover shadow-2xl p-4">
            <div className="flex align-start justify-center w-full">
                <Image 
                src={newspaper.images} 
                alt="newspaper"
                width={279} 
                height={183} 
            />
            </div>
            <div className="w-[300px]">
                <p className="text-black text-md font-bold">{newspaper.title}</p>
                <p className="text-gray text-sm font-md">{displayDescription}</p>
                {isLongDescription && (
                    <Link href={`/newspaper/${newspaper.id}`}>
                        <button className="text-red text-sm font-bold mt-1 hover:underline">
                            もっとみる 
                        </button>
                    </Link>
                )}
            </div>
            <div className="absolute bottom-4 right-9 flex items-center justify-center w-6 h-6 rounded-full overflow-hidden">
                <Image 
                src={user.icon_url} 
                alt="user-icon"
                width={32} 
                height={32}
                className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}