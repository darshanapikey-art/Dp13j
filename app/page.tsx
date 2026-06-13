
import Hero from "../components/Hero";
import StorySection from "../components/StorySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <StorySection title="Before Code" text="There was curiosity." />
      <StorySection title="Human" text="Persistence. Vision. Depth." />
      <StorySection title="Chaos" text="Growth isn't beautiful. It is violent." />
      <StorySection title="Legacy" text="I build things that outlive me." />
    </main>
  );
}
