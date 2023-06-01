const form = document.querySelector('#searchForm')
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchH = form.elements.query.value;
    const config = {params :{ q: searchH}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    makeImages(res.data);
    form.elements.query.value='';
})
const makeImages =(shows) =>{
    for(let result of shows)
    {
        if(result.show.image)
        {
            const image = document.createElement('IMG');
            image.src = result.show.image.medium;
            document.body.append(image);
        }
    }
}