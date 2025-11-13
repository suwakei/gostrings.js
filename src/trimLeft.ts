export function trimLeft(s: string, cutset: string): string {
  const pattern = new RegExp(`^[${cutset}]+`, "g");
  return s.replace(pattern, "");
}
