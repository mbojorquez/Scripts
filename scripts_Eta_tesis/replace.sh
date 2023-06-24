#replace 

#reemplaza a '30' por '29'
#sed -i s,\'30\',\'29\',g bias_*.gs

#reemplaza a 30 por 29
#sed -i s,'30','29',g bias_*.gs
#que es lo mismo a
#sed -i s,30,29,g bias_*.gs

#sed -i s,i\<\=30,i\<\=29,g bias_*.gs
#Se debe anteponer el simbolo \ antes de un caracter especial para que se interpretado de forma correcta
sed -i s,i\=\'18\',i\=\'17\',g bias_*.gs rmse_*.gs eta_*.gs
sed -i s,i\<\=18,i\<\=17,g bias_*.gs rmse_*.gs eta_*.gs

#sed -i s,i\=\'18\',i\=\'25\',g rmse_*.gs
#sed -i s,i\<\=18,i\<\=25,g rmse_*.gs

#sed -i s,i\<\=18,i\<\=25,g eta_*.gs
#sed -i s,i\=\'18\',i\=\'25\',g eta_*.gs
