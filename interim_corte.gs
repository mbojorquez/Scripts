
'open agost2013_075.ctl'
'open agost2013_075_sfc.ctl'

lati=-25

'set parea 1.2 10.1 0.95 7.6'
'set vpage 0.1 11 0.1 8.5'
'set lon 250 300'
**'set lat -31 -29'
'set lev 1000 150'
'set lat 'lati''
'set zlog on'
'set display color white'
'set grads off'
*'set xlint 0.5'
'set ylevs 1000 900 850 700 600 500 400 300 250 200 150'
'set xlevs 250 260 270 280 290 300'
'set grads off'
'set grid off'
'set grid horizontal 5 15 1'
'q dims'


i=6

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



while (i<=40)
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



'c'
'set grads off'

****

'set zlog on'
'set parea 1.2 10.1 0.95 7.6'
'set lev 1000 150'
'set ylevs 1000 900 850 700 600 500 400 300 250 200 150'
'set xlevs 250 260 270 280 290 300'
*'set xlevs -110 -105 -100 -95 -90 -85 -80 -75 -70 -65 -60'
'set grid horizontal 5 15 1'
*****
*****

*'set grads off'
*'set gxout shaded'
*'/home/mbojorquez/gscript/color2 -levs 85 88 90 92 94 96 98 -kind white->orange->crimson'
*'set gxout shaded'
*'set csmooth on'
*'d rprs'



'u1=uprs*1.94'
'v1=vprs*1.94'
'set gxout shaded'
*'/home/mbojorquez/gscript/color2 60 110 10 -kind white->skyblue->khaki->salmon->crimson'
'/home/mbojorquez/gscript/color2 60 110 10 -kind white->steelblue->navy'
'set csmooth on'
'vient=mag(u1,v1)'
'd vient'
'/home/mbojorquez/gscript/cbarn 1 1 10.3'


**'set lon 250 300'
**'set lat -31 -29'
'set lev 1000 150'

###
*'tmp=tmpprs'
*'v1=vgrdprs*1.94'
*'u1=ugrdprs*1.94'
*'define vort = hcurl(ugrdprs,vgrdprs)*100000'
*'pi=3.14159'
*'dtr=pi/180'
*'a=6.37122e6'

*get dx and dy
*'dy=cdiff(lat,y)*dtr*a'
*'dx=cdiff(lon,x)*dtr*a*cos(lat*dtr)'
*calculating vort gradient
*'dvdx=cdiff(vort,x)/dx'
*'dvdy=cdiff(vort,y)/dy'
*'define vadv=(-u1*dvdx-v1*dvdy)'

####################
#Variable vorticidad - It's calculated using finite difference in grads through function hcurl(u,v)
#If you want to display a vertical cross section of vorticity, you first need to calculate it over a 3-Dimensional region:
#In this way, at first I previosuly define set lan & set lon ...
#However, this method is not necessary with Era Interim DATA, because they define vorticity as a variable.
###################


*'/home/mbojorquez/gscript/color2 -25 25 1 -kind dimgray->darkgray->white->orchid->mediumpurple'
*'/home/mbojorquez/gscript/color2 -25 0 1 -kind dimgray->darkgray->white'
'/home/mbojorquez/gscript/color2 -25 0 1 -kind black->dimgray->darkgray->white'

*'define vort = hcurl(uprs,vprs)*100000'
'define voprs2=maskout(voprs,spsfc.2/100-lev)'
'set lat 'lati''
*'set clab off'
'd voprs2*100000'
'/home/mbojorquez/gscript/cbarn 0.5 0 3.2 0.15'

'set clopts -1 -1 0.07'
'set cstyle 3'
'set cthick 6'
*'/home/mbojorquez/gscript/color2 -35 35 5 -kind red->crimson->white->orchid->mediumpurple'
'/home/mbojorquez/gscript/color2 -33 0 3 -kind red->crimson->white'
'set gxout contour'
'set cmin 0.5'
'set clab masked'
'd voprs2*100000'

'/home/mbojorquez/gscript/color.gs'
'set clevs 80 85 90 95 98'
'set ccols 100 101 102 103 104 106'
'set gxout shaded'
'set csmooth on'
'define rprs2=maskout(rprs,spsfc.2/100-lev)'
'd rprs2'
'/home/mbojorquez/gscript/cbarn 0.5 0 8.0 0.15'

####################


*'/home/mbojorquez/gscript/color2 -levs 2 4 6 7 8 9 10 12 -kind white->orange->crimson'
*'set gxout shaded'
*'set csmooth on'
*'d vadv*3600'
*'/home/mbojorquez/gscript/cbarn 1 1 0.1 4.2'

###

'set grads off'
*'set xlint 0.5'


**Def de Temp Pot Equiv según SENAMHI**
*'define es=6.11*pow(10,(7.5*(tmpprs-273)/(237.5+(tmpprs-273))))'
*'define e=es*rhprs/100'
*'define rm=0.622*e/(600-e)'
*'define te=tmpprs*(1+2529.8804*rm/tmpprs)'
*'define tpe=te*pow(1000/lev,0.286)'
**

******
**TAMBIÉN PUEDE SER ÚTIL LA SGTE ECUACION
*Ref: http://gradsaddict.blogspot.pe/2013/05/script-thetags-defines-potential-and.html
'press=lev'
'ww=qprs/(1-qprs)'
'thetae=(tprs+((2.501*pow(10,6))/1004)*ww)*pow((1000/press),287/1004)'
*'theta=tprs*pow((1000/press),287/1004)'

'define thetaep=maskout(thetae,spsfc.2/100-600)'


*Donde thetae es la temp potencial equivalente y theta la temp potenc
******


'set gxout contour'
*'set clab on'

*'set clevs 280 283 286 289 302 305 308 311 314 317 320 323 332 335 337 339 341 343 345 347 349 351 353 355'
*'set cthick 4'
*'set ccolor 1'

*'set clab masked'
*'set clopts 1 -1 0.07'

*'d thetae'


'define theta1=maskout(thetae,spsfc.2/100-lev)'



'set cthick 4'
*'set ccolor 6'
'/home/mbojorquez/gscript/color2 270 400 5 -kind slategray->slategray'
'set gxout contour'
'd theta1'


*'set clevs 330 340'
*'set cthick 8'
*'set ccolor 6'

'set clab masked'
'set clopts 1 -1 0.07'

*'d theta1'


'set cthick 1'
'set ccolor 13'
*'set gxout shaded'
*'/home/mbojorquez/gscript/color2 20 130 10 -kind white->lightseagreen->green'
'define w=(-1)*(wprs*286.9*tprs)/(9.8*lev)*10'
'define w2=maskout(w,spsfc.2/100-lev)'
'set gxout vector'
'set arrscl .4 60'
'set arrlab off'
*'d uprs;skip(w2,1)'

'define wprs2=maskout(wprs,spsfc.2/100-lev)'
'set clopts -1 -1 0.07'
*'set cstyle 1'
*'set cthick 3'
*'/home/mbojorquez/gscript/color2 0.3 1 0.1 -kind dodgerblue->blue->indigo'
*'set gxout contour'
*'set cmin 0.5'
*'set clab masked'
*'d wprs2'


'set cstyle 3'
'set cthick 5'
*'/home/mbojorquez/gscript/color2 -1 -0.3 0.1 -kind indigo->blue->lightseagreen'
'/home/mbojorquez/gscript/color2 -1 -0.3 0.1 -kind lime->teal'
'set gxout contour'
'set clab masked'
'set clopts 4 -1 0.07'
'd wprs2'



'set clevs 0'
'set cthick 8'
'set ccolor 4'
'set cint 03'
'set clopts 1 -1 0.07'
'd tprs-273'

'set clevs -14'
'set cthick 8'
'set ccolor 14'
'set cint 03'
'set clab masked'
'set clopts 1 -1 0.07'
'd tprs-273'

'set clevs -17'
'set cthick 8'
'set ccolor 14'
'set cint 03'
'set clab masked'
'set clopts 1 -1 0.07'
'd tprs-273'
'clear mask'



*****
'set line 0 1 2'
'draw recf 1 0 10.2 0.28'


'set strsiz 0.14'
'set string 1 c 10 0'
'draw string 5.5 8.25 JS (sombr.), Vorticidad (sombr.), TPE (cont. negro) & Mov. Vert (cont. azul)'



'draw string 2.1 8.00 Corte latitudinal: 'lati'`3.`0S'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 7.5 8.00 Reanalisis ERA-Interim 0.75`3.`0: 'hora'UTC 'fe''

*'define t1pm1=spsfc.2/100'
*'set gxout shaded'
*'set ccolor 1'
*'set cthick 10'
*'set cstyle 1'

*'d maskout(0,lev-t1pm1)'
*'set csmooth on'

'set strsiz 0.11'
'set string 1 c 10 0'
'draw string 3.0 0.5 <- Vorticidad ciclonica'
'draw string 8.0 0.5 HR (%) ->'

i=i+1


*'set line 15 1 2'
*'draw shp /home/mbojorquez/gscript/shp/peru_prov.shp'

*'set line 1 1 3'
*'draw shp /home/mbojorquez/gscript/shp/peru_dpto.shp'

*'run etiquetas_gfs.gs'
*'run etiquetas_aerop_1.gs'

'!mkdir -p /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Corte/'lati'/'
'gxprint /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Corte/'lati'/Corte_'fe'_'hora'UTC_'lati'.png -b /home/mbojorquez/gscript/sierrasur_'lati'.png -t 1 x640 y480' 
*'gxprint /home/mbojorquez/INTERIM_TESIS/INICIA_'fec'/South_America/Corte/'lati'/Corte_'fe'_'hora'UTC.png x640 y480' 

if (i='40')
endif
endwhile




