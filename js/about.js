window.onload = function () {
    // 改变code关键字颜色
    $('.code li').each(function () {
        //修改属性颜色
        var ats = ["class", "lang", "href", "id","src","alt"];
        for (var i in ats) {
            $(this).html($(this).html().replace(ats[i], '<span class="Red">' + ats[i] + '</span>'));
        }

        //修改标签颜色
        var tags = ['html','head','body','div','img','h2','footer','script','var','return'];
        for (var i in tags) {
            var re = new RegExp(tags[i],"g");
            $(this).html($(this).html().replace(re, '<span class="Green">' + tags[i] + '</span>'));
        }
        //修改a标签
        var a = ['&lt;a','&lt;/a','&lt;i','&lt;/i','&lt;canvas','&lt;/canvas','&lt;title','&lt;/title'];
        for(var i in a){
            $(this).html($(this).html().replace(a[i],'<span class="Green">'+a[i]+'</span>'));
        }
        // 修改属性值颜色
        var values = ['"zh-CN"', '"container"', '"title"', '"avatar"', '"logo.jpg"', '"me"', '"canvas"',
            '"http://luckyw.cn"', '"fa fa-home"', '"https://github.com/leoyaojy"', '"fa fa-github"', '"http://demo.luckyw.cn"', '"fa fa-th-large"'];
        for (var i in values) {
            $(this).html($(this).html().replace(values[i], '<span class="Yellow">' + values[i] + '</span>'));
        }
        //修改文本颜色
        var txt = ['About Me','I Am In ChangSha Now','Index','Github','Demo','1543639878','luckywgm@gmail.com'];
        for(var i in txt){
            $(this).html($(this).html().replace(txt[i],'<span class="Blue">'+txt[i]+'</span>'));
        }


    });
    var print = function (e, c, t) {
        setTimeout(function () {
            $(".ti-container").next("span").remove();
            e.show().find("pre").show().typeIt({
                speed: 50,
                autoStart: false,
                html: true,
                callback: function () {
                    $(".content").append(c);
                }
            }).tiPause(1000);
        }, t)
    };
    var arr = [{
        ele: ".one",
        cont: '<div class="title">About Me</div>',
        delay: 1000
    }, {
        ele: ".two",
        cont: '<img src="logo.jpg" alt="me" class="avatar">',
        delay: 4000
    }, {
        ele: ".three",
        cont: '<h2>I Am In ChangSha Now</h2>',
        delay: 8000
    }, {
        ele: ".four",
        cont: '<canvas id="canvas"></canvas>',
        delay: 12000
    }, {
        ele: ".five",
        cont: '',
        delay: 16000
    }, {
        ele: ".six",
        cont: '',
        delay: 18000
    }, {
        ele: ".seven",
        cont: '',
        delay: 22000
    }, {
        ele: ".eight",
        cont: '',
        delay: 26000
    }, {
        ele: ".nine",
        cont: '<footer>' +
        '<a href="http://luckyw.cn" target="_blank"><i class="fa fa-home"></i>Index</a>' +
        '<a href="https://github.com/leoyaojy" target="_blank"><i class="fa fa-github"></i>Github</a>' +
        '<a href="http://demo.luckyw.cn" target="_blank"><i class="fa fa-th-large"></i>Demo</a>' +
        '</footer>',
        delay: 30000
    }];
    for (var i in arr) {
        var item = arr[i];
        print($(item.ele), item.cont, item.delay);
    }
    setTimeout(draw, 16000);
    function draw() {
        var canvas = document.getElementById('canvas');
        var ctxt = canvas.getContext('2d');
        var cW = cH = canvas.width = canvas.height = 300;
        var cx = cW / 2, cy = cH / 2;
        var size = 50;
        var skills = ['html5', 'css3', 'nodeJs', 'js', 'jquery', 'angularJs'];
        for (var i = 0; i < 7; i++) {
            var r = size * (1 + i / 5);
            ctxt.fillStyle = "red";
            ctxt.globalAlpha = .2;
            ctxt.fill();
            // 绘制六角形
            for (var j = 0; j < 6; j++) {
                var deg = Math.PI * 2 / 6 * (j + .5);
                var X = cx + r * Math.cos(deg);
                var Y = cy + r * Math.sin(deg);
                j == 0 && ctxt.moveTo(X, Y) || ctxt.lineTo(X, Y);
            }
        }
        // 绘制文字
        for (var i = 0; i < 6; i++) {
            ctxt.globalAlpha = .6;
            var R = size * 2.5;
            ctxt.save();
            ctxt.translate(cx, cy);
            ctxt.fillStyle = 'blue';
            ctxt.textAlign = 'center';
            ctxt.textBaseline = 'middle';
            ctxt.font = "14px DejaVu Sans Mono";
            ctxt.fillText(skills[i],
                R * Math.cos((i * 60 + 90) / 180 * Math.PI),
                R * Math.sin((i * 60 + 90) / 180 * Math.PI)
            );
            ctxt.restore();
        }
        // 绘制连接线
        ctxt.save();
        ctxt.strokeStyle = 'black';
        ctxt.lineWidth = 3;
        ctxt.beginPath();
        ctxt.moveTo(cx + 1.6 * size * Math.cos(Math.PI / 3 * .5), cy + 1.6 * size * Math.sin(Math.PI / 3 * .5));
        ctxt.lineTo(cx + 1.8 * size * Math.cos(Math.PI / 3 * 1.5), cy + 1.8 * size * Math.sin(Math.PI / 3 * 1.5));
        ctxt.lineTo(cx + 1.8 * size * Math.cos(Math.PI / 3 * 2.5), cy + 1.8 * size * Math.sin(Math.PI / 3 * 2.5));
        ctxt.lineTo(cx + 1.6 * size * Math.cos(Math.PI / 3 * 3.5), cy + 1.6 * size * Math.sin(Math.PI / 3 * 3.5));
        ctxt.lineTo(cx + 1.8 * size * Math.cos(Math.PI / 3 * 4.5), cy + 1.8 * size * Math.sin(Math.PI / 3 * 4.5));
        ctxt.lineTo(cx + 1.8 * size * Math.cos(Math.PI / 3 * 5.5), cy + 1.8 * size * Math.sin(Math.PI / 3 * 5.5));
        ctxt.closePath();
        ctxt.stroke();
        ctxt.restore();
        // 绘制虚线
        var dots = [1.6, 1.8, 1.8, 1.6, 1.8, 1.8];
        ctxt.save();
        ctxt.setLineDash([4, 6]);
        ctxt.strokeStyle = 'yellow';
        ctxt.lineWidth = 2;
        for (var i in dots) {
            ctxt.beginPath();
            ctxt.moveTo(cx, cy);
            ctxt.lineTo(cx + dots[i] * size * Math.cos(Math.PI / 3 * (~~i + .5)), cy + dots[i] * size * Math.sin(Math.PI / 3 * (~~i + .5)));
            ctxt.stroke();
        }
        ctxt.restore();
    }

    $(".phone").on("click", function () {
        $(".phone").toggleClass("changeBgImg");
    });
};
