interface IUnit {
  label: string;
  title: string;
}

// converted all units to square foot values
const units: IUnit[] = [
  { label: "acre", title: "একর" },
  { label: "bigha", title: "বিঘা" },
  { label: "katha", title: "কাঠা" },
  { label: "satak / decimal", title: "সাতক / দশমিক" },
  { label: "squarefoot", title: "বর্গ ফুট" },
];

export default units;
