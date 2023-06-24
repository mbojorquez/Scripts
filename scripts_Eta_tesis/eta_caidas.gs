
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

*Caida por capas
*'set t 'i''
*'define z1=(z(lev=500)-z(lev=1000))/10' 
*'set t 'i-4''
*'define z2=(z(lev=500)-z(lev=1000))/10' 
*'define dz=z1-z2'

*Caida diaria de geopotencial a 500 hPa 
'set t 'i''
'define t1=tmpprs(lev=500)-273' 
'set t 'i-4''
'define t2=tmpprs(lev=500)-273' 
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

'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 6.0'
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

'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

*Caida por capas
*'set t 'i''
*'define z1=(z(lev=500)-z(lev=1000))/10' 
*'set t 'i-4''
*'define z2=(z(lev=500)-z(lev=1000))/10' 
*'define dz=z1-z2'

*Caida diaria de geopotencial a 500 hPa 
'set t 'i''
'define hgt1=hgtprs(lev=500)' 
'set t 'i-4''
'define hgt2=hgtprs(lev=500)' 
'define dz=hgt1-hgt2'

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

'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 6.0'
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

'set strsiz 0.11'
'set string 98 c 5.9 0'
'draw string 3.4 7.85 500 hPa (sombr., T_24h)'
'draw string 8.6 7.85 500 hPa (sombr., HGT_24h)'
'draw string 3.5 3.85 500 hPa (sombr., )'
'draw string 8.7 3.85 500 hPa (sombr., )'

'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 1.5 7.85 Nivel isobarico:'
'draw string 6.6 7.85 Nivel isobarico:'
'draw string 1.5 3.85 Nivel isobarico:'
'draw string 6.7 3.85 Nivel isobarico:'

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


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Caidas/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Caidas/Caidas_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area99.png -t 1 x1024 y768'


if (i='25')
endif
endwhile




