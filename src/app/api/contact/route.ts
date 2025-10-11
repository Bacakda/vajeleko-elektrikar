import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validace
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'Všechna povinná pole musí být vyplněna' },
        { status: 400 }
      )
    }

    // TODO: Zde implementujte odesílání emailu
    // Například pomocí Nodemailer, SendGrid, nebo jiné emailové služby
    
    console.log('Přijatý formulář:', {
      name,
      email,
      phone,
      service,
      message,
    })

    // Simulace úspěšného odeslání
    // V produkci zde bude skutečné odesílání emailu
    
    return NextResponse.json({
      success: true,
      message: 'Děkujeme za Vaši zprávu! Ozveme se Vám co nejdříve.',
    })
  } catch (error) {
    console.error('Chyba API:', error)
    return NextResponse.json(
      { success: false, message: 'Něco se pokazilo. Zkuste to prosím znovu.' },
      { status: 500 }
    )
  }
}

