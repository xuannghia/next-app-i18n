export async function GET() {
  return Response.json({
    common: { title: "English", description: 'This is English content' }
  })
}
