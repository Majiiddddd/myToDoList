let input = document.querySelector('input');
let addBtn = document.querySelector('button');
let taskList = document.querySelector('ul');




addBtn.addEventListener('click' , ()=>{
    let text = input.value;
    if(text !== ''){

        let task = createTask(text);
        task.innerHTML +='<span class="closeBtn"><i class="fa-solid fa-trash"></i></span>';
        taskList.appendChild(task);
        input.value = '';
    } else{
        alert("Clicking 'add' without a task? It's time to go on an adventure!");
    }
})

taskList.addEventListener('click' , (e)=>{
    if(e.target.nodeName === 'I'){
        e.target.parentElement.parentElement.style = 'display : none';
    }
    if(e.target.nodeName === 'LI'){
        e.target.classList.toggle('done');
    }
})







function createTask(text){
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}


// liveTime


const liveTimeElement = document.getElementById('liveTime');

// Function to update the live time
function updateLiveTime() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedDate = currentDate.toLocaleString('en-US', options);
    liveTimeElement.textContent = formattedDate;
}


updateLiveTime();
setInterval(updateLiveTime, 1000);
