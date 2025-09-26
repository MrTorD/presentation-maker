import type { Slide } from "../stock/types.tsx";
import styles from "./SlideList.module.css";

type SlideListProps = {
  slides: Slide[];
};

function SlideList(props: SlideListProps) {
  const slides: Array<Slide> = props.slides;
  const slideList = slides.map((slide) => (
    <div className={styles.slide} key={slide.id}>
      <button
        onClick={() => {
          const bckgMessage =
            slide.background.type === "color"
              ? `Цвет фона: ${slide.background.src}`
              : "Фон - это картинка";
          console.log(
            `Номер слайда: ${slides.indexOf(slide) + 1}, id слайда: ${slide.id}, ${bckgMessage}`,
          );
        }}
      >
        {slide.background.type === "picture" && (
          <img
            className={styles["background-min-img"]}
            src={slide.background.src}
          ></img>
        )}
        {slide.background.type === "color" && (
          <div
            className={styles["background-min-color"]}
            style={{ backgroundColor: slide.background.src }}
          ></div>
        )}
      </button>
      {slides.indexOf(slide) + 1 + " слайд"}
    </div>
  ));

  return <div className={styles["slide-list"]}>{slideList}</div>;
}

export default SlideList;
