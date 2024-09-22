export async function getLocaleMessages(locale: string) {
  const response = await fetch(`http://localhost:3000/api/i18n/${locale}`);
  const data = await response.json();
  return data
}