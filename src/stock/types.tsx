export type Presentation = {
  name: string;
  slides: Slide[];
};

export type Slide = {
  id: string;
  slideObjects: SlideObject[];
  background: Picture | Color;
};

export type Selection = {
  slidesId: string[];
  objsInfo: {
    objId: string;
    slideId: string;
  }[];
};

export type Color = {
  type: "color";
  src: string;
};

export type Picture = {
  type: "picture";
  src: string;
};

export type ImageField = Object & {
  type: "image";
  src: string;
};

export type TextField = Object & {
  text: string;
  font: string;
  size: number;
  type: "text";
};

export type SlideObject = TextField | ImageField;

export type Object = {
  x: number;
  y: number;
  w: number;
  h: number;
  id: string;
};
