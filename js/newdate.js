function formatDate(date) {
    return date.toDateString(); // Example: "Tue Feb 25 2025"
  }

  function updateDate() {
    const dateElement = document.getElementById("current-date");
    const now = new Date();
    dateElement.textContent = formatDate(now);
  }

  updateDate();
  setInterval(updateDate, 1000); // Optional: updates every second