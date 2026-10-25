#!/bin/bash

cd /home/mb/Versoes/gscript/
grads -blcx tp2m.gs
grads -blcx multivar.gs
grads -blcx hov.gs
grads -blcx cortelat.gs
bash skewt.sh

