
'reinit'

ruta='/home/mb/Versoes/WorkEtaVIII/out/Template_Cusco/grbctl/2013082400/C00/2D/'
arquivo='Eta05_C00_2013082400_2D.ctl'
'open 'ruta''arquivo

resol=substr(arquivo,4,2)
if (substr(resol,1,1)='0'); resol=substr(resol,2,1); endif


'set parea 1.3 9.0 0.95 7.6'
'set display color white'
'set xlint 1'

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
latss=lats+0.3
latnn=latn-0.3
#say latss latnn
lon=sublin(result,2)
lonw=subwrd(lon,6)
lone=subwrd(lon,8)
lonww=lonw+0.3
lonee=lone-0.3


'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=-12.5357

'set yflip on'
'set t 1 last'
'set y 1'
'set lat 'lati''
'set lon 'lonww' 'lonee''
'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

*****
'set grads off'

'set gxout shaded'
'color2 20 30 3 -kind white->salmon->gold'
'd tp2m-273.15'
*'cbarn'

'set gxout shaded'
'color2 -10 20 3 -kind aqua->steelblue->white'
'd tp2m-273.15'
*'cbarn'

'set gxout contour'
'set clevs 20 25 30' 
'set ccols 1' 
'set cstyle 3'
'd tp2m-273.15'

'set gxout contour'
'set clevs 5 10 15' 
'set ccols 5' 
'set cstyle 3'
'd tp2m-273.15'

******
###

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25 Temperatura a 2 m (`3.`0C)'

'set strsiz 0.13'
'draw string 3.8 8.00 Corte latitudinal: 'lati'`3.`0'

'set strsiz 0.12'
'draw string 8.7 0.4 Superficie'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta 'resol' km: 'hor'UTC 'di''me''an''



'!mkdir -p /home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_'fec'/Hovmoeller/'
'gxprint /home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_'fec'/Hovmoeller/Hovm_'lati'UTC.png x1024 y768'






