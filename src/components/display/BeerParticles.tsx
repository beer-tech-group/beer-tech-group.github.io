import { FunctionComponent, useCallback } from "react";
import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
  background: {
    color: "#f4b11f",
  },
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    shape: {
      type: "circle",
    },
    move: {
      enable: true,
      direction: "top",
      straight: true,
      outMode: "out",
      speed: 5,
    },
    opacity: {
      random: true,
      value: 0.5,
    },
    color: {
      value: "#FFF",
    },
    size: {
      animation: {
        destroy: "none",
        enable: true,
        speed: 0.5,
        minimumValue: 5,
        startValue: "random",
        sync: false,
      },
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 10,
    },
  },
  autoPlay: true,
  detectRetina: true,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  fpsLimit: 120,
  zLayers: 5,
};

type BeerParticlesProps = {
  height?: string;
};

export const BeerParticles: FunctionComponent<BeerParticlesProps> = ({
  height = "100%",
}: BeerParticlesProps): JSX.Element => {
  const particlesInit = useCallback((engine: Engine): Promise<void> => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    return loadFull(engine)
      .then(() => {
        console.debug("loaded");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Particles
      height={height}
      init={particlesInit}
      options={options}
      className="h-full w-full"
    />
  );
};

export default BeerParticles;
