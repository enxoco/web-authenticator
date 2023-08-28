const rootDiv = document.querySelector<HTMLDivElement>("#app")
if (!rootDiv) {
    const rootDiv = document.createElement('div')
    rootDiv.id = 'app'
}
export default rootDiv