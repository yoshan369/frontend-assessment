fetch('data.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
        // console.log(data)
    })
    .catch(function (err) {
      console.log(err);
    });


    var output1="";
    var output2="";

    function appendData(data) {
        
        for (var i = 0; i < data.length; i++) {
            
            if(i==0){
               var active_x = "active";
               var show_x = "show";
                 
            }
            else{
                active_x = "";
                show_x = "";
            }

            output1+=`
            <li class="nav-item">
              <a id="tab-${[i]}" href="#pane-${[i]}" class="nav-link ${active_x}" data-toggle="tab" role="tab">${data[i].title}</a>
            </li>
            `;
            
            output2+=`
            
            <div id="pane-${[i]}" class="card tab-pane fade ${show_x} ${active_x}" role="tabpanel" aria-labelledby="tab-${[i]}">
              <div class="card-header" role="tab" id="heading-${[i]}">
                <h5 class="mb-0">
                  <a data-toggle="collapse" href="#collapse-${[i]}" aria-expanded="true" aria-controls="collapse-${[i]}">
                    ${data[i].title}
                    <i class="fa fa-plus"></i>
                  </a>
                </h5>
              </div>
      
              <div id="collapse-${[i]}" class="collapse ${show_x}" data-parent="#content" role="tabpanel" aria-labelledby="heading-${[i]}">
                <div class="card-body new-card-body">
                  <div class="row">
                    <div class="col-md-12">
                      
                      <p>${data[i].content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            `;
        }
        document.querySelector(".tab-x").innerHTML=output1;
        document.querySelector(".output2").innerHTML=output2;
    }

    