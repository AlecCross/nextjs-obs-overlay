import React, { useState, useEffect } from "react";
import { fetchUserChannels } from "../utils/youtubeApi";
import { useSession } from "next-auth/react";
import styles from "../styles/channels.module.css"

const UserChannels = () => {
  const { data: session } = useSession();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    if (session?.accessToken) {
      const fetchChannels = async () => {
        try {
          const userChannels = await fetchUserChannels(session.accessToken);
          setChannels(userChannels);
        } catch (error) {
          console.error("Error fetching channels:", error);
        }
      };
      fetchChannels();
    }
  }, [session]);

  if (!session) {
    return <p>You need to sign in first.</p>;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}> Your YouTube Channels</h2>
      {channels.length > 0 ? (
        <ul>
          {channels.map((channel) => (
            <li className={styles.item} key={channel.id}>
              <div>
                {channel.snippet.title}: <div className={styles.subscribers}>{channel.statistics.subscriberCount} subscribers</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No channels found.</p>
      )}
    </div>
  );
};

export default UserChannels;
