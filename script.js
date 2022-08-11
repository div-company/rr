

function hidingContainer(container,btn,btn2)
{
                var hide = document.getElementById(container)
                hide.style.display = 'none'
                var up = document.getElementById(btn)
                up.style.display = 'none'
                var down = document.getElementById(btn2)
                down.style.display = 'grid'
}

function showContainer(container,btn,btn2)
{
                var hide = document.getElementById(container)
                hide.style.display = 'grid'
                var up = document.getElementById(btn)
                up.style.display = 'grid'
                var down = document.getElementById(btn2)
                down.style.display = 'none'
}

function showMenu()
{
    var hide = document.getElementById('show-phone-menu')
    hide.style.display = 'block'
    var hide = document.getElementById('show-phone-menu-blure')
    hide.style.display = 'block'
}

function hidingMenu()
{
    var hide = document.getElementById('show-phone-menu')
    hide.style.display = 'none'
    var hide = document.getElementById('show-phone-menu-blure')
    hide.style.display = 'none'
}