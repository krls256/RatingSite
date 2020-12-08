const data = {
    current: 0
}

const formStars = () => {
    const wrapper = document.querySelector('#formStars');
    if(wrapper) {
        funcLogic(wrapper)
    }
}

const funcLogic = (wrapper) => {
    const passive = wrapper.querySelector('.stars__passive');
    const passiveStars = wrapper.querySelectorAll('.stars__item--passive');
    const active = wrapper.querySelector('.stars__active');
    const activeStars = wrapper.querySelectorAll('.stars__item--active');

    const input = wrapper.querySelector('input');
    const mark = wrapper.querySelector('.stars__mark');

    makeHover(passiveStars, active);
    makeHover(activeStars, active)
    makeClick(activeStars, mark, input);
}

const makeClick = (array, mark, input) => {
    array.forEach((item, index) => {
        item.addEventListener('click', () => {
            mark.textContent = index+1;
            input.value = index + 1
            data.current = index + 1
        })

    })
}

const makeHover = (array, activeWrapper) => {
    array.forEach((item, index) => {
        item.addEventListener('mouseover', printTillIndex(index+1, activeWrapper))
        item.addEventListener('mouseout', disPrint(activeWrapper))
    })
}

const printTillIndex = (index, activeWrapper) => () => {
    activeWrapper.style.width = `${index * 20}%`

}

const disPrint = (activeWrapper) => () => {
    activeWrapper.style.width = `${data.current * 20}%`
}

export default formStars;
