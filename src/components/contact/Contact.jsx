import React from 'react'

export const Contact = () => {
  return (
    <div className="contact-page">
        <form action="#">
            <div className="forms"> 
                <label>first</label>
                    <input type="text"
                    placeholder="first name"
                    name="first-name"
                    required />
                
            </div>

            <div className="forms">
                <label>last</label>
                    <input type="text"
                    placeholder="last name"
                    name="last-name"
                    required />
                
            </div>

            <div className="forms">
                <label>mail</label>
                    <input type="email"
                    placeholder="johndoe@email.com"
                    name="email"
                    required />
                
            </div>

            <div className="forms">
                <textarea name="message"
                cols="30" rows="7" placeholder="Comment"></textarea>
            </div>

            <div className="submit-button">
                <button type="submit" className="grad-btn">
                    submit
                </button>
            </div>

        </form>
    </div>
  )
}
