// api/test4.js
module.exports = (req, res) => {
    // Redirect to the homepage and set a 302 (temporary) redirect status
    res.writeHead(302, { Location: '/' });
    res.end();
  };
  