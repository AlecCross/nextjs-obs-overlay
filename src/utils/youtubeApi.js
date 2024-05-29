export const fetchUserChannels = async (accessToken) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&mine=true`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    if (data.items) {
      return data.items;
    } else {
      throw new Error("Failed to fetch channels");
    }
  };
