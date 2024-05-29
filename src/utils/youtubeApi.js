export const fetchSubscriberCount = async (accessToken) => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${process.env.CHANNEL_ID}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        if (!data.items || data.items.length === 0 || !data.items[0].statistics || !data.items[0].statistics.subscriberCount) {
            throw new Error("Data format is incorrect");
        }

        return data.items[0].statistics.subscriberCount;
    } catch (error) {
        console.error("Error fetching subscriber count:", error);
        return 0;
    }
};
