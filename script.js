document.addEventListener('DOMContentLoaded', function() {
    var currentImageIndex = 0; // 当前显示图片的索引
    var images = [ // 图片路径数组
      'news1.jpg',
      'news2.jpg',
      'news3.jpg',
      'news4.jpg',
      'news5.jpg',
      'news6.jpg'
    ];
    var newsPhotoSection = document.getElementById('news-photo'); // 图片展示区域
    var indicatorsContainer = document.querySelector('.photo-indicators'); // 指示器容器
    var leftImage = document.querySelector('.left-button'); // 左侧切换按钮
    var rightImage = document.querySelector('.right-button'); // 右侧切换按钮
    var isPaused = false; // 是否暂停自动切换
  
    // 创建指示器点
    function createIndicators() {
      images.forEach(function(_, index) {
        var indicator = document.createElement('div');
        indicator.classList.add('photo-indicator');
        // 点击指示器点时切换到对应的图片并暂停
        indicator.addEventListener('click', function() {
          changeImage(index);
          pauseFor15Seconds();
        });
        indicatorsContainer.appendChild(indicator);
      });
    }
  
    // 更新指示器点的激活状态
    function updateIndicators() {
      var indicators = document.querySelectorAll('.photo-indicator');
      indicators.forEach(function(indicator, index) {
        indicator.classList.toggle('active', index === currentImageIndex);
      });
    }
  
    // 更改图片展示
    function changeImage(index, slideDirection) {
      newsPhotoSection.classList.remove('slide-left', 'slide-right'); 
      if (slideDirection) {
        newsPhotoSection.classList.add(slideDirection);
      }

      // 添加一个小延迟来等待 CSS 动画开始
      setTimeout(function() {
        newsPhotoSection.style.backgroundImage = 'url(' + images[index] + ')';
        currentImageIndex = index; // 更新当前图片索引
        updateIndicators(); // 更新指示器状态
      }, 20);
    }
  
    // 切换到下一张图片
    function nextImage() {
      var newIndex = (currentImageIndex + 1) % images.length;
      changeImage(newIndex, 'slide-right');
    }

    // 切换到上一张图片
    function previousImage() {
      var newIndex = (currentImageIndex - 1 + images.length) % images.length;
      changeImage(newIndex, 'slide-left');
    }

  
    // 暂停自动切换15秒钟
    function pauseFor15Seconds() {
      isPaused = true;
      setTimeout(function() {
        isPaused = false;
      }, 15000);
    }
  
    // 为左右切换按钮绑定事件
    leftImage.addEventListener('click', function() {
      previousImage();
      pauseFor15Seconds();
    });
  
    rightImage.addEventListener('click', function() {
      nextImage();
      pauseFor15Seconds();
    });
  
    // 显示按钮
    function showButtons() {
      leftImage.style.opacity = 1;
      rightImage.style.opacity = 1;
    }
  
    // 隐藏按钮
    function hideButtons() {
      leftImage.style.opacity = 0;
      rightImage.style.opacity = 0;
    }
  
    // 为新闻区添加鼠标悬停事件
    newsPhotoSection.addEventListener('mouseenter', showButtons);
    newsPhotoSection.addEventListener('mouseleave', hideButtons);
    leftImage.addEventListener('mouseenter', showButtons);
    rightImage.addEventListener('mouseenter', showButtons);
    leftImage.addEventListener('mouseleave', hideButtons);
    rightImage.addEventListener('mouseleave', hideButtons);
  
    // 创建指示器点
    createIndicators();
    // 设置初始图片
    changeImage(currentImageIndex);
  
    // 每3秒自动切换图片
    var autoChangeInterval = setInterval(function() {
      if (!isPaused) {
        nextImage();
      }
    }, 7000);

    // minilogo的跳转功能
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
