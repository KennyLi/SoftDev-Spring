//average number of male and female by pct
var getAverageMale = function (data) {
    //Get a list of all the percentages
    return data.map(
        function (a) {
            return a["male_per"]
        })
        //Then, sum them
        .reduce(
            function (a, b) {
                return parseFloat(a) + parseFloat(b);
            })
        //Then divide
        / data.length;
}
var getAverageFemale = function (data) {
    return data.map(
        function (a) {
            return a["female_per"]
        })
        .reduce(
            function (a, b) {
                return parseFloat(a) + parseFloat(b);
            }) / data.length;
}

document.getElementById("male_per").innerHTML += getAverageMale(data)
document.getElementById("female_per").innerHTML += getAverageFemale(data)

console.log(getAverageMale(data))
console.log(getAverageFemale(data))
console.log(getAverageMale(data) + getAverageFemale(data))

//filters out data for only schools with 12th grade
var filterTwelthGrade = function (data) {
    return data.filter(
        function (a) {
            return a["grade12"] != null;
        })
        .map(
            function (a) {
                return parseInt(a["grade12"])
            })
}

//calculates mean number of 12th grade students
var meanTwelthGrade = function (data) {
    numStudent = filterTwelthGrade(data)
    return numStudent.reduce(
        function (a, b) {
            return a + b
        }) / numStudent.length
}

//calculates standard deviation of 12th grade students
var stdTwelthGrade = function (data) {
    numStudent = filterTwelthGrade(data)
    mean = meanTwelthGrade(data)
    return Math.sqrt(numStudent.map(
        function (a) {
            return Math.pow(a - mean,2);
        })
        .reduce(
            function(a, b) {
            return a + b
        }) / numStudent.length)
}

console.log(meanTwelthGrade(data))
console.log(stdTwelthGrade(data))

document.getElementById("mean_twelth").innerHTML += meanTwelthGrade(data)
document.getElementById("std_twelth").innerHTML += stdTwelthGrade(data)