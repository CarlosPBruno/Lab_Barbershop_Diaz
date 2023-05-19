const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// abrir la barra del menú
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'block';
})

// cerrar la barra del menú
closeBtn.addEventListener('click', ()=>{
    sideMenu.style.display = 'none';
})

// Cambio a tema oscuro
themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

    if(document.body.classList.contains('dark-theme-variables')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Modo oscuro/claro estático
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(1)').classList.remove('active'); 
} else{
    document.body.classList.remove('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(2)').classList.remove('active');
};

//Pedidos en la tabla
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.NombreProducto}</td>
                        <td>${order.NumeroProducto}</td>
                        <td>${order.Estado}</td>
                        <td class="${order.Envio === 'Rechazado' ? 'danger' : order.Envio === 'Pendiente' ? 'warning' : 'primary'}">${order.Envio}</td>
                        <td class="primary">Detalles</td>
                        `;
    tr.innerHTML = trContent;
     document.querySelector('table tbody').appendChild(tr);
})