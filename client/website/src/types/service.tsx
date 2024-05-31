export type ServiceType = {
  id: string;
  name: string;
  description: string;
  picture: string;
  inputType: string;
  outputType: string;
  url: string;
  features: string[];
  reviews?: ReviewType[];
  sectionId?: string;
  sectionName?: string;
  pack?: string;
};

export interface ReviewType {
  stars: number;
  review: string;
  user: string;
  userId: string
}