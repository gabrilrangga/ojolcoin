import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { language } = body

    if (!language || !['en', 'id', 'cn'].includes(language)) {
      return NextResponse.json(
        { error: 'Invalid language. Supported languages: en, id, cn' },
        { status: 400 }
      )
    }

    const response = NextResponse.json({ success: true, language })
    
    // Set cookie for language preference
    response.cookies.set('preferred-language', language, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365, // 1 year
    })

    return response
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}

export async function GET(request: NextRequest) {
  const language = request.cookies.get('preferred-language')?.value || 'id'
  
  return NextResponse.json({ language })
}
