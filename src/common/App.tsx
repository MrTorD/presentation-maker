import "./App.css";
import SlideList from "../views/SlideList";
import ToolBar from "../views/ToolBar";
import WorkingZone from "../views/WorkingZone";
import styles from "./App.module.css";
import type { Presentation, Slide } from "../stock/types";

type PresentationProps = {
  presentation: Presentation;
  mainSlideProps: {
    slide: Slide | undefined;
    width: number;
    height: number;
  };
};

function App(props: PresentationProps) {
  const p = props.presentation;
  const mainSlideProps = props.mainSlideProps;

  return (
    <>
      <ToolBar presentation={p} />
      <div className={styles["working-space"]}>
        <SlideList slides={p.slides} />
        <WorkingZone
          slide={mainSlideProps.slide}
          width={mainSlideProps.width}
          height={mainSlideProps.height}
        />
      </div>
    </>
  );
}

export default App;
