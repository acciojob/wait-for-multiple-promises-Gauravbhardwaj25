//your JS code here. If required.
function createPromise(promiseNumber) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 3) + 1; // random between 1–3 seconds
    setTimeout(() => resolve({ promiseNumber, time: delay }), delay * 1000);
  });
}

const output = document.getElementById("output");
const startTime = Date.now();

// Create 3 promises
const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3),
];

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
  // Remove loading row
  output.innerHTML = "";

  // Populate rows for each promise
  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${res.promiseNumber}</td>
      <td>${res.time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  // Calculate total time (max delay)
  const totalTime = (Date.now() - startTime) / 1000;

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime.toFixed(3)}</td>
  `;
  output.appendChild(totalRow);
});
