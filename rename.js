const fs = require('fs');

const files=fs.readdirSync('./assets')

files.forEach((fileName, i) => {
	fs.rename(`./assets/${fileName}`, `./assets/${i+1}.jpg`, (err) => {
		if (err) throw err;
		console.log('renamed complete');
	});
});
