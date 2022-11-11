import React, { useEffect, useState, useRef } from 'react'
import './CustomWidget.css';

export const CustomWidget = ({ remoteName = "", messages = [], handleSend }) => {
    const [message, setMessage] = useState("");
    const inputRef = useRef();
    const widgetContainerRef = useRef();

    useEffect(() => {
        widgetContainerRef.current &&
            console.log(widgetContainerRef.current);
    }, [widgetContainerRef.current]);

    return (
        <div className="container">
            <div className="widget-container" ref={widgetContainerRef}>
                <section className="header-wrapper">
                    <header>Servicestone Widget Flow</header>
                </section>

                <section className="messages-container">
                    {
                        messages &&
                        messages.map((messageItem, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`speech-bubble ${messageItem.direction === "outgoing" ?
                                        "speech-bubble-left speech-bubble-red" :
                                        messageItem.direction === "incoming" ?
                                            "speech-bubble-right speech-bubble-green" :
                                            ""}`}
                                >
                                    {messageItem.message}
                                </div>
                            )
                        })

                    }
                </section>

                <section className="footer-wrapper">
                    <input
                        type="text"
                        value={message}
                        ref={inputRef}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Type message here..'
                    />
                    <button
                        className='footer-send-button'
                        onClick={() => {
                            handleSend(message)
                            setMessage("")
                            inputRef.current.focus();
                        }}
                    >
                        Send
                    </button>
                </section>
            </div>

            <div className='toggle-container'>
                <button
                    className='visible-toggle-button'
                    onClick={() => {
                        widgetContainerRef.current.style.display === 'none' ?
                            widgetContainerRef.current.style.display = 'block' :
                            widgetContainerRef.current.style.display = 'none'
                    }}
                >
                    Toggle Widget
                </button>
            </div>
        </div >
    )
}
