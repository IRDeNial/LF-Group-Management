// ==UserScript==
// @name         LF Group Management Fucking Cunt Script
// @namespace    https://slut.io
// @version      0.36
// @author       Sladey
// @include      https://leakforums.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/Stricken/LF-Group-Management/master/userscript.js
// @updateURL    https://raw.githubusercontent.com/Stricken/LF-Group-Management/master/userscript.js
// ==/UserScript==

(function($){

var url = window.location.href;

	if (url.indexOf('managegroup.php?gid=') > -1) {
	  y = $('.thead').first().find('strong').text();
	  $('.tcat[width="1"]').append('<input type="checkbox" id="selectAll">');
	  $(':checkbox[id="selectAll"]').click(function() {
	    return $(':checkbox').prop('checked', this.checked);
	  });
	  u = '';
	  e = '';
	  n = '';
	  s = '';
	  setShit = function(uid, n) {
	    return localStorage.setItem('group_' + uid, n);
	  };
	  formatUsername = function(u, j) {
	    return u + "[*][@" + j + ']\n';
	  };
	  checkboxShit = function(u) {
	    return $(':checkbox:checked').each(function() {
	      var z;
	      z = $(this).val();
	      return setShit(z, u);
	    });
	  };
	  $('table').first().after('</br><input type="button" style="background: #406932;" class="button" id="goodstanding" value="Good Standing"> <input type="button" style="background: #887E33;" class="button" id="mildstanding" value="Mild Standing"> <input type="button" style="background: #732E2E;" class="button" id="badstanding" value="Bad Standing"></br><span style="font-size: 10px;">Script by Sladey\'s left testicle</span>');
	  $('#goodstanding').click(function() {
	    return checkboxShit(1);
	  });
	  $('#mildstanding').click(function() {
	    return checkboxShit(2);
	  });
	  $('#badstanding').click(function() {
	    return checkboxShit(3);
	  });
	  $('table > tbody  > tr').each(function() {
	    var d, j, m;
	    m = $(this).find('td:first:not(:contains("Leader"))');
	    j = $(m).find('a').attr('href');
	    if ($.trim(j) !== '' && (j != null)) {
	      j = j.substr(2);
	      u = u + "[@" + j + ']\n';
	      d = localStorage.getItem('group_' + j);
	      if (d == 1) {
	        $(this).css('background', '#406932');
	        e = formatUsername(e, j);
	      } else if (d == 2) {
	        $(this).css('background', '#887E33');
	        n = formatUsername(n, j);
	      } else if (d == 3) {
	        $(this).css('background', '#732E2E');
	        s = formatUsername(s, j);
	      }
	      return $(this).find('td').each(function() {
	        return $(this).css('background', 'none');
	      });
	    }
	  });
	  $('form').last().before('<table border="0" cellspacing="0" cellpadding="10" class="tborder"><tbody><tr><td class="thead" colspan="6"><strong>' + y + ' UID List</strong></td></tr><tr><td class="trow1"><span>Unformated Member List</br></span><textarea style="height: 165px;width:48%;">' + u + '</textarea><textarea style="height: 165px;width: 48%;margin-left: 15px;">[color=#61AB48]Good Standing[/color][list]' + e + '[/list]\n[color=#887E33]Mild Standing[/color][list]' + n + '[/list]\n[color=#732E2E]Bad Standing[/color][list]' + s + '[/list]</textarea></td></tr></tbody></table>');
	}

	if (url.indexOf('managegroup.php?action=joinrequests&gid=') > -1) {
	  u = '';
	  $('#removeall').click(function() {
	    return $('input[value="decline"]').each(function() {
	      return $(this).click();
	    });
	  });
	  $('input[value="decline"]').each(function() {
	    var r;
	    r = $(this).attr('name');
	    r = r.substr(8);
	    return u = u + '[@' + r + '\n';
	  });
	  $('table').after('<table border="0" cellspacing="0" cellpadding="10" class="tborder"><tbody><tr><td class="thead" colspan="6"><strong>Blacklist Generator</strong></td></tr><tr><td class="trow1"><span>Unformated Member List</br></span><textarea style="height: 165px;width:50%;">' + u + '</textarea></td></tr></tbody></table><input type="button" style="background: #406932;" class="button" id="removeall" value="Remove all">');
	}
})(jQuery);
