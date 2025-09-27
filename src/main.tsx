const FirstSlideIndex = 0;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./common/App.tsx";
import {
  createPresentation,
  addSlide,
  addText,
  addImage,
} from "./stock/functions.tsx";

let p = createPresentation("Стартовое название");
p = addSlide(p, {
  src: "https://static.tildacdn.com/tild6137-3037-4837-b437-616464646636/10-min.jpg",
  type: "picture",
});
p = addSlide(p, { src: "#708d58ff", type: "color" });

const sId1 = p.slides[0]?.id;
const sId2 = p.slides[1]?.id;

p = addText(p, sId1, 500, 500, 150, 200, "Проверка", "Times New Roman", 20);
p = addText(p, sId1, 100, 200, 600, 300, "Тест", "Arial", 120);
p = addText(p, sId2, 500, 50, 400, 200, "Hello World!", "Calibri", 60);
p = addText(p, sId2, 400, 600, 200, 100, "Hello!", "Times New Roman", 30);

p = addImage(
  p,
  sId1,
  300,
  50,
  200,
  150,
  "https://www.wondercide.com/cdn/shop/articles/Upside_down_gray_cat.png?v=1685551065",
);
p = addImage(
  p,
  sId1,
  600,
  150,
  400,
  250,
  "https://www.purina.in/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg",
);
p = addImage(
  p,
  sId2,
  200,
  100,
  200,
  150,
  "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750",
);
p = addImage(
  p,
  sId2,
  700,
  400,
  240,
  200,
  "https://ontariospca.ca/wp-content/uploads/2018/08/Adopting-shelter-cat.jpg",
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App
      presentation={p}
      mainSlideProps={{
        slide: p.slides[FirstSlideIndex],
        width: 1100,
        height: 750,
      }}
    />
  </StrictMode>,
);
