const groupAdultsByAgeRange = (people) => {

    const object1 = {}

    const group1 = people.filter(person => person.age >= 18 && person.age <= 20)
    if (group1.length != 0) {
        object1['20 and younger'] = group1
    }
    const group2 = people.filter(person => person.age <= 30 && person.age > 20)
    if (group2.length != 0) {
        object1['21-30'] = group2
    }
    const group3 = people.filter(person => person.age <= 40 && person.age > 30)
    if (group3.length != 0) {
        object1['31-40'] = group3
    }
    const group4 = people.filter(person => person.age <= 50 && person.age > 40)
    if (group4.length != 0) {
        object1['41-50'] = group4
    }
    const group5 = people.filter(person => person.age > 50)
    if (group5.length != 0) {
        object1['51 and older'] = group5
    }
    return object1
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange