// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("body")
      .addEventListener("load", function () {
        
        // Call server to get the name
        $ajaxUtils.sendGetRequest("C:/Users/Deepu/Desktop/coursera/web_development/site/styles/data/log_info.json", 
            function (res) {
              const div_1 = document.createElement('div');
              div_1.setAttribute("class", "col");
              const div_2 = document.createElement('div');
              div_2.setAttribute("class", "card mb-4 shadow-sm");
              const div_3 = document.createElement('div');
              div_3.setAttribute("class", "card-header");
              const img = document.createElement('img'); 
              img.src = res['image'];
              img.alt = res['card-title'];
              img.width = res['width'];
              img.height = res['height'];
              img.setAttribute("class", "img-thumbnail card-img");
              div_3.appendChild(img);
              const div_4 = document.createElement('div');
              div_4.setAttribute("class", "card-body");
              const h_3 = document.createElement('h3');
              h_3.setAttribute("class","card-title");
              h_3.textContent = res['card-title'];
              const p_1 = document.createElement('p');
              h_3.setAttribute("class","card-text");
              p_1.textContent = res['card-text'];
              const div_5 = document.createElement('div');
              div_5.setAttribute("class","avatars");
              const avatar_num = res['avatars'];
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
              a_btn.setAttribute("id","item-1");
              a_btn.addEventListener("click", changeButton(this.id));
              a_btn.textContent("Follow");
              div_4.appendChild(h_3);
              div_4.appendChild(p_1);
              div_4.appendChild(div_5);
              div_4.appendChild(a_btn);
              div_1.appendChild(div_2);
              div_1.appendChild(div_3);
              div_1.appendChild(div_4);
              var ele = document.getElementsByClassName("block-2");
              ele.appendChild(div_1);
            });
      });
  }
);