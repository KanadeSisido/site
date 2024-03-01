const menu_button = document.getElementById("menu-button");
const menu = document.getElementById("header-right");
const menu_bes = document.getElementById("header-right-wrapper");
const menu_ver = document.getElementById("header-right-wrapper-vert");
const menu_contents = document.getElementsByClassName("header-menu-items-ver");

menu_ver.style.display = "none";


//画面サイズが小さい時
if (window.innerWidth < 750)
    {

        menu.classList.add("header-menu-move");

        document.getElementById("menu-button-line-u").classList.remove("menu-button-hide");
        document.getElementById("menu-button-line-l").classList.remove("menu-button-hide");

        menu_bes.style.display = "none";
        menu_ver.style.display = "block";
    
    }
    else
    {
        menu_bes.style.display = "block";
        menu_ver.style.display = "none";
    }

//ボタンを押すとメニューが出たり引っ込んだり
menu_button.addEventListener("click", function()
{
    menu.classList.toggle("header-menu-move");
    document.getElementById("menu-button-line-u").classList.toggle("menu-button-hide");
    document.getElementById("menu-button-line-l").classList.toggle("menu-button-hide");
});

for (let i = 0; i < menu_contents.length; i++)
{
    menu_contents[i].onclick = (function()
    {
        menu.classList.add("header-menu-move");
        document.getElementById("menu-button-line-u").classList.remove("menu-button-hide");
        document.getElementById("menu-button-line-l").classList.remove("menu-button-hide");
    });
}

//画面サイズが変更されたとき
window.addEventListener("resize", function()
{
    if (window.innerWidth < 750)
    {

        menu.classList.add("header-menu-move");

        document.getElementById("menu-button-line-u").classList.remove("menu-button-hide");
        document.getElementById("menu-button-line-l").classList.remove("menu-button-hide");

        menu_bes.style.display = "none";
        menu_ver.style.display = "block";
    
    }
    else
    {
        menu_bes.style.display = "block";
        menu_ver.style.display = "none";
    }
});
