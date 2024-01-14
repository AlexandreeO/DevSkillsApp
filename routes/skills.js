var express = require("express");
const { mySkills } = require("../model/skillsData");
var router = express.Router();

/* GET skills listing. */
router.get("/:id", function (req, res, next) {
    console.log(req.params.id);
    res.render("skills", {
        title: "My Skills",
        skill: mySkills.find((skill) => {
            return skill.id === Number(req.params.id);
        }),
    });
});

module.exports = router;
