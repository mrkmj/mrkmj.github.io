
var checkHttps=document.getElementById('checkHttps')


function checkHttps () {
    BaiduHttps.useHttps();
};
function baiduWithHttps (formname) {
    var data = BaiduHttps.useHttps();
    if (data.s === 0) {
        return true;
    }
    else {
        formname.action = 'https://www.baidu.com/baidu' + '?ssl_s=1&ssl_c' + data.ssl_code;
        return true;
    }
};
