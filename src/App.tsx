import { Select, Option, Typography, Input } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function App() {
  const [fromData, setFromData] = useState(0);
  const [toData, setToData] = useState(0);

  const [fromUnit, setFromUnit] = useState("acre");
  const [toUnit, setToUnit] = useState("squarefoot");

  useEffect(() => {
    // console.log(fromData, fromUnit, toData, toUnit);
    const toValue = updateData(fromUnit, fromData, toUnit);
    // console.log(toValue);
    setToData(toValue);
  }, [fromUnit, fromData, toUnit]);

  return (
    <div className="flex flex-col m-3 px-6 py-8 bg-white items-center rounded-2xl shadow-lg">
      <Typography
        variant="h1"
        color="blue"
        textGradient
        className="mb-8 pt-1 font-sans font-semibold text-center"
      >
        ভূমি মাপন
      </Typography>
      <div className="flex flex-col gap-3 items-center">
        <Select
          title="Source Area Unit"
          label={fromUnit.toUpperCase()}
          value={fromUnit}
          color="blue"
          size="lg"
          onChange={(value) => setFromUnit(value ? value : fromUnit)}
          className="text-lg"
        >
          <Option value="acre">একর</Option>
          <Option value="bigha">বিঘা</Option>
          <Option value="katha">কাঠা</Option>
        </Select>
        <Input
          label="উৎস মান"
          size="lg"
          type="number"
          color="blue"
          crossOrigin={undefined}
          title="Source Area Value"
          onChange={(e) => setFromData(Number(e.target.value))}
          className="text-xl"
        />
        <div className="w-full flex justify-center my-0 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 22 22"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </div>
        <Select
          title="Target Area Unit"
          label={toUnit.toUpperCase()}
          value={toUnit}
          size="lg"
          color="blue"
          onChange={(value) => setToUnit(value ? value : toUnit)}
          className="text-lg"
        >
          <Option value="bigha">বিঘা</Option>
          <Option value="katha">কাঠা</Option>
          <Option value="squarefoot">বর্গ ফুট</Option>
        </Select>

        <div
          className="text-center mt-4 border rounded-lg w-fit px-2 py-1"
          title="Answer"
        >
          <span className="text-3xl">{toData.toString().split(".")[0]}</span>
          <span className="text-gray-500">
            {toData.toString().split(".")[1] && "."}
            {toData.toString().split(".")[1]}
          </span>
        </div>
      </div>
    </div>
  );
}

function updateData(
  sourceUnit: string,
  sourceValue: number,
  targetUnit: string
) {
  let sourceInSqft = 0;

  switch (sourceUnit) {
    case "acre":
      sourceInSqft = sourceValue * 43560;
      break;
    case "bigha":
      sourceInSqft = sourceValue * 14400;
      break;
    case "katha":
      sourceInSqft = sourceValue * 720;
      break;
  }

  let result = 0;

  switch (targetUnit) {
    case "bigha":
      result = parseFloat((sourceInSqft / 14400).toFixed(4));
      break;
    case "katha":
      result = parseFloat((sourceInSqft / 720).toFixed(4));
      break;
    case "squarefoot":
      result = parseFloat(sourceInSqft.toFixed(4));
      break;
  }

  return result;
}
