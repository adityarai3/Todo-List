let input = prompt('what would you like to do?')
const todos = ['Collect Chicken Eggs','Clean Litter Box'];
while(input !=='quit' && input !== 'q'){
    if(input === 'list'){
        console.log('**********')
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('**********')
    }
    else if(input === 'new'){
        const newTodo = prompt('Ok,What would you like to add?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    }
    else if(input === 'delete'){
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Ok,deleted ${deleted[0]}`);
        }else{
            console.log('Unknown Index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log("OK QUIT THE APP")