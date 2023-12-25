var deviceWidth
setHtmlFontSize()

if (window.addEventListener) {
    window.addEventListener('resize', function () {
        setHtmlFontSize()
    }, false)
}
function setHtmlFontSize () {
    deviceWidth = document.documentElement.clientWidth > 1728 ? 1728 : document.documentElement.clientWidth
    document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 17.28 + 'px !important'
}