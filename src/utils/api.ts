export const notifyBooking = async (data: unknown) => {
  try {
    const response = await fetch("/api/booking/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error("Notification failed", await response.text());
    }
  } catch (error) {
    console.error("Notification error", error);
  }
};
