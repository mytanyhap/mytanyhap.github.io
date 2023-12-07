$(document).ready(function () {
    $('#nav_list a').click(function (event) {
        event.preventDefault(); //default link behavior

        var fileName = $(this).attr('title'); // get title to build JSON name
        var jsonFilePath = 'json_files/' + fileName + '.json'; // build path JSON file

        $('main').empty();  // clear content in main element


        // Ajax request to get JSON data ??
        $.getJSON(jsonFilePath, function (data) {
            var speakerData = data.speakers[0];

            // html with new data
            var htmlContent = '<h1>' + speakerData.title + '</h1>' +
                '<h2>' + speakerData.month + '</h2>' +
                '<h3>' + speakerData.speaker + '</h3>' +
                '<img src="' + speakerData.image + '" alt="' + speakerData.speaker + '_picture">' +
                '<p>' + speakerData.text + '</p>';

            // new html to the main element
            $('main').append(htmlContent);
        });
    });
}); // end ready