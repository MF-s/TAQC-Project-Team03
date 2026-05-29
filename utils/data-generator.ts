export function generateNewsTitle(): string {
  return `Test news ${Date.now()}`;
}

export function generateNewsContent(): string {
  return `Test content ${Date.now()} generated automatically for Playwright testing`;
}