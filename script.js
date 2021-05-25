
function barcodeGen() {

    var text = document.querySelector('.input-text').value;
    var height = document.querySelector('.input-height').value;
    var width = document.querySelector('.input-width').value;
    
    JsBarcode('#barcode', text , {

        background : '#fff',

        color : '#000',

        width: width,

        height : height,

        displayValue : true

    });

}