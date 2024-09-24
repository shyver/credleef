import Navbar from "@/components/navbar";
import Intro from "@/components/sections/Intro";
import Import from "@/components/sections/Import";
import Image from "next/image";
import FormBuilder from "@/components/sections/FormBuilder";
import Customizable from "@/components/sections/Customizable";

export default function Home() {
  return (
    <main className="overflow-x-auto">
            <Navbar/>
            <div className="bg-white px-8 w-full h-fit pt-[80px] flex flex-col gap-2">
              <Intro  />
              <Import/>
              <FormBuilder/>
              <Customizable/>
            </div>

    </main>
  );
}
