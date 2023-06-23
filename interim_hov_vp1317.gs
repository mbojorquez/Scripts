************

'reinit'

'open agost2013_075.ctl'
'open agost2013_075_sfc.ctl'


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

lati1=-14
lati2=-18

'set yflip on'
*'set lev 300'
'set t 9 33'
'set y 1'
*'set lat 'lati''
'set lon 250 300'
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'
'set lev 500'
'define tprs1=ave(tprs-273,lat='lati2',lat='lati1')'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -14 -9 0.3 -kind aqua->steelblue->white'
*'d tprs-273'
'd tprs1'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.2 4.8'

'set grads off'
*'/home/WRF_Files/gscript/color2 5 20 2 -kind darkslateblue->steelblue->silver->white'
*'set gxout shaded'
*'set csmooth on' 
*'d rhprs'

'set lev 300'
'define pvprs1=ave(pvprs*1000000,lat='lati2',lat='lati1')'
*'/home/mbojorquez/gscript/color2 -levs -7 -6 -5 -4 -3 -2 -1.6 -1 -kind purple->steelblue->white'
*'set gxout shaded'
*'set csmooth on' 
*'d pvprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'



'set clevs -1.6 -2 -3 -4 -5 -6 -7 -8 -9 -10'
'set gxout contour'
'set ccolor 9'
'set cstyle 1'
'set cmin 1.6'
'set clab on'
*'d pvprs*1000000'
'd pvprs1'


'set lev 500'
'define zprs1=ave(zprs/10,lat='lati2',lat='lati1')'
'set gxout contour'
'set cthick 5'
'set cstyle 3'
*'/home/mbojorquez/gscript/color2 -gxout contour 4500 6500 40 -kind white->black'
'set cmin 4500'
'set cint 40'
'set ccolor 1'
'set clab masked'
*'d zprs/10'
'd zprs1'

'set lev 500'
*'u1=uprs*1.94'
*'v1=vprs*1.94'
'define u1=ave(uprs*1.94,lat='lati2',lat='lati1')'
'set ccolor 15'
*'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'set gxout vector'
'set arrscl .2 50'
'd skip(u1,2,1);u1'



'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25  Vort. potencial 300 hPa (PVU, sombr.), HGT (mgp, contor.), T`3.`0 (sombr.) & Viento zonal (kt)'

'set strsiz 0.13'
'draw string 4. 8.00 Corte latitudinal: 'lati'`3.`0'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.0 8.00 Reanalisis ERA-Interim 0.75`3.`0C'


'!mkdir -p /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Hov/PV/13_17'
'gxprint /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Hov/PV/13_17/PV_'fe'_'hora'UTC_'lati'.png x2048 y1536'

************




