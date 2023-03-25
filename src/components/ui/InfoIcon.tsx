import { create } from "@lottiefiles/lottie-interactivity";
import { Player } from "@lottiefiles/react-lottie-player";
import type { AnimationItem } from "lottie-web";
import { FC, memo, useEffect, useRef, useState } from "react";

type InfoIconProps = {
  children: string;
  animation: string;
  container: string;
};

const InfoIcon: FC<InfoIconProps> = ({
  children,
  animation,
}: InfoIconProps): JSX.Element => {
  const [instance, setInstance] = useState<AnimationItem>();
  const player = useRef<Player>(null);

  useEffect((): void => {
    if (instance) {
      create({
        mode: "scroll",
        player: instance,
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [1, 100],
          },
        ],
      });
    }
  }, [instance]);

  return (
    <div className="mx-10 mb-10 flex flex-col items-center justify-start md:w-[250px] xl:mb-0">
      <div className="rounded-fullp-2 mb-4 flex flex-col items-center justify-center">
        <Player
          lottieRef={(instance: AnimationItem) => setInstance(instance)}
          ref={player}
          autoplay={false}
          loop={false}
          controls={false}
          src={animation}
          style={{ height: "200px", width: "200px" }}
        ></Player>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default memo(InfoIcon);
