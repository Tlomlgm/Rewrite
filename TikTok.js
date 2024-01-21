^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) $1 302
(?<=&mcc_mnc=)4 2 307
(?<=eme\/v)2(?=\/f\w{2}d\/\?.*) 1 302
hostname = *.tiktokv.com,*.byteoversea.com, *.tik-tokapi.com
