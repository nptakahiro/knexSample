//アプリのグローバル設定
const config = require("./config");

//DB接続
const knex = require("knex")(config.db);

//入力値
const authId = 1
const courseId = 1

const executeKnex = async () => {
    let allCourses;
    const getAchievement = {};
    const getCourse = {};

    //get allCourses
    await knex.select("id")
    .from("course")
    .then(res => {
        allCourses = res.map(val => val.id);
    })

    //getAchievement
    await knex.select("*")
    .from("achievement")
    .where("authId", "=", authId)
    .then(res => {
        const achievedCourses = res.map(val => val.courseId);
        let nextCourseId;
        let achievedIdx = 0;
        for (let i = 0; i < allCourses.length; i++) {
            if (allCourses[i] != achievedCourses[achievedIdx]){
                nextCourseId = allCourses[i];
                break;
            }
            achievedIdx++;
        }
        getAchievement["achievedCount"] = achievedCourses.length;
        getAchievement["allCourses"] = allCourses.length;
        getAchievement["nextCourseId"] = nextCourseId;
        console.log(getAchievement);
    })

    //getCourse
    await knex.select("*").from("courseExercise")
    .leftJoin("exercise", "exerciseId", "exercise.id")
    .leftJoin("course", "courseId", "course.id")
    .where("course.id", "=", courseId)
    .then(res => {
        getCourse["courseId"] = courseId;
        getCourse["exercises"] = res;
        console.log(getCourse);
    })
}

executeKnex();

