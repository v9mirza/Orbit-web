import Image from "next/image";
import type { Screen } from "@/lib/content";

export function AppShot({ screen, priority = false, className = "" }: { screen: Screen; priority?: boolean; className?: string }) {
  return <div className={`app-shot ${className}`}><Image src={screen.image} alt={`Orbit ${screen.label} app screen`} width={screen.width} height={screen.height} priority={priority} sizes="(max-width: 600px) 80vw, (max-width: 1000px) 45vw, 340px" /></div>;
}
