
import express from "express";
import ejs from "ejs";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

import indexRoutes from "./routes/index.js";

const app = express();

// URL ABSOLUTA NO DINÁMICA
// C:\Users\estudiante\Documents\Node\src /views

// URL DINÁMICA CON "DIRNAME Y FILEURLTOPATH" DE "PATH Y URL";
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(join(__dirname, 'views'));

app.set("views", join(__dirname, "views")); //EStablece el Direcctorio
app.set("views engine", "ejs")//Le dice que reprensente las plantillas con EJS

app.use(indexRoutes)

app.use(express.static(join(__dirname, "public")))

const puerto = 3000;

app.listen(3000,() => {
	console.log("Servidor escuchancdo en el servidor: ", puerto)
})