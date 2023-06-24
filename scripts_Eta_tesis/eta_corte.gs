'reinit'
'open sud.ctl'

lati=-16
lati1=lati-0.5
lati2=lati+0.5

'set parea 1.2 10.1 0.95 7.6'
'set vpage 0.1 11 0.1 8.5'
'set lon -110 -60'
*'set lat -31 -29'
'set lev 1000 150'
'set lat 'lati''
'set zlog on'
'set display color white'
'set grads off'
*'set xlint 0.5'
'set ylevs 1000 900 850 700 600 500 400 300 250 200 150'
'set xlevs -110 -100 -90 -80 -70 -60'
'set grads off'
'set grid off'
'set grid horizontal 5 15 1'
'q dims'


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



while (i<=24)
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
'set xlevs -110 -100 -90 -80 -70 -60'
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



'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set gxout shaded'
'/home/mbojorquez/gscript/color2 60 130 10 -kind white->steelblue->khaki->salmon->crimson'
'set csmooth on'
'vient=mag(u1,v1)'
'd vient'
'/home/mbojorquez/gscript/cbarn 1 1 10.3'
****
*'set lon -110 -60'
'set lat 'lati1' 'lati2''
*'set lev 1000 150'

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
'set gxout shaded'
'/home/mbojorquez/gscript/color2 -25 0 1 -kind black->dimgray->darkgray->white'

'define vort = hcurl(ugrdprs,vgrdprs)*100000'
'set lat 'lati''
*'set clab off'
'd vort'
'/home/mbojorquez/gscript/cbarn 0.5 0 3.2 0.15'

'set clopts -1 -1 0.07'
'set cstyle 3'
'set cthick 6'
'set gxout contour'
*'/home/mbojorquez/gscript/color2 -35 35 5 -kind red->crimson->white->orchid->mediumpurple'
'/home/mbojorquez/gscript/color2 -33 0 3 -kind red->crimson->white'
'set gxout contour'
'set cmin 0.5'
'set clab masked'
*'d vort*100000'
'd vort'

'/home/mbojorquez/gscript/color.gs'
'set clevs 80 85 90 95 98'
'set ccols 100 101 102 103 104 106'
'set gxout shaded'
'set csmooth on'
'define rprs2=maskout(rhprs,PRESsfc/100-lev)'
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
'ww=spfhprs/(1-spfhprs)'
'thetae1=(tmpprs+((2.501*pow(10,6))/1004)*ww)*pow((1000/press),287/1004)'
'thetae2=(tmpprs+((2.501*pow(10,6))/1004)*ww)*pow((1000/press),287/1004)'
*'theta=tmpprs*pow((1000/press),287/1004)'

'define thetae=maskout(thetae1,PRESsfc/100-lev)'


*Donde thetae es la temp potencial equivalente y theta la temp potenc
******


'set gxout contour'
*'set clab on'

*'set clevs 280 283 286 289 302 305 308 311 314 317 320 323 332 335 337 339 341 343 345 347 349 351 353 355'
*'set cthick 4'
*'set ccolor 1'

*'set clab masked'
*'set clopts 1 -1 0.07'

*'d thetae2'

'set clevs 330 340'
'set cthick 8'
'set ccolor 6'

'set clab masked'
'set clopts 1 -1 0.07'

'd thetae2'



###La variable vvelprs no muestra valores para el tiempo 1.

##the first time step in the model output will be the input data you are providing. All the other
#variables than those on the Input file is calculated by the model during the
#integration (for example precipitation). Check your input grb data (GFS of
#FNL). There you cannot find this variable. So if you want to get latent
#heat, you will get it from the second time step onwards.

###Source: http://gradsusr.org/pipermail/gradsusr/2010-June/027802.html
###

'set cthick 1'
'set ccolor 13'
*'set gxout shaded'
*'/home/mbojorquez/gscript/color2 20 130 10 -kind white->lightseagreen->green'
'define w=(-1)*(vvelprs*286.9*tmpprs)/(9.8*lev)*10'
'set gxout vector'
'set arrscl .4 60'
'set arrlab off'
*'d ugrdprs;skip(w,2)'
'd skip(ugrdprs,2,1);w'

'set clopts -1 -1 0.07'
'set cstyle 1'
'set cthick 3'
'/home/mbojorquez/gscript/color2 0.3 1 0.2 -kind dodgerblue->blue->indigo'
'set gxout contour'
'set cmin 0.1'
'set clab masked'
'd vvelprs'

'set clopts -1 -1 0.07'
'set cstyle 3'
'set cthick 6'
'/home/mbojorquez/gscript/color2 -1 -0.3 0.2 -kind indigo->blue->lightseagreen'
'set gxout contour'
'set cmax -0.1'
'set clopts 4 -1 0.07'
'd vvelprs'

*****

*****
'set gxout contour'
'set clab off'
size=750
int=10
p=0
'hgt=hgtprs-hgtsfc'

'/home/mbojorquez/gscript/color.gs'

while(p*size>=-5000)
   j=p-1
   'set ccolor 1'
   'set cthick 10'
   'set cstyle 1'
   'set cmax 'p*size
   'set cmin 'j*size
   'set cint 'int
   'd hgt'
   p=p-1
endwhile

****

'set clevs 0'
'set cthick 6'
'set ccolor 4'
'set cint 03'
'set clab masked'
'set clopts 1 -1 0.07'
'd tmpprs-273'

'set clevs -14'
'set cthick 6'
'set ccolor 11'
'set cint 03'
'set clab masked'
'set clopts 1 -1 0.07'
'd tmpprs-273'

'set clevs -17'
'set cthick 6'
'set ccolor 11'
'set cint 03'
'set clab masked'
'set clopts 1 -1 0.07'
'd tmpprs-273'

*'set line 0 1 2'
*'draw recf 1 0 10.2 0.28'


'set strsiz 0.14'
'set string 1 c 10 0'
'draw string 5.5 8.25 JS (sombr.), Vorticidad (sombr.), TPE (cont. negro) & Mov. Vert (cont. azul)'


'draw string 2.1 8.00 Corte latitudinal: 'lati'`3.`0S'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 5.5 8.00 Eta - SENAMHI: 'hor'UTC 'di''me''an''

'set string 1 c 10 0'
'draw string 9.2 8.00 Valido para: 'hora'UTC 'dia''mes''ano

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


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Corte/'lati'/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Corte/'lati'/Corte_'fe'_'hora'UTC_'lati'.png x1024 y768' 


if (i='24')
endif
endwhile




