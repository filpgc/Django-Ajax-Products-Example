function getProducts(response) {
    var Json = JSON.parse(response)
    textlist = ""
    for (var i = 0; i < Json.length; i++) {
        textlist += "<input type='radio'  name='product' id=" + Json[i].pk + ">" + Json[i].fields['name'] + ", €" + Json[i].fields['price'] + "<br>"
    }
    $('#name').val('Name')
    $('#description').val("Description")
    $('#price').html("Price")
    if (textlist == "")
        $("#productlist").html("No products available, add one below please")
    else
        $("#productlist").html(textlist)

}

$("#productlist").ready(function() {
    $.ajax({
        url: 'products/',
        type: 'GET',
        success: getProducts,
    });
});

$("#details").click(function(e) {
    var id = $("input[name=product]:checked").attr('id');
    $.ajax({
        type: "GET",
        url: 'products/',
        dataType: 'json',
        success: function(response) {
            var Json = JSON.parse(response)
            for (var i = Json.length - 1; i >= 0; i--) {
                if (id == Json[i].pk) {
                    $('#name').val(Json[i].fields['name'])
                    $('#description').val(Json[i].fields['description'])
                    $('#price').val(Json[i].fields['price'])
                    break;
                }
            }
        },
    });

});


$("#add").click(function(e) {
    var Name = $('input[name=Name]').val()
    var Description = $('input[name=Description]').val()
    var Price = $("input[name=Price]").val()
    $.ajax({
        type: "POST",
        url: '/productadded/',
        dataType: 'json',
        data: JSON.stringify({
            'name': Name,
            'description': Description,
            'price': Price
        }),
        success: getProducts
    });
});



$("#delete").click(function(e) {
    var id = $("input[name=product]:checked").attr('id');
    $.ajax({
        type: 'DELETE',
        url: '/productremoved/',
        dataType: 'json',
        data: JSON.stringify({
            'pk': id
        }),
        success: getProducts
    });

});

$("#update").click(function() {
    var id = $("input[name=product]:checked").attr('id');
    var Name = $('input[name=Name]').val()
    var Description = $('input[name=Description]').val()
    var Price = $("input[name=Price]").val()

    $.ajax({
        url: 'productupdated/',
        type: 'PUT',
        dataType: 'json',
        data: JSON.stringify({
            'pk': id,
            'name': Name,
            'description': Description,
            'price': Price
        }),
        success: getProducts,
    });

});