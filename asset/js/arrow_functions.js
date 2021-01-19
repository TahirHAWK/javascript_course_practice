/* // document.addEventListener("click", () => alert("Thank you for clicking."))
let myNumbers = [10, 500, 2000]
// let doubledNumbers = myNumbers.map((x) => {
//  return x*2
// })  <-- you can use it like this or make it even shorter
let doubledNumbers = myNumbers.map(x => x*2)
console.log(doubledNumbers)
*/
let john = {
    firstname: "John",
    lastname: "Doe",
    drivecar(){
        let imAfunctionNotamethod = () => console.log(this)
        imAfunctionNotamethod()
        // console.log(this.firstname + " " + this.lastname + " is driving a car.")
    }
}

john.drivecar()
