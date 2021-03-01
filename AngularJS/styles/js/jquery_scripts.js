document.addEventListener("DOMContentLoaded",
  function (event) {
    window.onload = function(){
	  $.getJSON("styles/data/log_info.json", function(res) { 
                    const log_data = res["log_info"];
                    const num_cols = 3;
                    
                    const parent_div1 = $("<div/>").addClass("col").attr("id", "0");
                    const parent_div2 = $("<div/>").addClass("col").attr("id", "1");
                    const parent_div3 = $("<div/>").addClass("col").attr("id", "2");
                    $("#dynamic_block").append(parent_div1);
                    $("#dynamic_block").append(parent_div2);
                    $("#dynamic_block").append(parent_div3);
                    for (let j = 0; j < log_data.length; j++) {
                    	const div2 = $("<div/>").addClass("card mb-4 shadow-sm");
                    	const img = $("<img/>").addClass("img-thumbnail card-img").attr({
		                	"src" : log_data[j].image,
				            "alt" : log_data[j]["card-title"],
				            "width" : log_data[j].width,
				            "height" : log_data[j].height
		                });
		                const div3 = $("<div/>").addClass("card-header").append(img);
			            const h_3 = $("<h3/>").addClass("card-title").text(log_data[j]["card-title"]);
			            const p_1 = $("<p/>").addClass("card-text").text(log_data[j]["card-text"]);
			            const div_5 = $("<div/>").addClass("avatars");
			            const avatar_num = log_data[j].avatars;
			            for (let j = 0; j < avatar_num.length; j++) {
			            	const img_avatar = $("<img/>").attr({
		                	"src" : avatar_num[j],
				            "alt" : "Avatar"
		                    });
			                const spanitem = $("<span/>").addClass("avatar").append(img_avatar).appendTo(div_5);
			            }
			            const id_btn = "item-"+(j+1);
			            const a_btn = $("<a/>").addClass("btn btn-primary").attr({
		                	"href" : "#",
				            "id" : id_btn,
				            "onclick" : "changeButton(this.id)"
		                }).text("Follow");
			            console.log(id_btn);
			            const div4 = $("<div/>").addClass("card-body").append(h_3,p_1,div_5,a_btn);
			            if(j%3==0){
			              div2.appendTo(parent_div1);
			            }
			            else if(j%3==1){
			              div2.appendTo(parent_div2);
			            }
			            else if(j%3==2){
			              div2.appendTo(parent_div3);
			            }
			            div3.appendTo(div2);
			            div4.appendTo(div2);
                    }
                    }); 
                }; 
	});
        
