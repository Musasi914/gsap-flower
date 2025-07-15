import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Introduce() {
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
  return (
    <section className="introduce w-full h-screen bg-black" aria-labelledby="introduce-title" ref={introduceRef}>
      <div className="introduce__inner-1 relative w-full h-full">
        <h2
          className="opacity text-[20vw] font-bold font-serif text-center opacity-50 text-gradient leading-tight absolute top-[10%] left-1/2 -translate-x-1/2"
          id="introduce-title"
        >
          Introduce
        </h2>
        <figure className="introduce__content w-[min(90%,700px)] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="overflow-hidden rounded-4xl">
            <img
              src="/flowershop.jpg"
              alt=""
              width={1000}
              height={600}
              className="introduce__image w-full h-full object-cover rounded-4xl"
            />
          </div>
          <figcaption className="opacity text-center text-white text-xl font-serif">Demo test text</figcaption>
          <figcaption className="-opacity opacity-0 text-center text-white text-4xl font-serif">
            <p>Demo test text</p>
            <p className="text-sm font-sans font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est voluptatem enim dolore nostrum quia odio eum asperiores
              nobis quidem
            </p>
          </figcaption>
        </figure>
        <div className="wrapper grid grid-cols-1 md:grid-cols-12 gap-4 absolute bottom-10 left-1/2 -translate-x-1/2 text-sm">
          <p className="opacity md:col-span-3 hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia adipisci dolore quasi quis? Debitis, esse doloribus temporibus
            voluptates non harum excepturi, tenetur rem numquam illo ducimus, molestias veniam ex at!
          </p>
          <ul className="opacity md:col-span-3 md:col-start-10 list-decimal list-inside">
            <li>lorem ipsum dolor sit amet</li>
            <li>feugiat in fermentum posuere urna nec nibh a molestie lorem ipsum dolor sit amet</li>
            <li>tincidunt praesent semper feugiat</li>
            <li>consectetur adipisicing elit. Mollitia adipisci dolore quasi quis</li>
            <li>sed pulvinar proin gravida hendrerit lectus</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
