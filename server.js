const app = require("./src/app")

const PORT = process.env.PORT || 3056

const server = app.listen(PORT,() => {
    console.log(`WSV ecommerce  start with ${PORT}`)
})

process.on('SIGINT',() => {
    server.close(() => console.log(`Exit Server Express`))
})

// curl http://localhost:3005 --include xem được header sử dụng helmet để counter