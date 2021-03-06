/*!
  * Bolg main JS.
 * 
 * @since: 1.0.0 2017/3/9
 * @author Way Lau <https://waylau.com>
 */
"use strict";
//# sourceURL=main.js
 
// DOM 加载完再执行
$(function() {
	// 提交变更后，清空表单
	$("#update").click(function() {
		$.ajax({ 
			 url: "/super/missionEdit", 
			 data:{
				 "mark":$("#mark").val()
			 },
			 success: function(data){
				
				 
				 if (data.success) {
					 // 更新内容
					 toastr.info("更新成功");
					 //getMission();
				 } else {
					 toastr.error("更新失败");
					 getMission();
				 }

		     },
		     error : function() {
		    	 toastr.error("更新失败!");
		    	 getMission();
		     }
		 });
	});
	
	
	$("#reload").click(function() {
		getMission();
	});
	
	
	
	
	function getMission() {
		 $.ajax({ 
			 url: "/super/missionList", 
			
			 contentType : 'application/json',
			 
			 data:{
				// "mark":$("#mark").val()
			 },
			 success: function(data){
				 $("#mark").val(data.body.mark);
		     },
		     error : function() {
		    	 toastr.error("error!");
		     }
		 });
	}
	
	
	
});