#bash to execute all eta scripts
  
#eta_lcor.gs
#eta_lcor_low.gs

#eta_vor.gs
#eta_div.gs
#eta_hgt.gs

#eta_u_low.gs
#eta_u_up.gs 
#eta_u_500.gs  
#eta_v_low.gs  
#eta_v_up.gs   
     
#eta_mslp.gs      

#eta_hov_hr.gs  
#eta_hov_vp_1.gs
#eta_corte.gs
 

for script in eta_lcor.gs eta_lcor_low.gs eta_vor.gs eta_div.gs eta_hgt.gs eta_u_low.gs eta_u_up.gs eta_u_500.gs eta_v_low.gs eta_v_up.gs eta_mslp.gs eta_hov_hr.gs eta_hov_vp_1.gs eta_corte.gs
do
grads -blcx $script
done

#script to run script eta_corte.gs for many latitudes
#This script replace the line 4 of the file "eta_corte.gs"
#Replace for "$lati" and then execute the script

for lati in -14 -15 -16 -17 -20 -30
do
sed -i 4s,.*,lati\=$lati, eta_corte.gs
grads -blcx eta_corte.gs
done

#source: https://askubuntu.com/questions/434051/how-to-replace-a-string-on-the-5th-line-of-multiple-text-files

