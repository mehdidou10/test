var customer = {};
var order = new Object();       /*  2 methode pour ecrire 1er customer
                                                           2er person*/

order.amount = 20.3
customer.firstName = 'ppppp'
customer.address = 'Alger'


var person = {
       firstname:'ahmed',
       
       address: {
        line1: 'Saoula',
        line2: ' Rue 01',
        city: 'Algiers',
        country: 'Algeria'
    },
    
       age:'20',
       statue:true,
       showage: function () {
        alert(this.age)

    },
       }

console.log(person.address.city)
console.log(customer) /* affichr sue console */
                           
person.showage()      /* afficher sur todo */





var amounts = [124.4, 100
    , 547, 5456, 5465, 212, 12]/*tableau [ ]*/

console.log(amounts.length) // 7

amounts.push(203)       /* tzid un element a la fin*/
amounts.push(400)
console.log(amounts.length) // 9
amounts.push(600)
amounts.pop()
console.log(amounts.length) // 9
amounts.shift() /* supprimer element d debut  */
amounts.shift()
amounts.shift()
amounts.unshift(1000)  /* tzid mn debut*/
console.log(amounts.length) // 7


console.log(amounts)

   

/*lll*/
var persons = [
    {
        firstName: 'p1',
        address: {
            line1: 'Saoula',
            line2: ' Rue 01',
            city: 'Algiers',
            country: 'Algeria'
        },
        age: 26,
        status: true
    },
    {
        firstName: 'p2',
        address: {
            line1: 'Saoula',
            line2: ' Rue 01',
            city: 'Algiers',
            country: 'Algeria'
        },
        age: 20,
        status: true
    },
    {
        firstName: 'p3',
        address: {
            line1: 'Saoula',
            line2: ' Rue 01',
            city: 'Algiers',
            country: 'Algeria'
        },
        age: 42,
        status: true
    }]
    for (var i = 0; i < persons.length; i++) {
        console.log(persons[i])
    }                                                     /* deux methodes pour afficher le tableau complets au lieu de faire a chaq fois console
                                                                      en cas ou il y un tbleau grand */
    
    for (var p of persons) {
        console.log(p)
    }










