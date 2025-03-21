export function textOverflow(description: string): string {
  if (description.length > 60) {
    return description.slice(0, 38) + ` ${description.slice(38, 75)}…`;
  }
  return description;
}
