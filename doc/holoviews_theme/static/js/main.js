$(document).ready(function() {
    var loc = window.location.pathname;
    if (loc.match(/user_guide\/(?!index)/gi) || loc.match(/getting_started\/(?!index)/gi)) {
	console.log('show');
	//$('#hacketyhackhack').css("visibility","visible");//show();
	//show();
    } else {
	console.log('hide');
	//$('#hacketyhackhack').css("visibility","hidden");
//	$('#hacketyhackhack').hide();
    }
    //$('.toc .toctree-l1').addClass('hide');
    //$('.toc').addClass('obfuscate');
});
//});
