import { Colors } from "../../styles/colors";
import { Fonts } from "../../styles/fonts";

export const regular = {
  fontSize: 10,
  color: Colors.White,
};

export const bold = {
  ...regular,
  font: Fonts.InterBold,
};
export const TextClient = {
  text: 'Cliente',
  regular,
  absolutePosition: {
    x: 28,
    y: 112,
  },
};

export const costumersName = (name: string) => ({
  text: name,
  style: regular,
  absolutePosition: { x: 98, y: 112 },
});
export interface TextProps {
  text: string;
}
