var love = setInterval(function () {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function () {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
    });
}, 500);

function verify(){
    loopy()
    function loopy() {
        var num = 0
        var flag= 1
        sWord = "123"
        while (sWord == null || $.md5(sWord) != "a27cc431ba1b50bd6a1e84439f30ba02") {//设置密码
            if (num == 5){
                alert("密码不对，咱就别偷看了...")
            }
            if (num == 10){
                alert("佩服你的毅力...慢慢试吧...")
            }
            if (num == 15){
                flag = 0
                alert("别看啦，求求啦...")
                redirect_web()
                break
            }
            num+=1
            sWord = prompt("⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄   (害羞.jpg ")
        }
        if (flag == 1){
            alert("啦啦啦，小海鸥来啦")
        }
    }
}

//计算天数
function DateDiff(sDate1, sDate2) {    //sDate1和sDate2是xxxx-xx-xx格式
    var aDate, oDate1, oDate2, iDays
    aDate = sDate1.split("/")
    oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0])    //转换为12-18-2002格式
    aDate = sDate2.split("/")
    oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0])
    iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数
    return iDays
}

//调用上面的DateDiff，返回计算的天数
function love_days() {
    love_begin = "2019/12/25"
    var datetime = new Date();
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    love_now = year + "/" + month + "/" + date
    var days = DateDiff(love_begin, love_now);
    return days

}

//将日期拼接好，写入<h3>标签
function wirte_to_dom(){
    var h3 = document.getElementById("compute_days");
    h3.innerText = "我们在一起已经"+love_days()+"天了"
}

//试一下重定向
function redirect_web() {
        location.assign("error.html");
}



