function render(newElement,addHere) {
    
    const toAddElement = document.createElement(newElement.type);
    toAddElement.innerHTML = newElement.children;
    for(let temp in newElement.props){
        // console.log(temp)
        toAddElement.setAttribute(temp,newElement.props[temp]);
    }
    addHere.appendChild(toAddElement);
}

const newElement = {
    type : "a",
    props: {
        href : "https://github.com/arindhimar",
        target : "_blank"
    },
    children : "Jadu hoga!!!!"
}

render(newElement,document.querySelector("#root"))