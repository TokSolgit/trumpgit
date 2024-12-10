document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('mainContent');
    
    // Añadir clase para la transición
    iframe.classList.add('delay-500');
    
    // Configurar el origen websim si es necesario
    const websimOrigin = 'https://websim.ai';
    if (iframe.src.indexOf('__websim_origin') === -1) {
        iframe.src += `&__websim_origin=${encodeURIComponent(websimOrigin)}`;
    }
});