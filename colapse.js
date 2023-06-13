const parentlist = document.querySelectorAll ('parentlist')

parentlist.addEventListener("click", () => { 
    parentlist.toggle('parentlist')

} )

event.stopPropagation