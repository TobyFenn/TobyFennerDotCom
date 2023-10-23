module.exports = (req, res) => {
    // Set the HTTP status code to 404 and set the Location header for redirection
    res.writeHead(404, {
      'Location': '/bonus'
    });
};
