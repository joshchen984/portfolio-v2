const breakpoints = [1200, 992, 600];
export const mq = breakpoints.map(
  (bp) => `@media only screen and (max-width: ${bp}px)`
);
