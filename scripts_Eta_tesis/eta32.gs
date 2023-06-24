********************************
function f(args)
file=subwrd(args,1)
lt=subwrd(args,2)
ln=subwrd(args,3)
var=subwrd(args,4)
name=subwrd(args,5)
********************************
'reinit'
'set display color white'
'c'

'open 'file

it=1
'set lat ' lt
'set lon ' ln

while(it <= 21)
'set t 'it
'define vari='var'-273.15'
*'define vari='var
'd vari'
say result

vari=subwrd(result,4)
clm=substr(vari,1,13)
 IN=''clm
say IN
rec= write('/root/Desktop/eta_'name'.txt',IN,append)
*'swap'

*'q pos'
*'c'

it=it+1
endwhile

quit

