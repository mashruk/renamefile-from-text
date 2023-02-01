const fs = require("fs");
const path = require("path");

const {
	outputFolderDirectory,
	originalFileLocation,
	renameFileLocation,
} = require("../utils/path-files");
const { copyPaste } = require("../utils/file-system");

const { get_filesInsideCurrentCourse } = require("../singleton");

function copyRenamedFilesToOutput() {
	// Make a directory
	const renameText = get_filesInsideCurrentCourse().find((c) =>
		isThis("txt", c)
	);
	const folderName = renameText.split(".txt")[0];

	fs.mkdirSync(path.join(outputFolderDirectory, folderName), {
		recursive: true,
	});

	// Get all files inside original-files
	const renamedFiles = fs.readdirSync(originalFileLocation);

	renamedFiles.forEach((c) => {
		try {
			var source = path.join(originalFileLocation, c);
			var destination = path.join(outputFolderDirectory, folderName, c);

			copyPaste({
				source,
				destination,
			});
		} catch (error) {
			console.log("Failed copying", error);
		}
	});

	// Copy original rename-text on input
	copyPaste({
		source: path.join(renameFileLocation, renameText),
		destination: path.join(outputFolderDirectory, folderName, renameText),
	});
}

function isThis(format, str) {
	return str.endsWith(format);
}

exports.copyRenamedFilesToOutput = copyRenamedFilesToOutput;
