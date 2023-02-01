const fs = require("fs");
const path = require("path");

const { inputFolderDirectory } = require("./utils/path-files");

let _filesInsideCurrentCourse = null;
let _currentFoldername = null;

function set_filesInsideCurrentCourse(folderName) {
	_filesInsideCurrentCourse = fs.readdirSync(
		path.join(inputFolderDirectory, folderName)
	);
}

function set_currentFoldername(folderName) {
	_currentFoldername = folderName;
}

function get_currentFoldername() {
	if (!_currentFoldername) throw new Error("current files not set");
	return _currentFoldername;
}

function get_filesInsideCurrentCourse() {
	if (!_filesInsideCurrentCourse) throw new Error("current folder not set");
	return _filesInsideCurrentCourse;
}

exports.get_filesInsideCurrentCourse = get_filesInsideCurrentCourse;
exports.set_filesInsideCurrentCourse = set_filesInsideCurrentCourse;
exports.get_currentFoldername = get_currentFoldername;
exports.set_currentFoldername = set_currentFoldername;
