export async function getQuote() {
  try {
    const response = await fetch(
      "https://api.quotable.io/random?tags=technology"
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return "something went wrong";
    }
  } catch (error) {
    console.error("Error fetching quotes:", error);
    throw error;
  }
}
