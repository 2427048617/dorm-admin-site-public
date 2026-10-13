/* ============================================================
   宿舍查寝销假管理系统 · 建设方案网站 — 交互脚本
   ============================================================ */
(function () {
    'use strict';

    // 移动端导航展开/收起
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mainNav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    }

    // 当前页面导航高亮（body 上通过 data-page 标记当前页）
    var page = document.body.getAttribute('data-page') || 'index';
    var links = document.querySelectorAll('.main-nav a[data-page]');
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('data-page') === page) {
            links[i].classList.add('active');
        }
    }

    // 页脚年份自动更新
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
