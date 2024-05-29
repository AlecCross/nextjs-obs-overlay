// components/SubscriberCount.js

import React, { useState, useEffect } from "react";
import { fetchSubscriberCount } from "../utils/youtubeApi";
import { useSession, signIn, signOut } from "next-auth/react";

const SubscriberCount = () => {
    const { data: session, status } = useSession();
    const [subscribers, setSubscribers] = useState(0);
    useEffect(() => {
        const fetchSubscribers = async () => {
            if (session) {
                const count = await fetchSubscriberCount(session.accessToken);
                setSubscribers(count);
            }
        };

        fetchSubscribers();

        const interval = setInterval(fetchSubscribers, 30000); // Оновлюємо кожні 30 секунд

        return () => clearInterval(interval);
    }, [session]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        return <div>
            <button onClick={() => signIn("google")}>Sign in with Google</button>
            <div>Please sign in</div>
        </div>
    }

    return (
        <div>
            <h2>Subscriber Count: {subscribers}</h2>
        </div>
    );
};


export default SubscriberCount;
