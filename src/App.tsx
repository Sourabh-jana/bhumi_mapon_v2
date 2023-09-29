"use client";
import "./App.css";
import { Select, Option, Typography, Input } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export default function App() {
  const [fromData, setFromData] = useState(0);
  const [toData, setToData] = useState(0);

  const [fromUnit, setFromUnit] = useState("acre");
  const [toUnit, setToUnit] = useState("squarefoot");

  useEffect(() => {
    console.log(fromData, fromUnit, toData, toUnit);
    const toValue = updateData(fromUnit, fromData, toUnit);
    console.log(toValue);
    setToData(toValue);
  }, [fromUnit, fromData, toUnit]);

  return (
    <div className="flex flex-col px-6 py-10 bg-white items-center rounded-2xl shadow-lg">
      <Typography
        variant="h1"
        color="blue"
        textGradient
        className="mb-3 p-3 font-sans font-semibold text-center"
      >
        ভূমি মাপন
      </Typography>
      <div className="flex flex-col">
        <div className="flex flex-col mt-4 gap-3">
          <Select
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
            value={fromData}
            onChange={(e) => setFromData(Number(e.target.value))}
            className="text-lg"
          />
        </div>

        <hr className="my-8 border-blue-1 00 border-dashed" />
        
        <div className="flex flex-col gap-3">
          <Select
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
          <Input
            type="number"
            label="লক্ষ্য মান"
            size="lg"
            color="blue"
            crossOrigin={undefined}
            value={toData}
            onChange={(e) => setToData(Number(e.target.value))}
            className="text-lg"
          />
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
      result = parseFloat((sourceInSqft / 14400).toFixed(3));
      break;
    case "katha":
      result = parseFloat((sourceInSqft / 720).toFixed(3));
      break;
    case "squarefoot":
      result = parseFloat(sourceInSqft.toFixed(3));
      break;
  }

  return result;
}
