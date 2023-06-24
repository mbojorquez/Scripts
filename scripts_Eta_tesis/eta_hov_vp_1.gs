************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
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
fe=''hor'Z'di''me''an''
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''
#fec=''me''di'-'an''


'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=-14

'set yflip on'
*'set lev 300'
'set t 1 25'
'set lat -14.5 -13.5'
'set lon -110 -60'
*'set lat 'lati''

'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'


* ########## Coriolis calculation
* 'define cor=2*7.29*(1/100000)*sin(lat*3.1415/180)'
* ########## Relative Vorticity calculation
* 'define vor=hcurl(ugrdprs,vgrdprs)'
* ########## Potential Temperature (theta) calculation
*'define dt=tmpprs(z-1)*pow(1000/lev(z-1),0.286)-tmpprs(z+1)*pow(1000/lev(z+1),0.286)'
* ########## differential of theta/pressure
*'define dp=100*(lev(z-1)-lev(z+1))'
*'define dtdp=dt/dp'
* ########### PV calculation on pressure surface
*'define pvprs=-9.8*(cor+vor)*dtdp'

####################################
'define dp=-30000.0'
'set lev 400 200'
'define thet=tmpprs*pow(1000/lev,0.286)'
'define dthp=(thet(lev=200)-thet(lev=400))/dp'
'define dvp=(vgrdprs(lev=200)-vgrdprs(lev=400))/dp'
'define dup=(ugrdprs(lev=200)-ugrdprs(lev=400))/dp'
****************************************************
'set lev 300'
'define dx=6.4e6*cos(lat*3.1416/180.0)*cdiff(lon,x)*3.1416/180.0'
'define dy=6.4e6*cdiff(lat,y)*3.1416/180.0'
'define dthx=cdiff(thet,x)/dx'
'define dthy=cdiff(thet,y)/dy'
'define f=2*7.292e-5*sin(lat*3.1416/180)'
'define pvprs=-10*((f+hcurl(ugrdprs,vgrdprs))*dthp-dvp*dthx+dup*dthy)'
*****************************************************************
*'set gxout shaded'
*'C:\OpenGrADS\pantalla-eta\gs\gsnew\colores\color2 -12 12 1 -kind blue->white->red'
*'d pv'
####################################


'set grads off'
*'/home/WRF_Files/gscript/color2 5 20 2 -kind darkslateblue->steelblue->silver->white'
*'set gxout shaded'
*'set csmooth on' 
*'d rhprs'


'set lev 300'
'set lat 'lati''
*'/home/mbojorquez/gscript/color2 -1.6 -0.4 0.2 -kind purple->steelblue->white'
*'set gxout shaded'
*'set csmooth on' 
*'d pvprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'set clevs -1.5 -1.2 -1 -0.8 -0.6'
'set gxout contour'
'set ccolor 9'
'set cstyle 1'
'set cmin 1.6'
'set clab on'
'd pvprs*1000000'

'set lev 500'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -14 -9 0.3 -kind aqua->steelblue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

'set lev 500'
'set gxout contour'
'set ccolor 1'
'set cthick 5'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 4500 6500 40 -kind white->black'
'set cmin 4500'
'set cint 40'

'set clab masked'
'd hgtprs'



'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set ccolor 15'
*'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'set gxout vector'
'set arrscl .2 50'
'd skip(u1,4,1);u1'



'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25  Vort. potencial 300 hPa (PVU, contor.), HGT (mgp, contor.), T`3.`0 (sombr.) & Viento zonal (kt)'

'set strsiz 0.13'
'draw string 4. 8.00 Corte latitudinal: 'lati'`3.`0'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/PV_'fe'_'hora'UTC_'lati'.png x1024 y768'


*******************************
*******************************

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
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
fe=''hor'Z'di''me''an''
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''
#fec=''me''di'-'an''


'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=-15

'set yflip on'
*'set lev 300'
'set t 1 25'
'set lat -16 -14'
'set lon -110 -60'
*'set lat 'lati''

'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'


* ########## Coriolis calculation
* 'define cor=2*7.29*(1/100000)*sin(lat*3.1415/180)'
* ########## Relative Vorticity calculation
* 'define vor=hcurl(ugrdprs,vgrdprs)'
* ########## Potential Temperature (theta) calculation
*'define dt=tmpprs(z-1)*pow(1000/lev(z-1),0.286)-tmpprs(z+1)*pow(1000/lev(z+1),0.286)'
* ########## differential of theta/pressure
*'define dp=100*(lev(z-1)-lev(z+1))'
*'define dtdp=dt/dp'
* ########### PV calculation on pressure surface
*'define pvprs=-9.8*(cor+vor)*dtdp'

####################################
'define dp=-30000.0'
'set lev 400 200'
'define thet=tmpprs*pow(1000/lev,0.286)'
'define dthp=(thet(lev=200)-thet(lev=400))/dp'
'define dvp=(vgrdprs(lev=200)-vgrdprs(lev=400))/dp'
'define dup=(ugrdprs(lev=200)-ugrdprs(lev=400))/dp'
****************************************************
'set lev 300'
'define dx=6.4e6*cos(lat*3.1416/180.0)*cdiff(lon,x)*3.1416/180.0'
'define dy=6.4e6*cdiff(lat,y)*3.1416/180.0'
'define dthx=cdiff(thet,x)/dx'
'define dthy=cdiff(thet,y)/dy'
'define f=2*7.292e-5*sin(lat*3.1416/180)'
'define pvprs=-10*((f+hcurl(ugrdprs,vgrdprs))*dthp-dvp*dthx+dup*dthy)'
*****************************************************************
*'set gxout shaded'
*'C:\OpenGrADS\pantalla-eta\gs\gsnew\colores\color2 -12 12 1 -kind blue->white->red'
*'d pv'
####################################


'set grads off'
*'/home/WRF_Files/gscript/color2 5 20 2 -kind darkslateblue->steelblue->silver->white'
*'set gxout shaded'
*'set csmooth on' 
*'d rhprs'


'set lev 300'
'set lat 'lati''
*'/home/mbojorquez/gscript/color2 -1.5 -0.4 0.1 -kind purple->steelblue->white'
*'set gxout shaded'
*'set csmooth on' 
*'d pvprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'set clevs -1.5 -1.2 -1 -0.8 -0.6'
'set gxout contour'
'set ccolor 9'
'set cstyle 1'
'set cmin 1.6'
'set clab on'
'd pvprs*1000000'

'set lev 500'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -14 -9 0.3 -kind aqua->steelblue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'


'set lev 500'
'set gxout contour'
'set cthick 5'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 4500 6500 40 -kind white->black'
'set cmin 4500'
'set cint 40'
'set ccolor 1'
'set clab masked'
'd hgtprs'


'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set ccolor 15'
*'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'set gxout vector'
'set arrscl .2 50'
'd skip(u1,4,1);u1'



'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25  Vort. potencial 300 hPa (PVU, contor.), HGT (mgp, contor.), T`3.`0 (sombr.) & Viento zonal (kt)'

'set strsiz 0.13'
'draw string 4. 8.00 Corte latitudinal: 'lati'`3.`0'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/PV_'fe'_'hora'UTC_'lati'.png x1024 y768'


**********************************

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
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
fe=''hor'Z'di''me''an''
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''
#fec=''me''di'-'an''


'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=-16

'set yflip on'
'set lev 300'
'set t 1 25'
'set lat -16.5 -15.5'
'set lon -110 -60'
*'set lat 'lati''

'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'


* ########## Coriolis calculation
* 'define cor=2*7.29*(1/100000)*sin(lat*3.1415/180)'
* ########## Relative Vorticity calculation
* 'define vor=hcurl(ugrdprs,vgrdprs)'
* ########## Potential Temperature (theta) calculation
*'define dt=tmpprs(z-1)*pow(1000/lev(z-1),0.286)-tmpprs(z+1)*pow(1000/lev(z+1),0.286)'
* ########## differential of theta/pressure
*'define dp=100*(lev(z-1)-lev(z+1))'
*'define dtdp=dt/dp'
* ########### PV calculation on pressure surface
*'define pvprs=-9.8*(cor+vor)*dtdp'

####################################
'define dp=-30000.0'
'set lev 400 200'
'define thet=tmpprs*pow(1000/lev,0.286)'
'define dthp=(thet(lev=200)-thet(lev=400))/dp'
'define dvp=(vgrdprs(lev=200)-vgrdprs(lev=400))/dp'
'define dup=(ugrdprs(lev=200)-ugrdprs(lev=400))/dp'
****************************************************
'set lev 300'
'define dx=6.4e6*cos(lat*3.1416/180.0)*cdiff(lon,x)*3.1416/180.0'
'define dy=6.4e6*cdiff(lat,y)*3.1416/180.0'
'define dthx=cdiff(thet,x)/dx'
'define dthy=cdiff(thet,y)/dy'
'define f=2*7.292e-5*sin(lat*3.1416/180)'
'define pvprs=-10*((f+hcurl(ugrdprs,vgrdprs))*dthp-dvp*dthx+dup*dthy)'
*****************************************************************
*'set gxout shaded'
*'C:\OpenGrADS\pantalla-eta\gs\gsnew\colores\color2 -12 12 1 -kind blue->white->red'
*'d pv'
####################################


'set grads off'
*'/home/WRF_Files/gscript/color2 5 20 2 -kind darkslateblue->steelblue->silver->white'
*'set gxout shaded'
*'set csmooth on' 
*'d rhprs'

'set lev 300'
'set lat 'lati''
*'/home/mbojorquez/gscript/color2 -1.5 -0.4 0.1 -kind purple->steelblue->white'
*'set gxout shaded'
*'set csmooth on' 
*'d pvprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'set clevs -1.5 -1.2 -1 -0.8 -0.6'
'set gxout contour'
'set ccolor 9'
'set cstyle 1'
'set cmin 1.6'
'set clab on'
'd pvprs*1000000'


'set lev 500'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -14 -9 0.3 -kind aqua->steelblue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set ccolor 15'
*'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'set gxout vector'
'set arrscl .2 50'
'd skip(u1,4,1);u1'


'set lev 500'
'set gxout contour'
'set cthick 5'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 4500 6500 40 -kind white->black'
'set cmin 4500'
'set cint 40'
'set ccolor 1'
'set clab masked'
'd hgtprs'

'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25  Vort. potencial 300 hPa (PVU, contor.), HGT (mgp, contor.), T`3.`0 (sombr.) & Viento zonal (kt)'

'set strsiz 0.13'
'draw string 4. 8.00 Corte latitudinal: 'lati'`3.`0'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/PV_'fe'_'hora'UTC_'lati'.png x1024 y768'


**********************************

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
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
fe=''hor'Z'di''me''an''
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''
#fec=''me''di'-'an''


'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=-17

'set yflip on'
*'set lev 300'
'set t 1 25'
'set lat -18 -16'
'set lon -110 -60'
*'set lat 'lati''

'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'


* ########## Coriolis calculation
* 'define cor=2*7.29*(1/100000)*sin(lat*3.1415/180)'
* ########## Relative Vorticity calculation
* 'define vor=hcurl(ugrdprs,vgrdprs)'
* ########## Potential Temperature (theta) calculation
*'define dt=tmpprs(z-1)*pow(1000/lev(z-1),0.286)-tmpprs(z+1)*pow(1000/lev(z+1),0.286)'
* ########## differential of theta/pressure
*'define dp=100*(lev(z-1)-lev(z+1))'
*'define dtdp=dt/dp'
* ########### PV calculation on pressure surface
*'define pvprs=-9.8*(cor+vor)*dtdp'

####################################
'define dp=-30000.0'
'set lev 400 200'
'define thet=tmpprs*pow(1000/lev,0.286)'
'define dthp=(thet(lev=200)-thet(lev=400))/dp'
'define dvp=(vgrdprs(lev=200)-vgrdprs(lev=400))/dp'
'define dup=(ugrdprs(lev=200)-ugrdprs(lev=400))/dp'
****************************************************
'set lev 300'
'define dx=6.4e6*cos(lat*3.1416/180.0)*cdiff(lon,x)*3.1416/180.0'
'define dy=6.4e6*cdiff(lat,y)*3.1416/180.0'
'define dthx=cdiff(thet,x)/dx'
'define dthy=cdiff(thet,y)/dy'
'define f=2*7.292e-5*sin(lat*3.1416/180)'
'define pvprs=-10*((f+hcurl(ugrdprs,vgrdprs))*dthp-dvp*dthx+dup*dthy)'
*****************************************************************
*'set gxout shaded'
*'C:\OpenGrADS\pantalla-eta\gs\gsnew\colores\color2 -12 12 1 -kind blue->white->red'
*'d pv'
####################################


'set grads off'
*'/home/WRF_Files/gscript/color2 5 20 2 -kind darkslateblue->steelblue->silver->white'
*'set gxout shaded'
*'set csmooth on' 
*'d rhprs'


'set lev 300'
'set lat 'lati''
*'/home/mbojorquez/gscript/color2 -1.5 -0.4 0.1 -kind purple->steelblue->white'
*'set gxout shaded'
*'set csmooth on' 
*'d pvprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'set clevs -1.5 -1.2 -1 -0.8 -0.6'
'set gxout contour'
'set ccolor 9'
'set cstyle 1'
'set cmin 1.6'
'set clab on'
'd pvprs*1000000'

'set lev 500'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -14 -9 0.3 -kind aqua->steelblue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

'set lev 500'
'set gxout contour'
'set cthick 5'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 4500 6500 40 -kind white->black'
'set cmin 4500'
'set cint 40'
'set ccolor 1'
'set clab masked'
'd hgtprs'



'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set ccolor 15'
*'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'set gxout vector'
'set arrscl .2 50'
'd skip(u1,4,1);u1'



'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25  Vort. potencial 300 hPa (PVU, contor.), HGT (mgp, contor.), T`3.`0 (sombr.) & Viento zonal (kt)'

'set strsiz 0.13'
'draw string 4. 8.00 Corte latitudinal: 'lati'`3.`0'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/PV_'fe'_'hora'UTC_'lati'.png x1024 y768'


**********************************

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
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
fe=''hor'Z'di''me''an''
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''
#fec=''me''di'-'an''


'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=-18

'set yflip on'
*'set lev 300'
'set t 1 25'
'set lat -19 -17'
'set lon -110 -60'
*'set lat 'lati''

'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'


* ########## Coriolis calculation
* 'define cor=2*7.29*(1/100000)*sin(lat*3.1415/180)'
* ########## Relative Vorticity calculation
* 'define vor=hcurl(ugrdprs,vgrdprs)'
* ########## Potential Temperature (theta) calculation
*'define dt=tmpprs(z-1)*pow(1000/lev(z-1),0.286)-tmpprs(z+1)*pow(1000/lev(z+1),0.286)'
* ########## differential of theta/pressure
*'define dp=100*(lev(z-1)-lev(z+1))'
*'define dtdp=dt/dp'
* ########### PV calculation on pressure surface
*'define pvprs=-9.8*(cor+vor)*dtdp'

####################################
'define dp=-30000.0'
'set lev 400 200'
'define thet=tmpprs*pow(1000/lev,0.286)'
'define dthp=(thet(lev=200)-thet(lev=400))/dp'
'define dvp=(vgrdprs(lev=200)-vgrdprs(lev=400))/dp'
'define dup=(ugrdprs(lev=200)-ugrdprs(lev=400))/dp'
****************************************************
'set lev 300'
'define dx=6.4e6*cos(lat*3.1416/180.0)*cdiff(lon,x)*3.1416/180.0'
'define dy=6.4e6*cdiff(lat,y)*3.1416/180.0'
'define dthx=cdiff(thet,x)/dx'
'define dthy=cdiff(thet,y)/dy'
'define f=2*7.292e-5*sin(lat*3.1416/180)'
'define pvprs=-10*((f+hcurl(ugrdprs,vgrdprs))*dthp-dvp*dthx+dup*dthy)'
*****************************************************************
*'set gxout shaded'
*'C:\OpenGrADS\pantalla-eta\gs\gsnew\colores\color2 -12 12 1 -kind blue->white->red'
*'d pv'
####################################

'set grads off'
*'/home/WRF_Files/gscript/color2 5 20 2 -kind darkslateblue->steelblue->silver->white'
*'set gxout shaded'
*'set csmooth on' 
*'d rhprs'


'set lev 300'
'set lat 'lati''
*'/home/mbojorquez/gscript/color2 -1.5 -0.4 0.1 -kind purple->steelblue->white'
*'set gxout shaded'
*'set csmooth on' 
*'d pvprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'set clevs -1.5 -1.2 -1 -0.8 -0.6'
'set gxout contour'
'set ccolor 9'
'set cstyle 1'
'set cmin 1.6'
'set clab on'
'd pvprs*1000000'


'set lev 500'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -14 -9 0.3 -kind aqua->steelblue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

'set lev 500'
'set gxout contour'
'set cthick 5'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 4500 6500 40 -kind white->black'
'set cmin 4500'
'set cint 40'
'set ccolor 1'
'set clab masked'
'd hgtprs'


'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set ccolor 15'
*'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'set gxout vector'
'set arrscl .2 50'
'd skip(u1,4,1);u1'





'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25  Vort. potencial 300 hPa (PVU, contor.), HGT (mgp, contor.), T`3.`0 (sombr.) & Viento zonal (kt)'

'set strsiz 0.13'
'draw string 4. 8.00 Corte latitudinal: 'lati'`3.`0'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/PV_'fe'_'hora'UTC_'lati'.png x1024 y768'


**********************************


**********************************

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
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
fe=''hor'Z'di''me''an''
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''
#fec=''me''di'-'an''


'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=-19

'set yflip on'
*'set lev 300'
'set t 1 25'
'set lat -20 -18'
'set lon -110 -60'
*'set lat 'lati''

'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'


* ########## Coriolis calculation
* 'define cor=2*7.29*(1/100000)*sin(lat*3.1415/180)'
* ########## Relative Vorticity calculation
* 'define vor=hcurl(ugrdprs,vgrdprs)'
* ########## Potential Temperature (theta) calculation
*'define dt=tmpprs(z-1)*pow(1000/lev(z-1),0.286)-tmpprs(z+1)*pow(1000/lev(z+1),0.286)'
* ########## differential of theta/pressure
*'define dp=100*(lev(z-1)-lev(z+1))'
*'define dtdp=dt/dp'
* ########### PV calculation on pressure surface
*'define pvprs=-9.8*(cor+vor)*dtdp'

####################################
'define dp=-30000.0'
'set lev 400 200'
'define thet=tmpprs*pow(1000/lev,0.286)'
'define dthp=(thet(lev=200)-thet(lev=400))/dp'
'define dvp=(vgrdprs(lev=200)-vgrdprs(lev=400))/dp'
'define dup=(ugrdprs(lev=200)-ugrdprs(lev=400))/dp'
****************************************************
'set lev 300'
'define dx=6.4e6*cos(lat*3.1416/180.0)*cdiff(lon,x)*3.1416/180.0'
'define dy=6.4e6*cdiff(lat,y)*3.1416/180.0'
'define dthx=cdiff(thet,x)/dx'
'define dthy=cdiff(thet,y)/dy'
'define f=2*7.292e-5*sin(lat*3.1416/180)'
'define pvprs=-10*((f+hcurl(ugrdprs,vgrdprs))*dthp-dvp*dthx+dup*dthy)'
*****************************************************************
*'set gxout shaded'
*'C:\OpenGrADS\pantalla-eta\gs\gsnew\colores\color2 -12 12 1 -kind blue->white->red'
*'d pv'
####################################

'set grads off'
*'/home/WRF_Files/gscript/color2 5 20 2 -kind darkslateblue->steelblue->silver->white'
*'set gxout shaded'
*'set csmooth on' 
*'d rhprs'


'set lev 300'
'set lat 'lati''
*'/home/mbojorquez/gscript/color2 -1.5 -0.4 0.1 -kind purple->steelblue->white'
*'set gxout shaded'
*'set csmooth on' 
*'d pvprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'set clevs -1.5 -1.2 -1 -0.8 -0.6'
'set gxout contour'
'set ccolor 9'
'set cstyle 1'
'set cmin 1.6'
'set clab on'
'd pvprs*1000000'


'set lev 500'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -14 -9 0.3 -kind aqua->steelblue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

'set lev 500'
'set gxout contour'
'set cthick 5'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 4500 6500 40 -kind white->black'
'set cmin 4500'
'set cint 40'
'set ccolor 1'
'set clab masked'
'd hgtprs'


'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set ccolor 15'
*'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'set gxout vector'
'set arrscl .2 50'
'd skip(u1,4,1);u1'





'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25  Vort. potencial 300 hPa (PVU, contor.), HGT (mgp, contor.), T`3.`0 (sombr.) & Viento zonal (kt)'

'set strsiz 0.13'
'draw string 4. 8.00 Corte latitudinal: 'lati'`3.`0'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/PV_'fe'_'hora'UTC_'lati'.png x1024 y768'


**********************************


**********************************

************

'reinit'

'open sud.ctl'


'set parea 1.0 9.9 0.95 7.6'
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
fe=''hor'Z'di''me''an''
if me=JAN;me=ENE;endif
if me=APR;me=ABR;endif
if me=AUG;me=AGO;endif
if me=DEC;me=DIC;endif
fec=''di''me''an''
#fec=''me''di'-'an''


'set grads off'
'set map 1 1 12'
'set annot 1 12'
'set ylint 1'

lati=-20

'set yflip on'
*'set lev 300'
'set t 1 25'
'set lat -21 -19'
'set lon -110 -60'
*'set lat 'lati''

'set gxout shaded'
'set grads off'
'set csmooth on'
'set display color white'
'c'

'set grads off'


* ########## Coriolis calculation
* 'define cor=2*7.29*(1/100000)*sin(lat*3.1415/180)'
* ########## Relative Vorticity calculation
* 'define vor=hcurl(ugrdprs,vgrdprs)'
* ########## Potential Temperature (theta) calculation
*'define dt=tmpprs(z-1)*pow(1000/lev(z-1),0.286)-tmpprs(z+1)*pow(1000/lev(z+1),0.286)'
* ########## differential of theta/pressure
*'define dp=100*(lev(z-1)-lev(z+1))'
*'define dtdp=dt/dp'
* ########### PV calculation on pressure surface
*'define pvprs=-9.8*(cor+vor)*dtdp'

####################################
'define dp=-30000.0'
'set lev 400 200'
'define thet=tmpprs*pow(1000/lev,0.286)'
'define dthp=(thet(lev=200)-thet(lev=400))/dp'
'define dvp=(vgrdprs(lev=200)-vgrdprs(lev=400))/dp'
'define dup=(ugrdprs(lev=200)-ugrdprs(lev=400))/dp'
****************************************************
'set lev 300'
'define dx=6.4e6*cos(lat*3.1416/180.0)*cdiff(lon,x)*3.1416/180.0'
'define dy=6.4e6*cdiff(lat,y)*3.1416/180.0'
'define dthx=cdiff(thet,x)/dx'
'define dthy=cdiff(thet,y)/dy'
'define f=2*7.292e-5*sin(lat*3.1416/180)'
'define pvprs=-10*((f+hcurl(ugrdprs,vgrdprs))*dthp-dvp*dthx+dup*dthy)'
*****************************************************************
*'set gxout shaded'
*'C:\OpenGrADS\pantalla-eta\gs\gsnew\colores\color2 -12 12 1 -kind blue->white->red'
*'d pv'
####################################

'set grads off'
*'/home/WRF_Files/gscript/color2 5 20 2 -kind darkslateblue->steelblue->silver->white'
*'set gxout shaded'
*'set csmooth on' 
*'d rhprs'


'set lev 300'
'set lat 'lati''
*'/home/mbojorquez/gscript/color2 -1.5 -0.4 0.1 -kind purple->steelblue->white'
*'set gxout shaded'
*'set csmooth on' 
*'d pvprs*1000000'
*'/home/mbojorquez/gscript/cbarn 1 0 4.0 0.3'

'set clevs -1.5 -1.2 -1 -0.8 -0.6'
'set gxout contour'
'set ccolor 9'
'set cstyle 1'
'set cmin 1.6'
'set clab on'
'd pvprs*1000000'


'set lev 500'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -14 -9 0.3 -kind aqua->steelblue->white'
'd tmpprs-273'
'/home/mbojorquez/gscript/cbarn 1 1 10.1 4.3'

'set lev 500'
'set gxout contour'
'set cthick 5'
'set cstyle 3'
'/home/mbojorquez/gscript/color2 -gxout contour 4500 6500 40 -kind white->black'
'set cmin 4500'
'set cint 40'
'set ccolor 1'
'set clab masked'
'd hgtprs'


'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set ccolor 15'
*'/home/mbojorquez/gscript/color2 -levs 2 4 6 8 10 12 15 20 25 30 35 40 45 50 60 80 -kind lightgray->lightseagreen'
*'set arrlab off'
'set gxout vector'
'set arrscl .2 50'
'd skip(u1,4,1);u1'





'set strsiz 0.13'
'set string 1 c 10 0'
'draw string 5.5 8.25  Vort. potencial 300 hPa (PVU, contor.), HGT (mgp, contor.), T`3.`0 (sombr.) & Viento zonal (kt)'

'set strsiz 0.13'
'draw string 4. 8.00 Corte latitudinal: 'lati'`3.`0'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.6 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Hov/PV/PV_'fe'_'hora'UTC_'lati'.png x1024 y768'


**********************************





