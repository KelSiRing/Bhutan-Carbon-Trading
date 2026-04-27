export const BRAND = {
  name: "Bhutan Carbon Exchange",
  shortName: "BCX",
  colors: {
    primary: "#10b981", // Emerald
    secondary: "#f59e0b", // Saffron
    accent: "#0ea5e9", // Sky Blue
    white: "#ffffff",
    surface: "#f8fafc",
  },
};

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Financing", href: "/financing" },
  { name: "Community", href: "/community" },
  { name: "Dashboard", href: "/dashboard", private: true },
];

export const SENSOR_LIMITS = {
  MQ2_MAX: 1000,
  MQ3_MAX: 1000,
};

export const CARBON_CREDIT_RATE = 0.05; // CC per kg of CO2 reduced
