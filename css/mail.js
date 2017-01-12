function checkInput() {
    var b = document.login.uin,
    a = document.login.pwd;
    if (0 == b.value.length) {
        b.focus();
        b.parentNode.className+="am-form-error am-form-feedback";
        return false;
    }
    if (0 == a.value.length) {
        a.focus();
        a.parentNode.className+="am-form-error am-form-feedback";
        return false;
    }
    document.login.submit();
    setTimeout(" document.login.pwd.value = '' ", 500);
    return false;
}