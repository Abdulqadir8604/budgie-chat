import React, {useContext, useEffect, useRef} from 'react'
import {AuthContext} from "../context/AuthContext";
import {ChatContext} from "../context/ChatContext";

const Message = ({message}) => {

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    const ref = useRef(null)
    useEffect(() => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    }, [message]);

    function getTime(sentTime) {
        const sent = new Date(sentTime?.toDate())
        const current = new Date()
        const hours = sent.getHours()
        const minutes = sent.getMinutes()

        if (sent.getHours() === current.getHours() && sent.getMinutes() === current.getMinutes()) {
            return `just now`
        } else {
            const diff = current.getTime() - sent.getTime()
            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor(diff / (1000 * 60 * 60))
            const minutes = Math.floor(diff / (1000 * 60))
            const seconds = Math.floor(diff / (1000))

            if (days > 0) {
                if (days === 1) {
                    return `yesterday`
                } else {
                    return `${days} days ago`
                }
            } else if (hours > 0) {
                if (hours === 1) {
                    return `an hr ago`
                } else {
                    return `${hours} hrs ago`
                }
            } else if (minutes > 0) {
                if (minutes === 1) {
                    return `a min ago`
                } else {
                    return `${minutes} mins ago`
                }
            } else if (seconds > 0) {
                if (seconds === 1) {
                    return `a sec ago`
                } else {
                    return `${seconds} secs ago`
                }
            } else {
                return `just now`
            }
        }
    }

    return (
        <div ref={ref}
            className={`message ${message.senderId === currentUser.uid && "owner"}`}>
            <div className={"message_info"}>
                <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt={""}/>
                <span>
                    {getTime(message.date)}
                </span>
            </div>
            <div className={"message_content"}>
                {message.img && <img src={message.img} alt={"image"}/>}
                <p>{message.text}</p>
            </div>
        </div>
    )
}
export default Message
