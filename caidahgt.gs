
'sdfopen 2013.nc'

i=16 

while (i <=28) 

'set t 'i''
'set display color white'
'set mpdset hires'
*'set mpdset lowres.per'
'set map 1 1 1'
'set lat -60 10.5'
'set lon 240 340'

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

'c'

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
'C:\OpenGrADS\pantalla-eta\gs\gsnew\colores\color2.gs -180 180 20 -kind slateblue->white->crimson'

if (t>=2);('d dz');endif

'set gxout contour'
'set cmin 20'
'set cint 20'
'set clab on'
'set ccolor 1'
'set cstyle 3'
if (t>=2);('d dz');endif


'set cmax -20'
'set cint 20'
'set clab on'
'set ccolor 1'
'set cstyle 1'
if (t>=2);('d dz');endif



'draw title Caida diaria de Altura geopotencial 500 hPa (mgp)\ Reanalisis Era-Interim: 'hor'UTC 'di''me''an''

'q pos'

b = subwrd(result,5)

a=1
if (b='1');a= 1;endif
if (b='3');a= -1;endif

i=i+a
if i<=0;i=1;endif
endwhile  
if (i='28')
endif


