class Notify {

    /**
     * Create a div element with the class `notify` and append it to the body of the document
     * @returns The `createParent` function returns the `parent` element.
     */
    static #createParent() {
        const parent = document.createElement('div');
        parent.classList.add('notify');
        document.body.appendChild(parent);
        return parent;
    }

    /**
     * *This function takes in an HTML element and sets a timeout to remove the element from the DOM after
     * 2 seconds.*
     * @param elem - The element to be removed.
     */
    static #timeOut(elem) {
        setTimeout(() => {
            elem.classList.remove("show");
            setTimeout(() => {
                elem.remove();
            }, 1000);
        }, 2000);
    }


    /**
     * Create a parent div if one doesn't exist, 
     * then create a div with the class of `notify-success` and 
     * append it to the parent div
     * @param message - The message to display in the notification.
     */
    static success(message) {
        if (!document.querySelector('.notify')) {
            this.#createParent();
        }
        const body = document.querySelector('body');
        const elem = document.createElement("div");
        elem.innerText = message;
        elem.classList.add("notify-success", "show");
        const container = document.getElementsByClassName("notify").item(0);
        container.appendChild(elem);
        this.#timeOut(elem);
    }


    /**
     * Create a parent div if one doesn't exist, 
     * then create a div with the class `notify-error` and 
     * append it to the parent div
     * @param message - The message to display in the notification.
     */
    static error(message) {
        if (!document.querySelector('.notify')) {
            this.#createParent();
        }
        const body = document.querySelector('body');
        const elem = document.createElement("div");
        elem.innerText = message;
        elem.classList.add("notify-error", "show");;
        const container = document.getElementsByClassName("notify").item(0);
        container.appendChild(elem);
        this.#timeOut(elem);
    }
}
