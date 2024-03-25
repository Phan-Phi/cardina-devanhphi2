import { PageInfomation } from "../components/PageInfomation";

export interface AboutPage {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    seo: PageInfomation;
    body: any;
    certificationSection: {
      id: number;
      title: string;
      subTitle: string;
    };
  };
}
