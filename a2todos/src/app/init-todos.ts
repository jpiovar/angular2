export class Init{
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined){
            console.log('no items in localstorage todos ... creating');
            var todos = [
                {
                    text: 'text1 ok'
                },
                {
                    text: 'text2 ok'
                },
                {
                    text: 'text3 ok'
                }
            ];

            localStorage.setItem('todos',JSON.stringify(todos));
            return;                          
        } else {
            console.log('found todos');
        }
    }
}