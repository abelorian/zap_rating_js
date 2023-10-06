const express = require("express");
const CronJob = require('cron').CronJob;


const app = express()
app.set("port", process.env.PORT || 3005)

app.get("/", (_, res) => {
    res.send("Welcome to CRON server!! 😬");
});

const job = new CronJob(
	'*/5 * * * * *',
	function () {
		console.log(`You will see this message every second ${new Date()}`);
	},
	null,
	true,
	'America/Los_Angeles'
);

app.listen(app.get("port"), () => {
    console.log("Express server listening on port " + app.get("port"));
});