import { FC, useMemo, useState } from "react";
import PhotoAlbum, { Photo } from "react-photo-album";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type GalleryProps = {
  photos: Photo[];
};

const Gallery: FC<GalleryProps> = ({ photos }): JSX.Element => {
  const [index, setIndex] = useState(-1);

  const slides = useMemo((): SlideImage[] => {
    return photos.map(
      ({ src, width, height }): SlideImage => ({
        src,
        width,
        height,
      })
    );
  }, [photos]);

  return (
    <>
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        spacing={2}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        controller={{
          closeOnBackdropClick: true,
        }}
        carousel={{
          finite: true,
          preload: 1,
        }}
      />
    </>
  );
};

export default Gallery;
