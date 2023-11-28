let arrayvuoto = []
arrayvuoto.push(1)
arrayvuoto.push(2)
arrayvuoto.push(3)
arrayvuoto.push(4)
arrayvuoto.push(5)
arrayvuoto.push(6)
arrayvuoto.push(7)
arrayvuoto.push(8)
arrayvuoto.push(9)
arrayvuoto.push(10)


arrayvuoto[arrayvuoto.length - 1] = 100

console.log(arrayvuoto)

let totalShoppingCart = 51

let prezzoFinaleBlackFriday = totalShoppingCart -= (totalShoppingCart * 0.2)

if (prezzoFinaleBlackFriday <= 50) {
    console.log("Black Friday! Hai ricevuto uno sconto del 20%. Il totale è " + prezzoFinaleBlackFriday + " + 10€ spedizione. Totale complessivo " + (prezzoFinaleBlackFriday + 10) + "€")
}
else {
    console.log("Black Friday! Hai ricevuto uno sconto del 20%. La spedizione è in omaggio perchè hai speso più di 50€. Il totale complessivo è " + prezzoFinaleBlackFriday)
}