
import axios from 'axios'
import React, { useState } from 'react'



const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [info, setInfo] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you! ${name} Ecoss Roofing and Construction will contact you within 2-3 business days. Have a great day!`)
    console.log(name, email, address, phone, info)
    axios.post(
      "https://sheet.best/api/sheets/dfdd7ded-73bb-46c8-a75c-5ece3282bc17",
      { name, email, address, phone, info }
    )
    setName('')
    setEmail('')
    setAddress('')
    setPhone('')
    setInfo('')
  }

  return (
    <div className="book__section">
      <div className="book__form">
        <form action="#" className="form" onSubmit={handleSubmit}>
          <div>
            <h1 className="book__form--heading">
              Schedule a Free Inspection Today
            </h1>
          </div>
          <div className="form__group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              id="name"
              className="form__input"
              required
              name="name"
            />
          </div>
          <div className="form__group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
              className="form__input"
              required
              name="email"
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              id="address"
              className="form__input"
              required
              name="address"
            />
          </div>
          <div className="form__group">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number ex. 303-333-3333"
              id="phone"
              className="form__input"
              required
              name="phone"
            />
          </div>
          <div className="form__group">
            <textarea
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              cols="30"
              rows="10"
              placeholder="Any Additional Information You Would Like Us to Know (optional)"
              id="message"
              className="form__input"
              name="message"
            ></textarea>
          </div>
          <div className="form__group">
            <input
              type="submit"
              value="Submit &rarr;"
              className="form__submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
