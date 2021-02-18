let todo = [];

function addThings() {

    let t = "";
    let d = "";

    t = $('#title').val();
    d = $('#description').val();

    let newThings = {
        title1: t,
        description1: d,
    };

    todo.push(newThings);
    displayThings();

    $('#title').val('');
    $('#description').val('');
}

function deleteThings(j) {
    $('.todo-list .items').eq(j).addClass('gry');
}

function displayThings() {

    let thingsObject = "";

    for (let i = 0; i < todo.length; i++) {

        thingsObject += '<div class="items">';
        thingsObject += '<div class="item-no">';
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

    displayThings();
});

