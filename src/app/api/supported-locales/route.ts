export async function GET() {
  return Response.json({ locales: ["en", "vi"], defaultLocale: 'en' })
}
