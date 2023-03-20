const addTicketToLocalStorage = (ticketCode) => {
    const ticketsList = getTicketsFromLocalStorage()
    ticketsList.push(ticketCode)

    setTicketsToLocalStorage(ticketsList)
} 

const deleteTicketFromLocalStorage = (ticketCode) => {
    const ticketsList = getTicketsFromLocalStorage()
    const ticketIndex = ticketsList.indexOf(ticketCode)
    ticketsList.splice(ticketIndex, 1)

    setTicketsToLocalStorage(ticketsList)
} 

const getTicketsFromLocalStorage = () => {
    const ticketsList = localStorage.getItem('tickets-list')
    return ticketsList ? JSON.parse(ticketsList) : []
}

const setTicketsToLocalStorage = (ticketsList) => {
    localStorage.setItem('tickets-list', JSON.stringify(ticketsList))
}

export {addTicketToLocalStorage, deleteTicketFromLocalStorage, getTicketsFromLocalStorage}    