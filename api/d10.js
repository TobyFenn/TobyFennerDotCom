// delay.js
module.exports = (req, res) => {
  const delayInSeconds = 9; // Adjust the delay time as needed (in seconds)
  setTimeout(() => {
    res.status(200).send(`(SOFT 404) Error 404 page not found. Missing file was unable to be accessed, so page returned failure. `);
  }, delayInSeconds * 1000);
};
