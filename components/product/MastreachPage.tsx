import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { MastreachShowcase } from "./MastreachShowcase";

const heading = Outfit({ subsets: ["latin"], variable: "--font-mastreach-heading" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-mastreach-body" });

export function MastreachPage() {
  return (
    <div className={`${heading.variable} ${body.variable}`}>
      <MastreachShowcase />
    </div>
  );
}
