import { useEffect, useRef } from "react";
import gsap from "gsap";

import hand from "./assets/hand.png";
import stLogo from "./assets/stLogo.png";

import transform from "./assets/text/transform.png";
import connect from "./assets/text/connect.png";
import trust from "./assets/text/trust.png";
import create from "./assets/text/create.png";
import achieve from "./assets/text/achieve.png";
import dreams from "./assets/text/dreams.png";
import grow from "./assets/text/grow.png";
import community from "./assets/text/community.png";
import man from "./assets/man1.png";
import group from "./assets/Group.png";
import three from "./assets/three.png";
import two from "./assets/two.png";

// Animation Setup Functions
const animateTextImages = (container) => {
  const imgs = container.querySelectorAll("img");
  const animations = [
    { x: 20, y: 25, duration: 2 },
    { x: -10, y: 20, duration: 2.5 },
    { x: 100, y: -10, duration: 2 },
    { x: 0, y: 40, duration: 2.2 },
    { x: -90, y: -6, duration: 2.3 },
    { x: -50, y: 5, duration: 2.4 },
    { x: 90, y: -3, duration: 2 },
    { x: -90, y: 4, duration: 2.5 },
  ];

  imgs.forEach((img, i) => {
    const anim = animations[i];
    if (anim) {
      gsap.to(img, {
        ...anim,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }
  });
};

const animateCharacterImages = (container) => {
  const imgs = container.querySelectorAll("img");

  if (imgs.length < 14) return;

  const animations = [
    { x: 20, y: -60, scale: 1.1 },
    { x: -10, y: -100, scale: 1.3 },
    { x: 25, y: -25, scale: 1.2 },
    { x: -40, y: 30, scale: 0.95 },
    { x: 60, y: -50, scale: 1 },
    { x: 20, y: -20, scale: 1.05 },
    { x: -10, y: -20, scale: 0.85 },
    { x: -50, y: -10, scale: 1.15 },
    { x: 30, y: -45, scale: 0.95 },
    { x: -35, y: 25, scale: 1.1 },
    { x: -35, y: 25, scale: 1.1 },
    { x: -15, y: -55, scale: 1.1 },
    { x: -15, y: -65, scale: 0.7 },
    { x: 15, y: -45, scale: 1.1 },
  ];

  imgs.forEach((img, i) => {
    const anim = animations[i];
    if (anim) {
      gsap.fromTo(
        img,
        { x: 0, y: 0 },
        { ...anim, repeat: -1, duration: 2, ease: "power2.out" }
      );
    }
  });
};

const App = () => {
  const animatedContainerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) animateTextImages(textRef.current);
  }, []);

  useEffect(() => {
    if (animatedContainerRef.current)
      animateCharacterImages(animatedContainerRef.current);
  }, []);

  return (
    <div className="bg-gradient-primary relative h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Floating Text Images */}
      <div ref={textRef}>
        <img className="absolute h-10 top-25 left-20" src={transform} alt="" />
        <img className="absolute h-10 top-35 right-50" src={connect} alt="" />
        <img className="absolute h-10 top-85 left-10" src={trust} alt="" />
        <img className="absolute h-10 top-90 right-20" src={create} alt="" />
        <img className="absolute h-10 top-105 left-90" src={achieve} alt="" />
        <img className="absolute h-10 top-100 right-80" src={dreams} alt="" />
        <img className="absolute h-10 bottom-10 left-10" src={grow} alt="" />
        <img
          className="absolute h-10 bottom-10 right-10"
          src={community}
          alt=""
        />
      </div>

      {/* Central Logo with Hand */}
      <div className="relative h-80">
        <img className="h-85" src={hand} alt="hand" />
        <img
          className="h-40 absolute top-40 left-65"
          src={stLogo}
          alt="st logo"
        />
      </div>

      {/* Animated Characters */}
      <div ref={animatedContainerRef} className="relative h-100 w-50">
        <img
          className="absolute h-25 top-10"
          src={man}
          alt=""
        />
        <img
          className="absolute h-30 top-20 right-8"
          src={man}
          alt="Man"
        />
        <img
          className="absolute h-25 top-32 left-13"
          src={man}
          alt="Man"
        />
        <img
          className="absolute h-30 top-35 -right-10 opacity-60"
          src={man}
          alt="Man"
        />
        <img
          className="absolute h-20 top-40 -left-10 opacity-60"
          src={man}
          alt="Man"
        />
        <img
          className="absolute h-30 top-15 -left-30 opacity-60"
          src={group}
          alt="Group"
        />
        <img
          className="absolute h-25 top-70 -right-20 opacity-60"
          src={three}
          alt="three"
        />
        <img
          className="absolute h-25 top-75 left-10 opacity-60"
          src={three}
          alt="three"
        />
        <img
          className="absolute h-35 top-60 -left-30 opacity-60"
          src={two}
          alt=""
        />
        <img
          className="absolute h-20 top-50 left-25 opacity-60"
          src={two}
          alt=""
        />
        <img
          className="absolute h-20 top-80 left-25 opacity-60"
          src={two}
          alt=""
        />
        <img
          className="absolute h-20 top-40 right-0 opacity-60"
          src={two}
          alt=""
        />
        <img
          className="absolute h-40 top-100 -left-20 opacity-60"
          src={two}
          alt=""
        />
        <img
          className="absolute h-20 top-90 left-35 opacity-60"
          src={two}
          alt=""
        />
        <img
          className="absolute h-25 top-50 left-0 opacity-60"
          src={three}
          alt="three"
        />
        <img
          className="absolute h-25 top-32 -left-13"
          src={man}
          alt="Man"
        />
      </div>
    </div>
  );
};

export default App;
