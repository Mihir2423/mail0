"use client";

import { Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-16 w-full">
      <div className="relative flex flex-col justify-center items-center gap-10 md:pt-60 w-full h-[calc(100vh-65px)] overflow-y-hidden">
        <Image
          src="/vector.png"
          alt="hero"
          width={800}
          height={600}
          className="hidden md:block bottom-[-100px] absolute w-full h-full"
        />
        <h1 className="bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30 font-medium text-transparent md:text-[72px] text-5xl text-center leading-[60px] md:leading-[82px]">
          Your Open source <br /> Gmail alternative
        </h1>
        <div className="flex justify-center items-center gap-12 mx-2 px-3 md:px-8 py-2 border-neutral-400 border-t border-b border-dashed font-medium text-neutral-400 max-md:text-sm">
          <span className="relative text-center">
            Easy to self host
            <span className="top-1/2 right-[-24px] absolute border-neutral-400 border-r border-dashed h-[101px] -translate-y-1/2" />
          </span>
          <div className="relative flex flex-col justify-center items-center gap-1">
            <span className="top-1/2 right-[-24px] absolute border-neutral-400 border-r border-dashed h-[101px] -translate-y-1/2" />
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Mail size={12} className="translate-y-[0.5px]" />
                <span className="font-regular text-[12px]">Gmail</span>
              </div>
              <span className="font-medium text-[12px]">Cal.com</span>
            </div>
            <span className="text-center">Connect popular services</span>
          </div>
          <span>Customizable</span>
        </div>
        <form className="flex justify-center items-center gap-4">
          <div
            className="relative rounded-md w-[252px] h-[33px]"
            style={{
              background:
                "linear-gradient(to bottom, #676769 0%, rgba(34, 34, 35, 0.6) 99.75%)",
            }}
          >
            <input
              type="email"
              placeholder="Your email"
              className="top-1/2 left-1/2 absolute bg-[#28282A] px-3 py-1 border-0 rounded-md outline-none w-[250px] placeholder:font-medium text-white placeholder:text-[#9B9A9E] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <button
            type="submit"
            style={{
              background:
                "linear-gradient(180deg, #222223 0%, rgba(34, 34, 35, 0.6) 68.75%)",
            }}
            className="px-3 py-1 border border-[#6c6c6c] rounded-lg"
          >
            Join waitlist
          </button>
        </form>
        <div className="hidden relative md:flex justify-center items-center bg-[#b4b2b21a] backdrop-blur-lg md:p-4 md:border border-neutral-400 md:rounded-[32px]">
          <Image
            src={"/mail.png"}
            alt="hero"
            width={800}
            height={600}
            className="rounded-[16px] w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
