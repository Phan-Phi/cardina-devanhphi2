import { PageInfomation } from "../components/PageInfomation";

export interface ContactPage {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    seo: PageInfomation;
  };
}
