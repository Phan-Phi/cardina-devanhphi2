import { PageInfomation } from "../components/PageInfomation";

export interface RelationSection {
  id: number;
  description: string;
  title: string;
}

export interface ListingProductPage {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    pageinfo: PageInfomation;
    subTitle: string;
  };
}

export interface ProductItemsPage {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    pageinfo: PageInfomation;
    subTitle: string;
    images: any;
    price: number;
    relationSection: RelationSection;
  };
}
