const { setupBeforeRenaming } = require("./processes/before-rename");
const { copyRenamedFilesToOutput } = require("./processes/during-rename");
const {
	inputFolderDirectory,
	folder_File_NamesOfDirectory,
} = require("./utils/path-files");

const { cleanUpRenameOutputDirectories } = require("./processes/post-rename");
const { renameFile } = require("./rename");
const {
	set_filesInsideCurrentCourse,
	set_currentFoldername,
} = require("./singleton");

function start() {
	const folders = folder_File_NamesOfDirectory(inputFolderDirectory);
	console.log({ folders });

	folders.forEach((folder) => {
		set_currentFoldername(folder);
		set_filesInsideCurrentCourse(folder);

		/** Tasks */
		setupBeforeRenaming();
		renameFile();
		copyRenamedFilesToOutput();
		cleanUpRenameOutputDirectories();
	});
}

start();
