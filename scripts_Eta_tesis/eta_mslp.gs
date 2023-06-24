
'open sud.ctl'


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
'set lat -50 10'
'set lon -115 -35'


'c'
'set grads off'

****
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'set lev 950'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'

'/home/mbojorquez/gscript/color.gs'
'set clevs 80 85 90 95 98'
'set ccols 100 101 102 103 104 106'
'set gxout shaded'
'set csmooth on'
*'/home/mbojorquez/gscript/color2 80 100 5 -kind white->khaki->salmon->crimson->yellow'
'define rhprs2=maskout(rhprs,PRESsfc/100-950)'
'd rhprs2'
'/home/mbojorquez/gscript/cbarn 0.5 1 5.1 6.0'


'set gxout shaded'
'/home/mbojorquez/gscript/color2 5 50 5 -kind darkorchid->darkslateblue->steelblue->silver->white'
'd rhprs2'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 6.0'

'define h850=hgtprs(lev=850)'
'define z850=maskout(h850,PRESsfc/100-850)'

'set gxout contour'
'set cthick 5'
'/home/mbojorquez/gscript/color2 -gxout contour 900 1600 30 -kind blue->dodgerblue->darkgray->salmon->firebrick'
'set clopts -1 -1 0.06'
'set clab masked'
'd (z850)'

'set gxout vector'
'set ccolor 1'
'set arrscl .2 30'
'define u2=maskout(u1,PRESsfc/100-925)'
'define v2=maskout(v1,PRESsfc/100-925)'
'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'd skip(u2,8,8);skip(v2,8,8);mag(u2,v2)'



*****

'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'slp1=msletmsl/100'
'define slp=maskout(slp1,PRESsfc/100-850)'

*'set clevs 978 981 984 987 990 993 996 999 1002 1005 1008 1011 1014 1017 1020 1023 1026 1029 1032 1035 1038 1041'
*'set ccols 48 47 46 45 44 43 42 41 0 0 0 0 0 21 22 23 24 25 26 27 28 29 30'
*'color -gxout shaded -kind blue->lightcyan->lightblue -var slp 978 1008 3'
*'c'



'set gxout shaded'
'/home/mbojorquez/gscript/color2 -gxout shaded -levs 975 978 981 984 987 990 993 996 999 1002 1005 1008 1011 1014 1017 1020 1023 1026 1029 1032 1035 1038 -kind darkblue->blue->lightcyan->lightblue->lavender->white->ghostwhite->linen->lightsalmon->tomato->khaki'
'q shades'
'd slp'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 5.9'


'set gxout contour'
'set clevs 1020 1023 1026 1029 1032 1035 1038 1041'
'set cstyle 1'
'set ccolor 2'
'set cthick 1'
'set clab masked'
'set clopts 1 4 0.05'
'd slp'

'set clevs 1012 1013'
'set cstyle 3'
'set ccolor 1'
'set cthick 1'
'set clab masked'
'set clopts 1 4 0.05'
'd slp'

****************
'set clevs 1029 1017 1014 1011'
'set cthick 4'
'set ccolor 1'
'set cint 03'
'set clab masked'
'd slp'

******************
'set clevs 1008 1005 1002 999 996 993 990 987 984 981 978 975 972 969 966 963 960 957 954 951 948'
'set cthick 1'
'set ccolor 4'
'set cint 03'
'set clab masked'
'set clopts 1 4 0.05'
'd slp'

'define z500=hgtprs(lev=500)'
'define z1000=hgtprs(lev=1000)'

'set gxout contour'
'set cstyle 3'
'set cthick 3'
'/home/mbojorquez/gscript/color2 -gxout contour 4800 5700 50 -kind blue->blue'
'set clopts -1 -1 0.06'
'set clab masked'
'd (z500-z1000)'

*****

'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'

'define tc850mb=tmpprs(lev=950)-273'
'define rh850mb=rhprs(lev=950)'

'define u2=maskout(u1,PRESsfc/100-950)'
'define v2=maskout(v1,PRESsfc/100-950)'

'define dewp950mb = tc850mb-((14.55+0.114*tc850mb)*(1-0.01*rh850mb)+pow((2.5+0.007*tc850mb)*(1-0.01*rh850mb),3)+(15.9+0.117*tc850mb)*pow((1-0.01*rh850mb),14))'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -15 0 1 -kind blueviolet->deepskyblue->white'
'define dewp950mb1=maskout(dewp950mb,PRESsfc/100-925)'
'd dewp950mb1'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.9 2.0'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.2 5.7'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 0 25 2 -kind  white->khaki->salmon->crimson->yellow'
'd dewp950mb1'
'/home/mbojorquez/gscript/cbarn 0.5 1 5.3 2.0'

'set gxout contour'
'set clevs -15 -10 -5 0'
'set cthick 4'
'set ccolor 1'
'set cint 03'
'set clab masked'
'd dewp950mb1'

****
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'


'set lev 250'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'/home/mbojorquez/gscript/color2 60 130 10 -kind white->skyblue->khaki->salmon->crimson'
'set gxout stream'
'set cthick 10'
'set strmden 10 0.001 0.05 2'
'd u1;v1;mag(u1,v1)'



'set ccolor 1'
*'/home/mbojorquez/gscript/color2 -levs 10 15 20 25 30 35 40 50 60 70 80 -kind darkgray->deepskyblue->blueviolet->green->lime->yellow->crimson->salmon'
'set gxout vector'
*'set cthick 3'
*'set strmden 6'
*'set strmden 5 0.001 0.06 2'
'set arrscl .2 80'
*'d skip(u1,2,2);u1'
*****

*'set strsiz 0.13'
*'set string 98 c 5.9 0'
*'draw string 3.6 7.85 250 hPa'
*'draw string 8.6 7.85 500 hPa'
*'draw string 3.6 3.85 700 hPa'
*'draw string 8.6 3.85 850 hPa'

'set strsiz 0.10'
'set string 1 c 5.9 0'
'draw string 2.7 7.85 Humedad relativa 950 hPa (%) y HGT 850 hPa'
'draw string 8.3 7.85 Pres. red. a nivel del mar (hPa) y Espesor 500/1000 hPa'
'draw string 2.7 3.85 Temperatura de rocio 950 hPa (`3.`0C)'
'draw string 7.9 3.85 JS-250 hPa (kt) y espesor HGT (500/1000 hPa)'

'set strsiz 0.14'
'set string 1 c 10 0'
'draw string 5.5 8.35 Grafica multinivel'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 3.4 8.10 Eta - SENAMHI: 'hor'UTC 'di''me''an''

'set string 1 c 10 0'
'draw string 7.5 8.10 Valido para: 'hora'UTC 'dia''mes''ano

i=i+1


*'set line 15 1 2'
*'draw shp /home/mbojorquez/gscript/shp/peru_prov.shp'

*'set line 1 1 3'
*'draw shp /home/mbojorquez/gscript/shp/peru_dpto.shp'

*'run etiquetas_gfs.gs'
*'run etiquetas_aerop_1.gs'


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/MSLP/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/MSLP/MSLP_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area99.png -t 1 x1024 y768'


if (i='25')
endif
endwhile




