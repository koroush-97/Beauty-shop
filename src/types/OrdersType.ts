export type MegaMenuContents = Record<string, string[]>;

export type MegaMenuCategory = {
  header: string[];
  contents: MegaMenuContents;
};

export type OrderKey =
  | "clothesTypes"
  | "brands"
  | "electrovicels"
  | "Personalhygiene"
  | "perfume"
  | "skincare"
  | "haircare";

export type Orders = Record<OrderKey, MegaMenuCategory>;
