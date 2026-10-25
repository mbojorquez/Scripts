
'reinit'

*========================================================
* CONFIGURACION
*========================================================

ruta='/home/mb/Versoes/WorkEtaVIII/out/Lima/grbctl/2021052300/sst_true_48h/3D/'
arquivo='Eta02_sst_true_48h_2021052300_3D.ctl'

'open 'ruta''arquivo

resol=substr(arquivo,4,2)
if (substr(resol,1,1)='0'); resol=substr(resol,2,1); endif

*========================================================
* DOMINIO COMPLETO MENOS 0.3 GRADOS POR EXTREMO
*========================================================

lonw=-80.013820
lone=-74.013820
lats=-14.632460
latn=-9.512460

* Nivel de presion
'set lev 500'

* Directorio de salida
dirout='/home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_23MAY2021/500hPa/'
'!mkdir -p 'dirout

*========================================================
* CONFIGURACION GENERAL
*========================================================

'set display color white'
'set mpdset hires'
'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set xlint 1'
'set ylint 1'
'set lon 'lonw' 'lone
'set lat 'lats' 'latn

*========================================================
* CICLO TEMPORAL
*========================================================

i=1

while (i<=49)

    'set t 'i
    'set lev 500'

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

    fec=''dia''mes''ano

    'c'
    'set vpage 0 11 0 8.5'
    'set parea 0.6 10.4 0.5 7.8'
    'set lon 'lonw' 'lone
    'set lat 'lats' 'latn
    'set lev 500'
    'set t 'i


    'set vpage 0 11 0 8.5'
    'set parea 0.6 5.25 4.25 7.45'
    'set lon 'lonw' 'lone
    'set lat 'lats' 'latn
    'set lev 250'
    'set t 'i
    'set xlint 1'
    'set ylint 1'
    'u=uvel*1.94'
    'v=vvel*1.94'
    
    'set grads off'
    'color2 15 60 5 -kind darkgray->lightseagreen->indigo->green->lime->yellow->crimson->wheat'
    'set gxout stream'
    'set ccolor 1'
    'set cthick 2'
    'set strmden 1'
    'd u;v;mag(u,v)'
    'cbarn 0.5 1 5.0 6.0'

    'set line 1 1 3'
    'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'

    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 2.9 7.58 Lineas de corriente - 250 hPa'

    'set vpage 0 11 0 8.5'
    'set parea 5.75 10.4 4.25 7.45'
    'set lon 'lonw' 'lone
    'set lat 'lats' 'latn
    'set lev 500'
    'set t 'i
    'set xlint 1'
    'set ylint 1'
    'u=uvel*1.94'
    'v=vvel*1.94'
    'set grads off'
    'color2 5 40 5 -kind darkgray->lightseagreen->indigo->green->lime->yellow->crimson->wheat'

    'set gxout stream'
    'set ccolor 1'
    'set cthick 2'
    'set strmden 1'
    'd u;v;mag(u,v)'
    'cbarn 0.5 1 10.0 6.0'
    'set line 1 1 3'
    'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'

    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 8.0 7.58 Lineas de corriente - 500 hPa'

    'set vpage 0 11 0 8.5'
    'set parea 0.6 5.25 0.55 3.75'
    'set lon 'lonw' 'lone
    'set lat 'lats' 'latn
    'set lev 400'
    'set t 'i
    'set xlint 1'
    'set ylint 1'
    'set grads off'
    'set gxout shaded'
    'set csmooth on'
    'color2 -0.4 0.4 0.05 -kind gold->crimson->white->blue->aqua'

    'd omeg'
    'cbarn 0.5 1 5.0 2.2'

    'set line 1 1 3'
    'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'

    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 2.9 3.88 Movimiento vertical omega (Pa/s) - 500 hPa'

    'set vpage 0 11 0 8.5'
    'set parea 5.75 10.4 0.55 3.75'
    'set lon 'lonw' 'lone
    'set lat 'lats' 'latn
    'set lev 500'
    'set t 'i
    'set xlint 1'
    'set ylint 1'
    'set grads off'
    'define q500 = umes'
    'define rm500 = (q500/(1-q500))*1000'

    'set gxout shaded'
    'set csmooth on'
    'color2 3 10 1 -kind white->crimson->gold'
    'd rm500'
    'cbarn 0.5 1 10.0 2.2'

    'set line 1 1 3'
    'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'

    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 8.0 3.88 Relacion de mezcla (g/kg) - 500 hPa'

    'set vpage 0 11 0 8.5'
    'set parea 0.6 10.4 0.5 7.8'

    'set strsiz 0.16'
    'set string 1 c 5.9 0'
    'draw string 5.5 8.15 Eta 5km Lima: Multivariable'

    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 5.5 7.88 Valido: 'hora'UTC 'dia''mes''ano

    fh=i-1
    if (fh<10); fh='0'fh; endif

    'gxprint 'dirout'ETA500_'fh'H_'dia''mes''ano'_'hora'UTC.png x1024 y768'

    i=i+1

endwhile

'quit'
