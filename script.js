// import {getTicketsFromLocalStorage, addTicketToLocalStorage, deleteTicketFromLocalStorage} from './local-storage.js'
const {getTicketsFromLocalStorage, addTicketToLocalStorage, deleteTicketFromLocalStorage} = require('./local-storage.js')


const form = document.getElementById('ticket-input-form')
const ticketsVisor = document.getElementById('tickets-visor')
const formTicketInput = document.getElementById('ticket-input')

window.addEventListener('load', () => {
    const tickets = getTicketsFromLocalStorage()

    for(const ticket of tickets) {
        addTicketCodeToTicketsVisor(ticket)
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const ticketCode = formTicketInput.value;
    if(!ticketCode) return

    addTicketCodeToTicketsVisor(ticketCode)
    addTicketToLocalStorage(ticketCode)

    formTicketInput.value = ""
})

const addTicketCodeToTicketsVisor = (ticketCode) => {
    const ticketCodeTemplate = getTicketCodeTemplate(ticketCode)

    ticketsVisor.prepend(ticketCodeTemplate)
}

const getTicketCodeTemplate = (ticketCode) => {
    const ticketSpan = `<span>${ticketCode.padStart(2, '0')}</span>`

    const ticketDiv = document.createElement('div')
    ticketDiv.classList.add('tickets-visor-number')
    ticketDiv.innerHTML = ticketSpan

    ticketDiv.addEventListener('click', () => {
        ticketDiv.remove()
        deleteTicketFromLocalStorage(ticketCode)
    })

    return ticketDiv
}
