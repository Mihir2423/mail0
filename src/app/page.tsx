"use client";

import { Contact, Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-24 w-full h-screen overflow-hidden">
      <Image
        src="/vector.png"
        alt="hero"
        width={800}
        height={600}
        className="bottom-[-100px] absolute w-full h-full"
      />
      <Navbar />
      <main className="flex flex-col flex-1 justify-center items-center gap-16 w-full">
        <div className="flex flex-col md:justify-center items-center gap-10 w-full overflow-y-hidden">
          <div
            className="bottom-[30px] absolute flex items-center gap-3 px-6 py-3 border border-[#252525] rounded-[24px]"
            style={{
              background:
                "linear-gradient(to bottom, #535050 0%, rgba(34, 34, 35, 0.6) 99.75%)",
            }}
          >
            <Link href="https://github.com/Mihir2423/mail0">
              <Github size={18} />
            </Link>
            <Link href="https://x.com/mihir___dev">
              <FaTwitter size={18} />
            </Link>
            <Link href="https://mihircodes.in">
              <Contact size={18} />
            </Link>
          </div>
          <h1 className="bg-clip-text bg-gradient-stop bg-gradient-to-br from-white via-30% via-white to-white/30 mx-2 font-medium text-[40px] text-transparent md:text-[72px] text-center leading-[60px] md:leading-[82px]">
            Your Open source <br /> Gmail alternative
          </h1>
          <div className="flex justify-center items-center gap-[24px] md:gap-12 mx-2 px-3 md:px-8 py-2 border-neutral-400 border-t border-b border-dashed font-medium text-neutral-400 max-md:text-[10px]">
            <span className="relative text-center">
              Easy to self host
              <span className="top-1/2 right-[-12px] md:right-[-24px] absolute border-neutral-400 border-r border-dashed h-[101px] -translate-y-1/2" />
            </span>
            <div className="relative flex flex-col justify-center items-center gap-1">
              <span className="top-1/2 right-[-12px] md:right-[-24px] absolute border-neutral-400 border-r border-dashed h-[101px] -translate-y-1/2" />
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
          <form className="flex max-md:flex-col justify-center items-center gap-4 max-md:mt-6">
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
    </div>
  );
}
