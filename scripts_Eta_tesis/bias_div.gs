
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


'/home/mbojorquez/gscript/color2 -levs 3 5 10 15 20 25 30 35 40 60 80 -kind white->silver->darkgray->gray->dimgray->black'
'set gxout stream'
'set cthick 2'
'set strmden -2'
'd u1;v1;mag(u1,v1)'

'define uprs2=ugrdprs(lev=300)+ugrdprs(lev=250)+ugrdprs(lev=200)'
'define vprs2=vgrdprs(lev=300)+vgrdprs(lev=250)+vgrdprs(lev=200)'
'define uprs3=uprs.2(lev=300)+uprs.2(lev=250)+uprs.2(lev=200)'
'define vprs3=vprs.2(lev=300)+vprs.2(lev=250)+vprs.2(lev=200)'
'define div=hdivg(uprs2,vprs2)*100000'
'define divr=hdivg(uprs3,vprs3)*100000'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -12 12 2 -kind violet->blue->lightblue->white->lightsalmon->crimson->gold'
'd div-divr'
*'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 6.0'

*****
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'define uprs2=ugrdprs(lev=950)+ugrdprs(lev=925)+ugrdprs(lev=900)+ugrdprs(lev=850)'
'define vprs2=vgrdprs(lev=950)+vgrdprs(lev=925)+vgrdprs(lev=900)+vgrdprs(lev=850)'
'define uprs3=uprs.2(lev=950)+uprs.2(lev=925)+uprs.2(lev=900)+uprs.2(lev=850)'
'define vprs3=vprs.2(lev=950)+vprs.2(lev=925)+vprs.2(lev=900)+vprs.2(lev=850)'
'define div=hdivg(uprs2,vprs2)*100000'
'define divr=hdivg(uprs3,vprs3)*100000'
'define divrr=maskout((div-divr),PRESsfc/100-850)'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -8 8 1 -kind violet->blue->lightblue->white->lightsalmon->crimson->gold'
'd divrr'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 6.0'


'set lev 850'
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
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'define uprs2=ugrdprs(lev=700)+ugrdprs(lev=600)'
'define vprs2=vgrdprs(lev=700)+vgrdprs(lev=600)'
'define uprs3=uprs.2(lev=700)+uprs.2(lev=600)'
'define vprs3=vprs.2(lev=700)+vprs.2(lev=600)'
'define div=hdivg(uprs2,vprs2)*100000'
'define divr=hdivg(uprs3,vprs3)*100000'
'define divrr=maskout((div-divr),PRESsfc/100-700)'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -8 8 1 -kind violet->blue->lightblue->white->lightsalmon->crimson->gold'
'd divrr'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.9 2.0'



*****
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'define uprs2=ugrdprs(lev=500)+ugrdprs(lev=400)'
'define vprs2=vgrdprs(lev=500)+vgrdprs(lev=400)'
'define uprs3=uprs.2(lev=500)+uprs.2(lev=400)'
'define vprs3=vprs.2(lev=500)+vprs.2(lev=400)'
'define div=hdivg(uprs2,vprs2)*100000'
'define divr=hdivg(uprs3,vprs3)*100000'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -8 8 1 -kind violet->blue->lightblue->white->lightsalmon->crimson->gold'
'd div-divr'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.1 2.0'



*****

'set strsiz 0.11'
'set string 98 c 5.9 0'
'draw string 3.4 7.85 250 hPa (Div., sombr.)'
'draw string 8.5 7.85 850 hPa (Div., sombr.)'
'draw string 3.4 3.85 700 hPa (Div., sombr.)'
'draw string 8.5 3.85 500 hPa (Div., sombr.)'

'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 1.5 7.85 Nivel isobarico:'
'draw string 6.6 7.85 Nivel isobarico:'
'draw string 1.5 3.85 Nivel isobarico:'
'draw string 6.6 3.85 Nivel isobarico:'


'set strsiz 0.14'
'set string 1 c 12 0'
'draw string 5.5 8.35 BIAS para Divergencia/Convergencia (10`a-5 `ns`a-1`n, sombr.)'

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

'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/BIAS/South_America/Div/MultiNivel/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/BIAS/South_America/Div/MultiNivel/Div_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area8.png -t 1 x1024 y768'


if (i='25')
endif
endwhile




