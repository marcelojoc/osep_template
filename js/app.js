
(
function() {

      

        function inicialize(url) {
        // lo que fuere

        var nuevo = new CreateSelect("aaa","aaa","aaa");

        nuevo.render();

        //console.log(nuevo.render());



        }










        function loadJson(url)
        {



        }

        function createSiNo( label, data, conf)
        {




        }


        function createSelect(label, data, conf){



        }


        function createText(label, data, conf)
        {



        }


        function createTextArea (label, data, conf)
        {



        }


        function createPanel(label, data, conf)
        {
            var hotel = {
                name: 'Codejobs', 
                roomRate: 240, // Cantidad en dolares
                discount: 15, // Porcentaje de descuento
                offerPrice: function(){
                var offerRate = this.roomRate * ((100 - this.discount) / 100);
                return offerRate;
                }
            }

        }


inicialize();
})();