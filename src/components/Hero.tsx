import { popularFlowers, newFlowers } from "@/constants/flowers";
import { useTextAnimation } from "@/hooks/useTextAnimation";
import { useVideoAnimation } from "@/hooks/useVideoAnimation";
import FlowerList from "./FlowerList";

export default function Hero() {
  useTextAnimation();
  const { videoRef, heroRef } = useVideoAnimation();

  return (
    <section className="hero relative" aria-labelledby="hero-title" ref={heroRef}>
      <div className="wrapper pb-20 md:pb-[50vh]">
        <header className="hero__header md:h-screen flex flex-col justify-between pt-[20vh] md:py-[10vh]">
          <h1 className="hero__title font-serif text-[min(22vw,400px)] font-bold text-center leading-[1] overflow-hidden">Flower</h1>
          <div className="hero__content grid grid-cols-1 md:grid-cols-12">
            <aside className="hidden md:block col-span-3">
              <p className="hero__paragraph">
                <span>lorem ipsum dolor</span>
                <span className="text-accent text-3xl md:text-4xl font-bold font-serif block">sit amet consectetur</span>
              </p>
            </aside>
            <div className="md:col-[10/13]">
              <p className="hero__paragraph text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quia corporis quaerat assumenda quidem nam recusandae minus,
              </p>
            </div>
          </div>
        </header>
        <div className="hero__lists grid grid-cols-1 md:grid-cols-12 mt-[200vh] md:mt-20 [&>*+*]:mt-20 [&>*+*]:md:mt-0">
          <FlowerList title="Most popular flowers" flowers={popularFlowers} className="md:col-span-4 md:col-start-1" />
          <FlowerList title="New flowers" flowers={newFlowers} className="md:col-span-4 md:col-start-9" />
        </div>
      </div>
      <div className="hero__video fixed top-0 left-0 w-full h-screen z-[-1]">
        <video src="/hero.webm" muted playsInline className="object-cover w-full h-full" ref={videoRef} preload="auto" />
      </div>
    </section>
  );
}
