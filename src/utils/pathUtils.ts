export const buildItemSlug = (name: string) => {
  return name.replaceAll(' ', '_').replaceAll('/', '___').toLowerCase();
};
