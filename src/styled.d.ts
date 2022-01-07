import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      bgColor: string;
      boardColor: string;
      cardColor: string;
      textColor: string;
    };
  }
}
