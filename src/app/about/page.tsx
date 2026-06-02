import Image from "next/image";
import prisma from "@/lib/prisma";
import User from '@/models/User';
export default async function Home() {

const data = await prisma.user.findUnique({
	 where: { id: 6 },
});
let user: User | null = null
if (data) {
  user = JSON.parse(JSON.stringify(data))
}
console.log('data: ', data);
console.log('user: ', user);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Image
          className="dark:invert"
          src={users.images[0].url}
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
      
      </main>
    </div>
  );
}
