const fs = require("fs");
const path = require("path");
const {
	originalFileLocation,
	renameFileLocation,
} = require("./utils/path-files");

function renameFile() {
	const renameContentMap = getRenameFileContent(renameFileLocation).reduce(
		(acc, val, index) => {
			acc[index + 1] = val;
			return acc;
		},
		{}
	);

	const originalContent = getOrignalFileContent(originalFileLocation);

	console.log(
		"FileContent vs RenameContent =>",
		Object.keys(renameContentMap).length,
		originalContent.length
	);

	if (Object.keys(renameContentMap).length !== originalContent.length) {
		throw new Error("Content and Rename content length do not match");
	}

	originalContent.forEach((_, index) => {
		var originalFileDir = originalFileLocation + originalContent[index];

		var fileToBeRenamed =
			originalFileLocation +
			`00${extractIndex(originalContent[index])}. ` +
			renameContentMap[extractIndex(originalContent[index])] +
			".mp4";

		fs.renameSync(originalFileDir, fileToBeRenamed);
	});
}

exports.renameFile = renameFile;
/** ================================================================================= */

function getOrignalFileContent(dir) {
	const filesSorted = fs
		.readdirSync(dir)
		.filter((f) => f !== ".DS_Store" && f.startsWith("lesson"));

	return filesSorted;
}

function getRenameFileContent(dir) {
	try {
		const data = fs.readdirSync(dir).filter((f) => f !== ".DS_Store");
		const content = fs.readFileSync(path.join(dir, data[0]), "utf-8");
		return content.split("\n");
	} catch (error) {
		console.log(
			"Possible Error => FileNames do not begin with 'Lesson'",
			error
		);
	}
}

function extractIndex(str) {
	return Number(str.split(".mp4")[0].split("lesson")[1]);
}
