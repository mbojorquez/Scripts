
'reinit'

ruta='/home/mb/Versoes/WorkEtaVIII/out/Lima/grbctl/2021052300/sst_true_48h/3D/'
arquivo='Eta02_sst_true_48h_2021052300_3D.ctl'

'open 'ruta''arquivo


lonw=-80.013820
lone=-74.013820
lats=-14.632460
latn=-9.512460

dirout='/home/mb/Versoes/WorkEtaVIII/Figuras_ERA5/INICIA_23MAY2021/Cizalladura/'
'!mkdir -p 'dirout


'set display color white'
'set mpdset hires'
'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set xlint 1'
'set ylint 1'

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

    'set vpage 0 11 0 8.5'
    'set parea 0.6 5.25 4.25 7.45'
    'set lon 'lonw' 'lone
    'set lat 'lats' 'latn
    'set t 'i
    'set xlint 1'
    'set ylint 1'

    'define du1 = uvel(lev=250)-uvel(lev=500)'
    'define dv1 = vvel(lev=250)-vvel(lev=500)'
    'define shear1 = mag(du1,dv1)*1.94384'

    'set gxout shaded'
    'set csmooth on'
    'color2 15 60 5 -kind white->darkgray->crimson->gold'
    'd shear1'
    'cbarn 0.5 1 5.0 6.0'

    'set line 1 1 3'
    'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'
    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 2.9 7.58 Cizalladura 250-500 hPa (kt)'

    'set vpage 0 11 0 8.5'
    'set parea 5.75 10.4 4.25 7.45'
    'set lon 'lonw' 'lone
    'set lat 'lats' 'latn
    'set t 'i
    'set xlint 1'
    'set ylint 1'

    'define du2 = uvel(lev=400)-uvel(lev=700)'
    'define dv2 = vvel(lev=400)-vvel(lev=700)'
    'define shear2 = mag(du2,dv2)*1.94384'

    'set gxout shaded'
    'set csmooth on'
    'color2 15 60 5 -kind white->darkgray->crimson->gold'
    'd shear2'
    'cbarn 0.5 1 10.0 6.0'

    'set line 1 1 3'
    'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'
    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 8.0 7.58 Cizalladura 400-700 hPa (kt)'

    'set vpage 0 11 0 8.5'
    'set parea 0.6 5.25 0.55 3.75'
    'set lon 'lonw' 'lone
    'set lat 'lats' 'latn
    'set t 'i
    'set xlint 1'
    'set ylint 1'

    'define du3 = uvel(lev=400)-uvel(lev=850)'
    'define dv3 = vvel(lev=400)-vvel(lev=850)'
    'define shear3 = mag(du3,dv3)*1.94384'

    'set gxout shaded'
    'set csmooth on'
    'color2 15 60 5 -kind white->darkgray->crimson->gold'
    'd shear3'
    'cbarn 0.5 1 5.0 2.2'

    'set line 1 1 3'
    'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'
    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 2.9 3.88 Cizalladura 400-850 hPa (kt)'

    'set vpage 0 11 0 8.5'
    'set parea 5.75 10.4 0.55 3.75'
    'set lon 'lonw' 'lone
    'set lat 'lats' 'latn
    'set t 'i
    'set xlint 1'
    'set ylint 1'

    'define du4 = uvel(lev=500)-uvel(lev=850)'
    'define dv4 = vvel(lev=500)-vvel(lev=850)'
    'define shear4 = mag(du4,dv4)*1.94384'

    'set gxout shaded'
    'set csmooth on'
    'color2 12 35 3 -kind white->darkgray->crimson->gold'
    'd shear4'
    'cbarn 0.5 1 10.0 2.2'

    'set line 1 1 3'
    'draw shp /home/mb/Versoes/WorkEtaVIII/gscript/shp/peru_dpto.shp'
    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 8.0 3.88 Cizalladura 500-850 hPa (kt)'

    'set vpage 0 11 0 8.5'
    'set parea 0.6 10.4 0.5 7.8'

    'set strsiz 0.16'
    'set string 1 c 5.9 0'
    'draw string 5.5 8.15 Eta 5km Lima: Cizalladura vertical de magnitud de viento'

    'set strsiz 0.12'
    'set string 1 c 5.9 0'
    'draw string 5.5 7.88 Valido: 'hora'UTC 'dia''mes''ano

    fh=i-1
    if (fh<10); fh='0'fh; endif

    'gxprint 'dirout'ETA_SHEAR_'fh'H_'dia''mes''ano'_'hora'UTC.png x1024 y768'

    i=i+1

endwhile

'quit'
