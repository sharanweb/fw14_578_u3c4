async function apiCall(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (error) {
        console.log("error");
    }


    //add api call logic here


}


function appendArticles(articles, main) {
    articles.forEach((elem)=>{
        // console.log(elem.title);
        let div = document.createElement("div");
        div.setAttribute("id", "div1");

        let image = document.createElement("img");
        image.src = elem.urlToImage;
        image.id = "image";

        let tit = document.createElement("h3");
        tit.innerText = elem.title;

        let p1 = document.createElement("p");
        p1.innerText = elem.description;

        div.append(image,tit,p1);

        div.onclick=()=>{
            localStorage.setItem("article",JSON.stringify(elem));
            window.location.href = "news.html";
        }

        main.append(div);
        


    })

    //add append logic here

}

export { apiCall, appendArticles }