export function generatePath(
  route: string,
  params: Record<string, string | number>
) {
  let path = route;
  Object.keys(params).forEach((key) => {
    path = path.replace(`:${key}`, String(params[key]));
  });
  return path;
}
