import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import type { AnimationItem } from "lottie-web";
import { FC, RefObject, useRef, useState } from "react";

enum Icons {
  TICKET = "ticket",
  GPS = "gps",
  QRCODE = "qrcode",
  BEER = "beer",
}

type AnimatedInfoIconsProps = {
  linkEvent?: string | undefined;
};

const AnimatedInfoIcons: FC<AnimatedInfoIconsProps> = ({
  linkEvent,
}: AnimatedInfoIconsProps): JSX.Element => {
  const playerTicket = useRef<Player>(null);
  const playerGps = useRef<Player>(null);
  const playerQrcode = useRef<Player>(null);
  const playerBeer = useRef<Player>(null);
  const [instance, setInstance] = useState<AnimationItem>();

  const resetAll = (): void => {
    playerTicket.current?.setSeeker(0);
    playerGps.current?.setSeeker(0);
    playerQrcode.current?.setSeeker(0);
    playerBeer.current?.setSeeker(0);
  };

  const handleEvents = (
    event: PlayerEvent,
    icon: Icons,
    nextPlayer: RefObject<Player>
  ): void => {
    switch (event) {
      case PlayerEvent.Complete:
        if (icon === Icons.BEER) {
          // resetAll();
        } else {
          // nextPlayer.current?.setSeeker(0, true);
          nextPlayer.current?.play();
        }
        break;
      case PlayerEvent.Frame:
        if (icon === Icons.BEER && (instance?.currentFrame || 0) >= 160) {
          playerBeer.current?.setSeeker(160);
          instance?.pause();
        }
        break;
      default:
        return;
    }
  };

  return (
    <div className="my-20 flex flex-col flex-wrap items-center justify-center sm:flex-row sm:items-start sm:justify-between">
      <div className="mx-10 mb-10 flex flex-col items-center justify-start md:w-[250px] xl:mb-0">
        <div className="rounded-fullp-2 mb-4 flex flex-col items-center justify-center">
          <Player
            ref={playerTicket}
            onEvent={(event) => handleEvents(event, Icons.TICKET, playerGps)}
            autoplay={true}
            loop={false}
            controls={false}
            src="/animations/tickets.json"
            keepLastFrame={true}
            style={{ height: "200px", width: "200px" }}
          ></Player>
        </div>
        <div>
          {linkEvent ? (
            <span>
              <a href={linkEvent} target="_blank">
                Prenotati
              </a>{" "}
              online
            </span>
          ) : (
            <span>Prenotati all'evento</span>
          )}
        </div>
      </div>
      <div className="mx-10 mb-10 flex flex-col items-center justify-start md:w-[250px] xl:mb-0">
        <div className="rounded-fullp-2 mb-4 flex flex-col items-center justify-center">
          <Player
            ref={playerGps}
            onEvent={(event) => handleEvents(event, Icons.GPS, playerQrcode)}
            autoplay={false}
            loop={false}
            controls={false}
            src="/animations/goto_gps.json"
            keepLastFrame={true}
            style={{ height: "200px", width: "200px" }}
          ></Player>
        </div>
        <div>Vieni al locale</div>
      </div>
      <div className="mx-10 mb-10 flex flex-col items-center justify-start md:w-[250px] xl:mb-0">
        <div className="rounded-fullp-2 mb-4 flex flex-col items-center justify-center">
          <Player
            ref={playerQrcode}
            onEvent={(event) => handleEvents(event, Icons.QRCODE, playerBeer)}
            autoplay={false}
            loop={false}
            controls={false}
            src="/animations/qrcode.json"
            keepLastFrame={true}
            speed={1.3}
            style={{ height: "200px", width: "200px" }}
          ></Player>
        </div>
        <div>Registra la tua presenza</div>
      </div>
      <div className="mx-10 mb-10 flex flex-col items-center justify-start md:w-[250px] xl:mb-0">
        <div className="rounded-fullp-2 mb-4 flex flex-col items-center justify-center">
          <Player
            ref={playerBeer}
            lottieRef={(instance: AnimationItem) => setInstance(instance)}
            onEvent={(event) => {
              handleEvents(event, Icons.BEER, playerTicket);
            }}
            autoplay={false}
            loop={false}
            controls={false}
            src="/animations/beer2.json"
            keepLastFrame={true}
            speed={1.3}
            style={{ height: "200px", width: "200px" }}
          ></Player>
        </div>
        <div>Assisti all'evento e gusta la tua birra</div>
      </div>
    </div>
  );
};

export default AnimatedInfoIcons;
