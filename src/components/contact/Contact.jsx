import React from 'react'

export const Contact = () => {
  return (
    <div>
        <form className="contact-form" action="#">
            <div>
                <label>
                    first
                    <input type="text"
                    placeholder="John"
                    name="first-name"
                    required />
                </label>
            </div>

            <div>
                <label>
                    last
                    <input type="text"
                    placeholder="Doe"
                    name="last-name"
                    required />
                </label>
            </div>

            <div>
                <label>
                    email
                    <input type="email"
                    placeholder="johndoe@email.com"
                    name="email"
                    required />
                </label>
            </div>

            <div>
                <input type="text"
                placeholder="Comments"
                name="comment-box" />
            </div>

            <button type="submit" className="contact-btn">
                submit
            </button>

        </form>
    </div>
  )
}
