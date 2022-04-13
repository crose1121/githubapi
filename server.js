const port = 8000;

const routeFile = "" //change the routeFile for each project

require("./server/config/config");
require(`./server/routes/${routeFile}`)(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))