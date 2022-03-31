const app = require("./index");

const port=5000;
const connect = require("./config/db");

app.listen(port, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error.message);
    }
    console.log("listening on "+port)
});