import { useEffect, useState } from "react";

export const TodoDate = () => {
    const [dateTime , setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formettedDate = now.toLocaleDateString();
            const formettedTime = now.toLocaleTimeString();

            setDateTime(`${formettedDate} - ${formettedTime}`);
        }, 1000);

        return() => clearInterval(interval);
    }, []);

    return (
        <h2 className="date-time"> {dateTime} </h2>
    );
}