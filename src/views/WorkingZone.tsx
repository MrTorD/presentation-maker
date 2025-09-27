import type { Slide } from "../stock/types.js";
import styles from "./WorkingZone.module.css";

type WorkingZoneProps = { //Rename to area.
  slide: Slide | undefined;
  width: number;
  height: number;
};

function WorkingZone(props: WorkingZoneProps) {
  const slide = props.slide;
  const width = props.width;
  const height = props.height;

  const slideObjects = slide?.slideObjects.map((o) => (
    <div key={o.id}>
      {o.type === "text" && (
        <button
          className={styles["text-field"]}
          style={{
            top: o.y + "px",
            left: o.x + "px",
            font: o.font,
            fontSize: o.size,
            width: o.w,
            height: o.h,
          }}
          onClick={() => console.log(`Вы нажали на текст с id: ${o.id}`)}
        >
          {o.text}
        </button>
      )}

      {o.type === "image" && (
        <img
          className={styles["image-field"]}
          style={{ top: o.y + "px", left: o.x + "px", width: o.w, height: o.h }}
          src={o.src}
          onClick={() => console.log(`Вы нажали на картинку с id: ${o.id}`)}
        ></img>
      )}
    </div>
  ));

  return (
    <div className={styles["main-slide"]}>
      {slideObjects}
      {slide?.background.type === "picture" && (
        <img src={slide.background.src} width={width} height={height}></img>
      )}
      {slide?.background.type === "color" && (
        <div
          style={{ backgroundColor: slide.background.src, width, height }}
        ></div>
      )}
    </div>
  );
}

export default WorkingZone;
