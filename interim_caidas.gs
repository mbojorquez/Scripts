
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
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'set mpdset hires'
'set lat -50 10'
'set lon 245 325'


'c'
'set grads off'

****
'set lev 500'
'u1=uprs*1.94'
'v1=vprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'/home/mbojorquez/gscript/color.gs'
'set clevs 80 85 90 95 98'
'set ccols 100 101 102 103 104 106'
'set gxout shaded'
'set csmooth on'
'd rprs'
'/home/mbojorquez/gscript/cbarn 0.5 1 5.3 5.7'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 5 40 3 -kind darkorchid->darkslateblue->steelblue->silver->white'
'd rprs'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.9 5.7'

'set lev 500'
'set gxout contour'
'set cthick 5'
'/home/mbojorquez/gscript/color2 -gxout contour 4500 6500 40 -kind blue->dodgerblue->darkgray->salmon->crimson'
'set clopts -1 -1 0.06'
'set clab masked'
'd zprs/10'


'set gxout vector'
'set ccolor 1'
'set arrscl .2 100'
*'define a=maskout(ugrdprs,PRESsfc/100-400)'
*'define b=maskout(vgrdprs,PRESsfc/100-400)'
'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'd skip(u1,6,6);skip(v1,6,6);mag(u1,v1)'


*****
'set lev 500'
'u1=uprs*1.94'
'v1=vprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'u1=uprs*1.94'
'v1=vprs*1.94'

'define tc850mb=tprs(lev=500)-273'
'define rh850mb=rprs(lev=500)'

'define u2=maskout(u1,spsfc.2/100-700)'
'define v2=maskout(v1,spsfc.2/100-700)'

'define dewp500mb = tc850mb-((14.55+0.114*tc850mb)*(1-0.01*rh850mb)+pow((2.5+0.007*tc850mb)*(1-0.01*rh850mb),3)+(15.9+0.117*tc850mb)*pow((1-0.01*rh850mb),14))'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -50 -3 5 -kind blueviolet->deepskyblue->white'
'd dewp500mb'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.2 5.7'


*****
'set lev 500'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -22 -24 -26 -30 -40'
'set xlint 5'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

*Caida diaria de geopotencial a 500 hPa 
'set t 'i''
'define t1=tprs(lev=500)-273' 
'set t 'i-4''
'define t2=tprs(lev=500)-273' 
'define dt=t1-t2'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -10 10 0.5 -kind violet->indigo->slateblue->white->salmon->darkred->gold'
if (t>=2);('d dt');endif

'set cthick 2'
'set gxout contour'
'set cmin 1'
'set cint 1'
'set clab on'
'set clab masked'
'set clopts 1 4 0.07'

'set ccolor 1'
'set cstyle 3'
if (t>=2);('d dt');endif

'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 2.0'
'set cmax -1'
'set cint 1'
'set clab on'
'set clab masked'
'set clopts 1 4 0.07'
'set cthick 2'
'set ccolor 1'
'set cstyle 1'
if (t>=2);('d dt');endif

*****
'set lev 500'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'


*Caida diaria de geopotencial a 500 hPa 
'set t 'i''
'define z1=zprs(lev=500)/10' 
'set t 'i-4''
'define z2=zprs(lev=500)/10' 
'define dz=z1-z2'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -150 150 10 -kind violet->indigo->slateblue->white->salmon->darkred->gold'


if (t>=2);('d dz');endif

'set cthick 2'
'set gxout contour'
'set cmin 10'
'set cint 10'
'set clab on'
'set clab masked'
'set clopts 1 4 0.07'
'set ccolor 1'
'set cstyle 3'
if (t>=2);('d dz');endif

'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 2.0'
'set cthick 2'
'set gxout contour'
'set cmax -10'
'set cint 10'
'set clab on'
'set clab masked'
'set clopts 1 4 0.07'
'set ccolor 1'
'set cstyle 1'
if (t>=2);('d dz');endif


*****
'set strsiz 0.11'
'set string 98 c 5.9 0'
'draw string 3.4 7.85 500 hPa (sombr., HR)'
'draw string 8.5 7.85 500 hPa (sombr., Td)'
'draw string 3.5 3.85 500 hPa (sombr., T_24h)'
'draw string 8.7 3.85 500 hPa (sombr., HGT_24h)'

'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 1.5 7.85 Nivel isobarico:'
'draw string 6.7 7.85 Nivel isobarico:'
'draw string 1.5 3.85 Nivel isobarico:'
'draw string 6.7 3.85 Nivel isobarico:'



'set strsiz 0.15'
'set string 1 c 10 0'
'draw string 5.5 8.35 Grafica multivariable'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 5.5 8.10 Reanalisis ERA-Interim 0.75`3.`0: 'hora'UTC 'fe''


i=i+1


*'set line 15 1 2'
*'draw shp /home/mbojorquez/gscript/shp/peru_prov.shp'

*'set line 1 1 3'
*'draw shp /home/mbojorquez/gscript/shp/peru_dpto.shp'

*'run etiquetas_gfs.gs'
*'run etiquetas_aerop_1.gs'


'!mkdir -p /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Caida_24h/MultiNivel/'
'gxprint /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Caida_24h/MultiNivel/Caida_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area7.png -t 1 x2048 y1536'


if (i='40')
endif
endwhile




