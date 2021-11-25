function solve(f, s) {
    const face = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'J', 'K', 'A'];
    const suit = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }
    if (!face.includes(f)){
        throw new Error('Error')
    }
    if (!suit[s]){
        // !Object.keys(suit).includes(s)
        throw new Error('Error')
    }
    return {
        f,
        s,
        toString(){
           return `${f}${suit[s]}`
        }
    }
}
// console.log(solve('A', 'S'));
// console.log(solve('10', 'H'));
// console.log(solve('1', 'C'));
const myCard = solve('A', 'S')
console.log(myCard.toString());