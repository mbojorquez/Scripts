************


'open sud.ctl'


lati1=-14

while (lati > -21)

'set t 1'
'q time'
linha = sublin(result,1)
tempo = subwrd(linha,3)
res=subwrd(result,3)
hor=substr(res,1,2)
di=substr(res,4,2)
me=substr(res,6,3)
an=substr(res,9,4)
fe=''hor'Z'di''me''an''
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''
#fec=''me''di'-'an''



'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 4'
*'set ylint 1'

'c'
'set grads off'

****
'set vpage 0 11 0 8.5'
*'set parea 0.6 4.8 4.15 7.7'
'set parea 0.9 4.9 1 7.6'

'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=lati1

*'set yflip on'
'set t 1 25'
'set y 1'
'set xlint 5'
'set lat 'lati''
'set lon -90 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'

'set line 1 4 2'
'draw line 2.9 1 2.9 7.6'
'draw line 3.6 1 3.6 7.6'


'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -3 1.5 0.2 -kind darkslateblue->dodgerblue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.2 4.3'


'set lev 600'
'/home/mbojorquez/gscript/color.gs'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind firebrick->salmon'
'set cthick 5' 
'set cstyle 3'
'set gxout contour'
'set csmooth on'
'set clab masked'
'set cint 03'
'set clopts 1 -1 0.11'
'd rhprs'

*****

'set vpage 0 11 0 8.5'
*'set parea 5.8 10.0 4.15 7.7'
'set parea 5.9 9.9 1 7.7'

'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=lati1


'set t 1 25'
'set y 1'
'set xlint 5'
'set lat 'lati''
'set lon -90 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'set grads off'

'set line 1 4 2'
'draw line 7.9 1 7.9 7.6'
'draw line 8.6 1 8.6 7.6'


'set lev 600'
'teta500='tmpprs'*pow(1000/lev,2/7)'
'tves500=6.11*(pow(10,(7.5*('tmpprs'-273.16)/(237.7+('tmpprs'-273.16)))))'
'tve500='rhprs'*tves500/100'
'rm500=0.622*tve500/(lev-tve500)'
'/home/mbojorquez/gscript/color.gs'
'set clevs 3 4 5 6 7'
'set ccols 100 101 102 104 106 107'
'set gxout shaded'
'd rm500*1000'
'set csmooth on'
'set cint 03'
'set clab masked'
'set clopts 1 -1 0.11'
'/home/mbojorquez/gscript/cbarn 1 0 7.7 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 1.9 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/articulo_HR_'lati'.png x1024 y768'


lati1=lati1-1
endwhile

******


