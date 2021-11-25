function solve(area, vol, dataAsJSON) {    
    return JSON.parse(dataAsJSON).map(figure => ({
        area: area.call(figure),
        volume: vol.call(figure)
    }))
}
const example = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`

console.log(solve(area, vol, example))

function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
}