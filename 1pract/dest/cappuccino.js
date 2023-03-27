"use strict";
function coffee(size, milk, taste) {
    let price = 0;
    if (size == 'маленький') {
        price += 150;
    }
    if (size == 'средний') {
        price += 180;
    }
    if (size == 'большой') {
        price += 200;
    }
    if (milk == 'банановое') {
        price += 100;
    }
    if (milk == 'кокосовое') {
        price += 110;
    }
    if (milk == 'соевое') {
        price += 130;
    }
    if (taste == 'ягодный') {
        price += 10;
    }
    if (taste == 'ванильный') {
        price += 20;
    }
    if (taste == 'карамельный') {
        price += 30;
    }
    if (taste == 'шоколадный') {
        price += 40;
    }
    console.log(price);
}
coffee('маленький', 'банановое', 'ванильный');
coffee('большой', '', 'шоколадный');
coffee('средний', 'соевое');
coffee('средний');
