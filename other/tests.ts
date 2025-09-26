import {
  createPresentation,
  changeName,
  addSlide,
  removeSlide,
  changeSlidePosition,
  addText,
  deleteObj,
  addImage,
  changeObjPositon,
  editText,
  changeTextSize,
  changeFont,
  changeBackground,
} from "./../src/stock/functions.js";

import { Presentation, Selection } from "./../src/stock/types.js";

let minP: Presentation = createPresentation("MinimalPresentation");
minP = changeName(minP, "minPresentation");

let p: Presentation = createPresentation("MaxPresenation");
p = addSlide(p, { src: "#ff0000", type: "color" });
p = addSlide(p, {
  src: "https://static.tildacdn.com/tild6137-3037-4837-b437-616464646636/10-min.jpg",
  type: "picture",
});

console.log(`Minimal Presentation is:`, minP);
console.log(`Maximal Presentation is:`, p);

const sId1 = p.slides[0]?.id;
const sId2 = p.slides[1]?.id;

if (sId1 && sId2) {
  p = addText(
    p,
    sId1,
    500,
    500,
    300,
    300,
    "Testing Text",
    "Times New Roman",
    20,
  );
  p = addText(p, sId1, 100, 200, 300, 400, "Test.", "Arial", 12);
  p = addText(p, sId2, 200, 100, 500, 400, "Hello World!", "Calibri", 15);
  p = addText(p, sId2, 400, 600, 200, 100, "Hello!", "Times New Roman", 30);

  p = addImage(
    p,
    sId1,
    300,
    200,
    60,
    40,
    "https://www.wondercide.com/cdn/shop/articles/Upside_down_gray_cat.png?v=1685551065",
  );
  p = addImage(
    p,
    sId1,
    1500,
    300,
    200,
    150,
    "https://www.purina.in/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg",
  );
  p = addImage(
    p,
    sId2,
    1000,
    1500,
    200,
    150,
    "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750",
  );
  p = addImage(
    p,
    sId2,
    0,
    0,
    400,
    600,
    "https://ontariospca.ca/wp-content/uploads/2018/08/Adopting-shelter-cat.jpg",
  );

  console.log(p);

  let select: Selection = { slidesId: [], objsInfo: [] };

  const objId1 = p.slides[0]?.slideObjects[0]?.id;
  const objId2 = p.slides[1]?.slideObjects[1]?.id;

  select = {
    slidesId: [sId1!],
    objsInfo: [
      { slideId: sId1!, objId: objId1! },
      { slideId: sId2!, objId: objId2! },
    ],
  };

  console.log(`Selection is: `, select);

  select.objsInfo.forEach((objInfo) => {
    const slides = p.slides;
    const slide = slides.find((o) => o.id == objInfo.slideId);
    const obj = slide?.slideObjects.find((o) => o.id == objInfo.objId);
    if (obj) {
      switch (obj.type) {
        case "text":
          p = editText(p, objInfo.slideId, objInfo.objId, "New edited text");
          p = changeObjPositon(
            p,
            objInfo.slideId,
            objInfo.objId,
            200,
            300,
            400,
            500,
          );
          p = changeFont(p, objInfo.slideId, objInfo.objId, "Consolas");
          p = changeTextSize(p, objInfo.slideId, objInfo.objId, 8);
          break;
        case "image":
          p = changeObjPositon(
            p,
            objInfo.slideId,
            objInfo.objId,
            200,
            300,
            50,
            0,
          );
          p = deleteObj(p, objInfo.slideId, objInfo.objId);
          break;
      }
    }
  });

  console.log(p.slides);

  select.slidesId.forEach((sId) => {
    p = changeBackground(p, sId, "#405060", "color");
  });
  console.log("Slides before changing position: ", p.slides);

  p = changeSlidePosition(p, sId1!, sId2!);

  console.log("Slides before after position: ", p.slides);

  console.log("Slides before removing: ", p.slides);

  p = removeSlide(p, p.slides[0]!.id);

  console.log("Slides: ", p.slides);
}
