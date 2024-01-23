var express = require("express");
const { mySkills } = require("../model/skillsData");
var router = express.Router();

/* GET skills listing. */

router.get("/add", function (req, res, next) {
    res.render("addskill", { title: "Adding a new skill" });
});

// fixing edgecases for creating a repeated ID so it can be deleted accurately.
function generateNewId(targetId) {
    let newId = mySkills.filter((skill) => {
        return skill.id === targetId;
    });
    if (newId && newId.length > 0) {
        let newTargetId = targetId + 1;
        return generateNewId(newTargetId);
    }
    return targetId;
}
router.post("/submit", function (req, res, next) {
    let generatedID = generateNewId(mySkills.length + 1);
    mySkills.push({ name: req.body.skill, id: generatedID });
    res.redirect("/");
});

router.get("/:id", function (req, res, next) {
    res.render("skills", {
        title: "My Skills",
        skill: mySkills.find((skill) => {
            return skill.id === Number(req.params.id);
        }),
    });
});

router.delete("/:id", function (req, res, next) {
    console.log({ mySkills, newId: req["params"]["id"] });
    let targetId = -1;
    mySkills.forEach((skill, index) => {
        console.log({ index });
        if (skill.id === Number(req.params.id)) {
            targetId = index;
        }
    });
    mySkills.splice(targetId, 1);
    res.redirect("../");
});

module.exports = router;
