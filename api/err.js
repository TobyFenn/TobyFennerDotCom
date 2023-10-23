module.exports = (req, res) => {
    res.writeHead(302, {
        'Location': '/bonus'
    });
    res.end();
};
