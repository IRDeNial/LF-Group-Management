if url.indexOf('managegroup.php?gid=') > -1

  y = $('.thead').first().next().text()
  y = y.substr(11)
  y = y.replace('"', '')

  $('.tcat[width="1"]').append('<input type="checkbox" id="selectAll">')
  $(':checkbox[id="selectAll"]').click ->
    $(':checkbox').prop 'checked', @checked
  u = ''

  $('table').first().after('</br><input type="button" style="background: #406932;" class="button" id="goodstanding" value="Good Standing"> <input type="button" style="background: #887E33;" class="button" id="mildstanding" value="Mild Standing"> <input type="button" style="background: #732E2E;" class="button" id="badstanding" value="Bad Standing">')
  $('#goodstanding').click ->
    $(':checkbox:checked').each ->
      z = $(this).val()
      localStorage.setItem('group_'+z, 1)
  $('#mildstanding').click ->
    $(':checkbox:checked').each ->
      z = $(this).val()
      localStorage.setItem('group_'+z, 2)
  $('#badstanding').click ->
    $(':checkbox:checked').each ->
      z = $(this).val()
      localStorage.setItem('group_'+z, 3)  


  $('table > tbody  > tr').each ->
    m = $(this).find('td')
    j = $(m).find('a').attr('href')
    if($.trim(j) != '')
      j = j.substr(2)
      u = u + "[@" + j + ']\n'
      if j != null
        d = localStorage.getItem('group_'+j)
        if d != "undefined" || d != null
          $(this).find('td').each ->
            if `d == 1`
              $(this).css('background', '#406932')
            else if `d == 2`
              $(this).css('background', '#887E33')
            else if `d == 3`
              $(this).css('background', '#732E2E')
  $('form').last().before('<table border="0" cellspacing="0" cellpadding="10" class="tborder"><tbody><tr><td class="thead" colspan="6"><strong>'+y+' Members</strong></td></tr><tr><td class="trow1"><span>Unformated Member List</br></span><textarea style="height: 165px;width:50%;">'+u+'</textarea></td></tr></tbody></table>')

