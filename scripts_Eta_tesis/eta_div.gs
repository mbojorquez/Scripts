
'open sud.ctl'

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



while (i<=30)

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
'set lat -50 10'
'set lon -115 -35'

'c'

'set grads off'

******
****

'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'set lev 250'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
*'/home/mbojorquez/gscript/color2 -levs 10 20 30 40 50 60 70 80 90 100 110 120 130 150 -kind darkgray->deepskyblue->blueviolet->green->lime->yellow->crimson->salmon'
'/home/mbojorquez/gscript/color2 -levs 3 5 10 20 30 40 50 60 70 100 -kind white->gray->dimgray->black'

'set gxout stream'
'set cthick 2'
*'set strmden 6'
'set strmden -2'

'd u1;v1;mag(u1,v1)'
*'/home/mbojorquez/gscript/cbarn 0.5 1 0.1 5.9'

'define uprs3=ugrdprs(lev=300)+ugrdprs(lev=250)+ugrdprs(lev=200)'
'define vprs3=vgrdprs(lev=300)+vgrdprs(lev=250)+vgrdprs(lev=200)'

*'define uprs3=sum(uprs,lev=400,lev=200)'
*'define vprs3=sum(vprs,lev=400,lev=200)'
'/home/mbojorquez/gscript/color.gs'
'set clevs -30 -20 -15 -10 -8 -5'
'set ccols 109 108 107 105 104 103 0'
'set gxout shaded'
'd hdivg(uprs3,vprs3)*100000'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 5.9'
*'/home/mbojorquez/gscript/cbarn 0.5 1 5.4 5.9'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 8 10 15 20 30'
'set ccols 0 114 115 116 117 118 119'
'set gxout shaded'
'd hdivg(uprs3,vprs3)*100000'
'/home/mbojorquez/gscript/cbarn 0.5 1 5.2 5.9'
*'define uprs3=sum(uprs,lev=300,lev=200)'
*'define vprs3=sum(vprs,lev=300,lev=200)'
*'set clevs 10 15 20 25 30 35 40 45 50'
*'set ccols 0 56 113 113 114 115 116 117 118 119'
*'d hdivg(uprs3,vprs3)*100000'

*****
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'set lev 500'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
*'/home/mbojorquez/gscript/color2 -levs 10 15 20 25 30 35 40 50 60 70 80 -kind darkgray->deepskyblue->blueviolet->green->lime->yellow->crimson->salmon'
'/home/mbojorquez/gscript/color2 -levs 3 5 10 20 30 40 50 60 70 100 -kind white->gray->dimgray->black'

'set gxout stream'
'set cthick 2'
*'set strmden 6'
'set strmden -2'

'd u1;v1;mag(u1,v1)'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 6.0'

*'define uprs1=sum(uprs,lev=650,lev=550)'
*'define vprs1=sum(vprs,lev=650,lev=550)'
*Acumulado del viento con uso de mascara para ocultar valores por debajo de 650hPa
*'define uprs2=maskout(uprs1,(850-(spsfc.2)/100))'
*'define vprs2=maskout(vprs1,(850-(spsfc.2)/100))'
*'set gxout shaded'
*'set csmooth on'
*'/home/mbojorquez/gscript/color.gs'
*'set clevs -40 -35 -30 -25 -20 -15 -10 -5'
*Color naranja a rojo con transparencia
*'set ccols 109 108 107 7 105 104 103 102 0'
*'d hdivg(uprs2,vprs2)*100000'
*'/home/mbojorquez/gscript/cbarn 0.5 1 5.1 5.0'

'define uprs3=sum(ugrdprs,lev=500,lev=400)'
'define vprs3=sum(vgrdprs,lev=500,lev=400)'
'/home/mbojorquez/gscript/color.gs'
'set clevs -20 -15 -10 -8 -5'
'set ccols 109 108 107 105 104 0'
'set gxout shaded'
'd hdivg(uprs3,vprs3)*100000'
*'/home/mbojorquez/gscript/cbarn 0.5 1 5.4 5.0'

'/home/mbojorquez/gscript/color.gs'
'set clevs 5 8 10 15 20'
'set ccols 0 115 116 117 118 119'
'set gxout shaded'
'd hdivg(uprs3,vprs3)*100000'
*'define uprs3=sum(uprs,lev=300,lev=200)'
*'define vprs3=sum(vprs,lev=300,lev=200)'
*'set clevs 10 15 20 25 30 35 40 45 50'
*'set ccols 0 56 113 113 114 115 116 117 118 119'
*'d hdivg(uprs3,vprs3)*100000'
*'/home/mbojorquez/gscript/cbarn 0.5 1 5.4 5.0'

*****
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'set lev 700'
'u=ugrdprs*1.94'
'v=vgrdprs*1.94'
'define u1=maskout(u,PRESsfc/100-700)'
'define v1=maskout(v,PRESsfc/100-700)'
*'/home/mbojorquez/gscript/color2 -levs 5 10 15 20 25 30 35 40 50 60 70 -kind darkgray->deepskyblue->blueviolet->green->lime->yellow->crimson->khaki'
'/home/mbojorquez/gscript/color2 -levs 2 4 6 10 15 20 25 30 -kind white->darkgray->gray->dimgray->black'
'set gxout stream'
'set cthick 2'
'set strmden -2'
'd u1;v1;mag(u1,v1)'
*'/home/mbojorquez/gscript/cbarn 0.5 1 0.1 2.0'

*'define uprs1=sum(uprs,lev=650,lev=550)'
*'define vprs1=sum(vprs,lev=650,lev=550)'
*Acumulado del viento con uso de mascara para ocultar valores por debajo de 650hPa
*'define uprs2=maskout(uprs1,(850-(spsfc.2)/100))'
*'define vprs2=maskout(vprs1,(850-(spsfc.2)/100))'
*'set gxout shaded'
*'set csmooth on'
*'/home/mbojorquez/gscript/color.gs'
*'set clevs -40 -35 -30 -25 -20 -15 -10 -5'
*Color naranja a rojo con transparencia
*'set ccols 109 108 107 7 105 104 103 102 0'
*'d hdivg(uprs2,vprs2)*100000'
*'/home/mbojorquez/gscript/cbarn 0.5 1 5.1 5.0'

'define uprs3=sum(ugrdprs,lev=700,lev=600)'
'define vprs3=sum(vgrdprs,lev=700,lev=600)'
'define uprs4=maskout(uprs3,PRESsfc/100-600)'
'define vprs4=maskout(vprs3,PRESsfc/100-600)'
'define dprs3=hdivg(uprs4,vprs4)*100000'

*'define dprs3=sum(dptprs,lev=550,lev=400)'
*'define vprs3=sum(vprs,lev=300,lev=200)'
'/home/mbojorquez/gscript/color.gs'
'set clevs -15 -10 -8 -5'
'set ccols 109 107 105 104 0'
'set gxout shaded'
*'d hdivg(uprs3,vprs3)*100000'
'd dprs3'


'/home/mbojorquez/gscript/color.gs'
'set clevs 5 8 10 15'
'set ccols 0 115 116 117 119'
'set gxout shaded'
*'d hdivg(uprs3,vprs3)*100000'
'd dprs3'


*****

'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set ylevs 0 -10 -20 -30 -40'
'set xlint 20'
'set xlopts 1 3 0.10'
'set ylopts 1 4 0.10'
'set grads off'

'set lev 850'
'u=ugrdprs*1.94'
'v=vgrdprs*1.94'
'define u1=maskout(u,PRESsfc/100-850)'
'define v1=maskout(v,PRESsfc/100-850)'
'/home/mbojorquez/gscript/color2 -levs 2 4 6 10 15 20 25 30 -kind white->darkgray->gray->dimgray->black'
'set gxout stream'
'set cthick 2'
'set strmden -2'
'd u1;v1;mag(u1,v1)'
'/home/mbojorquez/gscript/cbarn 0.5 1 10.0 2.1'

*'define uprs1=sum(uprs,lev=650,lev=550)'
*'define vprs1=sum(vprs,lev=650,lev=550)'
*Acumulado del viento con uso de mascara para ocultar valores por debajo de 650hPa
*'define uprs2=maskout(uprs1,(850-(spsfc.2)/100))'
*'define vprs2=maskout(vprs1,(850-(spsfc.2)/100))'
*'set gxout shaded'
*'set csmooth on'
*'/home/mbojorquez/gscript/color.gs'
*'set clevs -40 -35 -30 -25 -20 -15 -10 -5'
*Color naranja a rojo con transparencia
*'set ccols 109 108 107 7 105 104 103 102 0'
*'d hdivg(uprs2,vprs2)*100000'
*'/home/mbojorquez/gscript/cbarn 0.5 1 5.1 5.0'

'define uprs3=sum(ugrdprs,lev=950,lev=850)'
'define vprs3=sum(vgrdprs,lev=950,lev=850)'
'define uprs4=maskout(uprs3,PRESsfc/100-850)'
'define vprs4=maskout(vprs3,PRESsfc/100-850)'
'define dprs4=hdivg(uprs4,vprs4)*100000'

*'define dprs4=sum(dptprs,lev=750,lev=650)'
*'define vprs3=sum(vprs,lev=300,lev=200)'
'/home/mbojorquez/gscript/color.gs'
'set clevs -15 -10 -8 -5'
'set ccols 109 107 105 104 0'
'set gxout shaded'
*'d hdivg(uprs3,vprs3)*100000'
'd dprs4'
'/home/mbojorquez/gscript/cbarn 0.5 1 4.8 2.2'


'/home/mbojorquez/gscript/color.gs'
'set clevs 5 8 10 15'
'set ccols 0 115 116 117 119'
'set gxout shaded'
*'d hdivg(uprs3,vprs3)*100000'
'd dprs4'
'/home/mbojorquez/gscript/cbarn 0.5 1 5.2 2.2'



*****

'set strsiz 0.11'
'set string 98 c 5.9 0'
'draw string 3.6 7.85 250 hPa (JS, sombr.)'
'draw string 8.6 7.85 500 hPa (Div, sombr.)'
'draw string 3.6 3.85 700 hPa (Div, sombr.)'
'draw string 8.6 3.85 850 hPa (Div, sombr.)'

'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 1.5 7.85 Nivel isobarico:'
'draw string 6.6 7.85 Nivel isobarico:'
'draw string 1.5 3.85 Nivel isobarico:'
'draw string 6.6 3.85 Nivel isobarico:'


'set strsiz 0.14'
'set string 1 c 10 0'
'draw string 5.5 8.35 Lineas de corriente (kt) y Div. (10`a-5 `ns`a-1`n)'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 10 0'
'draw string 3.4 8.10 Eta - SENAMHI: 'hor'UTC 'di''me''an''

'set string 1 c 10 0'
'draw string 7.5 8.10 Valido para: 'hora'UTC 'dia''mes''ano

i=i+1

*'set line 15 1 2'
*'draw shp /home/mbojorquez/gscript/shp/peru_prov.shp'

*'set line 1 1 3'
*'draw shp /home/mbojorquez/gscript/shp/peru_dpto.shp'

*'run etiquetas_gfs.gs'
*'run etiquetas_aerop_1.gs'


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Div/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Div/Div_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area9.png -t 1 x1024 y768'


if (i='30')
endif
endwhile




