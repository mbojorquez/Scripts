
'reinit'

ruta1='/home/mb/Versoes/WorkEtaVIII/out/Lima/grbctl/2021052300/sst_true_48h/3D/'
arquivo1='Eta02_sst_true_48h_2021052300_3D.ctl'

'open 'ruta1''arquivo1

ruta2='/home/mb/Versoes/WorkEtaVIII/out/Lima/grbctl/2021052300/sst_true_48h/2D/'
arquivo2='Eta02_sst_true_48h_2021052300_2D.ctl'

'open 'ruta2''arquivo2

resol=substr(arquivo1,4,2)
if (substr(resol,1,1)='0'); resol=substr(resol,2,1); endif

'set parea 1.2 10.1 0.95 7.6'
'set display color white'
'set mpdset hires'
'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set xlint 1'
'set ylint 1'
'set lon -79.5 -74.5'
'set lat -14.40 -9.40'

'q dims'

'set t 1'
'q time'
res=subwrd(result,3)
hor=substr(res,1,2)
di=substr(res,4,2)
me=substr(res,6,3)
an=substr(res,9,4)

if (me='JAN'); me='ENE'; endif
if (me='APR'); me='ABR'; endif
if (me='AUG'); me='AGO'; endif
if (me='DEC'); me='DIC'; endif

fec=''di''me''an''

dirout='/home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_'fec'/DivLima/'
'!mkdir -p 'dirout

i=1

while (i<=49)

'set t 'i
'q time'
res=subwrd(result,3)
hora=substr(res,1,2)
dia=substr(res,4,2)
mes=substr(res,6,3)
ano=substr(res,9,4)

if (mes='JAN'); mes='ENE'; endif
if (mes='APR'); mes='ABR'; endif
if (mes='AUG'); mes='AGO'; endif
if (mes='DEC'); mes='DIC'; endif

'c'
'set t 'i
'set lon -79.50 -74.5'
'set lat -14.40 -9.40'
'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set xlint 1'
'set ylint 1'

'define u6555 = ave(uvel,lev=950,lev=800)'
'define v6555 = ave(vvel,lev=950,lev=800)'
'define d6555 = hdivg(u6555,v6555)*100000'
'define d6555m = maskout(d6555,pslc.2-700)'

'define u3020 = ave(uvel,lev=350,lev=200)'
'define v3020 = ave(vvel,lev=350,lev=200)'
'define d3020 = hdivg(u3020,v3020)*100000'

'define om655 = ave(omeg,lev=700,lev=400)'

'set gxout shaded'
'set csmooth on'
*'/home/mb/Versoes/WorkEtaVIII/gscript/color.gs'
'set clevs -25 -20 -17 -14 -11 -8 -4 -3'
*Color naranja a rojo con transparencia
'set ccols 109 108 107 7 105 104 103 102 92'
'd d6555m'
'cbarn 0.5 1 10.3 3.0'


'set gxout shaded'
'set csmooth on'
'/home/mb/Versoes/WorkEtaVIII/gscript/color.gs'
'set clevs 2 3 4 5 6 7 8 10'
'set ccols 92 56 113 113 114 115 116 117 118'
'd d3020'
'cbarn 0.5 1 10.3 6.0'

*'color2 -levs -16 -13 -10 -7 -4 -kind black->crimson'
'set gxout contour'
'set cint 0.05'
'set cstyle 3'
'set cthick 3'
'set clab on'

'set ccolor 2'
'd maskout(maskout(om655,-0.05-om655),pslc.2-700)'

'set ccolor 4'
*'d maskout(om655,om655-0.05)'
'd maskout(maskout(om655,om655-0.05),pslc.2-700)'



'set strsiz 0.16'
'set string 1 c 10 0'
'draw string 5.5 8.2 Eta 5km Lima: Diverg. (azul) y omega ascendente (lineas punteadas rojas)'

'set strsiz 0.14'
'set string 1 c 12 0'
'draw string 3.1 7.85 INICIALIZACION: 'hor'UTC 'di''me''an''
'draw string 7.7 7.85 VALIDO: 'hora'UTC 'dia''mes''ano

'set line 15 1 2'
'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_prov.shp'

'set line 1 1 3'
'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'

fh=i-1
if (fh<10); fh='0'fh; endif

'gxprint 'dirout'DivLima_F_'fh'H_'dia''mes''ano'_'hora'UTC.png x1024 y768'

i=i+1

endwhile

'quit'

