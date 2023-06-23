************

'open agost2013_075.ctl'
'open agost2013_075_sfc.ctl'

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
'set xlint 1'
'set ylint 1'
*'set yflip on'

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

*'set lev 600'
'set t 9 33'
'set y 1'
'set xlint 5'
'set lat 'lati''
'set lon 270 300'
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
'd tprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.2 4.3'

'set clevs 0'
'set cthick 3' 
'set cstyle 1'
'set gxout contour'
'set ccolor 1'
*'set csmooth on'
'set clab %.0f`3.`1C'
*'set cint 03'
'set clopts 1 6 0.10'
'd tprs-273'


'set lev 600'
'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind firebrick->salmon'
'set cthick 5' 
'set cstyle 3'
'set gxout contour'
'set csmooth on'
'set clab masked'
'set clab %.0f%'
'set cint 03'
'set clopts 6 6 0.10'
'd rprs'




*'set gxout shaded'
*'set csmooth on' 
*'d HRprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

*****
'set vpage 0 11 0 8.5'
*'set parea 5.8 10.0 4.15 7.7'
'set parea 5.9 9.9 1 7.7'

'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=lati1


*'set lev 600'
'set t 9 33'
'set y 1'
'set xlint 5'
'set lat 'lati''
'set lon 270 300'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'set grads off'

'set line 1 4 2'
'draw line 7.9 1 7.9 7.6'
'draw line 8.6 1 8.6 7.6'


'set lev 600'
'teta500='tprs'*pow(1000/lev,2/7)'
'tves500=6.11*(pow(10,(7.5*('tprs'-273.16)/(237.7+('tprs'-273.16)))))'
'tve500='rprs'*tves500/100'
'rm500=0.622*tve500/(lev-tve500)'
'/home/mbojorquez/gscript/color.gs'
'set clevs 3 4 5 6 7'
'set ccols 100 101 102 104 106 107'
'set gxout shaded'
'd rm500*1000'
'set csmooth on'
'set cint 03'
'set clab masked'
'set clopts 1 6 0.10'
'/home/mbojorquez/gscript/cbarn 1 0 7.7 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab on'
'set clopts 1 6 0.10'
'd rm500*1000'

'set clab on'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.5 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 1.9 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.4 8.00 Reanalisis ERA-Interim 0.75`3.`0C'


'!mkdir -p /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x2048 y1536'

*'gxprint /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Hov/HR/Corte_'fe'_'hora'UTC_'lati'.png x2048 y1536'

lati1=lati1-1
endwhile


*****
