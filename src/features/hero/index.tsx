import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Hero;
