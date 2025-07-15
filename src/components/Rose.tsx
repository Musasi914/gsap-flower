import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useThreeAnimation } from "@/hooks/useThreeAnimation";

export default function Rose() {
  const roseRef = useRef<HTMLDivElement>(null);
  const canvasRef = useThreeAnimation();

  useGSAP(() => {
    gsap.from("canvas", {
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: roseRef.current,
        start: "top center",
        end: "bottom bottom",
      },
    });
  }, [roseRef]);

  return (
    <section className="rose relative w-full h-screen grid place-items-center bg-black" ref={roseRef}>
      <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0 z-0"></canvas>
      <h2 className="text-8xl font-bold relative font-serif wrapper">
        <span className="text-red-700">Rose</span> ppoku mieru kana tte
      </h2>
    </section>
  );
}
