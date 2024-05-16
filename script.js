var menu = {
    "pizza_class_1": [
        { "name": "Margherita", "contents": ["Tomatsås", "Ost"], "price": 65 },
        { "name": "Vesuvio", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 65 },
        { "name": "Altono", "contents": ["Tomatsås", "Ost", "Tonfisk"], "price": 65 }
    ],
    "pizza_class_2": [
        { "name": "Calzone", "contents": ["Tomatsås", "Ost", "Skinka"], "price": 80 },
        { "name": "Capricciosa", "contents": ["Tomatsås", "Ost", "Skinka", "Champinjoner"], "price": 70 },
        { "name": "Tomaso", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor"], "price": 70 },
        { "name": "Hawaii", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas"], "price": 70 },
        { "name": "Oriental", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs"], "price": 70 },
        { "name": "Venezia", "contents": ["Tomatsås", "Ost", "Skinka", "Tonfisk"], "price": 70 },
        { "name": "Bolognese", "contents": ["Tomatsås", "Ost", "Köttfärs", "Lök"], "price": 70 },
        { "name": "Napoli", "contents": ["Tomatsås", "Ost", "Räkor", "Champinjoner"], "price": 70 }
    ],
    "pizza_class_3": [
        { "name": "Bravo", "contents": ["Tomatsås", "Ost", "Skinka", "Bacon", "Lök", "a:Ägg"], "price": 75 },
        { "name": "Princessa", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner"], "price": 75 },
        { "name": "Kroppkärr", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "Champinjoner"], "price": 75 },
        { "name": "Afrikano", "contents": ["Tomatsås", "Ost", "Skinka", "Ananas", "Curry", "Banan"], "price": 75 },
        { "name": "Önska", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Champinjoner"], "price": 85 },
        { "name": "Lambada", "contents": ["Tomatsås", "Ost", "Skinka", "Köttfärs", "a:Räkor"], "price": 75 },
        { "name": "Alsterdalen", "contents": ["Tomatsås", "Ost", "Skinka", "a:Crabfish", "a:Räkor"], "price": 75 },
        { "name": "Paradis", "contents": ["Tomatsås", "Ost", "Skinka", "a:Räkor", "Ananas"], "price": 75 },
        { "name": "Roma", "contents": ["Tomatsås", "Ost", "Skinka", "Kantareller", "Tomater (färska)"], "price": 75 },
        { "name": "Banjogatan", "contents": ["Tomatsås", "Ost", "Skinka", "Salami", "Paprika"], "price": 75 },
        { "name": "Rimini", "contents": ["Tomatsås", "Ost", "Köttfärs", "Gorgonzolaost", "Lök"], "price": 75 },
        { "name": "Opera", "contents": ["Tomatsås", "Ost", "Köttfärs", "Ananas", "Curry", "Banan"], "price": 75 },
        { "name": "Mesopotamia", "contents": ["Tomatsås", "Ost", "Salami", "Köttfärs", "a:Nötter"], "price": 75 }
    ],
    "sauces": [
        { "name": "Bearnaisesås 10 cl ", "price": 10 },
        { "name": "Kebabsås mild 10 cl ", "price": 10 },
        { "name": "Kebabsås stark 10 cl ", "price": 10 },
        { "name": "Kebabsås blandad 10 cl ", "price": 10 },
        { "name": "Tzatzikisås 10 cl ", "price": 10 },
        { "name": "Vitlökssås 10 cl ", "price": 10 }
    ],
    "drinks": [
        { "name": "Coca-Cola 33 cl ", "price": 15 },
        { "name": "Coca-Cola light 33 cl ", "price": 15 },
        { "name": "Fanta 33 cl ", "price": 15 },
        { "name": "Sprite 33 cl ", "price": 15 },
        { "name": "Mineralvatten 33 cl ", "price": 15 },
        { "name": "Lättöl 33 cl ", "price": 15 },
        { "name": "Coca-Cola 50 cl ", "price": 20 },
        { "name": "Fanta 50 cl ", "price": 20 }
    ]
}
let order = [];
let sumText = 0;

$(document).ready(function () {

    let headerArray = Object.keys(menu); //skapar en array av objectets kategorier
    //console.log(headerArray); = (5) ['pizza_class_1', 'pizza_class_2', 'pizza_class_3', 'sauces', 'drinks']
    makeRubrik(headerArray); //skapar rubriker efter keys i menu obj
    showSelectedCategory(); //


});

//#region skapa en header
function makeRubrik(rubrik) {
    for (let i = 0; i < rubrik.length; i++) {
        let categoryName = $("<option></option>").text(rubrik[i]);
        $(".form-select").append(categoryName);
    }
}
//#endregion

//#region
function showSelectedCategory() {
    $('.form-select').change(function () {
        $('#accordion').empty();
        let option = $(this).val(); //kollar vilken  som användaren valt 
        let categoryArray = menu[option];

        //region loppar igenom alla pizzor beroende på användarens val(ex: option=pizzor_class_1, item=Margherita & Vesuvio & Altono))
        categoryArray.forEach(item => {
            //#region accordion NOT COLLAPSE
            let accordion_item = $('<div></div>').addClass('accordion-item');
            let accordion_header = $('<h2></h2>').text(item.name + ' ' + item.price + ' kr').addClass('accordion-header d-flex');
            let accordion_button = $('<button></button>').text('ingerienser').addClass('accordion-button').attr('data-bs-toggle', 'collapse').attr('data-bs-target', item.name).attr('aria-expanded', 'false').attr('aria-controls', item.name);
            //#endregion

            //#region COLLAPSE
            let accordion_collapse = $('<div></div>').addClass('accordion-collapse collapse')
                .attr('id', item.name)
                .attr('data-bs-parent', '#accordion');
            let accordion_body = $('<div></div>').addClass('accordion-body')
                .text(item.contents);



            //#region lägg till show/ ta bort show klass
            let collapse_has_class_show = false;
            accordion_button.on('click', () => {
                collapse_has_class_show = accordion_collapse.hasClass('show'); //true om collapse har klassen show
                if (collapse_has_class_show === true) {
                    accordion_collapse.removeClass('show');
                } else if (collapse_has_class_show === false) {
                    accordion_collapse.addClass('show');
                }
            })
            //#endregion

            //#endregion

            //#region APPEND
            $('#accordion').append(accordion_item);
            accordion_item.append(accordion_header, accordion_collapse);
            accordion_header.append(accordion_button);
            accordion_collapse.append(accordion_body);
            //#endregion

            //om contents inte finns ska den ta bord alla ingridienser(accordion-button)
            let hasContent = item.contents;
            if (hasContent === undefined) {
                console.log('im gone');
                $('.accordion-button').remove();
            }

            //funktion som skapr but_knapp
            calc_sum(accordion_header, item.price);
        });

    });
}

//#endregion

//#region calc_sum

function calc_sum(accordion_header, itemPrice) {

    let btn_add_order = $('<button>').addClass('btn btn-primary').text('buy');
    accordion_header.append(btn_add_order);

    btn_add_order.on('click', () => {
        order.push(itemPrice);

        let summa = 0;

        // Loopa igenom varje element i arrayen order och lägg till varje element i summan
        order.forEach(item => {
            summa += Number(item); // Konvertera varje element till ett nummer och lägg till det i summan
        });

        $('#summa_kr').text(summa);
    });






}
