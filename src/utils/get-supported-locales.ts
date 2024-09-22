export async function getSuggestedLocales() {
  const response = await fetch("http://localhost:3000/api/supported-locales");
  const data = await response.json();
  return data as { locales: string[]; defaultLocale: string };
}