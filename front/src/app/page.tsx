import mockData from "@/mocks/newspapers.json";
import { NewspaperCard } from "@/components/layouts/";

export default function Home() {

  return (
    <div className="flex flex-col items-center pb-20">
      {mockData.map((data) => (
        <NewspaperCard 
          key={data.id} 
          newspaper={data.newspaper} 
          user={data.user} 
        />
      ))}
    </div>
  );
}
