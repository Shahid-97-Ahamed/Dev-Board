document.addEventListener("DOMContentLoaded", function () {
    // Select all "Completed" buttons
    const completedButtons = document.querySelectorAll("span.bg-blue-500.text-white");

    // Select the counter elements
    const taskCounter = document.querySelector("p.text-lg.font-bold.text-blue-600");
    const completedCounter = document.querySelector("span.badge.badge-sm.text-lg.ml-1");

    // Select log container
    const logContainer = document.getElementById("massage");

    completedButtons.forEach(button => {
      button.addEventListener("click", function () {
        // Show alert
        alert("Task marked as completed!");

        // Decrease task number
        let taskCount = parseInt(taskCounter.textContent);
        if (taskCount > 0) {
          taskCounter.textContent = taskCount - 1;
        }

        // Increase completed number
        let completedCount = parseInt(completedCounter.textContent);
        completedCounter.textContent = completedCount + 1;

        // Append message to logs
        const message = document.createElement("div");
        message.className = "bg-gray-100 p-2 rounded text-sm text-gray-700";
        message.textContent = "✅ Completed clicked: -1 from tasks, +1 to completed.";
        logContainer.appendChild(message);

        // Disable the button and add styles
        button.setAttribute("disabled", true);
        button.classList.add("opacity-50", "cursor-not-allowed");
      });
//    const clearBtn = document.getElementById("clearBtn");
//     const activityLog = document.getElementById("activityMessages");

//     clearBtn.addEventListener("click", function () {
//       activityLog.innerHTML = ""; // Clears messages under <hr>
//     //   alert("Activity log cleared.");
//     });
    });
  });

 