
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



while (i<=17)
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

****

'set lev 900'
'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 4.15 7.7'
'set xlab off'
'set ylint 10'
'set grads off'

'define u2=maskout(u1,PRESsfc/100-900)'
'define v2=maskout(v1,PRESsfc/100-900)'

'/home/mbojorquez/gscript/color2 -levs 5 10 15 20 24 30 35 40 45 50 55 60 -kind darkgray->lightseagreen->indigo->green->lime->yellow->crimson->wheat'
'set gxout stream'
'set cthick 2'
'set strmden 6'

'd u2;v2;mag(u2,v2)'
*'/home/mbojorquez/gscript/cbarn '

*****
'set lev 925'

'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 4.15 7.7'
'set xlab off'
'set ylint 10'
'set grads off'

'define u2=maskout(u1,PRESsfc/100-925)'
'define v2=maskout(v1,PRESsfc/100-925)'

'/home/mbojorquez/gscript/color2 -levs 5 10 15 20 24 30 35 40 45 50 55 60 -kind darkgray->lightseagreen->indigo->green->lime->yellow->crimson->wheat'
'set gxout stream'
'set cthick 2'
'set strmden 6'

'd u2;v2;mag(u2,v2)'
*'/home/mbojorquez/gscript/cbarn '

*****
'set lev 950'
'set vpage 0 11 0 8.5'
'set parea 0.6 4.8 0.2 3.7'
'set xlab on'
'set ylint 10'
'set grads off'
'set xlint 20'

'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'


'define u2=maskout(u1,PRESsfc/100-950)'
'define v2=maskout(v1,PRESsfc/100-950)'

'/home/mbojorquez/gscript/color2 -levs 5 10 15 20 24 30 35 40 45 50 55 60 -kind darkgray->lightseagreen->indigo->green->lime->yellow->crimson->wheat'
'set gxout stream'
'set cthick 2'
'set strmden 6'

'd u2;v2;mag(u2,v2)'

*****
'set lev 1000'
'set vpage 0 11 0 8.5'
'set parea 5.8 10.0 0.2 3.7'
'set xlab on'
'set ylint 10'
'set grads off'
'set xlint 20'

'u1=ugrdprs*1.94'
'v1=vgrdprs*1.94'


'define u2=maskout(u1,PRESsfc/100-950)'
'define v2=maskout(v1,PRESsfc/100-950)'

'/home/mbojorquez/gscript/color2 -levs 5 10 15 20 24 30 35 40 45 50 55 60 -kind darkgray->lightseagreen->indigo->green->lime->yellow->crimson->wheat'
'set gxout stream'
'set cthick 2'
'set strmden 6'

'd u2;v2;mag(u2,v2)'
*'/home/mbojorquez/gscript/cbarn '

*****

'set strsiz 0.11'
'set string 98 c 5.9 0'
'draw string 3.6 7.85 250 hPa'
'draw string 8.6 7.85 500 hPa'
'draw string 3.6 3.85 700 hPa'
'draw string 8.6 3.85 850 hPa'

'set strsiz 0.11'
'set string 1 c 5.9 0'
'draw string 2.2 7.85 Nivel isobarico:'
'draw string 7.2 7.85 Nivel isobarico:'
'draw string 2.2 3.85 Nivel isobarico:'
'draw string 7.2 3.85 Nivel isobarico:'


'set strsiz 0.14'
'set string 1 c 10 0'
'draw string 5.5 8.35 Lineas de corriente (kt) - Niveles Bajos'

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


'!mkdir -p /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Lcor/MultiNivel_Low/'
'gxprint /home/mbojorquez/ETA_TESIS/INICIA_'fec'/South_America/Lcor/MultiNivel_Low/Lcor_'fe'_'hora'UTC.png -b /home/mbojorquez/gscript/proyecto_area99.png -t 1 x1024 y768'


if (i='17')
endif
endwhile




