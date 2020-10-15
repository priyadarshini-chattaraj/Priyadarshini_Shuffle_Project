window.onload=function(){
    var list = document.getElementById("shuffleNumber");

    // predefined value of nodes value with color..
    let nodesValue = [
        {
            value: 1,
            backgroundColor: "#6F98A8"
        },
        {
            value: 2,
            backgroundColor: "#2B8EAD"
        },
        {
            value: 3,
            backgroundColor: "#2F454E"
        },
        {
            value: 4,
            backgroundColor: "#2B8EAD"
        },
        {
            value: 5,
            backgroundColor: "#2F454E"
        },
        {
            value: 6,
            backgroundColor: "#BFBFBF"
        },
        {
            value: 7,
            backgroundColor: "#BFBFBF"
        },
        {
            value: 8,
            backgroundColor: "#6F98A8"
        },
        {
            value: 9,
            backgroundColor: "#2F454E"
        }
    ]

    // show the default nodes.
    setNodes(nodesValue);

    // click event on Shuffle button.
    document.getElementById('shuffleNodes').addEventListener('click', ()=>{
        shuffleNodes(nodesValue);
    });

    // click event on Sort button.
    document.getElementById('sortNodes').addEventListener('click', ()=>{
        sortList(nodesValue);
    });

    // set the nodes.
    function setNodes(nodesValue){
        let nodes = list;
        nodes.innerHTML = "";
        for (let i = 0; i < nodesValue.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = nodesValue[i].value;
            listItem.style.background = nodesValue[i].backgroundColor;
            listItem.style.borderLeft = '10px solid ' + nodesValue[i].backgroundColor;
            nodes.appendChild(listItem);
        }
    }

    // shuffle nodes.
    function shuffleNodes(nodesValue)
    {
        let shuffleOrder = nodesValue.sort(() => Math.random() - 0.5);
        setNodes(shuffleOrder);
    }

    // sort the nodes.
    function sortList(nodesValue) {
        nodesValue.sort(function (firstValue, secondValue){
            return firstValue.value - secondValue.value;
        });
        setNodes(nodesValue);
    }
} 
