// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    /*document.querySelector("body")
      .addEventListener("load", function () {*/
        //document.getElementById("but").addEventListener("click", function () {
        //document.addEventListener('load',function () {
          window.onload = function(){
        // Call server to get the name
        console.log("hi");
        $ajaxUtils.sendGetRequest("styles/data/log_info.json", 
            function (res) {
              const log_data = res["log_info"];
              const parent_div1 = document.createElement('div');
              parent_div1.setAttribute("class", "col");
              parent_div1.setAttribute("id", "0");
              const parent_div2 = document.createElement('div');
              parent_div2.setAttribute("class", "col");
              parent_div2.setAttribute("id", "1");
              const parent_div3 = document.createElement('div');
              parent_div3.setAttribute("class", "col");
              parent_div3.setAttribute("id", "2");

              for (let j = 0; j < log_data.length; j++) {
              const div_2 = document.createElement('div');
              div_2.setAttribute("class", "card mb-4 shadow-sm");
              const div_3 = document.createElement('div');
              div_3.setAttribute("class", "card-header");
              const img = document.createElement('img'); 
              img.src = log_data[j].image;
              img.alt = log_data[j]["card-title"];
              img.width = log_data[j].width;
              img.height = log_data[j].height;
              img.setAttribute("class", "img-thumbnail card-img");
              div_3.appendChild(img);
              const div_4 = document.createElement('div');
              div_4.setAttribute("class", "card-body");
              const h_3 = document.createElement('h3');
              h_3.setAttribute("class","card-title");
              h_3.textContent = log_data[j]["card-title"];
              const p_1 = document.createElement('p');
              h_3.setAttribute("class","card-text");
              p_1.textContent = log_data[j]["card-text"];
              const div_5 = document.createElement('div');
              div_5.setAttribute("class","avatars");
              const avatar_num = log_data[j].avatars;
              for (let j = 0; j < avatar_num.length; j++) {
              const spanitem = document.createElement('span');
              spanitem.setAttribute("class","avatar");
              const img_avatar = document.createElement('img'); 
              img_avatar.src = avatar_num[j];
              img_avatar.alt = "Avatar";
              spanitem.appendChild(img_avatar);
              div_5.appendChild(spanitem);
              }
              const a_btn = document.createElement('a');
              a_btn.setAttribute("href", "#");
              a_btn.setAttribute("class", "btn btn-primary");
              const id_btn = "item-"+(j+1);
              a_btn.setAttribute("id",id_btn);
              console.log(id_btn);
              a_btn.textContent = "Follow";
              a_btn.setAttribute("onclick", "changeButton(this.id)");
              div_4.appendChild(h_3);
              div_4.appendChild(p_1);
              div_4.appendChild(div_5);
              div_4.appendChild(a_btn);
              if(j%3==0){
              parent_div1.appendChild(div_2);
            }
            else if(j%3==1){
              parent_div2.appendChild(div_2);
            }
            else if(j%3==2){
              parent_div3.appendChild(div_2);
            }
              div_2.appendChild(div_3);
              div_2.appendChild(div_4);
            }
              var ele = document.getElementById("dynamic_block");
              ele.appendChild(parent_div1);
              ele.appendChild(parent_div2);
              ele.appendChild(parent_div3);
            });
      };
  }
);