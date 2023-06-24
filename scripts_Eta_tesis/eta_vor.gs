
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
'set map 14 1 9'
'set annot 1 12'
'set xlint 2'
'set ylint 1'

'set mpdset hires'
'set lat -50 10'
'set lon -115 -35'


'c'
'set grads off'
'basemap L 12 1 M'

****

'set lev 250'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'define vor=hcurl(u1,v1)*1e5'


'set gxout shaded'
'/home/mbojorquez/gscript/color2 -18 18 2 -kind blue->white->red'
'd vor'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.9 5.85'

'/home/mbojorquez/gscript/color2 -levs 5 10 20 30 40 50 60 70 80 90 100 -kind white->gray->dimgray->darkgray'
'set gxout stream'
'set cthick 6'
'set strmden -3'
'd u1;v1;mag(u1,v1)'

'define wprs1=sum(vvelprs,lev=300,lev=200)'

'/home/mbojorquez/gscript/color2 -10 -1 0.5 -kind black->gold->darkgray'
'set gxout contour'
'set cstyle 3'
'd wprs1'
'set clab off'

'/home/mbojorquez/gscript/color2 0.5 5 0.4 -kind black->aqua'
'set gxout contour'
'set cstyle 1'
'd wprs1'
'set clab off'

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


'define vor=hcurl(u1,v1)*1e5'

'define vor500=maskout(vor,PRESsfc/100-500)'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -18 18 2 -kind blue->white->red'
'd vor500'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.1 6.0'

'/home/mbojorquez/gscript/color2 -levs 0 2 5 10 15 20 25 30 35 40 50 60 -kind white->gray->dimgray->darkgray'
'set gxout stream'
'set cthick 5'
'set strmden -3'
'd u1;v1;mag(u1,v1)'

'define wprs2=vvelprs(lev=500)+vvelprs(lev=400)'
'/home/mbojorquez/gscript/color2 -6 -1 0.5 -kind black->gold->darkgray'
'set gxout contour'
'set cstyle 3'
'd wprs2'
'set clab off'

'/home/mbojorquez/gscript/color2 0.5 6 0.4 -kind black->aqua'
'set gxout contour'
'set cstyle 1'
'd wprs2'
'set clab off'

*****
'set lev 700'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'define vor=hcurl(u1,v1)*1e5'
'define vor700=maskout(vor,PRESsfc/100-700)'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -15 15 2 -kind blue->white->red'
'd vor700'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.9 1.9'

'/home/mbojorquez/gscript/color2 -levs 0 2 5 10 15 20 25 30 35 40 50 60 -kind white->gray->dimgray->darkgray'
'set gxout stream'
'set cthick 5'
'set strmden -3'
'd u1;v1;mag(u1,v1)'

'define vvelprs2=vvelprs(lev=700)+vvelprs(lev=600)'

'/home/mbojorquez/gscript/color2 -5 -1 0.3 -kind black->gold->darkgray'
'set gxout contour'
'set cstyle 3'
'd vvelprs2'
'set clab off'

'/home/mbojorquez/gscript/color2 1 5 0.3 -kind black->aqua'
'set gxout contour'
'set cstyle 1'
'd vvelprs2'
'set clab off'

*****
'set lev 850'

'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'define vor=hcurl(u1,v1)*1e5'
'define vor850=maskout(vor,PRESsfc/100-850)'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -10 10 2 -kind blue->white->red'
'd vor850'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.1 1.9'

'/home/mbojorquez/gscript/color2 -levs 0 2 5 10 15 20 25 30 35 40 50 60 -kind white->gray->dimgray->darkgray'
'set gxout stream'
'set cthick 5'
'set strmden -3'
'd u1;v1;mag(u1,v1)'

'define vvelprs1=sum(vvelprs,lev=950,lev=850)'
'define vvelprs2=maskout(vvelprs1,PRESsfc/100-950)'
*'/home/mbojorquez/gscript/color2 -5 -1 0.3 -kind black->darkgray'
'/home/mbojorquez/gscript/color2 -5 -1 0.3 -kind black->gold->darkgray'
'set gxout contour'
'set cstyle 3'
'd vvelprs2'
'set clab off'

*'/home/mbojorquez/gscript/color2 1 5 0.3 -kind indigo->black'
'/home/mbojorquez/gscript/color2 1 5 0.3 -kind black->aqua'
'set gxout contour'
'set cstyle 1'
'd vvelprs2'
'set clab off'

*****

'set strsiz 0.11'
'set string 98 c 5.9 0'
'draw string 3.4 7.85 250 hPa (shaded, Vort)'
'draw string 8.5 7.85 500 hPa (shaded, Vort)'
'draw string 3.4 3.85 700 hPa (shaded, Vort)'
'draw string 8.5 3.85 850 hPa (shaded, Vort)'

'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 1.5 7.85 Nivel isobarico:'
'draw string 6.7 7.85 Nivel isobarico:'
'draw string 1.5 3.85 Nivel isobarico:'
'draw string 6.7 3.85 Nivel isobarico:'


'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.35 Vorticidad relativa (10`a-5 `ns`a-1`n, sombr.), Lineas de corriente (kt) & Veloc. vertical (Pa/s, contor.) '

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

'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Vort/Multinivel/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Vort/Multinivel/Vort_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area9.png -t 1 x1024 y768'


if (i='25')
endif
endwhile




