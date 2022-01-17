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
        lista : [
            {
                testo: "fare spesa",
                data: false,
            },
            {
                testo: "fare spesa2",
                data: false,
            },
            {
                testo: "fare spesa3",
                data: false,
            },{
                testo: "fare spesa4",
                data: false,
            },{
                testo: "fare spesa5",
                data: false,
            },
        ]
    },
    methods: {
        addNewTodo: function () {
          this.lista.push({
            testo: this.listaVuoto,
          })
          this.newTodoText = ''
        }
      }
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
    

    