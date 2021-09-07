function bodyShot() {
    html2canvas(document.body)
    .then(
        function (canvas) {
            drawImg(canvas.toDataURL('image/png'));

            saveAs(canvas.toDataURL(), 'file-name.png');
        }).catch(function (err) {
            console.log(err);
        });
    }
    function partShot() {
        html2canvas(document.getElementById("container"))
        .then(function (canvas) {
            drawImg(canvas.toDataURL('image/jpeg'));
            saveAs(canvas.toDataURL(), 'file-name.jpg');
        }).catch(function (err) {
            console.log(err);
        });
    }
    function drawImg(imgData) {
        console.log(imgData);
        return new Promise(function reslove() {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var imageObj = new Image();
            imageObj.onload = function () {
                ctx.drawImage(imageObj, 10, 10);
            };
            imageObj.src = imgData;
        }, function reject() { });
    } 
    function saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else { window.open(uri);
     }
    }