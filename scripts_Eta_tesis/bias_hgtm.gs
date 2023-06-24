
'open sud3.ctl'
'open agost2013_075_area_1.ctl'


i=1

'q dims'


'set t 1'
'q time'
linha = sublin(result,1)
tempo = subwrd(linha,3)
res=subwrd(result,3)
hor=substr(res,1,2)
di=substr(res,4,2)
me=substr(res,6,3)
an=substr(res,9,4)
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''



while (i<=25)
'set t 1'
'q time'
linha = sublin(result,1)
tempo = subwrd(linha,3)
res=subwrd(result,3)
hor=substr(res,1,2)
di=substr(res,4,2)
me=substr(res,6,3)
an=substr(res,9,4)
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''

'set t 'i'' 
*********************************************************
'q time'
linha = sublin(result,1)
tempo = subwrd(linha,3)
res=subwrd(result,3)
hora=substr(res,1,2)
dia=substr(res,4,2)
mes=substr(res,6,3)
ano=substr(res,9,4)
if mes=JAN;mes=ENE; endif
if mes=APR;mes=ABR;endif
if mes=AUG;mes=AGO;endif
if mes=DEC;mes=DIC;endif

'q dims'
long=sublin(result,2)
lmax=subwrd(long,8)
lmin=subwrd(long,6)
va=lmax-lmin
fe=''dia''mes''ano''





'set parea 1.2 10.1 0.95 7.6'
'set lev 500'
'set display color white'
'set map 1 1 12'
'set annot 1 12'
'set xlint 2'
'set ylint 1'

'set mpdset hires'
*'set lat -50 10'
*'set lon -115 -35'


'c'
'set grads off'

****

'set lev 250'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'ur=uprs.2*1.94'
'vr=vprs.2*1.94'
*'du = u1-ur'
*'dv = v1-vr'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'


'/home/mbojorquez/gscript/color2 -60 60 5 -kind magenta->darkmagenta->steelblue->white->salmon->crimson->gold'
'set gxout shaded'
'set cthick 10'
'set strmden 10 0.001 0.05 2'
'define dviento1 = mag(u1,v1)'
'define dvientor = mag(ur,vr)'
'define dv = dviento1 - dvientor'
'd dv'
*'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 6.0'


'set lev 250'
*'set gxout shaded'
'set cthick 4'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 230 360 10 -kind saddlebrown->black->teal'
*'/home/mbojorquez/gscript/color2 -gxout contour 230 360 10 -kind darkgreen->teal->lime'
'set clab masked'
'set clopts -1 5 0.07'
'define dz = (hgtprs)-((zprs.2)/10)'
'd dz'


*****
'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'ur=uprs.2*1.94'
'vr=vprs.2*1.94'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'



'set gxout shaded'
'/home/mbojorquez/gscript/color2 5 65 10 -kind white->khaki->salmon->crimson->yellow'
'd rhprs-rprs.2'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 6.0'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -65 -5 10 -kind magenta->darkslateblue->steelblue->silver->white'
'd rhprs-rprs.2'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.3 6.0'


'set cthick 4'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 120 240 10 -kind saddlebrown->black->teal'
'set clab masked'
'set clopts -1 5 0.07'
'define dz = (hgtprs)-((zprs.2)/10)'
'd dz'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.7 5.0'

*****
'set lev 250'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'ur=uprs.2*1.94'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'/home/mbojorquez/gscript/color2 -levs 5 10 15 20 25 30 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd u1-ur'
*'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 2.0'

'/home/mbojorquez/gscript/color2 -levs -30 -25 -20 -15 -10 -5 -kind cyan->purple->steelblue->white'
'set gxout shaded'
'd u1-ur'
*'/home/mbojorquez/gscript/cbarn 0.5 1 5.1 2.0'

'/home/mbojorquez/gscript/color2 -levs 3 5 10 15 20 25 30 35 40 60 80 -kind white->silver->darkgray->gray->dimgray->black'
'set gxout stream'
'set cthick 2'
'set strmden -2'
'd u1;v1;mag(u1,v1)'


*****
'set lev 250'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'vr=vprs.2*1.94'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'/home/mbojorquez/gscript/color2 -levs 5 10 15 20 25 30 40 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd v1-vr'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 2.0'

'/home/mbojorquez/gscript/color2 -levs -40 -30 -25 -20 -15 -10 -5 -kind cyan->purple->steelblue->white'
'set gxout shaded'
'd v1-vr'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.3 2.0'

'/home/mbojorquez/gscript/color2 -levs 3 5 10 15 20 25 30 35 40 60 80 -kind white->silver->darkgray->gray->dimgray->black'
'set gxout stream'
'set cthick 2'
'set strmden -2'
'd u1;v1;mag(u1,v1)'

*****

'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 2.7 7.85 BIAS JS (sombr.) y HGT (cont.) a 250 hPa'
'draw string 7.9 7.85 BIAS HR (sombr.) y HGT (cont.) a 500 hPa'
'draw string 2.7 3.85 BIAS Viento zonal a 250 hPa'
'draw string 7.7 3.85 BIAS Viento meridional a 250 hPa'


'set strsiz 0.13'
'set string 1 c 12 0'
*'draw string 5.5 8.35 Altura geopotencial (mgp) & Humedad relativa (%)'
'draw string 5.5 8.35 BIAS para Altura geopotencial (mgp, contorno) & Humedad relativa (%, sombr.) - Eta Vs. Era Interim'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 12 0'
'draw string 3.4 8.10 Inicializacion Eta: 'hor'UTC 'di''me''an''

'set string 1 c 12 0'
'draw string 7.5 8.10 Validez: 'hora'UTC 'dia''mes''ano

i=i+1


*'set line 15 1 2'
*'draw shp /home/mbojorquez/gscript/shp/peru_prov.shp'

*'set line 1 1 3'
*'draw shp /home/mbojorquez/gscript/shp/peru_dpto.shp'

*'run etiquetas_gfs.gs'
*'run etiquetas_aerop_1.gs'


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/BIAS/South_America/HGT/MultiNivel/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/BIAS/South_America/HGT/MultiNivel/HGT_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area9.png -t 1 x1024 y768'


if (i='25')
endif
endwhile




