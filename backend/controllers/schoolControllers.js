import School from "../models/schoolModels.js"

export const getAllSchools = async (req, res) => {
    const schools = await School.find({})
    if (schools) {
        res.send(schools)
    } else {
        throw new Error("Schools not found")
    }
}

export const getASchool = async (req, res) => {
    const school = await School.findById(req.params._id)

    if (school) {
        res.send(school)
    } else {
        throw new Error("School not found")
    }
}

export const createSchool = async (req, res) => {
    const { schoolCode, schoolName } = req.body
    const school = new School({
        schoolCode,
        schoolName
    })
    const createdSchool = await school.save()
    res.send(createdSchool)
}
