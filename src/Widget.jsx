import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer, ChatContainer, ConversationHeader, MessageList, Message,
    MessageInput, Button
} from "@chatscope/chat-ui-kit-react";
import { useChat } from "./ChatProvider";
import "./Widget.less"

export const Widget = ({ remoteName = "", messages = [], onSend }) => {

    const { hide } = useChat();

    return (<MainContainer>
        <ChatContainer>
            <ConversationHeader>
                <ConversationHeader.Content userName="sadas">
                    <span style={{
                        color: "darkslategrey",
                        alignSelf: "flex-center",
                        fontWeight: "bold"
                    }}>{remoteName}</span>
                </ConversationHeader.Content>
                <ConversationHeader.Actions>
                    <Button onClick={hide} style={{ color: "darkslategrey", fontWeight: "600" }}>Hide</Button>
                </ConversationHeader.Actions>
            </ConversationHeader>

            <MessageList>
                {messages.map(message =>
                    <Message key={message._id} model={message} />
                )}

            </MessageList>

            <MessageInput placeholder="Type message here"
                attachButton={false}
                onSend={onSend}
            />
        </ChatContainer>
    </MainContainer>);

};

