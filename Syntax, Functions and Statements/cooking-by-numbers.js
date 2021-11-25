function solve(...input) {
    const num = Number(input[0])
    input.slice(1).reduce((acc, curr) => {
        
        const actions = {
            chop: () => acc / 2,
            dice: () =>  Math.sqrt(acc),
            spice: () => acc + 1,
            bake: () => acc * 3,
            fillet: () => acc - (acc / 5)
        }
        const commandFn = actions[curr]
        console.log(commandFn());
        return commandFn()
    },num)  
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
