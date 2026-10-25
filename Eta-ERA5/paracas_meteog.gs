*********************************************************
* Meteogramas de viento evento Paracas vs METAR
* Columnas: Lima (SPJC), Pisco (SPSO), Nazca (SPZA), Arequipa (SPQU)
* Fila 1: viento 10 m en el punto y maximo en radio de 16 km (kt)
*         + flechas de direccion (modelo negro, METAR azul)
* Fila 2: viento 100 m y rafaga estimada (max. viento dentro de la
*         capa limite), ambos maximo en radio de 16 km (kt)
* Fila 3: velocidad de friccion u* (m/s) punto y max. 16 km,
*         umbral aproximado de levantamiento de polvo
* Puntos: METAR/SPECI (negro; marron = reporta polvo DU/BLDU/DS)
* Los METAR se decodifican con metar/metar2dat.py
* La banda gris marca la tarde del evento (31 jul)
*********************************************************
ruta='/home/mb/Versoes/WorkEtaVIII/out/era5sur/grbctl/2025073000/sst_true_2/'
arq2d='Eta05_sst_true_2_2025073000_2D.ctl'
arq3d='Eta05_sst_true_2_2025073000_3D.ctl'
topo='/home/mb/Versoes/WorkEtaVIII/out/era5sur/netcdf/2025073000/sst_true_2/Eta05_sst_true_2_TOPO_2025073000.nc'
metar='/home/mb/Versoes/WorkEtaVIII/gscript/metar/metar_paracas.dat'

'open 'ruta'2D/'arq2d
'open 'ruta'3D/'arq3d
'sdfopen 'topo

resol=substr(arq2d,4,2)
if (substr(resol,1,1)='0'); resol=substr(resol,2,1); endif

* estaciones (coordenadas OGIMET)
nomes='Lima Pisco Nazca Arequipa'
icaos='SPJC SPSO SPZA SPQU'
las='-12.0219 -13.7331 -14.8497 -16.3331'
los='-77.1139 -76.2167 -74.9500 -71.5667'
alts='34 6 567 2539'
nloc=4
* radio (km) para el maximo en la vecindad
radio=16
* ventana del evento (indices de tiempo): 17Z31jul (12HL) a 23Z31jul (18HL)
tev1=42
tev2=48
* intervalo (h) entre flechas de direccion
dtf=3
* umbral aproximado de u* para levantar polvo (m/s)
ustu=0.3
* ultimo nivel 3D para la rafaga (z=12 -> 550 hPa)
ztop=12

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

dirout='/home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_'fec'/ParacasMeteog/'
'!mkdir -p 'dirout

'set rgb 98 178 34 34'
'set rgb 99 225 225 225'
'set rgb 97 139 69 19'
'set display color white'
'c'
'set grads off'
'set vpage off'
'set tlsupp year'
'set xlopts 1 3 0.08'

c=1
while (c<=nloc)
nome=subwrd(nomes,c)
icao=subwrd(icaos,c)
la=subwrd(las,c)
lo=subwrd(los,c)
alt=subwrd(alts,c)

x1=0.55+(c-1)*2.65
x2=x1+2.0
xm=(x1+x2)/2

* altura del modelo en el punto
'set dfile 3'
'set t 1'
'set lat 'la
'set lon 'lo
'd topo(z=1)'
l=sublin(result,1)
altm=subwrd(l,4)
altm=math_nint(altm)

* caja que contiene el circulo de radio km
dla=radio/111.2
coslat=math_cos(la*3.14159265/180)
dlo=radio/(111.2*coslat)
la1=la-dla
la2=la+dla
lo1=lo-dlo
lo2=lo+dlo
dist='111.2*sqrt(pow(lat-('la'),2)+pow((lon-('lo'))*'coslat',2))'

* rafaga: maximo del viento en niveles dentro de la capa limite (sobre el
* terreno), definido en la caja alrededor de la estacion
'set dfile 2'
'set lat 'la1' 'la2
'set lon 'lo1' 'lo2
'set lev 1000'
'set t 1 'nt
agl='(zgeo-topo.3(t=1,z=1))'
'wpbl=max(maskout(maskout(mag(uvel,vvel),'agl'),hpbl.1(z=1)-'agl'),z=1,z='ztop')'
'wpbl=const(wpbl,0,-u)'

'set dfile 1'
'set lat 'la
'set lon 'lo
'set lev 1013'
'set t 1 'nt

* series del modelo
'w10=mag(u10m,v10m)*1.944'
'w10m=amax(maskout(mag(u10m,v10m),'radio'-'dist'),lon='lo1',lon='lo2',lat='la1',lat='la2')*1.944'
'w100m=amax(maskout(mag(u100,v100),'radio'-'dist'),lon='lo1',lon='lo2',lat='la1',lat='la2')*1.944'
'wraf=amax(maskout(0.5*(wpbl+mag(u10m,v10m)+abs(wpbl-mag(u10m,v10m))),'radio'-'dist'),lon='lo1',lon='lo2',lat='la1',lat='la2')*1.944'
'ust=sqrt(mag(usst,vsst)*287*tp2m/(pslc*100))'
'ustm=amax(maskout(sqrt(mag(usst,vsst)*287*tp2m/(pslc*100)),'radio'-'dist'),lon='lo1',lon='lo2',lat='la1',lat='la2')'

'set strsiz 0.12'
'set string 1 c 10 0'
'draw string 'xm' 7.78 'nome' 'icao
'set strsiz 0.08'
'set string 1 c 4 0'
'draw string 'xm' 7.6 estacion 'alt' m / modelo 'altm' m'

****** Fila 1: viento 10 m
y2=7.25
y1=y2-1.75
panel(x1,x2,y1,y2,tev1,tev2,nt)
'set vrange 0 30'
'set ylint 5'
'set ylopts 1 3 0.08'
'set ccolor 8'
'set cthick 5'
'set cmark 0'
'd w10m'
'set ccolor 2'
'set cthick 5'
'set cmark 0'
'd w10'
yf=y2-0.17
flechas(x1,x2,yf,nt,dtf)
yf=y2-0.42
obs(metar,icao,x1,x2,y1,y2,0,30,nt,1,yf,dtf)
'set t 1 'nt
leyenda(x1,x2,y2,2,'10m pto',8,'10m max'radio'km',1,'METAR')

****** Fila 2: viento 100 m y rafaga estimada
y2=y2-2.4
y1=y2-1.75
panel(x1,x2,y1,y2,tev1,tev2,nt)
'set vrange 0 30'
'set ylint 5'
'set ylopts 1 3 0.08'
'set ccolor 4'
'set cthick 5'
'set cmark 0'
'd w100m'
'set ccolor 14'
'set cthick 5'
'set cmark 0'
'd wraf'
obs(metar,icao,x1,x2,y1,y2,0,30,nt,0,0,dtf)
'set t 1 'nt
leyenda(x1,x2,y2,4,'100m max',14,'rafaga max',1,'METAR')

****** Fila 3: velocidad de friccion
y2=y2-2.4
y1=y2-1.75
panel(x1,x2,y1,y2,tev1,tev2,nt)
'set vrange 0 1'
'set ylint 0.2'
'set ylopts 1 3 0.08'
'set ccolor 8'
'set cthick 5'
'set cmark 0'
'd ustm'
'set ccolor 2'
'set cthick 5'
'set cmark 0'
'd ust'
yu=y1+ustu*(y2-y1)/1
'set line 1 2 3'
'draw line 'x1' 'yu' 'x2' 'yu
yp=y2-0.12
polvo(metar,icao,x1,x2,yp,nt)
leyenda(x1,x2,y2,2,'u* pto',8,'u* max'radio'km',97,'polvo')

c=c+1
endwhile

'set strsiz 0.15'
'set string 1 c 10 0'
'draw string 5.5 8.3 Viento modelo vs METAR - evento Paracas'
'set strsiz 0.1'
'set string 98 c 6 0'
'draw string 5.5 8.07 Eta 'resol' km : 'hor'UTC 'di''me''an'  (UTC; HL = UTC-5; banda gris = tarde 31 jul; linea discont. = umbral u* 'ustu' m/s)'

'gxprint 'dirout'Meteog_Paracas_'fec'.png x1400 y1082'

'quit'

*********************************************************
* fija el area del subplot y dibuja la banda del evento
function panel(xa,xb,ya,yb,t1,t2,n)
'set parea 'xa' 'xb' 'ya' 'yb
'set gxout line'
'set grads off'
ba=xa+(t1-1)*(xb-xa)/(n-1)
bb=xa+(t2-1)*(xb-xa)/(n-1)
'set line 99 1 1'
'draw recf 'ba' 'ya' 'bb' 'yb
return

* leyenda de tres elementos encima del panel
function leyenda(xa,xb,yb,c1,s1,c2,s2,c3,s3)
yl=yb+0.09
xc=xa+0.7
'set strsiz 0.07'
'set string 'c1' l 4 0'
'draw string 'xa' 'yl' 's1
'set string 'c2' l 4 0'
'draw string 'xc' 'yl' 's2
'set string 'c3' r 4 0'
'draw string 'xb' 'yl' 's3
return

* flecha centrada en (xc,yc) en la direccion (ux,uy) unitaria
function flecha(xc,yc,ux,uy,col)
lg=0.1
xt=xc+lg*ux
yt=yc+lg*uy
xs=xc-lg*ux
ys=yc-lg*uy
'set line 'col' 1 3'
'draw line 'xs' 'ys' 'xt' 'yt
h=0.05
hx1=xt-h*ux-0.6*h*uy
hy1=yt-h*uy+0.6*h*ux
hx2=xt-h*ux+0.6*h*uy
hy2=yt-h*uy-0.6*h*ux
'draw line 'hx1' 'hy1' 'xt' 'yt
'draw line 'hx2' 'hy2' 'xt' 'yt
return

* flechas de direccion del viento 10 m del modelo (hacia donde va)
function flechas(xa,xb,yp,n,dt)
t=1
while (t<=n)
'set t 't
'd u10m'
l=sublin(result,1)
u=subwrd(l,4)
'd v10m'
l=sublin(result,1)
v=subwrd(l,4)
s=math_sqrt(u*u+v*v)
if (s>0.1)
xc=xa+(t-1)*(xb-xa)/(n-1)
ux=u/s
uy=v/s
flecha(xc,yp,ux,uy,1)
endif
t=t+dt
endwhile
return

* METAR: puntos de viento medio (y rafaga si existe) y flechas
function obs(arq,icao,xa,xb,ya,yb,vmin,vmax,n,dir,yp,dt)
while (1)
res=read(arq)
rc=sublin(res,1)
if (rc!=0); break; endif
l=sublin(res,2)
if (subwrd(l,1)=icao)
t=subwrd(l,2)
d=subwrd(l,3)
v=subwrd(l,4)
g=subwrd(l,5)
p=subwrd(l,6)
if (t>=1 & t<=n)
xp=xa+(t-1)*(xb-xa)/(n-1)
col=1
if (p=1); col=97; endif
vv=v
if (vv>vmax); vv=vmax; endif
yv=ya+(vv-vmin)*(yb-ya)/(vmax-vmin)
'set line 'col
'draw mark 3 'xp' 'yv' 0.06'
if (g>0)
if (g>vmax); g=vmax; endif
yg=ya+(g-vmin)*(yb-ya)/(vmax-vmin)
'draw mark 8 'xp' 'yg' 0.07'
endif
* flecha METAR solo en horas multiplo de dt
tt=math_nint(t)
if (dir=1 & d>=0 & tt=t)
if (math_mod(tt-1,dt)=0)
rad=d*3.14159265/180
ux=-math_sin(rad)
uy=-math_cos(rad)
flecha(xp,yp,ux,uy,4)
endif
endif
endif
endif
endwhile
rc=close(arq)
return

* triangulos marrones en los reportes METAR con polvo
function polvo(arq,icao,xa,xb,yp,n)
while (1)
res=read(arq)
rc=sublin(res,1)
if (rc!=0); break; endif
l=sublin(res,2)
if (subwrd(l,1)=icao & subwrd(l,6)=1)
t=subwrd(l,2)
xp=xa+(t-1)*(xb-xa)/(n-1)
'set line 97'
'draw mark 8 'xp' 'yp' 0.1'
endif
endwhile
rc=close(arq)
return
