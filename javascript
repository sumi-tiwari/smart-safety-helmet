// Example placeholder for sensor updates
setInterval(() => {
  document.getElementById("sensor-data").innerHTML = `
    <p>Accelerometer: X=${Math.random().toFixed(2)} | Y=${Math.random().toFixed(2)} | Z=${Math.random().toFixed(2)}</p>
    <p>Gyroscope: X=${Math.random().toFixed(2)} | Y=${Math.random().toFixed(2)} | Z=${Math.random().toFixed(2)}</p>
    <p>Impact: ${Math.random() > 0.9 ? "Detected" : "None"}</p>
    <p>Motion: ${Math.random() > 0.5 ? "Yes" : "No"}</p>
  `;
}, 2000);
