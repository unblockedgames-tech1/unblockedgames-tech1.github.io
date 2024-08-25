class imgSegment extends HTMLElement {
    constructor(content) {
        super();
        this.content = JSON.parse(content)
        JSON.parse(content).array.forEach(element => {
            const item = document.createElement('div');
            item.className = 'item';
            const imgElement = document.createElement('img');
            imgElement.src = element.imgSrc;
            imgElement.alt = element.title;
            imgElement.classname = "image";
            const titleElement = document.createElement("div");
            titleElement.className = "info";
            titleElement.innerHTML = `<h2 class="title">${element.title}</h2>`;
            const linkElement = document.createElement("a");
            linkElement.href = element.link;
            linkElement.textContent = "Open";
            linkElement.className = "use-button";
            item.appendChild(imgElement);
            item.appendChild(titleElement);
            titleElement.appendChild(linkElement);
            document.getElementById("listOf").appendChild(item)
    
        });
        this.innerHTML = `
        
        <style>
        .flex-container {
           display: flex;
           flex-wrap: wrap;
           justify-content: center;
           gap: 20px;
           padding: 5rem;
	    }

        .item {
            border-radius: 30rem;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
        }


        .item:hover {
            transform: scale(1.05);
        }

        .image {
            width: 100%;
            height: auto;
    	    width: 288px; 
    	    height: 288px; 
        }

        .info {
            padding: 10px;
            text-align: center;
            background-color: #555555; 
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
        }

        .title {
            font-size: 20px;
            margin-bottom: 10px;
            color: #fff;
        }

        .use-button {
            background-color: #555555; 
            color: #fff;
            padding: 10px 20px;
            border-radius: 20px;
            text-decoration: none;
            transition: background-color 0.3s ease-in-out;
        }

        .use-button:hover {
            background-color: #454545; 
        }
        </style>
        <div class="flex-container" id="listOf">

        </div>
        `;
    }
}


customElements.define("img-segment", thing);