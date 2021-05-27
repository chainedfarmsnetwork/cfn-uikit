import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#C2E000", // i.e Buttons primary
  primaryBright: "#A5753A", // i.e Buttons hover (bright ?)
  primaryDark: "#C2E000", // i.e Buttons hover (dark ?)
  secondary: "#C2E000", // Hovers
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#69552E",
  textDisabled: "#998c83",
  textSubtle: "#C2E000",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#C2E000",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#27262c",
  input: "#666171",
  // primaryDark: "#0098A1",
  tertiary: "#343135",
  text: "#F9F1E0",
  textDisabled: "#666171",
  textSubtle: "#C2E000",
  borderColor: "#343135",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
