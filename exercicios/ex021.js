let vetor = [1, 4, 6, 9]
    vetor.push(8)
    vetor.push(2)
    vetor.sort()
    console.log(vetor)
    console.log(`Este vetor tem ${vetor.length} Posições.`)
let pos = vetor.indexOf(2)
    console.log(`O número 2 está na ${pos} posição.`)
    for(pos in vetor){
        console.log(vetor[pos])
    }




/*for(pos in vetor){
    console.log(`Na posição ${pos} o valor interno é ${vetor[pos]}`)
}
console.log(`o 4º valor é o ${vetor[3]}`)*/