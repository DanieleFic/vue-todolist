
let app = new Vue ({
    el: "#app",
    data: {
        listaVuoto : "",
        corrente: 0,
        lista : [
            {
                testo: "fare spesa",
                stato: true,
            },
            {
                testo: "fare palestra",
                stato: false,
            },
            {
                testo: "Cucinare",
                stato: false,
            },{
                testo: "Andare a scuola",
                stato: false,
            },{
                testo: "Andare in banca",
                stato: false,
            },
        ]
    },

    methods: {
        checkAttivo: function(attivaindex){
            /*if(this.lista[index].data == this.corrente){
                //console.log(this.lista[index].data)*/
                if(this.corrente.done = attivaindex){
                    console.log("ciao")
                    return true
            } return false
        },

        addNewTodo: function () {
          this.lista.push({
            testo: this.listaVuoto,
            stato:false,
          })
          this.listaVuoto = ''
        },

        fatto: function(index){
            if(this.lista[index].stato == true){
                //console.log(this.lista[index].data)
             return 'linea'
            }
        },
        
    },
        
    })



    