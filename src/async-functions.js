const getTatooineResidents = () => {
    const fetch = require("node-fetch")
    const promise = fetch('https://swapi.co/api/planets/1/')

    promise
        .then(response => {
            return response.json()
        })
        .then(json => {
            const residents = json.residents
            console.log(residents)
            return residents
        })
        .catch(err => {
            console.log(err)
        })
    return promise
}


const promiseMeAString = (input) => {

    const promise = new Promise((resolve, reject) => {
        if (input !== null) {
            resolve("You kept the Promise!")
        }
        else {
            reject("You have failed me!")
        }
    })
    return promise
}

module.exports.getTatooineResidents = getTatooineResidents
module.exports.promiseMeAString = promiseMeAString
