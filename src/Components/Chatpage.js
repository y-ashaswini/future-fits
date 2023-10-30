import { DeepChat } from "deep-chat-react";
import human from "../Assets/person-svgrepo-com.svg"
import robot from "../Assets/robot-svgrepo-com.svg"

export default function Chatpage() {
    const initialMessages = [
        { role: "ai", text: "Hi there!" },
        { role: "ai", text: "Click on the link below to give your psychometric analysis test." },
        { role: "ai", text: "Link to test" },
    ];

    return (
        <div className="h-full justify-between margin-y-4">
            <div className="flex items-center justify-center h-full md:p-10 bg-white p-4 rounded-xl">
                <DeepChat
                    demo={true}
                    style={{ width: "96vw", height: "100%", border: "none" }}
                    textInput={{ placeholder: { text: "Type here..." }, styles: { container: { padding: "8px", backgroundColor: "#F7E2E2", boxShadow: "none", border: "none", borderRadius: "30px", color: "black" } } }}
                    initialMessages={initialMessages}
                    avatars={'{"ai": {"src": "' + robot + '"}, "user": {"src": "' + human + '"}}'}
                    messageStyles={{
                        "default": {
                            "user": {
                                "bubble": { "backgroundColor": "#7F1D1D", "color": "white", "padding": "16px", "borderRadius": "10px" }
                            },
                            "ai": { "bubble": { "backgroundColor": "#FF7A7A", "color": "white", "padding": "16px", "borderRadius": "10px" } }
                        }
                    }}
                    // styleOptions={{ "border-radius": "10px", "width": "96vw" }}
                    inputAreaStyle={{ "fontSize": "1.2rem", width: "100%", borderWidth: "2px" }}

                />
            </div>
        </div>
    )
}