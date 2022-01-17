/*new Vue({
    el: '#app',
    data: {
      newTodoText: '',
      lista: [
        {
          id: 1,
          testo: 'Do the dishes',
        },
        {
          id: 2,
          testo: 'Take out the trash',
        },
        {
          id: 3,
          testo: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function () {
        this.lista.push({
          testo: this.newTodoText,
        })
        this.newTodoText = ''
      }
    }
  })*/


let app = new Vue ({
    el: "#app",
    data: {
        listaVuoto : "",
        corrente: "",
        lista : [
            {
                testo: "fare spesa",
                data: true,
            },
            {
                testo: "fare palestra",
                data: false,
            },
            {
                testo: "Cucinare",
                data: false,
            },{
                testo: "Andare a scuola",
                data: false,
            },{
                testo: "Andare in banca",
                data: false,
            },
        ]
    },

    methods: {
        addNewTodo: function () {
          this.lista.push({
            testo: this.listaVuoto,
            data:false,
          })
          this.newTodoText = ''
        },
        fatto: function(index){
            if(this.lista[index].data == true){
                //console.log(this.lista[index].data)
             return 'linea'
            }
        },
        check: function(index){
            if(this.lista[index].data == this.corrente){
                //console.log(this.lista[index].data)
             return true
            }
        }
    },
        
    })


    /*methods: {
        addNewTodo: function () {
          this.lista.push({
            testo: this.listaVuoto++,
            //title: this.newTodoText
          })
          this.listaVuoto = ''
        }
      }*/
    

    