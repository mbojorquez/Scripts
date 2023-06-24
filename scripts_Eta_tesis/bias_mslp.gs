
'open sud3.ctl'
'open agost2013_075_area_1.ctl'
'open agost2013_075_sfc_area_1.ctl'


i=1

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



while (i<=18)
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
fe=''dia''mes''ano''





'set parea 1.2 10.1 0.95 7.6'
'set lev 500'
'set display color white'
'set map 1 1 12'
'set annot 1 12'
'set xlint 2'
'set ylint 1'

'set mpdset hires'
*'set lat -50 10'
*'set lon -115 -35'


'c'
'set grads off'

****

'set lev 950'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'ur=uprs.2*1.94'
'vr=vprs.2*1.94'
*'du = u1-ur'
*'dv = v1-vr'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'


'set gxout shaded'
'/home/mbojorquez/gscript/color2 10 60 10 -kind white->khaki->salmon->crimson->yellow'
'define drh1=rhprs-rprs.2'
'define drh = maskout(drh1,PRESsfc/100-850)'
'd drh'
*'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 6.0'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -60 -10 10 -kind magenta->darkslateblue->steelblue->silver->white'
'd drh'
*'/home/mbojorquez/gscript/cbarn 0.5 1 5.1 6.0'

'set lev 850'
'set cthick 4'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 40 100 5 -kind saddlebrown->black->teal'
'set clopts -1 5 0.07'
'set clab masked'
'define dz1 = (hgtprs)-((zprs.2)/10)'
'define dz = maskout(dz1,PRESsfc/100-850)'
'd dz'


*****
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'slp=msletmsl/100'
'slpera=(mslsfc.3)/100'

'define slpp = maskout((slp-slpera),PRESsfc/100-850)'

'set gxout shaded'
'/home/mbojorquez/gscript/color2 -8 8 1 -kind aqua->blue->cornflowerblue->white->tomato->firebrick->yellow'
'd slpp'
*'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 6.0'


'define ze=hgtprs(lev=500)-hgtprs(lev=1000)'
'define zr=(zprs.2(lev=500))/10-(zprs.2(lev=1000))/10'
'/home/mbojorquez/gscript/color2 -gxout contour 120 220 10 -kind saddlebrown->black->teal'
'set cthick 4'
'set cstyle 3'
'set clopts -1 5 0.07'
'set clab masked'
'd maskout((ze-zr),PRESsfc/100-850)'

*****
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'define tc850mb=tmpprs(lev=950)-273'
'define rh850mb=rhprs(lev=950)'
'define dewp950mb = tc850mb-((14.55+0.114*tc850mb)*(1-0.01*rh850mb)+pow((2.5+0.007*tc850mb)*(1-0.01*rh850mb),3)+(15.9+0.117*tc850mb)*pow((1-0.01*rh850mb),14))'


'define tc850rmb=tprs.2(lev=950)-273'
'define rh850rmb=rprs.2(lev=950)'
'define dewp950rmb = tc850rmb-((14.55+0.114*tc850rmb)*(1-0.01*rh850rmb)+pow((2.5+0.007*tc850rmb)*(1-0.01*rh850rmb),3)+(15.9+0.117*tc850rmb)*pow((1-0.01*rh850rmb),14))'
'set gxout shaded'

'/home/mbojorquez/gscript/color2 -18 18 2 -kind aqua->blue->cornflowerblue->white->tomato->firebrick->yellow'
'define dewp=maskout(dewp950mb-dewp950rmb,PRESsfc/100-950)'
'd dewp'
*'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 2.0'

'define dewp950mb = tc850mb-((14.55+0.114*tc850mb)*(1-0.01*rh850mb)+pow((2.5+0.007*tc850mb)*(1-0.01*rh850mb),3)+(15.9+0.117*tc850mb)*pow((1-0.01*rh850mb),14))'
'define dewp950mb1=maskout(dewp950mb,PRESsfc/100-925)'

'set gxout contour'
'set clevs 0'
'set cthick 4'
'set ccolor 1'
'set cint 03'
'set clab masked'
'd dewp950mb1'
*****
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'set lev 250'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'ur=uprs.2*1.94'
'vr=vprs.2*1.94'

'/home/mbojorquez/gscript/color2 -50 50 5 -kind magenta->darkmagenta->steelblue->white->salmon->crimson->gold'
'set gxout shaded'
'set cthick 10'
'set strmden 10 0.001 0.05 2'
'define dviento1 = mag(u1,v1)'
'define dvientor = mag(ur,vr)'
'define dv = dviento1 - dvientor'
'd dv'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 2.0'


*****

'set strsiz 0.10'
'set string 1 c 5.9 0'
'draw string 2.7 7.85 Humedad relativa-950 hPa (%) y HGT-850 hPa'
'draw string 8.1 7.85 Pres. red. a nivel mar (hPa) y espesor 500/1000 hPa'
'draw string 2.7 3.85 Temperatura de rocio-950 hPa (`3.`0C)'
'draw string 7.9 3.85 JS-250 hPa (kt)'



'set strsiz 0.12'
'set string 1 c 11 0'
'draw string 5.5 8.35 BIAS para JS (kt, sombr.), espesores (mgp, contorno) y presion reducida a nivel de mar (hPa, sombr.)'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 12 0'
'draw string 3.4 8.10 Inicializacion Eta: 'hor'UTC 'di''me''an''

'set string 1 c 12 0'
'draw string 7.5 8.10 Validez: 'hora'UTC 'dia''mes''ano

i=i+1


*'set line 15 1 2'
*'draw shp /home/mbojorquez/gscript/shp/peru_prov.shp'

*'set line 1 1 3'
*'draw shp /home/mbojorquez/gscript/shp/peru_dpto.shp'

*'run etiquetas_gfs.gs'
*'run etiquetas_aerop_1.gs'

'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/BIAS/South_America/MSLP/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/BIAS/South_America/MSLP/MSLP_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area99.png -t 1 x1024 y768'


if (i='18')
endif
endwhile




