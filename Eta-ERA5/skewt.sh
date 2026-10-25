#!/bin/bash

for a in {1..13}
do
  sed -i "30s|^.*$|aa=${a}|" /home/mb/Versoes/WorkEtaVIII/gscript/skewt.gs
  grads -blcx /home/mb/Versoes/WorkEtaVIII/gscript/skewt.gs
done

