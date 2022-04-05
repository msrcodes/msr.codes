export const cn = (...classNames: string[]): string =>
  classNames.filter(Boolean).join(' ');
