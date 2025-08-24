"use client";
import FirstRow from "@/components/FirstRow";
import SecondRow from "@/components/SecondRow";
import ThirdRow from "@/components/ThirdRow";
import FourthRow from "@/components/FourthRow";
import FifthRow from "@/components/FifthRow";
import SixthRow from "@/components/SixthRow";

export default function Home() {
  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-[#adc1d1] to-[#EEF2F3]">
        <h2 className="mb-4 bg-gradient-to-r from-violet-700 via-blue-500 to-violet-950 bg-clip-text font-mono text-3xl font-semibold text-transparent selection:bg-cyan-900 selection:text-white">
          &nbsp;Apple Magic Keyboard&nbsp;
        </h2>
        <div className="keyboard to-[#764ba2] p-3">
          <FirstRow />
          <SecondRow />
          <ThirdRow />
          <FourthRow />
          <FifthRow />
          <SixthRow />
        </div>
      </section>
    </>
  );
}
