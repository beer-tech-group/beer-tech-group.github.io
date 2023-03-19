import { Dialog } from "@headlessui/react";
import { FC, MouseEvent, ReactNode, useState } from "react";

type AppModalProps = {
  buttonTrigger?: ReactNode;
  children: ReactNode;
};

const AppModal: FC<AppModalProps> = ({
  buttonTrigger,
  children,
}): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen} className="inline-block">
        {buttonTrigger}
      </div>
      <Dialog open={open} onClose={() => handleClose} className="app-modal">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 z-[999] bg-black/30" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div
          className="fixed inset-0 z-[999] overflow-y-auto"
          onClick={handleClose}
        >
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto min-w-full max-w-sm rounded bg-white py-5 px-10 md:min-w-[50vw]">
              <Dialog.Title className="flex flex-row items-center justify-end">
                <button onClick={handleClose}>
                  <span className="material-symbols-outlined ">close</span>
                </button>
              </Dialog.Title>
              {children}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AppModal;
