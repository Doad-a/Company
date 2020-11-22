var focus_width=960      //width=960px
var focus_height=450     //height=450
var text_height=0
var swf_height = focus_height+text_height
var pics='images/banner1.jpg|images/banner2.jpg|images/banner3.jpg|images/banner4.jpg'
var links='||'
var texts='||'
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ focus_width +'" height="'+ swf_height +'">');
//  下一行中的value="JS/pixviewer.swf"表示flash的位置，位置一样才可以启动
document.write('<param name="allowScriptAccess" value="sameDomain"><param name="movie" value="pixviewer.swf"><param name="quality" value="high"><param name="bgcolor" value="#ffffff">');
document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
document.write('<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'">');
//  下一行中的value="JS/pixviewer.swf"表示flash的位置，位置一样才可以启动
document.write('<embed src="pixviewer.swf" wmode="opaque" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'" menu="false" bgcolor="#ffffff" quality="high" width="'+ focus_width +'" height="'+ swf_height +'" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
document.write('</object>');