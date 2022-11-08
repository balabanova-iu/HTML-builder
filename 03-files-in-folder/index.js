const path = require("path");
const { resolve } = require("path");
const { readdir, stat } = require("fs").promises;

const folder = path.join(__dirname, "secret-folder");

const getListFiles = async function () {
  const dir = await readdir(folder, { withFileTypes: true });
  dir.map(async (file) => {
    if (file.isFile()) {
      const stats = await stat(path.join(folder, file.name));
      const fileName = file.name.split(".")[0];
      const fileExtname = path.extname(file.name).split(".")[1];
      const fileSize = `${(stats.size / 1000).toFixed(3)}`;
      console.log(`${fileName}- ${fileExtname} - ${fileSize}kb`);
    }
  });
};

getListFiles();
