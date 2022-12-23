class chair{
color:string
brand:string
price:number
legs:number
movable:boolean
constructor(){
    this.color='yes'
    this.brand='yes is there'
this.price=500
this.legs=4
this.movable=true
}
GuaranteeOfChair(){
    return "2 years"
}
}

var chair1=new chair()
console.log(chair1.brand)
console.log(chair1.GuaranteeOfChair())

