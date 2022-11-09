import React from 'react'
import './WidgetFlow.css';

export const WidgetFlow = () => {
    return (
        <>
            <div className="widget-container">
                <section className="header-wrapper">
                    <header>Servicestone Widget Flow</header>
                </section>

                <section className="messages-container">
                    <div className="speech-bubble speech-bubble-right speech-bubble-green">
                        I'm in a bubble from right
                    </div>
                    <div className="speech-bubble speech-bubble-left speech-bubble-purple">
                        I'm in a bubble from left
                    </div>
                </section>

                <section className="footer-wrapper">
                    <div className="input-wrapper">
                        <input type="text" placeholder='Type your message..' />
                        <button className='footer-send-button'>Send</button>
                    </div>
                </section>

            </div>
        </>
    )
}
