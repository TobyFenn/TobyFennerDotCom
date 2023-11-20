// delay.js
module.exports = (req, res) => {
  const delayInSeconds = 3; // Adjust the delay time as needed (in seconds)
  setTimeout(() => {
    res.status(200).send(`Delayed response for ${delayInSeconds} seconds.`);
  }, delayInSeconds * 1000);
};
