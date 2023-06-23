
'sdfopen agost2013_075'


i=12

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
'set lev 850'
'set display color white'
'set map 1 1 12'
'set annot 1 12'
'set xlint 2'
'set ylint 1'

'set mpdset hires'
'set lat -70 10'
'set lon 230 340'
'set grads off'

'c'

'set grads off'

'u1=u*1.94'
'v1=v*1.94'

'/home/mb/gscript/color.gs'
'set clevs 80 85 90 95 98'
'set ccols 100 101 102 103 104 106'
'set gxout shaded'
'set csmooth on'
'd r'
'/home/mb/gscript/cbarn 1 1'

'set gxout shaded'
'/home/mb/gscript/color2 5 40 3 -kind darkslateblue->steelblue->silver->white'
'd r'
'/home/mb/gscript/cbarn 1 1 1.0 4.2'

'set lev 850'
'set gxout contour'
'set cthick 5'
'/home/mb/gscript/color2 -gxout contour 900 1600 30 -kind blue->dodgerblue->darkgray->salmon->crimson'
'd z/10'


'set gxout vector'
'set ccolor 1'
'set arrscl .3 50'
*'define a=maskout(ugrdprs,PRESsfc/100-400)'
*'define b=maskout(vgrdprs,PRESsfc/100-400)'
'/home/mb/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'd skip(u1,4,4);skip(v1,4,4);mag(u1,v1)'



'set strsiz 0.18'
'set string 1 c 12 0'
'draw string 5.5 8.2 Altura geopotencial (mgp) & Humedad relativa (%) a 850 hPa'

'set rgb 98 178 34 34'
'set strsiz 0.16'
'set string 98 c 12 0'
'draw string 5.5 7.85 ANALISIS ERA-INTERIM 0.75: 'hora'UTC 'fe''


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
'!mkdir /home/mb/INTERIM_TESIS/INICIA_'fec'/South_America/HGT/'
'!mkdir /home/mb/INTERIM_TESIS/INICIA_'fec'/South_America/HGT/850hPa/'
'gxprint /home/mb/INTERIM_TESIS/INICIA_'fec'/South_America/HGT/850hPa/HGT850hPa_'fe'_'hora'UTC.png -b /home/mb/gscript/proyecto_area3.png -t 1 x2048 y1536'


if (i='40')
endif
endwhile




