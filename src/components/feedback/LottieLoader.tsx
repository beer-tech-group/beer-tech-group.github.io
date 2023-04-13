import { IPlayerProps, Player } from "@lottiefiles/react-lottie-player";
import type { FC } from "react";

export type LottieLoaderProps = IPlayerProps;

const LottieLoader: FC<LottieLoaderProps> = (props): JSX.Element => {
  return (
    <Player
      autoplay={true}
      loop={true}
      controls={false}
      keepLastFrame={true}
      style={{ height: "200px", width: "200px" }}
      {...props}
    ></Player>
  );
};

export default LottieLoader;
