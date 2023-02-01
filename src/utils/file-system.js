const fs = require("fs");

function copyPaste({ source, destination }) {
	fs.copyFileSync(source, destination);
}

function getFirstFileNameInsideDir(dir) {
	try {
		const fileList = fs.readdirSync(dir);
		return fileList.find((elem) => elem !== ".DS_Store");
	} catch (error) {
		console.log(
			"Possible Error: No folder was found at Input Folder\n",
			error
		);
	}
}

exports.getFirstFileNameInsideDir = getFirstFileNameInsideDir;
exports.copyPaste = copyPaste;
