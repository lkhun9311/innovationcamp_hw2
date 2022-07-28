function isValidContents(title, username, password, contents) {
    if (title === '') {
        alert('제목을 입력해주세요');
        return false;
    } else if (title.trim().length > 20) {
        alert('제목을 공백 포함 20자 이하로 입력해주세요');
        return false;
    }
    if (username === '') {
        alert('작성자를 입력해주세요');
        return false;
    } else if (username.length > 10) {
        alert('작성자를 10자 이하로 입력해주세요');
        return false;
    }
    if (password === '') {
        alert('비밀번호를 입력해주세요');
        return false;
    } else if (password.length > 20) {
        alert('비밀번호를 20자 이하로 입력해주세요');
        return false;
    }
    if (contents === '') {
        alert('내용을 입력해주세요');
        return false;
    } else if (contents.trim().length > 140) {
        alert('내용을 공백 포함 140자 이하로 입력해주세요');
        return false;
    }
    return true;
}

function editPost(id) {
    showEdits(id);
    let title = $(`#${id}-title`).text().trim();
    let username = $(`#${id}-username`).text().trim();
    // let password = $(`#${id}-password`).text().trim();
    let contents = $(`#${id}-div-contents-val`).text().trim();
    $(`#${id}-edit-title`).val(title);
    $(`#${id}-edit-username`).val(username);
    $(`#${id}-edit-area`).val(contents);
}

let i=1;
function showContent(id) {

    if(i>0){
        showDetail(id);
    }else{
        hideDetail(id);
    }
    i *= -1;
}

function showDetail(id) {
    document.getElementById(`${id}-div-contents`).style.display = 'block';

    $(`#${id}-title`).show();
    $(`#${id}-username`).show();
    $(`#${id}-contents`).show();

    $(`#${id}-edit-title`).hide();
    $(`#${id}-edit-username`).hide();
    $(`#${id}-edit-password`).hide();
    $(`#${id}-editarea`).hide();

    $(`#${id}-show`).show();
    $(`#${id}-edit`).show();
    $(`#${id}-submit`).hide();
    $(`#${id}-delete`).show();
}

function hideDetail(id) {
    document.getElementById(`${id}-div-contents`).style.display = 'none';

    $(`#${id}-title`).show();
    $(`#${id}-username`).show();
    $(`#${id}-contents`).hide();

    $(`#${id}-edit-title`).hide();
    $(`#${id}-edit-username`).hide();
    $(`#${id}-edit-password`).hide();
    $(`#${id}-editarea`).hide();

    $(`#${id}-show`).show();
    $(`#${id}-edit`).show();
    $(`#${id}-submit`).hide();
    $(`#${id}-delete`).show();
}

function showEdits(id) {
    document.getElementById(`${id}-div-contents`).style.display = 'none';

    $(`#${id}-edit-title`).attr("type", "text");
    $(`#${id}-edit-username`).attr("type", "text");
    $(`#${id}-edit-password`).attr("type", "password");

    $(`#${id}-title`).hide();
    $(`#${id}-username`).hide();
    $(`#${id}-contents`).hide();

    $(`#${id}-edit-title`).show();
    $(`#${id}-edit-username`).show();
    $(`#${id}-edit-password`).show();
    $(`#${id}-editarea`).show();

    $(`#${id}-show`).hide();
    $(`#${id}-edit`).hide();
    $(`#${id}-submit`).show();
    $(`#${id}-delete`).show();
}

// function hideEdits(id) {
//     $(`#${id}-title`).show();
//     $(`#${id}-username`).show();
//     $(`#${id}-contents`).show();
//
//     $(`#${id}-edit-title`).hide();
//     $(`#${id}-edit-username`).hide();
//     $(`#${id}-edit-password`).hide();
//     $(`#${id}-editarea`).hide();
//
//     $(`#${id}-show`).hide();
//     $(`#${id}-edit`).hide();
//     $(`#${id}-submit`).show();
//     $(`#${id}-delete`).show();
// }

$(document).ready(function (id) {
    getMessages();
})

function getMessages() {
    $('#cards-box').empty();
    $.ajax({
        type: 'GET',
        url: '/blog/boards',
        success: function (response) {
            for (let i = 0; i < response.length; i++) {
                let message = response[i];
                let id = message['id'];
                let title = message['title'];
                let username = message['username'];
                let contents = message['contents'];
                let modifiedAt = message['modifiedAt'];
                addHTML(id, title, username, contents, modifiedAt);
            }
        }
    })
}

function addHTML(id, title, username, contents, modifiedAt) {
    let date = modifiedAt.toString().substring(0,10);
    let time = modifiedAt.toString().substring(11,19);
    let modified = date + " " + time;
    let tempHtml = `<div class="card">
                        <div class="contents">
                            <div class="date"> ${modified} </div>
                            <span style="font-size: 15px"> [제목] </span> 
                            <div id="${id}-title" class="title"> ${title} </div>
                            <input id="${id}-edit-title" type="hidden" class="edit-title" placeholder="${title}">
                            <div style="display: block"></div>
                            <span style="font-size: 15px"> [작성자] </span> 
                            <div id="${id}-username" class="username"> ${username} </div>
                            <input id="${id}-edit-username" type="hidden" class="edit-username" placeholder="${username}">
                            <div style="display: block"></div>
                            <input id="${id}-edit-password" type="hidden" class="edit-password" placeholder="비밀번호 입력">
                        </div>
                        <div id="${id}-div-contents" class="contents" style="display: none" >
                            <span style="font-size: 15px"> [내용] </span>
                            <div class="text1" id="${id}-div-contents-val">
                                ${contents}
                            </div>
                        </div>
                        <div class="contents">
                            <div id="${id}-editarea" class="edit">
                                <span style="font-size: 15px"> [내용] </span>
                                <div class="text2">
                                    <textarea class="te-edit" name="" id="${id}-edit-area" cols="30" rows="5">${contents}</textarea>
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <img id="${id}-show" class="icon-show-or-hide" src="images/check1.png" alt="" onclick="showContent('${id}')">
                            <img id="${id}-edit" class="icon-start-edit" src="images/edit.png" alt="" onclick="editPost('${id}')">
                            <img id="${id}-delete" class="icon-delete" src="images/delete.png" alt="" onclick="deleteOne('${id}')">
                            <img id="${id}-submit" class="icon-end-edit" src="images/done.png" alt="" onclick="submitEdit('${id}')">
                        </div>
                    </div>`;
    $('#cards-box').append(tempHtml);
}

function writePost() {
    let title = $('#title').val();
    let username = $('#username').val();
    let password = $('#password').val();
    let contents = $('#contents').val();

    if (isValidContents(title, username, password, contents) === false) {
        return;
    }

    let data = {'title': title, 'username': username, 'password': password, 'contents': contents};

    $.ajax({
        type: "POST",
        url: "/blog/boards",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            alert('메시지가 성공적으로 작성되었습니다.');
            window.location.reload();
        }
    });
}

function submitEdit(id) {
    let title = $(`#${id}-edit-title`).val();
    let username = $(`#${id}-edit-username`).val();
    let password2 = $(`#${id}-edit-password`).val();
    let contents = $(`#${id}-edit-area`).val();

    if (isValidContents(title, username, password2, contents) === false) {
        return;
    }
    let password1 = prompt('비밀번호를 입력하세요');
    let data = {'title': title, 'username': username, 'password1': password1, 'password2': password2, 'contents': contents};

    $.ajax({
        type: "PUT",
        url: `/blog/boards/${id}`,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            if(response === true){
                alert('메시지 변경이 완료되었습니다.');
                window.location.reload();
            } else {
             alert("비밀번호가 일치하지 않습니다.")
            }
        }
    });
}

function deleteOne(id) {
    let password = prompt('비밀번호를 입력해주세요.');
    let data = {'password': password};
    $.ajax({
        type: "DELETE",
        url: `/blog/boards/${id}`,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            if(response === true){
                alert('메시지 삭제에 성공하였습니다.');
                window.location.reload();
            } else {
                alert('비밀번호가 일치하지 않습니다.');
            }
        }
    })
}