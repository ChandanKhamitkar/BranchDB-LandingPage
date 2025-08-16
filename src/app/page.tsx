import { onest } from "@/lib/fonts";
import Hero from "@/components/home/hero";
import WhatIsBranchDB from "@/components/home/whatIsBranchDB";
import WhatIsCards from "@/components/home/whatIsCards";
import WhatICookedUp from "@/components/home/whatICookedUp";
import Performance from "@/components/home/performance";
import SupportUs from "@/components/home/supportUs";
import TheBrains from "@/components/home/theBrains";

export default function Home() {
  return (
    <div className={`w-full bg-black flex flex-col overflow-x-hidden custom-scrollbar rounded-md relative ${onest.className}`}>
      <Hero/>
      <WhatIsBranchDB/>
      <WhatIsCards/>
      <WhatICookedUp/>
      <Performance/>
      <SupportUs/>
      <TheBrains/>
      <div className="py-10"></div>
    </div >
  );
}