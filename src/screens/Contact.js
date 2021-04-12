import React from 'react'

const Contact = () => {
  return (
    <div className="book__section">
      <div className="book__form">
        <form action="#" className="form">
          <div >
            <h1 className="book__form--heading">
              Schedule a Free Inspection Today
            </h1>
          </div>
          <div className="form__group">
            <input
              type="text"
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
              placeholder="Phone Number ex. 303-333-3333"
              id="phoneNumber"
              className="form__input"
              required
              name="phoneNumber"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>
          <div className="form__group">
            <textarea
              cols="30"
              rows="10"
              placeholder="Any Additional Information You Would Like Us to Know (optional)"
              id="message"
              className="form__input"
              name="message"
            ></textarea>
          </div>
          <div className="form__group">
            <button className="form__submit">Submit &rarr;</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
