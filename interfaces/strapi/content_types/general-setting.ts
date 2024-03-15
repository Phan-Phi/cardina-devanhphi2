import { PageInfomation } from "../components/PageInfomation";

export interface GeneralSettingPage {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    certificationImages: any;
    favicon: any;
    logo: any;
    seoDescription: string;
    seoImage: any;
    seoTitle: string;
    socialImages: any;
  };
}
