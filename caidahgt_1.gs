
'sdfopen agost2013_075'

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

*Caida por capas
*'set t 'i''
*'define z1=(z(lev=500)-z(lev=1000))/10' 
*'set t 'i-4''
*'define z2=(z(lev=500)-z(lev=1000))/10' 
*'define dz=z1-z2'

*Caida diaria de geopotencial a 500 hPa 
'set t 'i''
'define z1=z(lev=500)/10' 
'set t 'i-4''
'define z2=z(lev=500)/10' 
'define dz=z1-z2'

'set gxout shaded'
'/home/mb/gscript/color2 -150 150 10 -kind indigo->darkslateblue->mediumslateblue->royalblue->white->salmon->tomato->crimson->darkred'

if (t>=2);('d dz');endif

'set gxout contour'
'set cmin 10'
'set cint 10'
'set clab on'
'set clab masked'
'set clopts 1 -1 0.07'
'set cthick 4'
'set ccolor 1'
'set cstyle 3'
if (t>=2);('d dz');endif

'set gxout contour'
'set cmax -10'
'set cint 10'
'set clab on'
'set clab masked'
'set clopts 1 -1 0.07'
'set cthick 4'
'set ccolor 1'
'set cstyle 1'
if (t>=2);('d dz');endif

'set strsiz 0.15'
'set string 1 c 10 0'
'draw string 5.5 8.2 Caida diaria de Altura geopotencial 500 hPa (mgp)'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 5.5 7.85 Reanalisis ERA-Interim 0.75`3.`0C: 'hora'UTC 'fe''


i=i+1


*'set line 15 1 2'
*'draw shp /home/mb/gscript/shp/peru_prov.shp'

*'set line 1 1 3'
*'draw shp /home/mb/gscript/shp/peru_dpto.shp'

*'run etiquetas_gfs.gs'
*'run etiquetas_aerop_1.gs'

'!mkdir /home/mb/INTERIM_TESIS/'
'!mkdir /home/mb/INTERIM_TESIS/INICIA_'fec'/'
'!mkdir /home/mb/INTERIM_TESIS/INICIA_'fec'/South_America/'
'!mkdir /home/mb/INTERIM_TESIS/INICIA_'fec'/South_America/Caida_HGT/'
'gxprint /home/mb/INTERIM_TESIS/INICIA_'fec'/South_America/Caida_HGT/Caida_HGT_'fe'_'hora'UTC.png -b /home/mb/gscript/proyecto_area5.png -t 1 x2048 y1536'


if (i='40')
endif
endwhile



