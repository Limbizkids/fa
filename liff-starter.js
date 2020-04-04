window.onload = function (e) {
    liff.init(function () {
        getP();
    });
};

function getP(){
    var tipe = getParameterByName('type')
    if (!tipe) {
        document.getElementById('textx').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('usqvsFAyTZ4IIpN1WYMn8W+oE03ro1bhuQ7gUNw/uBAdmsLcn0TAAJucryYDBAUnxFV7jKF+TIteY7lp8tUvP0W8LIPzlc853Nsf//XB7a+dnXUCQKh9UpJIoCp94MDzwVSnZWawjW98AAg6H8OZ/VGUYhWQfeY8sLGRXgo3xvw=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('imagex').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LUdYcTRWdms5P3R5cGU9aW1hZ2UmaW1nPWh0dHBzOi8vd2FsbHBhcGVyc3R1ZGlvMTAuY29tL3N0YXRpYy93cGRiL3dhbGxwYXBlcnMvMTAwMHg1NjMvMTY4ODkxLmpwZwoKdHlwZSA9PiBpbWFnZQppbWcgPT4gTGluayAobXVzdCBiZSBIVFRQUyk=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('videox').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('bGluZTovL2FwcC8xNjAyNjg3MzA4LUdYcTRWdms5P3R5cGU9dmlkZW8mb2N1PWh0dHBzOi8vdGlueXVybC5jb20veThvZzNvcjUmcGl1PWh0dHBzOi8vaW1hZ2VzNi5hbHBoYWNvZGVycy5jb20vNzEwL3RodW1iLTM1MC03MTAxMzIucG5nCgp0eXBlID0+IHZpZGVvCm9jdSA9PiB2aWRlbyB1cmwKcGl1ID0+IHByZXZpZXcgaW1hZ2U=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('audiox').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('jW71j2NRJkBMFW3IRWbiUOR8/EPg4OG6yMamvwRk1Q0djJUgHjkR9gixeRwXuZT5AAdiMNh1elCLqFDayUGE7zLdVaD9C6LWIAoUYkshmLZpTBqhG4+WnIAsbno9BQ/w5/kzIaVH/LU7NHJcvGykvwdB04t89/1O/w1cDnyilFU=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
        document.getElementById('stickerx').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('V2l0aCBBbmltYXRpb246CmxpbmU6Ly9hcHAvMTYwMjY4NzMwOC1HWHE0VnZrOT90eXBlPXN0aWNrZXImc3RrPWFuaW0mc2lkPTMyMTI4MjMxJnBrZz0zMDk5MzEyCgpObyBBbmltYXRpb246CmxpbmU6Ly9hcHAvMTYwMjY4NzMwOC1HWHE0VnZrOT90eXBlPXN0aWNrZXImc3RrPW5vYW5pbSZzaWQ9MzIxMjgyMzEmcGtnPTMwOTkzMTIKCnR5cGUgPT4gc3RpY2tlcgpzdGsgPT4gYW5pbSAvIG5vYW5pbQpzaWQgPT4gc3RpY2tlciBpZApwa2cgPT4gcGFja2FnZXMgaWQ=')
            }]).then(function () {
                liff.closeWindow();
            });
        });
    } else {
        makeText();
        makeImage();
        makeVideo();
        makeAudio();
        makeSticker();
        meProfile();
    }
    }

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getProfile(){
    liff.getProfile().then(function (profile) {
        document.getElementById('userid').textContent = 'Hai  ' + profile.displayName;
        document.getElementById('main').src = profile.pictureUrl;        
        document.getElementById('close').addEventListener('click', function () {
            liff.closeWindow();
        });
    });
}

function makeText(){
    var tipe = getParameterByName('type');
    if (tipe === 'text') {
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeImage(){
    var tipe = getParameterByName('type');
    if (tipe === 'image') {
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeVideo(){
    var tipe = getParameterByName('type');
    if (tipe === 'video') {
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeAudio(){
    var tipe = getParameterByName('type');
    if (tipe === 'audio') {
        liff.sendMessages([{
            type: 'audio',
            originalContentUrl: getParameterByName('link'),
            duration: 60000
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeSticker(){
    var tipe = getParameterByName('type');
    if (tipe === 'sticker') {
        var stk = getParameterByName('stk');
        var sid = getParameterByName('sid');
        var pkg = getParameterByName('pkg');
        var ep = '';
        if (stk === 'anim') {
            ep = "/IOS/sticker_animation@2x.png";
        } else {
            ep = "/IOS/sticker@2x.png";
        }
        liff.sendMessages([{
          type: "template",
          altText: "Sticker",
          template: {
             type: "image_carousel",
             columns: [{
                 imageUrl: "https://stickershop.line-scdn.net/stickershop/v1/sticker/"+sid+ep,
                 action: {
                     type: "uri",
                     uri: "line://shop/sticker/detail/"+pkg}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function meProfile(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        var stat = prof.statusMessage;
        if (stat == null) {
            var stat = " - ";
        }
        if (stat.length > 60) {
            var stat = "Status Message is to long! Max 60 words";
        }
        if (tipe === 'profile') {
            liff.sendMessages([{messages: [{
            type:"image",
            originalContentUrl: prof.pictureUrl,
            previewImageUrl: prof.pictureUrl,
            animated: True,
            extension: "jpg",
            sentBy: {
            label: prof.displayName,
            iconUrl: prof.pictureUrl,
            linkUrl: "line://app/1647207293-rNJ7MlJm?type=profile"
            }
            }
            ]
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}
