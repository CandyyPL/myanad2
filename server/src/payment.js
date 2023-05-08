import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_KEY)

const services = new Map()
services.set(1, {
  priceInCents: 9999,
  name: 'One-Time Bussines Interview Call',
})

export const handlePayment = async (req, res) => {
  const date = new Date(req.body.callDate)
  let fullDate

  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let hour = date.getHours()
  let minutes = date.getMinutes()

  if (day < 10) day = '0' + day
  if (month < 10) month = '0' + month
  if (hour < 10) hour = '0' + hour
  if (minutes < 10) minutes = '0' + minutes

  fullDate = `${year}.${month}.${day}, ${hour}:${minutes}`

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map((item) => {
        const service = services.get(item.id)
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: service.name,
              description: `Call date: ${fullDate}`,
            },
            unit_amount: service.priceInCents,
          },
          quantity: 1,
        }
      }),
      success_url: `${process.env.SERVER_URL}/success`,
      cancel_url: `${process.env.SERVER_URL}/cancel`,
    })

    res.json({ stripeUrl: session.url })
  } catch (e) {
    console.log(e)
  }
}
