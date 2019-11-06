


let firedown = (e) => {
    const name = document.querySelector("#name").value
    const ulav = document.querySelector("#foorm").value
        let sendName = document.createElement("p")
        sendName.textContent = name
        document.querySelector("#wishes").appendChild(sendName)
        let createEt = document.createElement('i')
        createEt.textContent = ulav
        document.querySelector('#wishes').appendChild(createEt);
        let br = document.createElement("hr")
        document.querySelector('#wishes').appendChild(br);
        
    
}


