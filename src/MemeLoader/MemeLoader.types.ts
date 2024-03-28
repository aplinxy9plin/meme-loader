import { CSSProperties, ReactNode } from "react";

export type MemesNameType = "racoon" | "chipi";

export type MemeLoaderProps = {
  meme: MemesNameType;
  title?: ReactNode;
  description?: ReactNode;
  muted?: boolean;

  // classNames
  containerClassName?: string;
  memeLoaderClassName?: string;
  videoClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;

  // styles
  containerStyle?: CSSProperties;
  memeLoaderStyle?: CSSProperties;
  videoStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
};
