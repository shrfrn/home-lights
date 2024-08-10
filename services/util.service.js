import fs from 'fs'

export const utilService = {
	readJsonFile,
	writeJsonFile,
	makeId,
	getRandomInt,
	getRandomIntInclusive,
}
function getRandomInt(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}
function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

function readJsonFile(path) {
	const str = fs.readFileSync(path, 'utf8')
	const json = JSON.parse(str)
	return json
}

function writeJsonFile(path, data) {
    return new Promise((resolve, reject) => {
        const json = JSON.stringify(data, null, 2)
        fs.writeFile(path, json, err => {
            if (err) reject(err)
            resolve(json)
        })
    })
}

function makeId(length = 5) {
    let id = ''
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	for (let i = 0; i < length; i++) {
		id += possible.charAt(getRandomInt(0, possible.length))
	}
	return id
}
