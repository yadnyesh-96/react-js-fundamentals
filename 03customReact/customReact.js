
const root = document.getElementById('root');

function customRender(reactElement,root){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern
    /*
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */

    for(const prop in reactElement.props){
        if(prop==='childern') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    root.appendChild(domElement)
}

const reactElement={
    type:'a',
    props :{
        href: 'https://google.com',
        target:'_blank'
    },
    childern:'Click me to visit'
}

customRender(reactElement,root);
