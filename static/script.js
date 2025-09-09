// AION Customer Service Script
console.log("AION Customer Service script loaded.");

document.addEventListener('DOMContentLoaded', () => {
    const btnShengdian = document.getElementById('btn-shengdian');
    const btnHuaijiu = document.getElementById('btn-huaijiu');
    const contentShengdian = document.getElementById('content-shengdian');
    const contentHuaijiu = document.getElementById('content-huaijiu');

    btnShengdian.addEventListener('click', () => {
        contentShengdian.style.display = 'block';
        contentHuaijiu.style.display = 'none';
        btnShengdian.classList.add('active');
        btnHuaijiu.classList.remove('active');
    });

    btnHuaijiu.addEventListener('click', () => {
        contentShengdian.style.display = 'none';
        contentHuaijiu.style.display = 'block';
        btnShengdian.classList.remove('active');
        btnHuaijiu.classList.add('active');
    });
});
