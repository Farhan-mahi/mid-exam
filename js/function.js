function showTotal(age, total) {
    if (parseInt(age) > 35 && parseInt(total) >= 300000) {
        return parseInt(total) * 0.40;
    } else if (parseInt(age) > 30 && parseInt(total) >= 200000) {
        return parseInt(total) * 0.30;
    } else if (parseInt(age) > 25 && parseInt(total) >= 100000) {
        return parseInt(total) * 0.20;
    } else {
        return parseInt(total) * 0.10;
    }
}

function showResult() {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const total = document.getElementById('total').value;
    const result = document.getElementById('result');

    const value = showTotal(age, total);

    result.innerHTML = name + ' your total yearly bonus amount is ' + value;
    event.target.reset();
}