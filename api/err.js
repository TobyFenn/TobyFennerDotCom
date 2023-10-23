module.exports = (req, res) => {
    // Set the HTTP status code to 404 and set the Location header for redirection
    res.writeHead(302, {
      'Location': '/bonus'
    });
};
