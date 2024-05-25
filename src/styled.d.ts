import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textBgColor: string;
    imgBgColor: string;
    moreTablet: string;
    tablet: string;
    mobile: string;
  }
}
