
/* Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no */

/* MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. */

/* MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista. */

/* MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */

/* Bonus:
oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)  */

const { createApp } = Vue;
createApp({
    data(){
        return{
            isActive: null,
            taskText: null,
            tasks: [
                {
                    title: 'cibo da comprare',
                    text: 'banane',
                    done: false
                },
                {
                    title: 'sport da fare',
                    text: 'nuoto',
                    done: false
                },
                {
                    title: 'sport da fare',
                    text: 'corsa',
                    done: false
                },
                {
                    title: 'cibo da comprare',
                    text: 'couscous',
                    done: false
                },
                {
                    title: 'cibo da comprare',
                    text: 'lenticchie',
                    done: false
                },
                {
                    title: 'sport da fare',
                    text: 'bici',
                    done: false
                },
                {
                    title: 'cibo da comprare',
                    text: 'cipolle',
                    done: false
                },
                {
                    title: 'cibo da comprare',
                    text: 'carote',
                    done: false
                },
            ]
        }        
    },
    methods: {
        taskDone(task,i) {
            task.done=true;
            console.log(task);
        },
        taskUnDone(task,i) {
            task.done=false;
            console.log(task);
        },
        addTask(){
            console.log('aggiungi');
            this.tasks.unshift(
                {
                    title: 'altro',
                    text: this.taskText,
                    done:false
                }
            )
        }
    }
}).mount('#app')

