const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));


const PORT = 3004;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});



