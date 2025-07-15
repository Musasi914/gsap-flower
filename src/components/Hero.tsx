import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useGSAP(() => {
    // title
    const title = new SplitText(".hero__title", {
      type: "chars",
    });
    title.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(title.chars, {
      yPercent: 100,
      ease: "power2.inOut",
      stagger: 0.06,
    });

    // paragraph
    const paragraph = new SplitText(".hero__paragraph", {
      type: "lines",
    });
    gsap.from(paragraph.lines, {
      yPercent: 100,
      opacity: 0,
      ease: "power2.inOut",
      delay: isMobile ? 0 : 1,
      stagger: 0.04,
    });

    // video
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    videoRef.current!.onloadedmetadata = () => {
      videoTimeline.from(videoRef.current, {
        opacity: 0,
        ease: "none",
        duration: 1,
      });
      videoTimeline.to(
        videoRef.current,
        {
          currentTime: videoRef.current?.duration,
          ease: "none",
          duration: 2,
        },
        0.5
      );
    };
  }, [heroRef]);

  return (
    <section className="hero relative" aria-labelledby="hero-title" ref={heroRef}>
      <div className="wrapper pb-20 md:pb-[50vh]">
        <header className="hero__header md:h-screen flex flex-col justify-between pt-[20vh] md:py-[10vh]">
          <h1 className="hero__title font-serif text-[22vw] font-bold text-center leading-[1] overflow-hidden">Flower</h1>
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
          <section className="hero__list-wrapper md:col-span-4 md:col-start-1">
            <h2 className="text-3xl font-bold font-serif">Most popular flowers</h2>
            <dl className="hero__list mt-4 bg-black/40 backdrop-blur-sm p-2 rounded-2xl">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <dt className="text-2xl font-bold font-serif text-accent">Rose</dt>
                    <dd className="text-sm text-gray-100">Made in Japan</dd>
                  </div>
                  <dd className="text-2xl font-bold font-serif">10$</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="hero__list-wrapper  md:col-span-4 md:col-start-9">
            <h2 className="text-3xl font-bold font-serif">New flowers</h2>
            <dl className="hero__list mt-4 bg-black/40 backdrop-blur-sm p-2 rounded-2xl">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div>
                    <dt className="text-2xl font-bold font-serif text-accent">Rose</dt>
                    <dd className="text-sm text-gray-100">Made in Japan</dd>
                  </div>
                  <p className="text-2xl font-bold font-serif">10$</p>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
      <div className="hero__video fixed top-0 left-0 w-full h-screen z-[-1]">
        <video src="/hero.webm" muted playsInline className="object-cover w-full h-full" ref={videoRef} preload="auto" />
      </div>
    </section>
  );
}
