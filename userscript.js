// ==UserScript==
// @name         LF Group Management Fucking Cunt Script
// @namespace    https://slut.io
// @version      0.23
// @author       Sladey
// @include      https://leakforums.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/Stricken/LF-Group-Management/master/userscript.js
// @updateURL    https://raw.githubusercontent.com/Stricken/LF-Group-Management/master/userscript.js
// ==/UserScript==

var url = window.location.href;


if (url.indexOf('managegroup.php?gid=') > -1) {
  y = $('.thead').first().next().text();
  y = y.substr(11);
  y = y.replace('"', '');
  $('.tcat[width="1"]').append('<input type="checkbox" id="selectAll">');
  $(':checkbox[id="selectAll"]').click(function() {
    return $(':checkbox').prop('checked', this.checked);
  });
  u = '';
  $('table').first().after('</br><input type="button" style="background: #406932;" class="button" id="goodstanding" value="Good Standing"> <input type="button" style="background: #887E33;" class="button" id="mildstanding" value="Mild Standing"> <input type="button" style="background: #732E2E;" class="button" id="badstanding" value="Bad Standing"></br><span style="font-size: 10px;">Script by Sladey\'s left testicle</span>');
  $('#goodstanding').click(function() {
    return $(':checkbox:checked').each(function() {
      var z;
      z = $(this).val();
      return localStorage.setItem('group_' + z, 1);
    });
  });
  $('#mildstanding').click(function() {
    return $(':checkbox:checked').each(function() {
      var z;
      z = $(this).val();
      return localStorage.setItem('group_' + z, 2);
    });
  });
  $('#badstanding').click(function() {
    return $(':checkbox:checked').each(function() {
      var z;
      z = $(this).val();
      return localStorage.setItem('group_' + z, 3);
    });
  });
  $('table > tbody  > tr').each(function() {
    var d, j, m;
    m = $(this).find('td');
    j = $(m).find('a').attr('href');
    if ($.trim(j) !== '') {
      j = j.substr(2);
      u = u + "[@" + j + ']\n';
      if (j !== null) {
        d = localStorage.getItem('group_' + j);
        if (d !== "undefined" || d !== null) {
          return $(this).find('td').each(function() {
            if (d == 1) {
              return $(this).css('background', '#406932');
            } else if (d == 2) {
              return $(this).css('background', '#887E33');
            } else if (d == 3) {
              return $(this).css('background', '#732E2E');
            }
          });
        }
      }
    }
  });
  $('form').last().before('<table border="0" cellspacing="0" cellpadding="10" class="tborder"><tbody><tr><td class="thead" colspan="6"><strong>' + y + ' Members</strong></td></tr><tr><td class="trow1"><span>Unformated Member List</br></span><textarea style="height: 165px;width:50%;">' + u + '</textarea></td></tr></tbody></table>');
}

if (url.indexOf('managegroup.php?action=joinrequests&gid=') > -1) {
  u = '';
  $('input[name*="request["][value="decline"]').each(function() {
    var r;
    r = $(this).attr('name');
    r = r.substr(8);
    return u = u + '[@' + r + '\n';
  });
  $('table').after('<table border="0" cellspacing="0" cellpadding="10" class="tborder"><tbody><tr><td class="thead" colspan="6"><strong>Blacklist Generator</strong></td></tr><tr><td class="trow1"><span>Unformated Member List</br></span><textarea style="height: 165px;width:50%;">' + u + '</textarea></td></tr></tbody></table>');
}
