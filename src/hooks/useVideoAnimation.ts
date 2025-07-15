import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export function useVideoAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

  return { videoRef, heroRef };
}
