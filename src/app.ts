import express from 'express';

const app = express();

const port = parseInt(process.env.PORT);

console.log("process.env.PORT : "+process.env.PORT);
console.log("port : "+port);

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