if url.indexOf('managegroup.php?gid=') > -1

  y = $('.thead').first().find('strong').text()

  $('.tcat[width="1"]').append('<input type="checkbox" id="selectAll">')
  $(':checkbox[id="selectAll"]').click ->
    $(':checkbox').prop 'checked', @checked
  u = ''
  e = ''
  n = ''
  s = ''

  $('table').first().after('</br><input type="button" style="background: #406932;" class="button" id="goodstanding" value="Good Standing"> <input type="button" style="background: #887E33;" class="button" id="mildstanding" value="Mild Standing"> <input type="button" style="background: #732E2E;" class="button" id="badstanding" value="Bad Standing"></br><span style="font-size: 10px;">Script by Sladey\'s left testicle</span>')
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
          if `d == 1`
            $(this).css('background', '#406932')
            e = e + "[*][@" + j + ']\n'
          else if `d == 2`
            $(this).css('background', '#887E33')
            n = n + "[*][@" + j + ']\n'
          else if `d == 3`
            $(this).css('background', '#732E2E')
            s = s + "[*][@" + j + ']\n'

          $(this).find('td').each ->
            $(this).css('background', 'none')

  $('form').last().before('<table border="0" cellspacing="0" cellpadding="10" class="tborder"><tbody><tr><td class="thead" colspan="6"><strong>'+y+' UID List</strong></td></tr><tr><td class="trow1"><span>Unformated Member List</br></span><textarea style="height: 165px;width:48%;">'+u+'</textarea><textarea style="height: 165px;width: 48%;margin-left: 15px;">[color=#61AB48]Good Standing[/color][list]'+e+'[/list]\n[color=#887E33]Mild Standing[/color][list]'+n+'[/list]\n[color=#732E2E]Bad Standing[/color][list]'+s+'[/list]</textarea></td></tr></tbody></table>')
