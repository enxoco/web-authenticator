export function toast(element: HTMLDivElement, message: string) {
    // Target our predefined DIV that will hold toast messages.
    const toastDiv = element.getElementsByClassName('toast')
 
    const interval = setInterval(() => {
        toastDiv[0].remove()
        clearInterval(interval)
    }, 5000)

    // If we currently have a toast displayed, let's remove it from the DOM.
    if (toastDiv && toastDiv.length != 0) {
        for (const el of toastDiv){
            el.remove()
        }
    }
    
    // Finally add our toast message.
    element.innerHTML += `<div class='toast'>${message}</div>`
}