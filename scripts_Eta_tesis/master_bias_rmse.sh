#bash to execute all bias & rmse scripts

for script in bias_mslp bias_v_low bias_div bias_vor bias_u_500 bias_hgtm
do
grads -blcx $script.gs
done

for script in rmse_mslp rmse_v_low rmse_div rmse_vor rmse_u_500 rmse_hgtm
do
grads -blcx $script.gs
done
