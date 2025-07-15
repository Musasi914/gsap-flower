import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(SplitText);

export function useTextAnimation() {
  const isMobile = useIsMobile();

  useGSAP(() => {
    // title animation
    const title = new SplitText(".hero__title", {
      type: "chars",
    });
    title.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(title.chars, {
      yPercent: 100,
      ease: "power2.inOut",
      stagger: 0.06,
    });

    // paragraph animation
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
  }, [isMobile]);
}
