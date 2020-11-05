/**
 *  jquery插件-cookie
 *  请在$(document).ready()中去执行
 */

// create a session cookie (expires when the browser closes)
// $.cookie.write('cookie_name', 'cookie_value');

// create a cookie that expires in 1 day
// $.cookie.write('cookie_name', 'cookie_value', 24 * 60 * 60);

// read a cookie’s value
//  following the examples above, this should return "cookie_value"
//  $.cookie.read('cookie_name');

//  the "read" method returns null if the cookie doesn’t exist
//  $.cookie.read('non_existing_cookie_name');

//  delete the cookie
//  $.cookie.destroy('cookie_name');

!function(a){"use strict";var b=function(){this.destroy=function(a){return this.write(a,"",-1)},this.read=function(a){var b=new RegExp("(^|; )"+encodeURIComponent(a)+"=(.*?)($|;)"),c=document.cookie.match(b);return c?decodeURIComponent(c[2]):null},this.write=function(a,b,c,d,e,f){var g=new Date;return c&&"number"==typeof c?g.setTime(g.getTime()+1e3*c):c=null,document.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+(c?"; expires="+g.toGMTString():"")+"; path="+(d?d:"/")+(e?"; domain="+e:"")+(f?"; secure":"")}};a.cookie=new b}(jQuery);