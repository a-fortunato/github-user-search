export const getTitleCase = (s:string) => s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
  .replace(/[-_]+(.)/g, (_, c) => ` ${c.toUpperCase()}`) // First char after each -/_

// eslint-disable-next-line no-nested-ternary
export const sortAsc = (a: string, b: string) => (a > b ? 1 : b > a ? -1 : 0)
