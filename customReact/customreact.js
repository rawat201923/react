function customRender(reactElement, container){

    /*  const domElement = document.createElement(reactElement)
      (reactElement.type)
      domElement.innerHTML = reactElement.children
      domElement.setAttribute('href',reactElement.children.props.href)
      domElement.setAttribute('target',reactElement.children.props.target)
      
      container.appendChild(domElement)
      */
  
      
  }
  const reactElement = {
      type: 'a',
      props: {
          href: 'https://google.com',
          target: '_blank'
      },
      children: 'Click me to visit google'
  
  }
  
  const mainContainer = document.querySelector('#root');
  
  customRender(reactElement, mainContainer)
  