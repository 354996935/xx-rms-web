#!/bin/bash
set -e
export JENKINS=1
output=build
pkg_name=rms-web
pkg_out=$output/$pkg_name
git pull
branches=`node -e 'JSON.parse(process.argv[1]).forEach((n)=>console.log(n.title))' "$(curl --header 'Private-Token: 592jomFrFCwuKrqxA1bV' https://w.tehui17.com/api/v4/projects/26/milestones?state=active)"`
for v in $branches
do
    pkg_ver=$v
    out_ver=${pkg_ver//./}
    set +e
    git checkout $pkg_ver
    if [ $? -ne 0 ]; then
        echo "git checkout $pkg_ver error"
        continue
    fi
    set -e
    git pull
    ./pkg.sh $pkg_ver
    sudo cp -f build/rms-web-*.zip /usr/share/nginx/html/pub/
    echo "Install $pkg_name-$pkg_ver by jenkins env"
    sudo mkdir -p /usr/share/nginx/html/kx-realtime-admin-$out_ver
    sudo mkdir -p /usr/share/nginx/html/kx-realtime-wap-$out_ver
    sudo cp -rf admin/dist/* /usr/share/nginx/html/kx-realtime-admin-$out_ver;
    sudo cp -rf mobile/dist/* /usr/share/nginx/html/kx-realtime-wap-$out_ver
done

