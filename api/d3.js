// delay.js
module.exports = (req, res) => {
    const delayInSeconds = 3; // Adjust the delay time as needed (in seconds)
    setTimeout(() => {
      res.status(200).send(`Delayed response for ${delayInSeconds} seconds.`);
      res.setHeader('Location', '/test1'); // Replace '/target-page' with the actual URL of the page you want to navigate to
      res.status(302).end();
    }, delayInSeconds * 1000);
  };
  