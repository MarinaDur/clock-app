export async function getUserTimezone() {
  try {
    const response = await fetch("https://worldtimeapi.org/api/ip");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching timezone:", error);
    throw error;
  }
}
