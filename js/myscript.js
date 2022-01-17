
let app = new Vue ({
    el: "#app",
    data: {
        listaVuoto : "",
        corrente: 0,
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
        check: function(attivaindex){
            /*if(this.lista[index].data == this.corrente){
                //console.log(this.lista[index].data)*/
                if(this.corrente = attivaindex){
                    console.log("ciao")
                return true
            }
        },

        addNewTodo: function () {
          this.lista.push({
            testo: this.listaVuoto,
            data:false,
          })
          this.listaVuoto = ''
        },
        fatto: function(index){
            if(this.lista[index].data == true){
                //console.log(this.lista[index].data)
             return 'linea'
            }
        },
        
    },
        
    })



    