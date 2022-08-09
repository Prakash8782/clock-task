var largeBar = document.querySelector(".largebar-holder")
var dial = document.querySelector(".dial")
var smallBar = document.querySelector(".smallBar-holder")
var largeAngle = 0;
for (let i = 1; i <= 5; i++) {
    largeAngle = largeAngle + 30;
    var newLargeBar = document.createElement("div")
    newLargeBar.setAttribute("class", "largebar-holder")
    newLargeBar.innerHTML = largeBar.innerHTML;
    newLargeBar.style.transform = "rotate(" + largeAngle + "deg)"
    dial.appendChild(newLargeBar)
}
var smallAngle;
var min = 1;
for (let i = 1; i <= 29; i++) {
    min++
    smallAngle = min * 6
    if (min % 5 != 0) {
        var newSmallBar = document.createElement("div")
        newSmallBar.setAttribute("class", "smallBar-holder")
        newSmallBar.innerHTML = smallBar.innerHTML;
        newSmallBar.style.transform = "rotate(" + smallAngle + "deg)"
        dial.appendChild(newSmallBar)
    }
}

