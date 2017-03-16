  // crear un select
        var CreateSelect = function (label, data, conf) {
        this.label = label;
        this.data = data;
        this.conf = conf;
        this.template = `<div class="form-group">
						<label class="control-label col-xs-3"> ${this.label}</label>
						<div class="col-xs-9">
							<select class="form-control">
							 
                             ${this.data.forEach}
							<option>${this.data}</option>

							
							</select>
						</div>

					</div>	`; 


            this.render= function(){
                console.log(this.template);
                return this.template;
            }

            var cargar = function(array)
            {

                array.forEach()

            }

        }


        // crear un select
        var CreateSiNo = function (label, data, conf) {
        this.label = label;
        this.data = data;
        this.conf = conf;
        var template = ``;

            this.render= function(){
                
                return this.nombre;
            }

        }

        var CreateText = function (label, data, conf) {
        this.label = label;
        this.data = data;
        this.conf = conf;
        var template = ``;

            this.render= function(){
                
                return this.nombre;
            }

        }

        var CreateTextAarea = function (label, data, conf) {
        this.label = label;
        this.data = data;
        this.conf = conf;
        var template = ``;

            this.render= function(){
                
                return this.nombre;
            }

        }



        var CreatePanel = function (label, data, conf) {
        this.label = label;
        this.data = data;
        this.conf = conf;
        var template = ``;

            this.render= function(){
                
                return this.nombre;
            }

        }

