import { Notification } from "."

export const Notifications = () => {
    return (<div>
        All Notifications
        <div>
            <Notification state="information" message="message" showCloseButton />
            <Notification state="success" message="message" showCloseButton />
        </div>
    </div>)
}