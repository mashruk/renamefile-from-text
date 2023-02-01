const fs = require("fs");
const path = require("path");

const {
	renameFileLocation,
	originalFileLocation,
} = require("../utils/path-files");

function cleanUpRenameOutputDirectories() {
	deleteFilesFromDirectories([
		{ path: originalFileLocation },
		{ path: renameFileLocation },
	]);
}

function deleteFilesFromDirectories(arrPath = []) {
	for (const { path } of arrPath) {
		deleteAllFilesInADirectory(path);
	}
}

function deleteAllFilesInADirectory(location) {
	var files = fs.readdirSync(location);

	for (const file of files) {
		fs.unlinkSync(path.join(location, file));
	}
}

exports.cleanUpRenameOutputDirectories = cleanUpRenameOutputDirectories;
