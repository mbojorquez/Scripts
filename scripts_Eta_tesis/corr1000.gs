archi=corrlow.txt

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


linea0='Coeficiente de Correlacion';lixo=write(archi,linea0)
linea0='  Eta vs. Era Interim';lixo=write(archi,linea0)
linea0='  Dominio: Sudamerica';lixo=write(archi,linea0)
linea0='  Niveles bajos';lixo=write(archi,linea0)

'q dims'
n=sublin(result,4)
level=subwrd(n,6)
#nivel='    Nivel: 'level' 'hPa
lixo=write(archi,nivel)

linea0='  		     ';lixo=write(archi,linea0)
#linea0='      HGT    HR     WDIR   MDIR   T      W      Q      HGT_P  HR_P   WDIR_P MDIR_P T_P    W_P    Q_P';lixo=write(archi,linea0)

linea0=' MSLP MSLP_P ESP ESP_P HGT850 HGT850_P HR950 HR950_P DIV/CONV DIV/CONV_P VWIND925 VWIND925_P';lixo=write(archi,linea0)


while (i<=9)

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
'set display color white'
'set map 1 1 12'
'set annot 1 12'
'set xlint 2'
'set ylint 1'

'set mpdset hires'
*'set lat -30 -15'
*'set lon 280 300'
*'set lat -50 10'
*'set lon -115 -35'


'c'

'set grads off'

*'define teta = tmpprs(lev=500)'
*'define tera = tprs.2(lev=500)'





*'d teta-tera'
*'define pro = scorr(hgtprs, zprs.2, lon=280, lon=300, lat=-30, lat=-15)'
*'set gxout print'
*'set prnopts %8.2f 5 5'

ii=6*(i-1)
if ii=0;iii=000; endif
if ii=6;iii=006; endif
if ii=12;iii=012; endif
if ii=18;iii=018; endif
if ii=24;iii=024; endif
if ii=30;iii=030; endif
if ii=36;iii=036; endif
if ii=42;iii=042; endif
if ii=48;iii=048; endif
if ii=54;iii=054; endif
if ii=60;iii=060; endif
if ii=66;iii=066; endif
if ii=72;iii=072; endif
if ii=78;iii=078; endif
if ii=84;iii=084; endif
if ii=90;iii=090; endif
if ii=96;iii=096; endif

'define slp=maskout(msletmsl/100,PRESsfc/100-850)'
'define slpera=maskout(mslsfc.3/100,PRESsfc/100-850)'
'define mslp1 = scorr(slp, slpera, g)'
'define mslp2 = scorr(slp, slpera, lon=275, lon=292, lat=-25, lat=-13)'

'define ze=hgtprs(lev=500)-hgtprs(lev=1000)'
'define zr=(zprs.2(lev=500))/10-(zprs.2(lev=1000))/10'
'define z1 = scorr(ze, zr, g)'
'define z2 = scorr(ze, zr, lon=275, lon=292, lat=-25, lat=-13)'

'set lev 850'
'define dz1 = maskout(hgtprs,PRESsfc/100-850)'
'define dz2 = maskout((zprs.2/10),PRESsfc/100-850)'
'define hgtlow1 = scorr(dz1, dz2, g)'
'define hgtlow2 = scorr(dz1, dz2, lon=275, lon=292, lat=-25, lat=-13)'

'define rh1 = maskout(rhprs(lev=950),PRESsfc/100-850)'
'define rh2 = maskout(rprs.2(lev=950),PRESsfc/100-850)'
*'define rh1=rhprs(lev=950)'
*'define rh2=rprs.2(lev=950)'
'define rhlow1 = scorr(rh1, rh2, g)'
'define rhlow2 = scorr(rh1, rh2, lon=275, lon=292, lat=-25, lat=-13)'

'set lev 925'
'define v1=maskout((vgrdprs*1.94),PRESsfc/100-925)'
'define vr=maskout((vprs.2*1.94),PRESsfc/100-925)'
'define vlow1 = scorr(v1, vr, g)'
'define vlow2 = scorr(v1, vr, lon=275, lon=292, lat=-25, lat=-13)'


'define uprs2=ugrdprs(lev=950)+ugrdprs(lev=925)+ugrdprs(lev=900)+ugrdprs(lev=850)'
'define vprs2=vgrdprs(lev=950)+vgrdprs(lev=925)+vgrdprs(lev=900)+vgrdprs(lev=850)'
'define uprs3=uprs.2(lev=950)+uprs.2(lev=925)+uprs.2(lev=900)+uprs.2(lev=850)'
'define vprs3=vprs.2(lev=950)+vprs.2(lev=925)+vprs.2(lev=900)+vprs.2(lev=850)'
'define div=hdivg(uprs2,vprs2)*100000'
'define divr=hdivg(uprs3,vprs3)*100000'
'define diva=maskout(div,PRESsfc/100-925)'
'define divb=maskout(divr,PRESsfc/100-925)'
'define div1 = scorr(diva, divb, g)'
'define div2 = scorr(diva, divb, lon=275, lon=292, lat=-25, lat=-13)'


**FALTA VARIABLES DINAMICAS VORT Y DIV-CONV


'q define'

ss=sublin(result,3)
vpro=subwrd(ss,2)
vpro1 = math_format("%02.2f",vpro)
linea='F'iii'= 'vpro1 

ss=sublin(result,4)
vpro2=subwrd(ss,2)
vpro22 = math_format("%02.2f",vpro2)

ss=sublin(result,7)
vpro3=subwrd(ss,2)
vpro33 = math_format("%02.2f",vpro3)

ss=sublin(result,8)
vpro4=subwrd(ss,2)
vpro44 = math_format("%02.2f",vpro4)

ss=sublin(result,11)
vpro5=subwrd(ss,2)
vpro55 = math_format("%02.2f",vpro5)

ss=sublin(result,12)
vpro6=subwrd(ss,2)
vpro66 = math_format("%02.2f",vpro6)

ss=sublin(result,15)
vpro7=subwrd(ss,2)
vpro77 = math_format("%02.2f",vpro7)

ss=sublin(result,16)
vpro8=subwrd(ss,2)
vpro88 = math_format("%02.2f",vpro8)

ss=sublin(result,19)
vpro9=subwrd(ss,2)
vpro99 = math_format("%02.2f",vpro9)

ss=sublin(result,20)
vpro10=subwrd(ss,2)
vpro100 = math_format("%02.2f",vpro10)

ss=sublin(result,29)
vpro11=subwrd(ss,2)
vpro111 = math_format("%02.2f",vpro11)

ss=sublin(result,30)
vpro12=subwrd(ss,2)
vpro112 = math_format("%02.2f",vpro12)


linea3=linea' 'vpro22' 'vpro33' 'vpro44' 'vpro55' 'vpro66' 'vpro77' 'vpro88' 'vpro111' 'vpro112' 'vpro99' 'vpro100 
lixo=write(archi, linea3)


*'d scorr(hgtprs, tprs.2, 
*'scorr1 = sublin(result,4)'
*'w=write('salidacorr.txt',scorr1)'


'set strsiz 0.15'
'set string 1 c 11 0'
'draw string 5.5 8.2 Coef. Correlacion Temp 500 hPa - Eta Vs. Era Interim'

'set rgb 98 178 34 34'
'set strsiz 0.13'
'set string 98 c 11 0'
'draw string 3.8 7.85 Eta Inicializado: 'hor'UTC 'di''me''an''

'set string 1 c 11 0'
'draw string 7.6 7.85 Valido para: 'hora'UTC 'dia''mes''ano


i=i+1


*'set line 15 1 2'
*'draw shp /home/mbojorquez/gscript/shp/peru_prov.shp'

*'set line 1 1 3'
*'draw shp /home/mbojorquez/gscript/shp/peru_dpto.shp'

*'run etiquetas_gfs.gs'
*'run etiquetas_aerop_1.gs'


if (i='9')
endif
endwhile




