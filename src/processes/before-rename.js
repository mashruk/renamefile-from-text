const path = require("path");

const {
	inputFolderDirectory,
	renameFileLocation,
	originalFileLocation,
} = require("../utils/path-files");
const { copyPaste } = require("../utils/file-system");

const {
	get_filesInsideCurrentCourse,
	get_currentFoldername,
} = require("../singleton");

function setupBeforeRenaming() {
	get_filesInsideCurrentCourse().forEach((c) => {
		try {
			var source = path.join(
				inputFolderDirectory,
				get_currentFoldername(),
				c
			);

			if (isThis("txt", c)) {
				var destination = path.join(renameFileLocation, c);
				copyPaste({ source, destination });
			} else {
				var destination = path.join(originalFileLocation, c);
				copyPaste({ source, destination });
			}
		} catch (error) {
			console.log("Failed copying", error);
		}
	});
}

function isThis(format, str) {
	return str.endsWith(format);
}

exports.setupBeforeRenaming = setupBeforeRenaming;
