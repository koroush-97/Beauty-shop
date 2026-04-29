// type Orders = {
//   clothesTypes: {
//     header: string[];
//     contents: {
//       titleclothetypes: string[];
//       scarftype: string[];
//       shomiztype: string[];
//       sportstype: string[];
//       bagtype: string[];
//       pantstype: string[];
//       shoetype: string[];
//     };
//   };
//   brands: { header: string[] };
//   electrovicels: { header: string[] };
//   Personalhygiene: { header: string[] };
//   perfume: {
//     header: string[];
//     mancontent: string[];
//     womencontent: string[];
//   };
//   skincare: { header: string[] };
//   haircare: { header: string[] };
// };

// export type { Orders };
// types/OrdersType.ts

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
