//extraction for data from e-commerce website "http://www.sezane.com/en"
//extraction Title
var title = $('.free-product__details__title');
var arrayTitle = [];

for (var i=0; i<title.length; i++) {
    arrayTitle.push($(title[i]).text())
};

//extraction Price
var price = $('.free-product__details__price');
var arrayPrice = [];

for (var i=0; i<price.length; i++) {
    arrayPrice.push($(price[i]).text())
};

//extraction caracteristique

var carac = $('.free-product__details__carac');
var arrayCarac = [];

for (var i=0; i<carac.length; i++) {
    arrayCarac.push($(carac[i]).text())
};


//array of objects with details
let allInfo = [];
for (var i=0; i< arrayCarac.length; i++) {
var o = {name: arrayTitle[i], price: arrayPrice[i], carac: arrayCarac[i], size:[arraySize[i]]}
allInfo.push(o)
}
