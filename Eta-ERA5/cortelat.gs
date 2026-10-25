
ruta1='/home/mb/Versoes/WorkEtaVIII/out/Template_Cusco/grbctl/2013082400/C00/3D/'
arquivo1='Eta05_C00_2013082400_3D.ctl'

ruta2='/home/mb/Versoes/WorkEtaVIII/out/Template_Cusco/grbctl/2013082400/C00/2D/'
arquivo2='Eta05_C00_2013082400_2D.ctl'

'open 'ruta1''arquivo1
'open 'ruta2''arquivo2

resol=substr(arquivo1,4,2)
if (substr(resol,1,1)='0'); resol=substr(resol,2,1); endif



i=1

'set parea 1.2 10.1 0.9 7.6'
*'set vpage 0.3 11 0.1 8.5'
'set lon -75.9 -68'
'set lat -13.5357'
*'set lev 1000 100'
*'set zlog on'
'set display color white'
'set grads off'
*'set xlint 0.5'
'set grads off'

'q dims'

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
long=sublin(result,2)
lmax=subwrd(long,8)
lmin=subwrd(long,6)
va=lmax-lmin
fe=''mes''dia''

'c'
*'set lev 1000 100'
'set grads off'


'set lev 1000 150'
'set zlog on'
'set gxout shaded'
'color2 5 65 5 -kind gray->lightgray->white'
'd umrl'
'cbarn 0.5 0 3.5 0.45'

'color2 -levs 50 70 80 85 90 92 95 98 -kind white->crimson->yellow'
'd umrl'
'cbarn 0.5 0 3.5 0.20'

'set clopts -1 -1 0.07'
'set cstyle 1'
'set cthick 3'
'color2 0.5 4 0.3 -kind dodgerblue->blue->indigo'
'set gxout contour'
'set cmin 0.5'
*'set clab masked'
'd omeg'

'set clopts -1 -1 0.07'
'set cstyle 3'
'set cthick 3'
'color2 -8 -0.5 0.3 -kind indigo->blue->lightseagreen'
'set gxout contour'
'set cmax -0.5'
*'set clab masked'
'd omeg'

'set lev 1000'
'set vrange 1000 150'
'set log1d logv'
'set gxout linefill'
'set lfcols 1 1'
'd pslc.2;const(pslc.2,1000)'


'query w2xy -71.9388 1000'
xpos = subwrd(result,3)
ypos = subwrd(result,6)
say '    (xpos,ypos) = ('xpos','ypos')'

'query w2xy -71.9388 150'
xpos1 = subwrd(result,3)
ypos1 = subwrd(result,6)
say '    (xpos1,ypos1) = ('xpos1','ypos1')'

'set line 11 1 6'
'draw line 'xpos' 'ypos' 'xpos1' 'ypos1''


'set strsiz 0.14'
'set string 1 c 12 0'
'draw string 5.5 8.2 Modelo Eta 'resol' km - HR (sombr.,%) & Mov. vertical (cont., Pa/s)'

'set strsiz 0.10'
'set string 1 c 5 0'
'draw string 5.9 0.47 (%)'
'draw string 5.9 0.22 (%)'

'set rgb 98 178 34 34'
'set strsiz 0.14'
'set string 1 c 12 0'
'draw string 3.1 7.85 CI Eta: 'hor'UTC 'di''me''an''

'set string 1 c 12 0'
'draw string 7.7 7.85 Valido para: 'hora'UTC 'dia''mes''ano

ii=3*(i-1)
if ii=0;iii=00; endif
if ii=3;iii=03; endif
if ii=6;iii=06; endif
if ii=9;iii=09; endif
if ii=12;iii=12; endif
if ii=15;iii=15; endif
if ii=18;iii=18; endif
if ii=21;iii=21; endif
if ii=24;iii=24; endif
if ii=27;iii=27; endif
if ii=30;iii=30; endif
if ii=33;iii=33; endif
if ii=36;iii=36; endif
if ii=39;iii=39; endif
if ii=42;iii=42; endif
if ii=45;iii=45; endif
if ii=48;iii=48; endif
if ii=51;iii=51; endif
if ii=54;iii=54; endif
if ii=57;iii=57; endif
if ii=60;iii=60; endif
if ii=63;iii=63; endif
if ii=66;iii=66; endif
if ii=69;iii=69; endif
if ii=72;iii=72; endif


'!mkdir -p /home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_'fec'/CorteLat/'
'gxprint /home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_'fec'/CorteLat/F_'iii'H_CorteLat_'fe'_'hora'UTC.png x1024 y768'

if (i='13')
endif
i=i+1
endwhile





