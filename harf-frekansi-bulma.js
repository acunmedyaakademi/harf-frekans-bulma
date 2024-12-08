let girilenCumle = prompt("Bir cümle giriniz.");

let liste = {};

for (const cumle of girilenCumle) {
    if(liste[cumle]){
        liste[cumle] += 1;
    }else{
        liste[cumle] = 1;
    }
    liste[cumle] = (liste[cumle] || 0) +1;
}
console.log(liste);
