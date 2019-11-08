export const initializeApplication = () => ({
    type: "INIT_APP"
})
export const authenticate = (payload) => ({
    type: "AUTH",
    payload
})