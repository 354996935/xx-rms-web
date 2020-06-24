#!/bin/bash
set -e
#### Package ####
cpwd=`pwd`
output=build
pkg_name=rms-web
pkg_out=$output/$pkg_name
rm -rf $pkg_out
mkdir -p $pkg_out $pkg_out/admin $pkg_out/wap $pkg_out/app

##build normal
pkg_ver=$1
out_ver=${pkg_ver//./}

cd admin
yarn
yarn build
cd ../
cp -rf admin/dist/* $pkg_out/admin/

cd mobile
yarn
yarn build
cd ../
cp -rf mobile/dist/* $pkg_out/app/
cd $pkg_out/app/
#release
cat > config.js <<EOF
const GLOBAL_CONFIG = {
  BASE_API: 'https://wap.zdyunion.com/',
  IMG_URL: 'https://img.zdyunion.com/upload/',
  PUBLISH: 'release',
  VERSION: '$pkg_ver',
}
EOF
cat > version.json <<EOF
{
    "version": "$pkg_ver",
    "url": "https://pub.tehui17.com/package/rms-web-app-$pkg_ver-release.zip"
}
EOF
rm -f ../../$pkg_name-app-$pkg_ver-release.zip
zip -r ../../$pkg_name-app-$pkg_ver-release.zip *
#debug
cat > config.js <<EOF
const GLOBAL_CONFIG = {
  BASE_API: 'https://$out_ver-wap.zdy.resfair.com/',
  IMG_URL: 'https://img.zdyunion.com/upload/',
  PUBLISH: 'debug',
  VERSION: '$pkg_ver',
}
EOF
cat > version.json <<EOF
{
    "version": "$pkg_ver",
    "url": "https://pub.tehui17.com/package/rms-web-app-$pkg_ver-debug.zip"
}
EOF
rm -f ../../$pkg_name-app-$pkg_ver-debug.zip
zip -r ../../$pkg_name-app-$pkg_ver-debug.zip *
cd $cpwd

#### wxmp
cd mobile
cd public
cat > config.js <<EOF
const GLOBAL_CONFIG = {
  BASE_API: '/',
  IMG_URL: 'https://img.zdyunion.com/upload/',
  PUBLISH: 'release',
  VERSION: '$pkg_ver',
}
EOF

cd ..
yarn
yarn build
cd ../
cp -rf mobile/dist/* $pkg_out/wap/

cp -f tms.conf  $pkg_out/
###
cd $output
rm -f $pkg_name-$pkg_ver.zip
zip -r $pkg_name-$pkg_ver.zip $pkg_name
rm -f $pkg_name-app-$pkg_ver.zip
cd $pkg_name/app/
zip -r ../../$pkg_name-app-$pkg_ver.zip *
cd ../../../

echo "Package $pkg_name-$pkg_ver done..."
