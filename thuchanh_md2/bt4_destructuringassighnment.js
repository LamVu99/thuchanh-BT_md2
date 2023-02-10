const myObjects = [
    {x: 10, y: 20, width: 30, height: 30},
    {x: -40, y: 20, width: 30, height: 30},
    {x: 0, y: 0, width: 10, height: 5}
]
// console.log(x)
function detectCollision(objects, point) {
    let findObject = objects.find((object) => {
       return point.x >= object.x && point.x <= object.x + object.width &&
        point.y >= object.y && point.y <= object.y + object.height
    })
    return findObject
}

console.log(detectCollision(myObjects, {x: 4, y: 2}))