archi=corr500.txt

'open sud3.ctl'
'open agost2013_075_area_1.ctl'


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

'set lev 500'
'q dims'
n=sublin(result,4)
level=subwrd(n,6)
nivel='    Nivel: 'level' 'hPa
lixo=write(archi,nivel)

linea0='  		     ';lixo=write(archi,linea0)
#linea0='      HGT    HR     WDIR   MDIR   T      W      Q      HGT_P  HR_P   WDIR_P MDIR_P T_P    W_P    Q_P';lixo=write(archi,linea0)

linea0=' MWIND MWIND_P VOR VOR_P W W_P VWIND VWIND_P UWIND UWIND_P HGT HGT_P HR HR_P';lixo=write(archi,linea0)


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

'set lev 500'
'define u1=ugrdprs*1.94'
'define v1=vgrdprs*1.94'
'define ur=uprs.2*1.94'
'define vr=vprs.2*1.94'

'define dviento1 = mag(u1,v1)'
'define dvientor = mag(ur,vr)'
'define dv = scorr(dviento1, dvientor, g)'
'define dv3 = scorr(dviento1, dvientor, lon=275, lon=292, lat=-25, lat=-13)'

'define vor=hcurl(u1,v1)*1e5'
'define vorr=hcurl(ur,vr)*1e5'
'define vor1 = scorr(vor, vorr, g)'
'define vor2 = scorr(vor, vorr, lon=275, lon=292, lat=-25, lat=-13)'

'define wprsa=vvelprs(lev=500)+vvelprs(lev=400)'
'define wprsb=wprs.2(lev=500)+wprs.2(lev=400)'
'define wprs1 = scorr(wprsa, wprsb, g)'
'define wprs2 = scorr(wprsa, wprsb, lon=275, lon=292, lat=-25, lat=-13)'

'define vwind1 = scorr(v1, vr, g)'
'define vwind2 = scorr(v1, vr, lon=275, lon=292, lat=-25, lat=-13)'

'define uwind1 = scorr(u1, ur, g)'
'define uwind2 = scorr(u1, ur, lon=275, lon=292, lat=-25, lat=-13)'

'define hgt1 = scorr(hgtprs, (zprs.2/10), g)'
'define hgt2 = scorr(hgtprs, (zprs.2/10), lon=275, lon=292, lat=-25, lat=-13)'

'define rh1 = scorr(rhprs, (rprs.2), g)'
'define rh2 = scorr(rhprs, (rprs.2), lon=275, lon=292, lat=-25, lat=-13)'


*'define wdireta = 57.3*atan2(ugrdprs,vgrdprs) + 180'
*'define wdirera = 57.3*atan2(uprs.2,vprs.2) + 180'
*'define wdir = scorr(wdireta, wdirera, g)'
*'define wdir3 = scorr(wdireta3, wdirera3, lon=275, lon=292, lat=-25, lat=-13)'

*'define t1 = scorr(tmpprs, tprs.2, g)'
*'define t2 = scorr(tmpprs, tprs.2, lon=275, lon=292, lat=-25, lat=-13)'


*'define q1 = scorr(spfhprs, qprs.2, g)'
*'define q2 = scorr(spfhprs, qprs.2, lon=275, lon=292, lat=-25, lat=-13)'

**FALTA VARIABLES DINAMICAS VORT Y DIV-CONV


'q define'

ss=sublin(result,7)
vpro=subwrd(ss,2)
vpro1 = math_format("%02.2f",vpro)
linea='F'iii'= 'vpro1 

ss=sublin(result,8)
vpro2=subwrd(ss,2)
vpro22 = math_format("%02.2f",vpro2)

ss=sublin(result,11)
vpro3=subwrd(ss,2)
vpro33 = math_format("%02.2f",vpro3)

ss=sublin(result,12)
vpro4=subwrd(ss,2)
vpro44 = math_format("%02.2f",vpro4)

ss=sublin(result,15)
vpro5=subwrd(ss,2)
vpro55 = math_format("%02.2f",vpro5)

ss=sublin(result,16)
vpro6=subwrd(ss,2)
vpro66 = math_format("%02.2f",vpro6)

ss=sublin(result,17)
vpro7=subwrd(ss,2)
vpro77 = math_format("%02.2f",vpro7)

ss=sublin(result,18)
vpro8=subwrd(ss,2)
vpro88 = math_format("%02.2f",vpro8)

ss=sublin(result,19)
vpro9=subwrd(ss,2)
vpro99 = math_format("%02.2f",vpro9)

ss=sublin(result,20)
vpro10=subwrd(ss,2)
vpro100 = math_format("%02.2f",vpro10)

ss=sublin(result,21)
vpro11=subwrd(ss,2)
vpro111 = math_format("%02.2f",vpro11)

ss=sublin(result,22)
vpro12=subwrd(ss,2)
vpro112 = math_format("%02.2f",vpro12)

ss=sublin(result,23)
vpro13=subwrd(ss,2)
vpro113 = math_format("%02.2f",vpro13)

ss=sublin(result,24)
vpro14=subwrd(ss,2)
vpro114 = math_format("%02.2f",vpro14)


linea3=linea' 'vpro22' 'vpro33' 'vpro44' 'vpro55' 'vpro66' 'vpro77' 'vpro88' 'vpro99' 'vpro100' 'vpro111' 'vpro112' 'vpro113' 'vpro114
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




