export type SectionType = {
  id: string;
  name: string;
  description: string;
  picture: string;
  reviews: [{ likes: number; review: string }];
  url: string;
  appsIds: string[];
};
