
var date = new Date()
var hour = date.getHours()

//daca e dimineata atunci scriu 'Buna dimineata!'
//dimineata=ora pana in 12
//altfel daca este pranz'pofta buna!'
//daca este dupa amiaza scriu 'buna ziua'
//daca este noapte scriu 'Nopate buna!'

var startOfNight=22

if (hour < 4) {
    document.write('Noapte buna!')
}
if (hour < 12) {
    document.write ('Buna dimineata')
}else if (hour===12) {
    document.write ('Pofta buna!')
}else if (hour  < 17) {
    document.write ('Buna ziua!')
}else if ( hour < 22) {
    document.write ('Buna seara!')
} else{
    document.write('Nopate buna!')
}

