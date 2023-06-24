
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

'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'


'/home/mbojorquez/gscript/color2 -levs 10 15 20 25 30 35 40 50 60 70 80 -kind darkgray->deepskyblue->blueviolet->green->lime->yellow->crimson->salmon'
'set gxout stream'
'set cthick 3'
'set strmden 6'

'd u1;v1;mag(u1,v1)'
*'/home/mbojorquez/gscript/cbarn '
'/home/mbojorquez/gscript/cbarn 0.5 1 5.0 5.8'

*****
'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'/home/mbojorquez/gscript/color2 60 130 10 -kind white->skyblue->khaki->salmon->crimson'
'set gxout shaded'
'set cthick 10'
'set strmden 10 0.001 0.05 2'
'define dv = mag(u1,v1)'
'd dv'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.2 5.9'

*****
'set lev 500'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'u1=ugrdprs*1.94'

'/home/mbojorquez/gscript/color2 -levs 10 15 20 25 30 35 40 50 60 70 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd u1'
*'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 2'

'/home/mbojorquez/gscript/color2 -levs -30 -25 -20 -15 -10 -5 -kind purple->steelblue->white'
'set gxout shaded'
'd u1'
*'/home/mbojorquez/gscript/cbarn 0.5 1 5.1 2'

*****
'set lev 500'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'v1=vgrdprs*1.94'

'/home/mbojorquez/gscript/color2 -levs 10 15 20 25 30 35 40 50 60 70 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd v1'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 2'

'/home/mbojorquez/gscript/color2 -levs -30 -25 -20 -15 -10 -5 -kind purple->steelblue->white'
'set gxout shaded'
'd v1'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.3 2'
*****


*'set strsiz 0.13'
*'set string 98 c 5.9 0'
*'draw string 3.6 7.85 250 hPa'
*'draw string 8.6 7.85 500 hPa'
*'draw string 3.6 3.85 700 hPa'
*'draw string 8.6 3.85 850 hPa'

'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 2.7 7.85 Lineas de corriente (kt)'
'draw string 7.7 7.85 Velocidad del viento (kt)'
'draw string 2.7 3.85 Viento zonal (sombr.)'
'draw string 7.7 3.85 Viento meridional (sombr.)'


'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.35 Velocidad de viento, viento zonal y meridional (kt) a 500 hPa'

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

'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/U/500hPa/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/U/500hPa/Zonalwind_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area9.png -t 1 x1024 y768'


if (i='25')
endif
endwhile




