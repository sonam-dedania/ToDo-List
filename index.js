// ToDo
// 1 - Time styling
// 2 - Mobile responsiveness
// 3 - Add count (Pending, total)
// 4 - Time of ToDo item
// 5 - Show progress bar of completed items 
// 6 - Find profile from - https://github.com/Dipen-Dedania/awesome-github-profile-pages

let todo = [];
let cookieVal = getCookie("todo");
if (cookieVal) {
    todo = JSON.parse(cookieVal);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function addThings() {

    let t = "";
    let d = "";

    t = $('#title').val();
    d = $('#description').val();

    let newThings = {
        title1: t,
        description1: d,
        isDone: false
    };

    todo.push(newThings);
    setCookie("todo", JSON.stringify(todo), 30);
    displayThings();

    $('#title').val('');
    $('#description').val('');
}

function deleteThings(j) {
    //$('.todo-list .items').eq(j).addClass('gry');

    // setCookie("delete-todo", JSON.stringify(todo[j]), 30);
    todo[j].isDone = true;
    setCookie("todo", JSON.stringify(todo), 30);
    displayThings();
}

function displayThings() {

    let thingsObject = "";

    // let todo = getCookie("todo");
    // todo = JSON.parse(todo);

    for (let i = 0; i < todo.length; i++) {

        let status = (todo[i].isDone) ? 'gry' : '';
        thingsObject += '<div class="items ' + status + '">';
        thingsObject += '<div class="item-no animate__animated animate__zoomIn">';
        thingsObject += '<p>' + (i + 1) + '</p>';
        thingsObject += '        </div>';
        thingsObject += '    <div class="item-name">';
        thingsObject += '            <p class="title">' + todo[i].title1 + '</p>';
        thingsObject += '            <p>' + todo[i].description1 + '</p>';
        thingsObject += '        </div>';
        thingsObject += '    <div class="btn-div">';
        thingsObject += '        <button class="btn delete-btn" onClick="deleteThings(' + i + ')"><i class="fa fa-times" aria-hidden="true"></i></button>';
        thingsObject += '    </div>';
        thingsObject += '    </div>';
    }

    $('.todo-list').html(thingsObject);
}


$(document).ready(function () {

    setInterval(function () {
        var dt = new Date();
        document.getElementById("datetime").innerHTML = dt.toLocaleString();
    }, 1000);

    displayThings();
    // clock();

    // setInterval(function () {
    //     alert("Hey Sonam!")
    // }, 5000);

});

