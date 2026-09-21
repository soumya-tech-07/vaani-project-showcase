import { GradientBackground } from "@/components/ui/dark-gradient-background";

export default function DarkGradientDemo() {
  return (
    <GradientBackground>
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-4 text-4xl font-bold">Beautiful Gradient Background</h1>
          <p className="text-xl opacity-90">Your content goes here</p>
        </div>
      </div>
    </GradientBackground>
  );
}
