
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

'set lev 500'
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


'define vor=hcurl(u1,v1)*1e5'
'define vorr=hcurl(ur,vr)*1e5'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 2 18 2 -kind white->lightsalmon->crimson->gold'
'define dvor=vor-vorr'
'define rmse=sqrt((dvor*dvor))'
'd rmse'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 6.0'

'define wprs1=vvelprs(lev=500)+vvelprs(lev=400)'
'define wprs2=wprs.2(lev=500)+wprs.2(lev=400)'
'define wprs3=wprs1-wprs2'


'/home/mbojorquez/gscript/color2 0.5 3 0.5 -kind indigo->cyan'
'set gxout contour'
'set cstyle 1'
'define rmse1=sqrt((wprs3*wprs3))'
'd rmse1'
'set clab off'


*****
'set lev 250'
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


'define vor=hcurl(u1,v1)*1e5'
'define vorr=hcurl(ur,vr)*1e5'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 2 18 2 -kind white->salmon->crimson->yellow'
'define dvor=vor-vorr'
'define rmse=sqrt((dvor*dvor))'
'd rmse'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 6'

'define wprs1=vvelprs(lev=300)+vvelprs(lev=250)+vvelprs(lev=200)'
'define wprs2=wprs.2(lev=300)+wprs.2(lev=250)+wprs.2(lev=200)'
'define wprs3=wprs1-wprs2'

'/home/mbojorquez/gscript/color2 0.4 3 0.3 -kind indigo->cyan'
'set gxout contour'
'set cstyle 1'
'define rmse1=sqrt((wprs3*wprs3))'
'd rmse1'
'set clab off'

*****
'set lev 700'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'ur=uprs.2*1.94'
'vr=vprs.2*1.94'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'define vor=hcurl(u1,v1)*1e5'
'define vorr=hcurl(ur,vr)*1e5'
'define vor700=maskout((vor-vorr),PRESsfc/100-700)'


'set gxout shaded'
'/home/mbojorquez/gscript/color2 2 15 2 -kind white->salmon->crimson->yellow'
'define rmse=sqrt((vor700*vor700))'
'd rmse'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 2.0'

'define wprs1=vvelprs(lev=700)+vvelprs(lev=600)'
'define wprs2=wprs.2(lev=700)+wprs.2(lev=600)'
'define wprs22=wprs1-wprs2'
'define wprs3=maskout(wprs22,PRESsfc/100-850)'
'define rmse1=sqrt((wprs3*wprs3))'
'/home/mbojorquez/gscript/color2 1 5 0.4 -kind indigo->cyan'
'set gxout contour'
'set cstyle 1'
'd rmse1'
'set clab off'


*****
'set lev 850'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'ur=uprs.2*1.94'
'vr=vprs.2*1.94'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'define vor=hcurl(u1,v1)*1e5'
'define vorr=hcurl(ur,vr)*1e5'
'define vor850=maskout((vor-vorr),PRESsfc/100-850)'


'set gxout shaded'
'/home/mbojorquez/gscript/color2 2 10 2 -kind white->salmon->crimson->yellow'
'define rmse=sqrt((vor850*vor850))'
'd rmse'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 2.0'

'define wprs1=vvelprs(lev=950)+vvelprs(lev=925)+vvelprs(lev=900)+vvelprs(lev=850)'
'define wprs2=wprs.2(lev=950)+wprs.2(lev=925)+wprs.2(lev=900)+wprs.2(lev=850)'
'define wprs22=wprs1-wprs2'
'define wprs3=maskout(wprs22,PRESsfc/100-850)'
'/home/mbojorquez/gscript/color2 1 5 0.4 -kind indigo->cyan'
'set gxout contour'
'set cstyle 1'
'define rmse1=sqrt((wprs3*wprs3))'
'd rmse1'
'set clab off'

*****
'set strsiz 0.11'
'set string 98 c 5.9 0'
'draw string 3.4 7.85 500 hPa (Vort., sombr.)'
'draw string 8.5 7.85 250 hPa (Vort., sombr.)'
'draw string 3.4 3.85 700 hPa (Vort., sombr.)'
'draw string 8.5 3.85 850 hPa (Vort., sombr.)'

'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 1.5 7.85 Nivel isobarico:'
'draw string 6.7 7.85 Nivel isobarico:'
'draw string 1.5 3.85 Nivel isobarico:'
'draw string 6.7 3.85 Nivel isobarico:'


'set strsiz 0.14'
'set string 1 c 12 0'
'draw string 5.5 8.35 RMSE para Vorticidad relativa (10`a-5 `ns`a-1`n, sombr.) & Veloc. vertical (Pa/s, contor.)'

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

'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/RMSE/South_America/Vort/MultiNivel/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/RMSE/South_America/Vort/MultiNivel/Vort_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area9.png -t 1 x1024 y768'


if (i='25')
endif
endwhile




