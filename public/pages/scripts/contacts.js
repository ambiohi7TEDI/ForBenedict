const contactsContainer = document.getElementById('contacts--container')

async function getContacts() {
    const response = await fetch ('/allcontacts')
    const contacts = await response.json()

    contacts.forEach(contact => {
        contactsContainer.insertAdjacentHTML('beforeend', `
        <li class="contacts">
            <span class="name">${contact.name}</span>
            <span class="phone">${contact.phone}</span>
            <a href="/edit-contact/${contact.id}">Edit</a>
        </li>
        `)
    });
}

getContacts()