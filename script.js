// 이미지 페이드 인 애니메이션
document.addEventListener("DOMContentLoaded", function() {
    const fadeImage = document.querySelector('.fade-in-image');

    // 페이지 스크롤 시 이미지를 서서히 나타나게 함
    window.addEventListener('scroll', function() {
        const rect = fadeImage.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            fadeImage.classList.add('visible');
        }
    });

    // 버튼 클릭 시 애니메이션 효과 추가
    const animateBtn = document.getElementById('animateBtn');
    animateBtn.addEventListener('click', function() {
        alert('Button Clicked! Add more animations or actions here.');
    });
});
