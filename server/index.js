const server = require('./server.js');


const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});

