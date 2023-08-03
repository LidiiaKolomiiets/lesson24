const messageText = document.querySelector('.message-text');

const messageValueText = document.querySelector('.message');

const namesClient = {

}


document.querySelector('.btn-connect').onclick = () => {

    const connectText = document.querySelector('.connect');

    const name = document.querySelector('.message-name').value.trim();
    if (name) {
        namesClient.name = name;
        connectText.innerHTML = '';
        messageText.style.display = 'flex'
    }

    const fromName = document.querySelector('.from-name');

    fromName.innerHTML = 'Message from ' + namesClient.name;

    const ws = new WebSocket('ws://localhost:5553');

    ws.onopen = () => {

        document.querySelector('.btn-send').onclick = () => {


            const message = messageValueText.value.trim();
            if (message) {
                const messageObj = {
                    name: namesClient.name,
                    message: message
                }
                ws.send(JSON.stringify(messageObj));
            }
            messageValueText.value = ''
        }

    }

    ws.onmessage = messageEvent => {

        const listMessage = document.querySelector('.list-message');
        const messageItem = document.createElement('li');
        messageItem.classList.add('item-list')
        listMessage.appendChild(messageItem);

        const date = new Date;
        const msg = JSON.parse(messageEvent.data);
        
        messageItem.textContent = '[' + date.toLocaleTimeString() + '] ' + msg.name + ': ' + msg.message;
    }
}


