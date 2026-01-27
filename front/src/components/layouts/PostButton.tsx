import { FilePenLine } from "lucide-react";
import Link from "next/link";

export function PostButton() {
  return (
    <button className="fixed bottom-21 right-2 w-12.5 h-12.5 bg-red rounded-full">
      <Link 
        href="/post"
        className="w-full h-full flex items-center justify-center"
      >
        <FilePenLine 
          size={24}
          color="white"
        />
      </Link>
    </button>
  )
}