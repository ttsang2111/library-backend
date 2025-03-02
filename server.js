const app = require("./src/app")

const PORT = 3050

const server = app.listen(PORT, () => console.log(`Library backend server starts with port ${PORT}`))

process.on('SIGINT', () => {
    server.close(() => console.log("\nExited library backend server."))
})