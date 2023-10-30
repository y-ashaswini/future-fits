import { DeepChat } from "deep-chat-react";
import human from "../Assets/person-svgrepo-com.svg"
import robot from "../Assets/robot-svgrepo-com.svg"

export default function Chatpage() {
    const initialMessages = [
        { role: "ai", text: "Hi there, welcome to Future Fits! I am your friendly personal chatbot, here to guide you through your journey of self discovery!" },
        { role: "ai", text: "Click on the link below to attempt the test." },
        { role: "ai", html: "<a href='test'>Link to test</a>" },
        { role: "ai", text: "After evaluation, you may also download a detailed analysis report in PDF format!" },
    ];

    return (
        <div className="h-full justify-between margin-y-4">
            <div className="flex items-center justify-center h-full md:p-10 bg-[#f0ebd8] p-2 rounded-xl">
                <DeepChat
                    demo={true}
                    style={{ width: "96vw", height: "100%", border: "none", backgroundColor: "#f0ebd8" }}
                    textInput={{ placeholder: { text: "Type here..." }, styles: { container: { padding: "8px", boxShadow: "none", backgroundColor: "transparent", borderColor: "#748cab", borderRadius: "10px", color: "#0d1321" } } }}
                    initialMessages={initialMessages}
                    avatars={{ "ai": { "src": robot, "styles": { avatar: { "fontSize": "1.5rem" } } }, "user": { "src": human, "styles": { avatar: { "fontSize": "1.5rem" } } } }}
                    messageStyles={{
                        "default": {
                            "user": {
                                "bubble": { "backgroundColor": "#3e5c76", "color": "white", "padding": "16px", "borderRadius": "10px" }
                            },
                            "ai": { "bubble": { "backgroundColor": "#0d1321", "color": "white", "padding": "16px", "borderRadius": "10px" } }
                        }
                    }}

                    inputAreaStyle={{ "fontSize": "1rem", width: "100%", borderWidth: "2px" }}

                />
            </div>
        </div>
    )
}