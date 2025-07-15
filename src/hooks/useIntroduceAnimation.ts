import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useIntroduceAnimation() {
  const introduceRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: introduceRef.current,
        start: "top top",
        end: "+=2000px",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(".opacity", {
      opacity: 0,
      stagger: 0.1,
      delay: 1,
      duration: 2,
    })
      .to(
        ".introduce__image",
        {
          maskSize: "160%",
          duration: 3,
        },
        "+=1"
      )
      .to(
        ".introduce__image",
        {
          scale: 1.1,
          duration: 3,
        },
        "<"
      )
      .to(".-opacity", {
        opacity: 1,
      })
      .to(".opacity", {
        y: 1,
        duration: 2,
      });
  }, [introduceRef]);

  return introduceRef;
}
