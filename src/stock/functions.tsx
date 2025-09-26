import type {
  Presentation,
  Slide,
  TextField,
  Color,
  Picture,
  ImageField,
  Object,
} from "./types";

export function createPresentation(name: string): Presentation {
  return { name, slides: [] };
}

export function changeName(p: Presentation, name: string): Presentation {
  return {
    ...p,
    name,
  };
}

export function addSlide(
  p: Presentation,
  background: Color | Picture,
): Presentation {
  const slide: Slide = {
    id: crypto.randomUUID(),
    background,
    slideObjects: [],
  };
  return { ...p, slides: [...p.slides, slide] };
}

export function removeSlide(p: Presentation, id: string): Presentation {
  return { ...p, slides: p.slides.filter((s) => s.id !== id) };
}

export function changeSlidePosition(
  p: Presentation,
  sId1: string,
  sId2: string,
): Presentation {
  const slides = p.slides;
  const s1 = slides.find((s) => s.id == sId1);
  const s2 = slides.find((s) => s.id == sId2);

  if (s1 && s2) {
    const i1 = slides.indexOf(s1);
    const i2 = slides.indexOf(s2);
    slides[i1] = s2;
    slides[i2] = s1;
    return {
      ...p,
      slides,
    };
  }

  return p;
}

export function addText(
  p: Presentation,
  sId: string,
  x: number,
  y: number,
  w: number,
  h: number,
  text: string,
  font: string,
  size: number,
): Presentation {
  const obj: Object = { x, y, w, h, id: crypto.randomUUID() };
  const t: TextField = { ...obj, text, font, size, type: "text" };
  const slides = p.slides;
  let slide = p.slides.find((s) => s.id == sId);
  if (slide) {
    const i = slides.indexOf(slide);
    slide = { ...slide, slideObjects: [...slide.slideObjects, t] };
    slides[i] = slide;
    return {
      ...p,
      slides,
    };
  }
  return p;
}

export function deleteObj(
  p: Presentation,
  sId: string,
  objId: string,
): Presentation {
  const slides = p.slides;
  const slide = p.slides.find((s) => s.id == sId);
  if (slide) {
    const i = slides.indexOf(slide);
    slide.slideObjects = slide.slideObjects.filter((o) => o.id != objId);
    slides[i] = slide;
    return {
      ...p,
      slides,
    };
  }
  return p;
}

export function addImage(
  p: Presentation,
  sId: string,
  x: number,
  y: number,
  w: number,
  h: number,
  src: string,
): Presentation {
  const obj: Object = { x, y, w, h, id: crypto.randomUUID() };
  const image: ImageField = { ...obj, type: "image", src };
  const slides = p.slides;
  let slide = p.slides.find((s) => s.id == sId);
  if (slide) {
    const i = slides.indexOf(slide);
    slide = { ...slide, slideObjects: [...slide.slideObjects, image] };
    slides[i] = slide;
    return {
      ...p,
      slides,
    };
  }
  return p;
}

export function changeObjPositon(
  p: Presentation,
  sId: string,
  oId: string,
  x: number,
  y: number,
  w: number,
  h: number,
): Presentation {
  const slides = p.slides;
  const slide = slides.find((s) => (s.id = sId));
  let o = slide?.slideObjects.find((o) => o.id == oId);

  if (slide && o) {
    o = { ...o, x, y, w, h };
    return { ...p, slides };
  }
  return p;
}

export function editText(
  p: Presentation,
  sId: string,
  tId: string,
  text: string,
): Presentation {
  const slides = p.slides;
  const slide = slides.find((s) => (s.id = sId));
  let t = slide?.slideObjects.find((t) => t.id == tId);

  if (slide && t && t.type == "text") {
    t = { ...t, text };
    return { ...p, slides };
  }
  return p;
}

export function changeTextSize(
  p: Presentation,
  sId: string,
  tId: string,
  size: number,
): Presentation {
  const slides = p.slides;
  const slide = slides.find((s) => (s.id = sId));
  let t = slide?.slideObjects.find((t) => t.id == tId);

  if (slide && t && t.type == "text") {
    t = { ...t, size };
    return { ...p, slides };
  }
  return p;
}

export function changeFont(
  p: Presentation,
  sId: string,
  tId: string,
  font: string,
): Presentation {
  const slides = p.slides;
  const slide = slides.find((s) => (s.id = sId));
  let t = slide?.slideObjects.find((t) => t.id == tId);

  if (slide && t && t.type == "text") {
    t = { ...t, font };
    return { ...p, slides };
  }
  return p;
}

export function changeBackground(
  p: Presentation,
  sId: string,
  src: string,
  type: "color" | "picture",
): Presentation {
  const slides = p.slides;
  const slide = slides.find((s) => (s.id = sId));
  if (slide) {
    slide.background = { src, type };
    return {
      ...p,
      slides,
    };
  }
  return p;
}
