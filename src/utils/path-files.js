const path = require("path");
const fs = require("fs");

const { getFirstFileNameInsideDir } = require("./file-system");
const { rootDir } = require("../../_root_");

const renameFileLocation = path.join(rootDir, "src", "rename-text", "/");
const originalFileLocation = path.join(rootDir, "src", "original-files", "/");
const inputFolderDirectory = path.join(rootDir, "input", "/");
const outputFolderDirectory = path.join(rootDir, "output", "/");

const filesInsideInputFolder = fs.readdirSync(
	path.join(
		inputFolderDirectory,
		getFirstFileNameInsideDir(inputFolderDirectory)
	)
);

function folder_File_NamesOfDirectory(dir) {
	const fileList = fs.readdirSync(dir);
	return fileList.filter((elem) => elem !== ".DS_Store");
}

exports.renameFileLocation = renameFileLocation;
exports.originalFileLocation = originalFileLocation;
exports.inputFolderDirectory = inputFolderDirectory;
exports.outputFolderDirectory = outputFolderDirectory;
exports.filesInsideInputFolder = filesInsideInputFolder;
exports.folder_File_NamesOfDirectory = folder_File_NamesOfDirectory;
