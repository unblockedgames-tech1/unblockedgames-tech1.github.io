class ShadowRoot extends HTMLElement {
    constructor() {
        super();
        this.content = ""
        this.class = ""
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
                ${shadow.content}
        `;
    }
}


customElements.define("ShadowRoot", ShadowRoot);