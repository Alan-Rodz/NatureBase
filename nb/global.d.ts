// ********************************************************************************
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

interface Plant {
  type: string;
  common_name: string;
  latin_name: string;
  exposure: string;
  moisture: string;
  height: number;
  availability: string;
  ease_of_growth: string;
  id: number;
  imgName: string;
}

interface PlantInfo {
  plant: Plant;
  plantImgURL: string;
}
