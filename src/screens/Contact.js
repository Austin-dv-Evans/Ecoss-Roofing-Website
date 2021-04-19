
import axios from 'axios'
import React, { useState } from 'react'



const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [info, setInfo] = useState('')
  const [date, setDate] = useState('')
  const [antiSpam, setAntiSpam] = useState('')
  const [alertDialog, setAlertDialog] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    if(antiSpam !== ''){
      alert('We dont accept forms from robots')
    }
    else{
      axios.post(
        "https://sheet.best/api/sheets/d53e427d-a0aa-436d-8974-ee6674eb8013",
        { name, email, address, phone, info, date }
      )
      setAlertDialog(true)
    }
    
    
    setEmail('')
    setAddress('')
    setPhone('')
    setInfo('')
    setDate('')
    setAntiSpam('')
  }

  const closeNameReset = () => {
    setName('')
    setAlertDialog(false)
  }

  return (
    <div className="book__section">
      {alertDialog && 
        <div className="book__alert">
          <h1 className="book__alert--heading">Thank you {name}, Ecoss will be in contact with you as soon as possible. Have a great day. </h1>
          <button className="book__alert--close" onClick={() => closeNameReset()}>Close</button>
        </div>
      }
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
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
              className="form__input"
              required
              name="date"
            />
          </div>
          <div className="form__group anti-spam">
            <input
              type="spam"
              value={antiSpam}
              onChange={(e) => setAntiSpam(e.target.value)}
              id="spam"
              className="form__input"
              name="spam"
            />
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
