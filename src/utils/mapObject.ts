export function mapObject(
  obj: { [key: string]: unknown },
  callback: (value: unknown) => unknown
) {
  return Object.values(obj).map((value) => callback(value));
}
