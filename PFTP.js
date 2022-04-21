
    let inner_Html = document.getElementById("inner_Html");
    let text_Content  = document.getElementById("text_Content");
    let inner_Text = document.getElementById("inner_Text");

function add(){

    let para_1 = document.createElement('p');
    para_1.textContent = "textContents is all text contained by an element and all its children that are for formatting purposes only.";
    text_Content.appendChild(para_1);
}

function add2(){

    let para_2 = document.createElement("p");
    para_2.innerText = "innerText returns all text contained by an element and all its child elements." ;
    inner_Text.appendChild(para_2);
}

function add3(){

    let para_3 = document.createElement("p");
    para_3.innerHTML = "<p> innerHTML returns all text, including html tags, that is contained by an element. </p>" ;
    inner_Html.appendChild(para_3);
}
