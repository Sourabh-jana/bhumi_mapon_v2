export default function updateData(
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
    case "satak / decimal":
      sourceInSqft = sourceValue * 435.6;
      break;
    case "squarefoot":
      sourceInSqft = sourceValue;
      break;
  }

  let result = 0;

  switch (targetUnit) {
    case "acre":
      result = parseFloat((sourceInSqft / 43560).toFixed(5));
      break;
    case "bigha":
      result = parseFloat((sourceInSqft / 14400).toFixed(5));
      break;
    case "katha":
      result = parseFloat((sourceInSqft / 720).toFixed(5));
      break;
    case "satak / decimal":
      result = parseFloat((sourceInSqft / 435.6).toFixed(5));
      break;
    case "squarefoot":
      result = parseFloat(sourceInSqft.toFixed(5));
      break;
  }

  return result;
}
