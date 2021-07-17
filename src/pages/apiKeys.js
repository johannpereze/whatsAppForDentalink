const passwords = ()=>{
    const view = `
    <h2>Claves de acceso:</h2>

<section class="apikeys-container">

    <form action="">
        <label for="dentalink-apikey">
            <span>Ingresa la clave de dentalink:</span>
            <input type="password" id="dentalink-apikey">
        </label>
        <label for="B2Chat-apikey">
            <span>Ingresa el usuario de B2Chat:</span>
            <input type="password" id="B2Chat-apikey">
        </label>
        <label for="B2Chat-apipass">
            <span>Ingresa la clave de B2Chat:</span>
            <input type="password" id="B2Chat-apipass">
        </label>
        
    </form>
    
</section>

    <a href="/#/line"><button class="button">Siguiente</button></a>
    ` 
    return view
}

export default passwords;