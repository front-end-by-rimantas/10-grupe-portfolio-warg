function renderServices( data ) {
    let HTML ='';

    for (let  i= 0;  i<data.length; i++) {
    
        HTML += '<div class="service-box">\
        <i class="fa fa-'+ data[i].icon +'"></i>\
        <h3>'+ data[i].title +'</h3>\
        <p>'+ data[i].text +'</p>\
    </div>';

    }

    return document.getElementById( 'service-make' ).innerHTML = HTML;
}