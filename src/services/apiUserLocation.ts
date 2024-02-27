const API_KEY = "ipb_live_R4bceylGVJCl75Jb5pXLY8gtX4JQkmCtFy99yKjU";

export async function getLocation(clientIp: string) {
  try {
    const response = await fetch(
      `https://api.ipbase.com/v2/info?ip=${clientIp}&apikey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
}
