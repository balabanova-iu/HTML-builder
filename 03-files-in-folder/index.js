const path = require("path");
const { resolve } = require("path");
const { readdir, opendir } = require("fs").promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);

      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );

  return Array.prototype.concat(...files);
}

getFiles(__dirname)
  .then((files) => console.log(files.slice(2)))
  .catch((err) => console.error(err));

// '03-files-in-folder/secret-folder'
