const fs = require('fs');
const dateformat = require('dateformat');
const path = require('path');
const logPath = path.join(__dirname, '../../logs/');

const createDirectory = (module) => {
    const now = new Date();
    const directory = dateformat(now, "dd_mm_yyyy");
    let dirPath = path.join(logPath, directory + "/dawn_" + module + ".log");
    if (!fs.existsSync(path.join(logPath, directory))) {
        fs.mkdirSync(path.join(logPath, directory));
    }
    return dirPath;
}

const write = (data, path) => {
    const logData = new Date().toString() + " --- " + data;
    try {
        fs.appendFileSync(path, logData + '\n');
    } catch (e) {
        console.log(e);
    }
}

const server = (data) => {
    const filePath = createDirectory('server');
    write(data, filePath);
}
const auth = (data) => {
    const filePath = createDirectory('auth');
    write(data, filePath);
}
const router = (data) => {
    const filePath = createDirectory('router');
    write(data, filePath);
}
const db = (data) => {
    const filePath = createDirectory('db');
    write(data, filePath);
}

module.exports = {
    'server': server,
    'auth': auth,
    'db': db,
    'router': router,
}