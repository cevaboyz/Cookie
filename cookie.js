const activeGroups = ",C0001,C0002,C0003,C0004,"
    /*This variable simulate the behaviour of the cookie acceptance within the site, the followings functions are a simple if/else statements that return granted or denide in order to control the flow of the tags with the custom template made by Simo Ahava*/
console.log(activeGroups)



console.log(activeGroups.includes("C0001"))


const groupChecker = function(activeGroups) {

    if (activeGroups.includes("C0001")) {
        return "granted"
    } else {
        return "denied"
    }
}
console.log(groupChecker(activeGroups))

const groupChecker = function(activeGroups) {

    if (activeGroups.includes("C0002")) {
        return "granted"
    } else {
        return "denied"
    }
}
console.log(groupChecker(activeGroups))


const groupChecker = function(activeGroups) {

    if (activeGroups.includes("C0003")) {
        return "granted"
    } else {
        return "denied"
    }
}
console.log(groupChecker(activeGroups))

const groupChecker = function(activeGroups) {

    if (activeGroups.includes("C0004")) {
        return "granted"
    } else {
        return "denied"
    }
}
console.log(groupChecker(activeGroups))