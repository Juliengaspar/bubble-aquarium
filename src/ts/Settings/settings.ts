import {Hsl} from "./hsl";

const color1 = new Hsl(201, 20, 23);
const color2 = new Hsl(186, 21, 26);
const color3 = new Hsl(165, 19, 40);
const color4 = new Hsl(133, 18, 59);
const color5 = new Hsl(97, 13, 80);


export const settings = {
    canvasHeightRatio: 0.6,
    canvasWidthRatio: 0.8,
    circleRadius: {min: 2, max: 30, default: 15},
    pointer: {color: "red", alpha: 1, radius: 30},
    gradientColor: [color3, color4],
    colors: [color1, color2, color3, color4, color5],
    defaultColor: "pink"
}