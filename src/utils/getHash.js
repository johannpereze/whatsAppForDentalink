const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; //el [1] es porque el array sería ['/','pagina','/'] y así saco sólo la página

export default getHash;