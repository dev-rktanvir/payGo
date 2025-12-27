function getValueById(id) {
    return document.getElementById(id).value;
}

function getNumberById(id) {
    return parseFloat(document.getElementById(id).value);
}

function totalAmountById(id) {
    return Number(document.getElementById(id).innerText);
}

function clearInputsById(...ids) {
    ids.forEach(id => document.getElementById(id).value = '');
}

// Toggle Function

function toggle(id) {
    const sections = ['add-money-section', 'cash-out-section'];
    sections.forEach(secId => {
        if (id === secId) {
            document.getElementById(secId).classList.remove('hidden');
        }
        else {
            document.getElementById(secId).classList.add('hidden');
        }
    })
}