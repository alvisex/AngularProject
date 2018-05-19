#! /bin/sh

#crontab -e
# 2 * * * * /root/sincronizar.sh

sync_cond=$(diff /root/test /root/testcopia)

echo $sync_cond
if [ -n "$sync_cond" ]
then
        echo "Sincronizando archivos"
        rsync -rtvu /root/test /root/testcopia
else
        echo "No hay cambios"
fi