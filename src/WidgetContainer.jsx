import { useState, useEffect } from "react";
import { CustomWidget } from "./CustomWidget";

export const WidgetContainer = ({ license = "", greeting = "" }) => {

    const [messages, setMessages] = useState([]);

    const getRandomNumber = () => {
        return Math.floor((Math.random() * 100000) + 1);
    }

    useEffect(() => {
        if (greeting && messages.length === 0) {
            setMessages(messages.concat({
                _id: getRandomNumber(),
                message: `${greeting && greeting} How we can help you?`,
                sender: "remote",
                direction: "incoming",
            }));
        }

        console.log(greeting);
        console.log(messages);
    }, [greeting, messages]);

    const handleSend = (message) => {
        const newMessages = [
            {
                _id: getRandomNumber(),
                message,
                sender: "me",
                direction: "outgoing",
            },
            {
                _id: getRandomNumber(),
                message: `ECHO: ${message}`,
                sender: "remote",
                direction: "incoming",
            }
        ];
        setMessages(messages.concat(newMessages));
    };

    return (
        <>
            <CustomWidget messages={messages} handleSend={handleSend} />
        </>
    );

};

