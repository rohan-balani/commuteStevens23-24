import {Router} from 'express'
const router = Router();

router.route("/").get(async (req, res) => {
    res.redirect("/sandbox");
})


router.route("/sandbox").get(async (req, res) => {
    res.render("sandbox");
})

export default router