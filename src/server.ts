import express from 'express';

const start = async (port: number, path: string, text: string) => {
    const app = express();
    app.use(path, (req, res) => {
        res.send(text);
    });
    app.listen(port, () => {
        console.log(`start: http://localost:${port}/${path}`);
    });
};

start(8002, "/health", "OK Service1");
start(8003, "/health", "OK Service2");
