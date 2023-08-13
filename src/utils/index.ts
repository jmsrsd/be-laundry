export function delay(ms: number) {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
}
