var userId;
getUser(function(uid) {
    console.log(uid);

    userId = uid;
});
// TODO: authenticate the user


function getCourseSummary() {
    var summaryType = $('input[name="course-summary-type"]:checked')[0].value;
    var summaryData = $('input[name="course-summary-data"]:checked')[0].value;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);

            $('#course-summary>table').remove();
            $('#course-summary').append(response.dataHtml);
        }
    };

    xmlhttp.open('GET', 'getCourseSummary?', true);
    xmlhttp.send();
}
