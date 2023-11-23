const nameRegex  = /^[A-Za-zА-ЯІЇЄҐ][A-Za-zа-яіїєґ']+ [A-Za-zА-ЯІЇЄҐ]\.[A-Za-zА-ЯІЇЄҐ]\.$/;
const groupRegex = /^[A-Za-zА-ЯІЇЄа-яіїє]{2}-[0-9]{2}$/;
const facultyRegex = /^[А-ЯІЇЄа-яіїє]/;
const addressRegex = /^м.+ [A-Za-zА-ЯІЇЄа-яіїє0-9]+$/;
const telegramRegex = /^@[A-Za-z0-9_]{5,32}$/;


let form = document.querySelector('.form');
const inputs  = document.querySelectorAll('.form-input');
const wrapper = document.querySelector('.container');

const onSubmit = (event) => {
    const errors = [];
    let data = new FormData(form).entries();
    event.preventDefault()
    const {name, group, faculty, address, tg} = Object.fromEntries(data)
    if (!nameRegex.test(name.toString())) {
        errors.push("name")
    }
    if (!groupRegex.test(group.toString())) {
        errors.push("group")
    }
    if (!facultyRegex.test(faculty.toString())) {
        errors.push("faculty")
    }
    if (!addressRegex.test(address.toString())) {
        errors.push("address")
    }
    if (!telegramRegex.test(tg.toString())) {
        errors.push("tg")
    }
    
    if(!errors.length) {
        wrapper.appendChild(document.createElement('div')).classList.add('result_div')
        const result_div = wrapper.querySelector('.result_div')
        result_div.appendChild(document.createElement('div')).innerHTML = `ПІБ: ${name}`
        result_div.appendChild(document.createElement('div')).innerHTML = `Група: ${group}`
        result_div.appendChild(document.createElement('div')).innerHTML = `Факультет: ${faculty}`
        result_div.appendChild(document.createElement('div')).innerHTML = `Адреса: ${address}`
        result_div.appendChild(document.createElement('div')).innerHTML = `Телеграм: ${tg}`
    }
    else{
        inputs.forEach(input => {
            errors.includes(input.name) 
                ? input.classList.add('form-input-err') 
                : input.classList.remove('form-input-err')
        })
    }
}


form.addEventListener("submit", onSubmit);