
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
'set lev 900'
'v1=vgrdprs*1.94'
'vr=vprs.2*1.94'
'v2=v1-vr'
'rmse=sqrt((v2*v2))'
'rmse1=maskout((rmse),PRESsfc/100-900)'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'/home/mbojorquez/gscript/color2 -levs 3 5 10 15 20 25 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd rmse1'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 6.0'

*****
'set lev 925'
'v1=vgrdprs*1.94'
'vr=vprs.2*1.94'
'v2=maskout((v1-vr),PRESsfc/100-925)'
'rmse=sqrt((v2*v2))'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'/home/mbojorquez/gscript/color2 -levs 3 5 10 15 20 25 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd rmse'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 6.0'

'u=ugrdprs*1.94'
'v=vgrdprs*1.94'
'define u1=maskout(u,PRESsfc/100-850)'
'define v1=maskout(v,PRESsfc/100-850)'
'/home/mbojorquez/gscript/color2 -levs 2 4 6 10 15 20 25 30 -kind white->darkgray->gray->dimgray->black'
'set gxout stream'
'set cthick 2'
'set strmden -2'
'd u1;v1;mag(u1,v1)'


*****
'set lev 950'
'v1=vgrdprs*1.94'
'vr=vprs.2*1.94'
'v2=maskout((v1-vr),PRESsfc/100-950)'
'rmse=sqrt((v2*v2))'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'/home/mbojorquez/gscript/color2 -levs 3 5 10 15 20 25 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd rmse'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 2'

*****
'set lev 1000'
'v1=vgrdprs*1.94'
'vr=vprs.2*1.94'
'v2=maskout((v1-vr),PRESsfc/100-950)'
'rmse=sqrt((v2*v2))'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'/home/mbojorquez/gscript/color2 -levs 3 5 10 15 20 25 -kind white->salmon->crimson->gold'
'set gxout shaded'
'd rmse'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 2'

*****
'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 2.7 7.85 RMSE Viento meridional a 900 hPa'
'draw string 7.7 7.85 RMSE Viento meridional a 925 hPa'
'draw string 2.7 3.85 RMSE Viento meridional a 950 hPa'
'draw string 7.7 3.85 RMSE Viento meridional a 1000 hPa'



'set strsiz 0.13'
'set string 1 c 12 0'
'draw string 5.5 8.35 RMSE para viento meridional (kt) - Niveles bajos'

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

'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/RMSE/South_America/V/V_LOW/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/RMSE/South_America/V/V_LOW/Meridionalwind_low_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area99.png -t 1 x1024 y768'


if (i='25')
endif
endwhile




