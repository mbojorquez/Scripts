archi=rmse250.txt

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


linea0='  RMSE promedio';lixo=write(archi,linea0)
linea0='  Eta vs. Era Interim';lixo=write(archi,linea0)
linea0='  Dominio: Sudamerica & Sur del Peru';lixo=write(archi,linea0)

'set lev 250'
'q dims'
n=sublin(result,4)
level=subwrd(n,6)
nivel='    Nivel: 'level' 'hPa
lixo=write(archi,nivel)

linea0='  		     ';lixo=write(archi,linea0)
#linea0='      HGT    HR     WDIR   MDIR   T      W      Q      HGT_P  HR_P   WDIR_P MDIR_P T_P    W_P    Q_P';lixo=write(archi,linea0)

linea0=' JS JS_P HGT HGT_P DIV DIV_P UWIND UWIND_P';lixo=write(archi,linea0)

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

#1
'set lev 250'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'ur=uprs.2*1.94'
'vr=vprs.2*1.94'
'define dviento1 = mag(u1,v1)'
'define dvientor = mag(ur,vr)'
'define dv = dviento1 - dvientor'
'define dz = (hgtprs)-((zprs.2)/10)'

'define rmsejs=sqrt((dv*dv))'
'define js = aave(rmsejs, g)'
'define js1 = aave(rmsejs, lon=275, lon=292, lat=-25, lat=-13)' 

'define rmsehgt = sqrt((dz*dz))'
'define hgt = aave(rmsehgt, g)'
'define hgt1 = aave(rmsehgt, lon=275, lon=292, lat=-25, lat=-13)'


'define uprs2=ugrdprs(lev=300)+ugrdprs(lev=250)+ugrdprs(lev=200)'
'define vprs2=vgrdprs(lev=300)+vgrdprs(lev=250)+vgrdprs(lev=200)'
'define uprs3=uprs.2(lev=300)+uprs.2(lev=250)+uprs.2(lev=200)'
'define vprs3=vprs.2(lev=300)+vprs.2(lev=250)+vprs.2(lev=200)'
'define div=hdivg(uprs2,vprs2)*100000'
'define divr=hdivg(uprs3,vprs3)*100000'
'define bias=div-divr'
'define rmsediv=sqrt((bias*bias))'
'define divv = aave(rmsediv, g)'
'define divv1 = aave(rmsediv, lon=275, lon=292, lat=-25, lat=-13)'

'define biasuwind=u1-ur'
'define rmseuwind=sqrt((biasuwind*biasuwind))'
'define uwind1 = aave(rmseuwind, g)'
'define uwind2 = aave(rmseuwind, lon=275, lon=292, lat=-25, lat=-13)'
**********



***********



***********


**FALTA VARIABLES DINAMICAS VORT Y DIV-CONV



'q define'


ss=sublin(result,10)
vpro=subwrd(ss,2)
vpro1 = math_format("%02.2f",vpro)
linea='F'iii'= 'vpro1 

ss2=sublin(result,11)
vpro2=subwrd(ss2,2)
vpro22 = math_format("%02.2f",vpro2)

ss3=sublin(result,13)
vpro3=subwrd(ss3,2)
vpro33 = math_format("%02.2f",vpro3)

ss5=sublin(result,14)
vpro5=subwrd(ss5,2)
vpro55 = math_format("%02.2f",vpro5)

ss8=sublin(result,23)
vpro8=subwrd(ss8,2)
vpro88 = math_format("%02.2f",vpro8)

ss9=sublin(result,24)
vpro9=subwrd(ss9,2)
vpro99 = math_format("%02.2f",vpro9)

ss10=sublin(result,27)
vpro10=subwrd(ss10,2)
vpro100 = math_format("%02.2f",vpro10)

ss11=sublin(result,28)
vpro11=subwrd(ss11,2)
vpro111 = math_format("%02.2f",vpro11)

linea3=linea' 'vpro22' 'vpro33' 'vpro55' 'vpro88' 'vpro99' 'vpro100' 'vpro111
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




