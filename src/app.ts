import express from 'express';

const app = express();

const port = parseInt(process.env.PORT) || 3000;
console.log("port number : "+port);
console.log("port number : "+port);
app.get('/', (req, res) => {
	console.log("get");
	res.send('express||');
});
app.listen(port, err => {
	if (err) {
		return console.error(err);
	}
	return console.log(`server is listening on ${port}`);
});