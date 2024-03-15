import { PageInfomation } from "../components/PageInfomation";

export interface HomePage {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    pageinfo: PageInfomation;
    body: any;
  };
}
