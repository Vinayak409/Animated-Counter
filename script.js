const html_collection = document.getElementsByClassName('counter');
const counters = Array.from(html_collection)
// const counters = document.querySelectorAll('.counter');

const speed = 500;
counters.forEach(counter => {
    const update = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerHTML);

        const inc = target / speed;

        console.log(count);
        if (count < target) {
            counter.innerHTML = Math.ceil(count + inc);
            setTimeout(update, 1);
        } else {
            count.innerText = target;
        }
    }
    update();
});