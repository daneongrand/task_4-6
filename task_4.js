function printTriangle() {
    let i = 0
    let max = 6
    while (i < max) {
        let space = ""
        let sharp = ""
        for (let j = 0; j < max - i; j++) {
            space += " "
            }
        for (let j = 0; j < i; j++) {
            sharp += "#"
            }
        console.log(space + sharp)
        i++
    }   
}