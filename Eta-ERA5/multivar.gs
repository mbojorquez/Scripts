
*ruta='/home/mb/Versoes/WorkEtaVIII/out/Lima/grbctl/2021052406/C00/2D/'
*arquivo='Eta02_C00_2021052406_2D.ctl'
*ruta='/home/mb/Versoes/WorkEtaVIII/out/Lima/grbctl/2021052406/C00/2D/'
*arquivo='Eta02_C00_2021052406_2D.ctl'
'open 'ruta''arquivo

resol=substr(arquivo,4,2)
if (substr(resol,1,1)='0'); resol=substr(resol,2,1); endif


i=1




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

'q dims'
#(w/n+) (s/e-)
lat=sublin(result,3)
lats=subwrd(lat,6)
#say lats
latn=subwrd(lat,8)
latss=lats+0.5
latnn=latn-0.5
#say latss latnn
lon=sublin(result,2)
lonw=subwrd(lon,6)
lone=subwrd(lon,8)
lonww=lonw+0.5
lonee=lone-0.5

while (i<=13)

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
#say result
long=sublin(result,2)
lmax=subwrd(long,8)
lmin=subwrd(long,6)
va=lmax-lmin
fe=''dia''mes''ano''


#say lonww lonee
'set parea 1.2 10.1 0.95 7.6'
'set display color white'
'set map 1 1 12'
'set annot 1 12'
'set xlint 1'
'set ylint 1'
'set lat 'latss' 'latnn''
'set lon 'lonww' 'lonee''

'set mpdset hires'

'c'

'set grads off'

******
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 1'
'set ylint 1'

'set gxout shaded'
'color2 -6 34 2 -kind aqua->steelblue->blue->crimson->salmon->gold'
'd tp2m-273.15'
'cbarn 0.5 1 4.5 5.9'

'set line 1 1 3'
'draw shp peru_dpto.shp'

*****
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 1'
'set ylint 1'


'set gxout shaded'
'color2 -10 24 2 -kind aqua->steelblue->blue->crimson->salmon->gold'
'd dp2m-273.15'
'cbarn 0.5 1 9.7 6.0'

'set line 1 1 3'
'draw shp peru_dpto.shp'

*****
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 1'
'set ylint 1'

'set gxout shaded'
'color2 -levs 50 70 80 85 90 95 98 -kind gainsboro->gray->purple->violet'
'd ur2m'
'cbarn 0.5 1 4.5 2.0'

'set line 1 1 3'
'draw shp peru_dpto.shp'

*****

'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 1'
'set ylint 1'


lev=1013
'teta='tp2m'*pow(1000/lev,2/7)'
'tves=6.11*(pow(10,(7.5*('tp2m'-273.16)/(237.7+('tp2m'-273.16)))))'
'tve='ur2m'*tves/100'
'rmx=0.622*tve/(lev-tve)'
'color2 2 14 1 -kind white->dimgray->crimson->gold'
'set gxout shaded'
'd rmx*1000'
'cbarn 0.5 1 9.7 2.1'

'u10=u10m*1.94'
'v10=v10m*1.94'
'set gxout vector'
len = 0.3
scale = 30
xrit = 6.4
ybot = 1.6
'set arrscl 'len' 'scale
'set arrlab off'
'color2 5 20 5 -kind lightgray->black'
'd skip(u10,4,4);skip(v10,4,4);mag(u10,v10)'
'set string 1 c 5.9'

'set line 1 1 3'
'draw shp peru_dpto.shp'


*****
###

'set strsiz 0.11'
'set string 98 c 5.9 0'
'draw string 2.8 7.85 Temp 2m (`3.`0C)'
'draw string 8.0 7.85 Temp de rocio 2m(`3.`0C)'
'draw string 2.8 3.85 HR 2m (%)'
'draw string 8.0 3.85 Relacion de mezcla 2m(g/kg)'


'set strsiz 0.14'
'set string 1 c 10 0'
'draw string 5.5 8.35 Grafica multivariable'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 3.4 8.10 Eta 'resol' km : 'hor'UTC 'di''me''an''

'set string 1 c 10 0'
'draw string 7.5 8.10 Valido para: 'hora'UTC 'dia''mes''ano

i=i+1




'!mkdir -p /home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_'fec'/Multivar/'
'gxprint /home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_'fec'/Multivar/Multivar_'fe'_'hora'UTC.png x1024 y768'


if (i='13')
endif
endwhile




