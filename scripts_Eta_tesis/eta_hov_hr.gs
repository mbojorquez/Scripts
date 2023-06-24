************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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

lati1=-10
lati2=-20

'set yflip on'
*'set lev 600'
*'set yaxis 1 16 4'
'set t 1 25'
'set y 1'

*'set lat -15'
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -3 1.5 0.2 -kind purple->blue->white'
'd ave(tmpprs-273,lat='lati2',lat='lati1')'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'


'set lev 600'
'teta500='tmpprs'*pow(1000/lev,2/7)'
'tves500=ave(6.11*(pow(10,(7.5*('tmpprs'-273.16)/(237.7+('tmpprs'-273.16))))),lat='lati2',lat='lati1')'
'tve500=ave('rhprs'*tves500/100,lat='lati2',lat='lati1')'
'rm500=0.622*tve500/(lev-tve500)'
'/home/mbojorquez/gscript/color.gs'
'set clevs 3 4 5 6 7'
'set ccols 100 101 102 104 106 107'
'set gxout shaded'
*'d ave(rm500*10000,lat='lati2',lat='lati1')'
'd rm500*1000'
'set csmooth on'
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
*'set ccols 100 101 102 104 106 107'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
*'set clevs 85 90 95 98'
*'set ccols 100 101 102 103 104 106'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'define rpro=ave(rhprs,lat='lati2',lat='lati1')'
*'d ave(rhprs,lat=-20,lat=-10)'
'd rpro'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.6 4.3'



*'set gxout shaded'
*'set csmooth on' 
*'d Hrhprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'



'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.6 8.00 Corte lat. promedio: 'lati2'`3.`0 a 'lati1'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati1'a'lati2'_1.png x1024 y768'

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati1=-12
lati2=-18

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
*'set lat -15'
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -3 1.5 0.2 -kind purple->blue->white'
'd ave(tmpprs-273,lat='lati2',lat='lati1')'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

'set lev 600'
'teta500='tmpprs'*pow(1000/lev,2/7)'
'tves500=ave(6.11*(pow(10,(7.5*('tmpprs'-273.16)/(237.7+('tmpprs'-273.16))))),lat='lati2',lat='lati1')'
'tve500=ave('rhprs'*tves500/100,lat='lati2',lat='lati1')'
'rm500=0.622*tve500/(lev-tve500)'
'/home/mbojorquez/gscript/color.gs'
'set clevs 3 4 5 6 7'
'set ccols 100 101 102 104 106 107'
'set gxout shaded'
*'d ave(rm500*10000,lat='lati2',lat='lati1')'
'd rm500*1000'
'set csmooth on'
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
*'set ccols 100 101 102 104 106 107'
'set gxout contour'
'set clab masked'
*'d ave(rm500*10000,lat='lati2',lat='lati1')'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
*'set clevs 85 90 95 98'
*'set ccols 100 101 102 103 104 106'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'define rpro=ave(rhprs,lat='lati2',lat='lati1')'
*'d ave(rhprs,lat=-20,lat=-10)'
'd rpro'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.6 4.3'



*'set gxout shaded'
*'set csmooth on' 
*'d Hrhprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'



'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.6 8.00 Corte lat. promedio: 'lati2'`3.`0 a 'lati1'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''

'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati1'a'lati2'.png x1024 y768'

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati1=-20
lati2=-30

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
*'set lat -15'
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -10 -1 0.5 -kind purple->blue->white'
'd ave(tmpprs-273,lat='lati2',lat='lati1')'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

'set lev 600'
'teta500='tmpprs'*pow(1000/lev,2/7)'
'tves500=ave(6.11*(pow(10,(7.5*('tmpprs'-273.16)/(237.7+('tmpprs'-273.16))))),lat='lati2',lat='lati1')'
'tve500=ave('rhprs'*tves500/100,lat='lati2',lat='lati1')'
'rm500=0.622*tve500/(lev-tve500)'
'/home/mbojorquez/gscript/color.gs'
'set clevs 3 4 5 6 7'
'set ccols 100 101 102 104 106 107'
'set gxout shaded'
*'d ave(rm500*10000,lat='lati2',lat='lati1')'
'd rm500*1000'
'set csmooth on'
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
*'set ccols 100 101 102 104 106 107'
'set gxout contour'
'set clab masked'
*'d ave(rm500*10000,lat='lati2',lat='lati1')'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
*'set ccols 100 101 102 103 104 106'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'define rpro=ave(rhprs,lat='lati2',lat='lati1')'
*'d ave(rhprs,lat=-20,lat=-10)'
'd rpro'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.6 4.3'



*'set gxout shaded'
*'set csmooth on' 
*'d Hrhprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'



'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.6 8.00 Corte lat. promedio: 'lati2'`3.`0 a 'lati1'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati1'a'lati2'.png x1024 y768'

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati=-14

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
'set lat 'lati''
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -3 1.5 0.2 -kind purple->blue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'


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
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
*'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'd rhprs'


'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x1024 y768'

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati=-15

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
'set lat 'lati''
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -3 1.5 0.2 -kind purple->blue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

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
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'd rhprs'


'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x1024 y768'


***************


'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati=-16

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
'set lat 'lati''
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -3 1.5 0.2 -kind purple->blue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

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
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'd rhprs'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x1024 y768'

***************


'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati=-17

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
'set lat 'lati''
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -3 1.5 0.2 -kind purple->blue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

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
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'd rhprs'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x1024 y768'

***************

***************


'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati=-18

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
'set lat 'lati''
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -3 1.5 0.2 -kind purple->blue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

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
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'd rhprs'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x1024 y768'

***************

***************

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati=-19

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
'set lat 'lati''
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -10 1 0.5 -kind purple->blue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

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
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'd rhprs'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x1024 y768'
*************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati=-20

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
'set lat 'lati''
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -10 1 0.5 -kind purple->blue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

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
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'd rhprs'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x1024 y768'

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati=-25

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
'set lat 'lati''
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -15 -5 1 -kind purple->blue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

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
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'd rhprs'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x1024 y768'

***************


'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
'set display color white'
'set xlint 1'



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
'set ylint 1'

lati=-30

'set yflip on'
*'set lev 600'
'set t 1 25'
'set y 1'
'set lat 'lati''
'set lon -110 -60'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 600'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -15 -5 1 -kind purple->blue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

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
'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 6 7 8'
'set cstyle 3'
'set gxout contour'
'set clab masked'
'd rm500*1000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 85 90 95 98'
'/home/mbojorquez/gscript/color2 -levs 90 95 98 -kind dimgray->black'
'set cthick 6' 
'set gxout contour'
'set csmooth on'
'set clab masked'
'd rhprs'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Relacion de mezcla (g/kg, sombr.), HR (%, contorno negro) & Temp. (`3.`0C, sombr. azul)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Nivel isobarico: 600 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/HR/HR_'lati'.png x1024 y768'

***************
