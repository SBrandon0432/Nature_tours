import React, { useState } from "react";


const ContactForm = () => {
   // eslint-disable-next-line
  const [name, setName] = useState('Full Name');
  const [email, setEmail] = useState('Email Address')
  const [largeGroup, setLargeGroup] = useState(false)
  const [smallGroup, setSmallGroup] = useState(false)
   // eslint-disable-next-line
  const [form, setForm] = useState([
    {
      name: name,
      email: email,
      groupSize: null
    }
  ])

  return (
      <section className="section-booking">
      <div className="row">
          <div className="book">
              <div className="book__form">
                  <form className="form" action="/#">

                      <div className="u-margin-bottom-medium">
                          <h2 className="heading-secondary">
                              Start Booking Now
                          </h2>
                      </div>

                      <div className="form__group">
                          <input
                            type="text"
                            className="form__input"
                            value={name}
                            required id="name"
                            onFocus={(e) => {
                              setName('')
                            }}
                            onChange={( (e)=> {
                              setName(e.target.value)
                            })}
                            />
                          <label className="form__label" htmlFor="name"> Full Name  </label>
                      </div>

                      <div className="form__group">
                          <input
                            type="email"
                            className="form__input"
                            value={email}
                            required id="email"
                            onFocus={()=>{
                              setEmail('');
                            }}
                            onChange={((e)=> {
                              setEmail(e.target.value)
                            })}
                            />
                          <label className="form__label" htmlFor="email"> Email address </label>
                      </div>

                      <div className="form__group">
                          <div className="form__radio-group">
                              <input
                                type="radio"
                                className="form__radio-input"
                                id='small'
                                name='size'
                                onChange={((e)=> {
                                  if (!smallGroup) {
                                    setSmallGroup(true)
                                  } else if (largeGroup) {
                                    setLargeGroup(false)
                                  }
                                })}
                                />
                              <label className="form__radio-label" htmlFor='small'>
                                  <span className="form__radio-button"></span>
                                  Small tour group
                              </label>
                          </div>

                          <div className="form__radio-group">
                              <input
                                type="radio"
                                className="form__radio-input"
                                id='large'
                                name='size'
                                onChange={((e)=> {
                                  if (!largeGroup) {
                                    setLargeGroup(true)
                                  } else if (smallGroup) {
                                    setSmallGroup(false)
                                  }
                                })}

                                />
                              <label className="form__radio-label" htmlFor='large'>
                                  <span className="form__radio-button"></span>
                                  Large tour group
                              </label>
                          </div>
                      </div>

                      <div className="form__group u-margin-top-small">
                          <button className="btn btn--green"> Next Steps &rarr;</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )

}

export default ContactForm;