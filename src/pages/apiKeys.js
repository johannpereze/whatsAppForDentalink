const apiKeys = ()=>{
    const view = `
    <h2>Claves de acceso:</h2>

<section class="apikeys-container">

    <form action="">
        <label for="dentalink-apikey">
            <span>Ingresa la clave de Dentalink:</span>
            <input type="password" placeholder="Clave Dentalink" id="dentalink-apikey">
        </label>
        <label for="B2Chat-apikey">
            <span>Ingresa el usuario de B2Chat:</span>
            <input type="password" placeholder="Usuario B2Chat" id="B2Chat-apikey">
        </label>
        <label for="B2Chat-apipass">
            <span>Ingresa la clave de B2Chat:</span>
            <input type="password" placeholder="Clave B2Chat" id="B2Chat-apipass">
        </label>
        <input type="button" value="Guardar" id="send-keys">
        
    </form>
    
</section>

    <a href="/#/line"><button class="button">Siguiente</button></a>
    ` 
    return view
}

export default apiKeys;