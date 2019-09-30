function renderServices( data ) {
    let HTML ='';

    for (let  i= 0;  i<data.length; i++) {
        const obj = data[i];
    
        HTML += `<div class="service-box">\
        <i class="fa fa-${obj.icon}"></i>\
        <h3>${obj.title}</h3>\
        <p>${obj.text}</p>\
    </div>`;

    }

    return document.getElementById( 'service-make' ).innerHTML = HTML;
}