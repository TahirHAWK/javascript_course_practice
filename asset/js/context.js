let john = {
    firstname: "John",
    lastname: "Doe",
    drivecar(){
        function imAfunctionNotamethod(){
            console.log(this)
        }
        imAfunctionNotamethod()
        console.log(this.firstname + " " + this.lastname + " is driving a car.")
    }
}

john.drivecar()


function breathe() {
    console.log(this.firstname + " " + this.lastname + " just breathed like exchaled and inhaled.")
}

breathe.call(john)