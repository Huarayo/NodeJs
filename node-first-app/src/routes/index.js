import {Router} from "express"; //Solo exportamos una parte de la biblioteca express

const router = Router();

router.get("/",(req,res) => res.render("index.ejs", {title: "first website"}));

router.get("/about",(req,res) => res.render("about.ejs", {title: "About Me"}))

router.get("/contact",(req,res) => res.render("contact.ejs", {title: "Contact"}))

export default router