import React from "react"
import QrCodeNavBar from "./components/QrCodeNavBar";
import QrCodeTabs from "./components/QrCodeTabs";
import FlickeringGrid from "@/components/ui/flickering-grid";


export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 w-full h-full [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={7}
        color="#6B7280"
        maxOpacity={0.3}
        flickerChance={0.1}
        height={710}
        width={2000}
      />
      <div className="relative z-10">
        <QrCodeNavBar />
        <QrCodeTabs />
      </div>
    </div>
  );
}
