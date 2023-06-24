archi=rmse500.txt

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
'define dv = dviento1 - dvientor'
'define rmsewind = sqrt((dv*dv))'
'define magwind1 = aave(rmsewind, g)'
'define magwind2 = aave(rmsewind, lon=275, lon=292, lat=-25, lat=-13)'

'define vor=hcurl(u1,v1)*1e5'
'define vorr=hcurl(ur,vr)*1e5'
'define dvor=vor-vorr'
'define rmsevor=sqrt((dvor*dvor))'
'define vor1 = aave(rmsevor, g)'
'define vor2 = aave(rmsevor, lon=275, lon=292, lat=-25, lat=-13)'


'define wprsa=vvelprs(lev=500)+vvelprs(lev=400)'
'define wprsb=wprs.2(lev=500)+wprs.2(lev=400)'
'define wprs3=wprsa-wprsb'
'define rmsewprs=sqrt((wprs3*wprs3))'
'define wprs1 = aave(rmsewprs, g)'
'define wprs2 = aave(rmsewprs, lon=275, lon=292, lat=-25, lat=-13)'

'define biasvwind=v1-vr'
'define rmsevwind=sqrt((biasvwind*biasvwind))'
'define vwind1 = aave(rmsevwind, g)'
'define vwind2 = aave(rmsevwind, lon=275, lon=292, lat=-25, lat=-13)'

'define biasuwind=u1-ur'
'define rmseuwind=sqrt((biasuwind*biasuwind))'
'define uwind1 = aave(rmseuwind, g)'
'define uwind2 = aave(rmseuwind, lon=275, lon=292, lat=-25, lat=-13)'

'define dz = (hgtprs)-((zprs.2)/10)'
'define rmsehgt=sqrt((dz*dz))'
'define hgt1 = aave(rmsehgt, g)'
'define hgt2 = aave(rmsehgt, lon=275, lon=292, lat=-25, lat=-13)'

'define biasrh=rhprs-rprs.2'
'define rmserh=sqrt((biasrh*biasrh))'
'define rh1 = aave(rmserh, g)'
'define rh2 = aave(rmserh, lon=275, lon=292, lat=-25, lat=-13)'

'q define'



ss=sublin(result,9)
vpro=subwrd(ss,2)
vpro1 = math_format("%02.2f",vpro)
linea='F'iii'= 'vpro1

ss=sublin(result,10)
vpro2=subwrd(ss,2)
vpro22 = math_format("%02.2f",vpro2)

ss=sublin(result,15)
vpro3=subwrd(ss,2)
vpro33 = math_format("%02.2f",vpro3)

ss=sublin(result,16)
vpro4=subwrd(ss,2)
vpro44 = math_format("%02.2f",vpro4)

ss=sublin(result,21)
vpro5=subwrd(ss,2)
vpro55 = math_format("%02.2f",vpro5)

ss=sublin(result,22)
vpro6=subwrd(ss,2)
vpro66 = math_format("%02.2f",vpro6)

ss=sublin(result,25)
vpro7=subwrd(ss,2)
vpro77 = math_format("%02.2f",vpro7)

ss=sublin(result,26)
vpro8=subwrd(ss,2)
vpro88 = math_format("%02.2f",vpro8)

ss=sublin(result,29)
vpro9=subwrd(ss,2)
vpro99 = math_format("%02.2f",vpro9)

ss=sublin(result,30)
vpro10=subwrd(ss,2)
vpro100 = math_format("%02.2f",vpro10)

ss=sublin(result,33)
vpro11=subwrd(ss,2)
vpro101 = math_format("%02.2f",vpro11)

ss=sublin(result,34)
vpro12=subwrd(ss,2)
vpro102 = math_format("%02.2f",vpro12)

ss=sublin(result,37)
vpro13=subwrd(ss,2)
vpro103 = math_format("%02.2f",vpro13)


ss=sublin(result,38)
vpro14=subwrd(ss,2)
vpro104 = math_format("%02.2f",vpro14)

#linea0='HR HR_P HGT HGT_P VOR VOR_P W W_P MWIND MWIND_P  VWIND VWIND_P UWIND UWIND_P';lixo=write(archi,linea0)
linea3=linea' 'vpro22' 'vpro33' 'vpro44' 'vpro55' 'vpro66' 'vpro77' 'vpro88' 'vpro99' 'vpro100' 'vpro101' 'vpro102' 'vpro103' 'vpro104
lixo=write(archi, linea3)



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




