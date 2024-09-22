export async function GET() {
  return Response.json({
    common: { title: "Tiếng Việt", description: 'Đây là nội dung tiếng Việt' }
  })
}
