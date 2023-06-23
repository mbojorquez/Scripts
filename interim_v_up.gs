
'open agost2013_075.ctl'
'open agost2013_075_sfc.ctl'


i=6

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



while (i<=40)
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
'set display color white'
'set map 1 1 12'
'set annot 1 12'
'set xlint 2'
'set ylint 1'

'set mpdset hires'
'set lat -50 10'
'set lon 245 325'


'c'
'set grads off'

****

'set lev 250'
'u1=uprs*1.94'
'v1=vprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set xlab off'
'set ylint 10'
'set grads off'

'/home/mbojorquez/gscript/color2 -levs 10 20 30 40 50 60 70 80 90 100 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd v1'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 6.0'

'/home/mbojorquez/gscript/color2 -levs -100 -90 -80 -70 -60 -50 -40 -30 -20 -10 -kind cyan->purple->steelblue->white'
'set gxout shaded'
'd v1'
'/home/mbojorquez/gscript/cbarn 0.5 1 5.2 6.0'
*****
'set lev 500'

'u1=uprs*1.94'
'v1=vprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set xlab off'
'set ylint 10'
'set grads off'

'/home/mbojorquez/gscript/color2 -levs 10 15 20 25 30 35 40 50 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd v1'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 6.0'

'/home/mbojorquez/gscript/color2 -levs -50 -40 -35 -30 -25 -20 -15 -10 -kind cyan->purple->steelblue->white'
'set gxout shaded'
'd v1'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.3 6.0'

*****
'set lev 700'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set xlab on'
'set ylint 10'
'set grads off'
'set xlint 20'

'v1=vprs*1.94'

'v2=maskout(v1,spsfc.2/100-700)'

'/home/mbojorquez/gscript/color2 -levs 10 15 20 25 30 35 40 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd v2'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.9 2'

'/home/mbojorquez/gscript/color2 -levs -40 -30 -25 -20 -15 -10 -kind cyan->purple->steelblue->white'
'set gxout shaded'
'd v2'
'/home/mbojorquez/gscript/cbarn 0.5 1 5.2 2'

*****
'set lev 850'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set xlab on'
'set ylint 10'
'set grads off'
'set xlint 20'

'v1=vprs*1.94'
'v2=maskout(v1,spsfc.2/100-850)'

'/home/mbojorquez/gscript/color2 -levs 5 10 15 20 25 30 35 40 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd v2'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 2'

'/home/mbojorquez/gscript/color2 -levs -40 -35 -30 -25 -20 -15 -10 -5 -kind cyan->purple->steelblue->white'
'set gxout shaded'
'd v2'
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
'draw string 2.7 7.85 Viento meridional a 250 hPa'
'draw string 7.7 7.85 Viento meridional a 500 hPa'
'draw string 2.7 3.85 Viento meridional a 700 hPa'
'draw string 7.7 3.85 Viento meridional a 850 hPa'


'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.35 Grafica multinivel de viento meridional (kt, sombr.) '

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 5.5 8.10 Reanalisis ERA-Interim 0.75`3.`0C: 'hora'UTC 'fe''


i=i+1


*'set line 15 1 2'
*'draw shp /home/mbojorquez/gscript/shp/peru_prov.shp'

*'set line 1 1 3'
*'draw shp /home/mbojorquez/gscript/shp/peru_dpto.shp'

*'run etiquetas_gfs.gs'
*'run etiquetas_aerop_1.gs'


'!mkdir -p /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/V/V_UP/'
'gxprint /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/V/V_UP/Meridionalwind_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area7.png -t 1 x2048 y1536'


if (i='40')
endif
endwhile




