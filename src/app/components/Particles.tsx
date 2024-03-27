"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import ParticleJSON from "../../shared/utils/particles/particles.json";
import { useEffect, useState } from "react";
import { Container } from "@tsparticles/engine";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container?: Container): void => {
    console.log(container);
  };

  console.log("particle", ParticleJSON);
  if (!init) {
    return <></>;
  }

  return (
    <Particles
      id="tsparticles"
      // options={{
      //   ...ParticleJSON,
      // }}
      particlesLoaded={particlesLoaded}
    />
  );
};
export default App;
