*********************************************************
* Multivariable para evento de viento Paracas
* Panel 1: viento 10 m (magnitud + vectores)
* Panel 2: vorticidad potencial (PVU) en 200 hPa + altura geopotencial
* Panel 3: vaguada 500 hPa (altura geopotencial, temperatura, viento)
* Panel 4: PNMM + magnitud del gradiente de presion (hPa/100km)
* Se usan todos los tiempos del pronostico
*********************************************************
ruta='/home/mb/Versoes/WorkEtaVIII/out/era5sur/grbctl/2025073000/sst_true_2/'
arquivo='Eta05_sst_true_2_2025073000_2D.ctl'
arq3d='Eta05_sst_true_2_2025073000_3D.ctl'
topo='/home/mb/Versoes/WorkEtaVIII/out/era5sur/netcdf/2025073000/sst_true_2/Eta05_sst_true_2_TOPO_2025073000.nc'
shp='/home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'

'open 'ruta'2D/'arquivo
'open 'ruta'3D/'arq3d
'sdfopen 'topo

resol=substr(arquivo,4,2)
if (substr(resol,1,1)='0'); resol=substr(resol,2,1); endif

* Paracas (Pisco)
latpar=-13.83
lonpar=-76.25
* nivel para vorticidad potencial
levpv=200

'set dfile 1'
'q file 1'
lin=sublin(result,5)
nt=subwrd(lin,12)

'set t 1'
'q time'
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
latn=subwrd(lat,8)
latss=lats+0.5
latnn=latn-0.5
lon=sublin(result,2)
lonw=subwrd(lon,6)
lone=subwrd(lon,8)
lonww=lonw+0.5
lonee=lone-0.5

dirout='/home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_'fec'/Paracas/'
'!mkdir -p 'dirout

'set rgb 98 178 34 34'

i=1
while (i<=nt)

'set dfile 1'
'set t 'i''
'set lev 1013'
*********************************************************
'q time'
res=subwrd(result,3)
hora=substr(res,1,2)
dia=substr(res,4,2)
mes=substr(res,6,3)
ano=substr(res,9,4)
if mes=JAN;mes=ENE; endif
if mes=APR;mes=ABR;endif
if mes=AUG;mes=AGO;endif
if mes=DEC;mes=DIC;endif
fe=''dia''mes''ano''
* hora local Peru (UTC-5)
hloc=hora-5
if (hloc<0); hloc=hloc+24; endif
if (hloc<10); hloc='0'hloc; endif

'set display color white'
'c'
'set mpdset hires'
'set map 1 1 12'
'set annot 1 12'
'set lat 'latss' 'latnn''
'set lon 'lonww' 'lonee''

* campos auxiliares
'pi=3.14159265'
'dx=cdiff(lon,x)*pi/180*6.371e6*cos(lat*pi/180)'
'dy=cdiff(lat,y)*pi/180*6.371e6'
'hgt=topo.3(t=1,z=1)'

****** Panel 1: viento 10 m
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 2'
'set ylint 2'

'set gxout shaded'
*'color2 -levs 2 4 6 8 10 12 14 16 18 20 -kind white->lightskyblue->limegreen->gold->orange->red->darkmagenta'
'color2 -levs 4 8 12 16 20 24 28 32 36 40 -kind white->lightskyblue->limegreen->gold->orange->red->darkmagenta'
'd magv*1.944'
'cbarn 0.5 1 4.5 5.9'

'set gxout contour'
'set clevs 1000'
'set ccolor 15'
'set cthick 2'
'set clab off'
'd hgt'

'set gxout vector'
'set arrscl 0.3 20'
'set arrlab off'
'set ccolor 1'
'set cthick 3'
'd skip(u10m*1.944,10,10);v10m*1.944'

'set line 1 1 3'
'draw shp 'shp
mark(latpar,lonpar)

****** Panel 2: vorticidad potencial (isobarica) en levpv
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 2'
'set ylint 2'

'set dfile 2'
'set lev 'levpv
lsup=levpv-50
linf=levpv+50
'th=temp*pow(1000/'levpv',0.2857)'
'thsup=temp(lev='lsup')*pow(1000/'lsup',0.2857)'
'thinf=temp(lev='linf')*pow(1000/'linf',0.2857)'
'dp=('lsup'-'linf')*100'
'dthdp=(thsup-thinf)/dp'
'dudp=(uvel(lev='lsup')-uvel(lev='linf'))/dp'
'dvdp=(vvel(lev='lsup')-vvel(lev='linf'))/dp'
'zeta=hcurl(uvel,vvel)'
'f=2*7.292e-5*sin(lat*pi/180)'
'dthdx=cdiff(th,x)/dx'
'dthdy=cdiff(th,y)/dy'
'pv=-9.81*((zeta+f)*dthdp-dvdp*dthdx+dudp*dthdy)*1e6'
'pv=smth9(smth9(smth9(pv)))'

'set gxout shaded'
'color2 -levs -3 -2.5 -2 -1.5 -1.25 -1 -0.75 -0.5 -0.25 -kind darkred->red->orange->gold->lightyellow->white'
'd pv'
'cbarn 0.5 1 9.7 6.0'

'set gxout contour'
'set cint 20'
'set ccolor 1'
'set cthick 4'
'set clab masked'
'set clopts 1 3 0.08'
'd smth9(smth9(zgeo))'

'set gxout vector'
'set arrscl 0.3 40'
'set arrlab off'
'set ccolor 4'
'set cthick 3'
'd skip(uvel,12,12);vvel'

'set line 1 1 3'
'draw shp 'shp
mark(latpar,lonpar)

****** Panel 3: vaguada 500 hPa
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 2'
'set ylint 2'

'set dfile 2'
'set lev 500'
'set gxout shaded'
'color2 -18 -2 1 -kind darkblue->blue->steelblue->lightskyblue->white->gold->orange'
'd smth9(temp-273.15)'
'cbarn 0.5 1 4.5 2.0'

'set gxout contour'
'set cint 10'
'set ccolor 1'
'set cthick 5'
'set clab masked'
'set clopts 1 3 0.08'
'd smth9(smth9(zgeo))'

'set gxout vector'
'set arrscl 0.3 30'
'set arrlab off'
'set ccolor 98'
'set cthick 3'
'd skip(uvel,12,12);vvel'

'set line 1 1 3'
'draw shp 'shp
mark(latpar,lonpar)

****** Panel 4: gradiente de presion en superficie
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'
'set xlint 2'
'set ylint 2'

'set dfile 1'
'set lev 1013'
* PNMM sobre terreno elevado no es representativa: se enmascara topo > 300 m
'ps=smth9(smth9(smth9(maskout(pslm,300-hgt))))'
'gp=mag(cdiff(ps,x)/dx,cdiff(ps,y)/dy)*1e5'
'gp=maskout(gp,100-hgt)'

'set gxout shaded'
'color2 -levs 0.2 0.4 0.6 0.8 1 1.25 1.5 2 2.5 -kind white->lightcyan->mediumseagreen->gold->orangered->purple'
'd gp'
'cbarn 0.5 1 9.7 2.1'

'set gxout contour'
'set cint 1'
'set ccolor 1'
'set cthick 4'
'set clab masked'
'set clopts 1 3 0.08'
'd ps'

'set gxout contour'
'set clevs 1000'
'set ccolor 15'
'set cthick 2'
'set clab off'
'd hgt'

'set line 1 1 3'
'draw shp 'shp
mark(latpar,lonpar)

*****
###

'set strsiz 0.11'
'set string 98 c 5.9 0'
'draw string 2.8 7.85 Viento 10 m (kt)'
'draw string 8.0 7.85 Vort. potencial 'levpv' hPa (PVU) + Z (mgp)'
'draw string 2.8 3.85 500 hPa: Z (mgp), T (`3.`0C), viento'
'draw string 8.0 3.85 PNMM (hPa) + grad P (hPa/100 km)'

'set strsiz 0.14'
'set string 1 c 10 0'
'draw string 5.5 8.35 Evento de viento Paracas'

'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 3.0 8.10 Eta 'resol' km : 'hor'UTC 'di''me''an''

'set string 1 c 10 0'
'draw string 7.7 8.10 Valido: 'hora'UTC ('hloc'HL) 'dia''mes''ano

* hora de pronostico (F_00H, F_01H, ...)
fh=i-1
if (fh<10); fh='0'fh; endif
'gxprint 'dirout'Paracas_F_'fh'H_'fe'_'hora'UTC.png x1024 y768'

i=i+1
endwhile

'quit'

*********************************************************
function mark(la,lo)
'q w2xy 'lo' 'la
xp=subwrd(result,3)
yp=subwrd(result,6)
'set line 1 1 6'
'draw mark 3 'xp' 'yp' 0.12'
'set line 2 1 6'
'draw mark 3 'xp' 'yp' 0.07'
return
