function onformsubmit(event) {
    event.preventDefault()
    const form = new FormData(event.target)
    console.log({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password")
    })
    event.target.reset()

}
function clickme(event) {
    console.log("clicked")
}
