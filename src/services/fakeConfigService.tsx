export enum supportedConfigs {
  "color" = "color",
  "power" = "power",
  "warp drive" = "warp drive",
  "option package" = "option package"
}

export const basePrice = 1000;

const configs = [
  {
    id: 1,
    name: "color",
    title: "Select color",
    values: ["Snow", "Volcano", "Sky"],
    price: [0, 100, 100]
  },
  {
    id: 2,
    name: "power",
    title: "Select power",
    values: ["100MW", "150MW", "200MW"],
    price: [0, 200, 500]
  },
  {
    id: 3,
    name: "warp drive",
    title: "Warp drive",
    values: ["NO", "YES"],
    price: [0, 1000]
  },
  {
    id: 4,
    name: "option package",
    title: "Select option package",
    values: ["Basic", "Support", "Lux"],
    price: [0, 100, 500],
    packageDetails: [
      ["Air conditioning", "Cloth Seats", "FM radio"],
      ["Air conditioning", "Cloth Seats", "FM radio", "Personal tech support"],
      ["Air conditioning", "Cloth Seats", "FM radio", "Chrome wheels", "Window tint", "Subwoofer"]
    ]
  }
];

export type configsType = typeof configs;

export type configType = typeof configs[number];

export const getConfigs = () => configs;
