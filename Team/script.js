document.addEventListener('DOMContentLoaded', function() {
    // 选择 mini logo 元素
    var miniLogo = document.querySelector('.foot-minilogo');

    // 添加点击事件监听器
    miniLogo.addEventListener('click', function() {
      // 平滑滚动到页面顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
});
