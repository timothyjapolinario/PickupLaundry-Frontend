export type LaundryOrder = {
  id: number;
  owner: User;
  serviceType: ServiceType;
  location: OrderLocation;
};
export type OrderLocation = {
  lat: number;
  lan: number;
};
export type NewLaundryOrder = {
  serviceType?: ServiceType;
  orderLocation?: OrderLocation;
};

export enum ServiceType {
  DryCleaning = "dry_cleaning",
  WetCleaning = "wet_cleaning",
  Laundry = "laundry",
  ShoeCleaning = "shoe_cleaning",
  IronClothes = "iron_clothes",
}
